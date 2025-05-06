import { sendMail } from "@/config/EmailSeindingProcesses";
import FreezeEnv from "@/config/EnvConfig";
import connectDB from "@/utils/db/connectDB";
import checkIfExists from "@/utils/functions/DBOperatiosn";
import { sendNormalResponse } from "@/utils/functions/sendResponses";
import User from "@/utils/models/Users";
import JWT from "jsonwebtoken";




connectDB();

export async function POST(request) {
    const { email } = await request.json();

    if (!email) return sendNormalResponse(false, 400, "Email is required", null);

    // check if email is exists or not 
    const checkUser = await checkIfExists(User, { email: email });

    if (checkUser.error) return sendNormalResponse(false, 500, checkUser.error, null);
    if (!checkUser.success) return sendNormalResponse(false, 404, "User not found", null);

    // creating email verification tokwn 
    const token = JWT.sign({ email: email }, FreezeEnv.VERIFICATION_SECRET_KEY);



    const options = {
        from: FreezeEnv.EMAIL_SMTP,
        to: email,
        subject: "Reset Your Password",
        html: `
        <html>
            <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4; padding: 20px; color: #333;">
                <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <h2 style="font-size: 22px; font-weight: 600; color: #444; margin-bottom: 20px;">🔐 Reset Your Password</h2>
                    <p style="font-size: 16px; line-height: 1.6;">
                        Hello <strong>${checkUser.data.name || "User"}</strong>,
                        <br><br>
                        We received a request to reset your password. Click the button below to proceed. If you did not make this request, you can safely ignore this email.
                    </p>
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="${FreezeEnv.FORGET_PASSWORD_URL + token}" style="background-color: #007bff; color: #ffffff; padding: 12px 20px; text-decoration: none; border-radius: 6px; font-size: 16px;">
                            Reset Password
                        </a>
                    </div>
                    <p style="font-size: 14px; color: #777;">
                        This link will expire in 1 hour for your security.
                    </p>
                    <p style="margin-top: 30px; font-size: 14px; color: #777;">
                        Thank you,<br>
                        <strong>Ghazna.Dev</strong> Team
                    </p>
                </div>
            </body>
        </html>
        `,
        text: `Hello ${checkUser.data.name || "User"},\n\nWe received a request to reset your password. If this was you, use the following link:\n ${FreezeEnv.FORGET_PASSWORD_URL + token} \n\nThis link will expire in 1 hour. If you didn’t request this, please ignore this email.\n\n- Ghazna.Dev Team`,
    };


    await sendMail(options);


    return sendNormalResponse(true, 200, "Forget password verification link send successfully.", null);


}