import checkIfExists from "@/utils/functions/DBOperatiosn";
import { sendNormalResponse } from "@/utils/functions/sendResponses";
import User from "@/utils/models/Users";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import FreezeEnv from "@/config/EnvConfig";
import connectDB from "@/utils/db/connectDB";
import { sendMail } from "@/config/EmailSeindingProcesses";


connectDB();

export async function POST(reqiest) {
    try {

        const { email, password } = await reqiest.json();

        if (!email || !password) {
            return sendNormalResponse(false, 400, "Email and password are required", null)
        }

        // checking if user is exists or not 
        const checkUser = await checkIfExists(User, { email: email });
        console.log(checkUser);

        if (!checkUser.success) {
            return sendNormalResponse(false, 400, "User not found", null)
        }
        else {
            // checking if password is correct or not 
            const isPasswordCorrect = await bcrypt.compare(password, checkUser.data.password);
            if (!isPasswordCorrect) {
                return sendNormalResponse(false, 400, "Password is incorrect", null)
            }
            else {

                const response = new NextResponse();
                // checking if user is verified or not
                if (!checkUser.data.isVerified) {
                    return sendNormalResponse(false, 400, "Please check your email and verify your account", null)
                }
                // generating the token 
                const token = JWT.sign({ email: checkUser.data.email, id: checkUser.data._id, isVerified: true }, FreezeEnv.AUTH_SECRET_KEY);
                // storing cookies 
                response.cookies.set("token", token, { httpOnly: true, secure: true, sameSite: "strict" });
                response.cookies.set("userId", checkUser.data._id, { httpOnly: true, secure: true, sameSite: "strict" });

                // updating user lastlogin time 
                const user = await User.findByIdAndUpdate(checkUser.data._id, { lastLogin: new Date() }, { new: true });

                if (!user) {
                    return sendNormalResponse(false, 400, "User not found", null)
                }

                // sending email for login info 
                const emailData = {
                    from: FreezeEnv.EMAIL_SMTP,
                    to: checkUser.data.email,
                    subject: "Login Info",
                    html: `
                    <html>
                        <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f9f9f9; padding: 20px; color: #333;">
                            <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                                <h2 style="font-size: 22px; font-weight: 600; color: #444; margin-bottom: 20px;">🔐 Login Alert</h2>
                                <p style="font-size: 16px; line-height: 1.6;">
                                    Hello <strong>${checkUser.data.name || "User"}</strong>,<br><br>
                                        We noticed a successful login to your account.
                                    </p>
                                        <p style="font-size: 16px; line-height: 1.6;">
                                            <strong>Details:</strong><br>
                                                📅 <span style="font-weight: 600; color: #111;">${new Date().toLocaleString()}</span><br><br>
                                                    If this was you, no further action is required.<br>
                                                        If you did not initiate this login, please reset your password immediately or contact support.
                                                    </p>
                                                    <p style="margin-top: 30px; font-size: 14px; color: #777;">
                                                        Thank you,<br>
                                                            <strong>Ghazna.Dev</strong> Team
                                                    </p>
                                                </div>
                                                </body>
                                            </html>
                                            `,
                    text: `You have successfully logged in to your account on ${new Date().toLocaleString()}`,
                };

                const sendEmailing = await sendMail(emailData);
                // if (!sendEmailing.success) {
                //     console.log(sendEmailing.message);
                    
                //     return sendNormalResponse(false, 400, "Email not sent", null)
                // }
                console.log("Email sent successfully", sendEmailing.message);

                return sendNormalResponse(true, 200, "User is logged in", { token: token })
            }
        }





    } catch (error) {
        console.log(error);

        return sendNormalResponse(false, 500, "Internal server error", null)
    }
}