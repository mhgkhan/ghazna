import FreezeEnv from "@/config/EnvConfig";
import checkIfExists from "@/utils/functions/DBOperatiosn";
import { sendNormalResponse } from "@/utils/functions/sendResponses";
import User from "@/utils/models/Users";

export async function PUT() {

    try {

        const { token } = await params;

        if (!token) {
            return sendNormalResponse(false, 400, "Token is required", null)

        }


        const decoded = JWT.verify(token, FreezeEnv.VERIFICATION_SECRET_KEY);



        // console.log(decoded);





        // checking if user is exists or not 
        const checkUser = await checkIfExists(User, { email: decoded.email });
        console.log(checkUser);

        if (!checkUser.success) {
            return sendNormalResponse(false, 400, "User not found", null)

        }
        else {

            if (!checkUser.isVerfiied) {
                return sendNormalResponse(false, 400, "Your account are not verified, please first verify your account!", null)
            }
            else {
                // updating the user info 
                const updateUser = await User.findOneAndUpdate({ email: decoded.email }, { verificationToken: null }, { new: true });

                return sendNormalResponse(true, 200, "Token verified successfully", updateUser)
            }


        }




    } catch (error) {
        console.log(error);
        return sendNormalResponse(false, 400, "Invalid token", null)
    }

}