import FreezeEnv from "@/config/EnvConfig";
import connectDB from "@/utils/db/connectDB";
import checkIfExists from "@/utils/functions/DBOperatiosn";
import { addHistoryEntry } from "@/utils/functions/histoyrOperations";
import { sendNormalResponse } from "@/utils/functions/sendResponses";
import User from "@/utils/models/Users";
import JWT from "jsonwebtoken";




connectDB();

export async function PUT(request, { params }) {
    try {

        const { token } = await params;

        if (!token) {
            return sendNormalResponse(false, 400, "Token is required", null)

        }


        const decoded = JWT.verify(token, FreezeEnv.VERIFICATION_SECRET_KEY);



        // console.log(decoded);




        if (decoded?.isVerfiied) {
            return sendNormalResponse(false, 400, "User is already verified", null)
        }
        else {

            // checking if user is exists or not 
            const checkUser = await checkIfExists(User, { email: decoded.email });
            console.log(checkUser);

            if (!checkUser.success) {
                return sendNormalResponse(false, 400, "User not found", null)

            }
            else {

                if (checkUser.isVerfiied) {
                    return sendNormalResponse(false, 400, "User is already verified", null)
                }
                else {
                    // updating the user info 
                    const updateUser = await User.findOneAndUpdate({ email: decoded.email }, { isVerified: true, verificationToken: null }, { new: true });
                    addHistoryEntry(checkUser.data._id, "User Verified their account");
                    if (!updateUser) {
                        return sendNormalResponse(false, 400, "User not found", null)
                    }
                    else {
                        return sendNormalResponse(true, 200, "User is verified", null)
                    }
                }


            }



        }

    } catch (error) {
        console.log(error);
        return sendNormalResponse(false, 400, "Invalid token", null)
    }
}