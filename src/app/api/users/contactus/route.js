import { sendNormalResponse } from "@/utils/functions/sendResponses";
import ContactUsModel from "@/utils/models/ContactusModel";
import { sendMail } from "@/config/EmailSeindingProcesses";
import { validateRequestBody } from "@/utils/functions/utilityFunctions";
import { headers } from "next/headers";
import connectDB from "@/utils/db/connectDB";
import FreezeEnv from "@/config/EnvConfig";
import { userAgent } from "next/server";



connectDB();

export async function POST(request) {

    try {

        const body = await request.json();
        const validateBody = validateRequestBody(body, ["name", "email", "subject", "phone", "message"]);

        if (!validateBody.isValid) {
            return sendNormalResponse(false, 400, validateBody.message, null)
        }

        const ip = request.headers.get("x-forwarded-for") || request.headers.get("remote-addr") || request.headers.get("cf-connecting-ip") || request.headers.get("x-real-ip") || request.headers.get("x-client-ip") || request.headers.get("x-cluster-client-ip") || request.headers.get("x-forwarded") || request.headers.get("forwarded-for") || request.headers.get("forwarded") || "known"

        if (ip == "known") {
            return sendNormalResponse(false, 400, "Unknown request", null);
        }

        const agent = userAgent(request);
        // console.log(agent);


        const browser = agent?.browser?.name || "unknown"
        const os = agent?.os?.name || "unknown"
        const platform = agent?.platform?.type || "unknown"



        // checking the length of the requested ip messages 
        const readThisIpMessages = await ContactUsModel.find({ ip });

        if (readThisIpMessages !== null) {
            if (readThisIpMessages.length > 5) {
                return sendNormalResponse(false, 401, "You've reached your messages limit.")
            }
        }



        const addMessageToDB = new ContactUsModel({
            ...body,
            ip,
            browser,
            os
        });

        const saveMessage = await addMessageToDB.save();

        const options = {
            from: FreezeEnv.EMAIL_SMTP,
            to: "muhammadhasnainghazna@gmail.com",
            subject: "📬 New Message Received - Contact Us Form",

            html: `
    <html>
      <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4; padding: 30px; color: #333;">
        <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          
          <h2 style="font-size: 24px; font-weight: bold; color: #1d4ed8; margin-bottom: 20px;">📨 You've Got a New Message!</h2>
          
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 10px;">
            Hello <strong>Ghazna.Dev</strong>,<br><br>
            Someone just reached out to you through your website's <strong>Contact Us</strong> form. Here's the message:
          </p>

          <div style="background-color: #f9fafb; border-left: 4px solid #1d4ed8; padding: 15px 20px; margin: 20px 0; border-radius: 5px;">
            <p style="margin: 5px 0;"><strong>🧑 Name:</strong> ${body.name}</p>
            <p style="margin: 5px 0;"><strong>📧 Email:</strong> ${body.email}</p>
            <p style="margin: 5px 0;"><strong>📱 Phone:</strong> ${body.phone || "N/A"}</p>
            <p style="margin: 5px 0;"><strong>📧 Subject:</strong> ${body.subject || "N/A"}</p>
            <p style="margin: 10px 0;"><strong>💬 Message:</strong><br> ${body.message}</p>
          </div>

          <p style="font-size: 14px; color: #666; margin-top: 30px;">
            📅 <strong>Received On:</strong> ${new Date().toLocaleString()} <br />
            📅 <strong>Browser:</strong> ${browser} <br />
            📅 <strong>Os (Platform):</strong> ${os} <br />
            📅 <strong>IP:</strong> ${ip} <br />

          </p>

          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">

          <p style="font-size: 14px; color: #999;">
            This is an automated alert from your website's contact system.<br>
            Make sure to respond promptly for the best user experience.
          </p>

          <p style="font-size: 14px; color: #333; margin-top: 20px;">
            🚀 Keep building amazing things!<br>
            — <strong>Ghazna.Dev</strong> Team
          </p>
        </div>
      </body>
    </html>
  `,

            text: `
    New Message from Contact Us Form:

    Name: ${body.name}
    Email: ${body.email}
    Phone: ${body.phone || "N/A"}
    Message: ${body.message}

    Received on: ${new Date().toLocaleString()}
    
    -- Ghazna.Dev Website Notification
  `,
        };


        await sendMail(options);

        return sendNormalResponse(true, 201, "Your message has been send sucessfully.", saveMessage)





    } catch (error) {
        console.log(error);

        return sendNormalResponse(false, 500, error.message, null)
    }
}

