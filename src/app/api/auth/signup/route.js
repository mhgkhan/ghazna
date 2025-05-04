const { default: connectDB } = require("@/utils/db/connectDB");
import bcrypt from "bcryptjs"


connectDB();

import { sendMail } from "@/config/EmailSeindingProcesses";
import FreezeEnv from "@/config/EnvConfig";
import checkIfExists from "@/utils/functions/DBOperatiosn";
import { sendNormalResponse } from "@/utils/functions/sendResponses";
import { validateRequestBody } from "@/utils/functions/utilityFunctions";

import User from "@/utils/models/Users";
import JWT from "jsonwebtoken";



export async function POST(request) {
    try {

        const body = await request.json()
        const validateBody = validateRequestBody(body, ["name", "email", "password"]);

        // checking if the body is empty or not 
        // validate body 
        if (!body || !validateBody.isValid) {
            return sendNormalResponse(false, 400, validateBody.message, null)
        }

        // checking if user is exists or not 
        const checkUser = await checkIfExists(User, { email: body.email });
        if (checkUser.success) {
            return sendNormalResponse(false, 400, "User already exists", null)
        }

        // creating token for verification 

        const token = JWT.sign({ email: body.email, isVerfiied: false }, FreezeEnv.VERIFICATION_SECRET_KEY);
        const hashingPassword = await bcrypt.hash(body.password, 10);


        const { name, email, password } = body;
        const addUserInfo = new User({
            name,
            email,
            password: hashingPassword,
            role: "user",
            isVerified: false,
            verificationToken: token,
        })

        const savedUserInfo = await addUserInfo.save();

        const sendingMail = await sendMail({
            from: FreezeEnv.EMAIL_SMTP,
            to: email,
            subject: "Verify Your Email – Ghazna.dev",
            html: `
                <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
                    <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                        <h2 style="color: #333;">Welcome to Ghazna.dev 👋</h2>
                        <p style="font-size: 16px; color: #555;">
                            Thank you for signing up. Please confirm your email address by clicking the button below:
                        </p>
                        <div style="text-align: center; margin: 30px 0;">
                            <a href="${FreezeEnv.VERIFICATION_URL}/${token}" 
                               style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-size: 16px;">
                                Verify Email
                            </a>
                        </div>
                        <p style="font-size: 14px; color: #777;">
                            If the button above doesn't work, copy and paste the following link into your browser:
                            <br/>
                            <a href="${FreezeEnv.VERIFICATION_URL}/${token}" style="color: #1a73e8;">${FreezeEnv.VERIFICATION_URL}/${token}</a>
                        </p>
                        <p style="font-size: 14px; color: #aaa; margin-top: 30px;">
                            — The Ghazna.dev Team
                        </p>
                    </div>
                </div>
            `,
            text: `Click on the link to verify your email: ${FreezeEnv.VERIFICATION_URL}/${token}`
        })



        return sendNormalResponse(true, 200, "Account created! Verification Link Sended to your account.", { user: savedUserInfo, token })



    } catch (error) {
        console.log(error);

        return sendNormalResponse(false, 500, "Internal server error", null)
    }
}