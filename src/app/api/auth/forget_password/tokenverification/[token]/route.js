import FreezeEnv from "@/config/EnvConfig";
import connectDB from "@/utils/db/connectDB";
import checkIfExists from "@/utils/functions/DBOperatiosn";
import { sendNormalResponse } from "@/utils/functions/sendResponses";
import User from "@/utils/models/Users";
import JWT, { TokenExpiredError } from "jsonwebtoken";


connectDB();

export async function PUT(request, { params }) {

    try {

        const { token } = await params;

        if (!token) {
            return sendNormalResponse(false, 400, "Token is required", null)
        }



        const decoded = JWT.verify(token, FreezeEnv.VERIFICATION_SECRET_KEY);
        if (decoded.email === undefined || decoded.email === null) {
            // console.log(decoded);

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
                // console.log("reset password token ",checkUser.resetPasswordToken);
                return sendNormalResponse(false, 400, "Token is not valid", null)
            }

            if (!checkUser.data.isVerified) {
                // console.log("is verified ",checkUser.isVerfiied);

                return sendNormalResponse(false, 400, "Your account are not verified, please first verify your account!", null)
            }
            else {
                return sendNormalResponse(true, 200, "Token verified successfully", {token});
            }
        }

    } catch (error) {
        console.log(error);
        return sendNormalResponse(false, 400, "Invalid token", null)
    }

}