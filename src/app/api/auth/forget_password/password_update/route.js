import FreezeEnv from "@/config/EnvConfig";
import checkIfExists from "@/utils/functions/DBOperatiosn";
import JWT from "jsonwebtoken";
import User from "@/utils/models/Users";
import bcrypt from "bcryptjs";
import { sendNormalResponse } from "@/utils/functions/sendResponses";
import connectDB from "@/utils/db/connectDB";

connectDB();




export async function PUT(request) {
    const { token, password, confirmPassword } = await request.json();
    if (!token) {
        return sendNormalResponse(false, 400, "Token is required", null)
    }

    if (!password || !confirmPassword) {
        return sendNormalResponse(false, 400, "Password is required", null)
    }

    if (password !== confirmPassword) {
        return sendNormalResponse(false, 400, "Password and confirm password are not same", null)
    }

    try {
        const decoded = JWT.verify(token, FreezeEnv.VERIFICATION_SECRET_KEY);
        if (decoded.email === undefined || decoded.email === null) {
            return sendNormalResponse(false, 400, "Invalid token", null)
        }

        // checking if user is exists or not 
        const checkUser = await checkIfExists(User, { email: decoded.email });
        console.log(checkUser);

        if (!checkUser.success) {
            return sendNormalResponse(false, 400, "User not found", null)
        }

        else {
            if (checkUser.data.resetPasswordToken == null || checkUser.data.resetPasswordToken == undefined) {
                return sendNormalResponse(false, 400, "Token is not valid", null)
            }

            if (!checkUser.data.isVerified) {
                return sendNormalResponse(false, 400, "Your account are not verified, please first verify your account!", null)
            }
            else {
                // encrypt password and update password using bcryptjs
                const hashedPassword = await bcrypt.hash(password, 10);
                const updateUser = await User.findOneAndUpdate({ email: decoded.email }, { password: hashedPassword, resetPasswordToken: null }, { new: true });
                if (!updateUser) {
                    return sendNormalResponse(false, 400, "Error in updating password", null)
                }
                else {
                    return sendNormalResponse(true, 200, "Password updated successfully", updateUser)
                }
                // return sendNormalResponse(true, 200, "Token verified successfully", updateUser)
            }

        }


    } catch (error) {
        console.log(error);
        return sendNormalResponse(false, 400, "Invalid token", null)
    }

}