import { sendNormalResponse } from "@/utils/functions/sendResponses";
import { cookies } from "next/headers";
import JWT from "jsonwebtoken";
import FreezeEnv from "@/config/EnvConfig";
import checkIfExists from "@/utils/functions/DBOperatiosn";
import User from "@/utils/models/Users";
import connectDB from "@/utils/db/connectDB";

connectDB();
export async function POST(request) {

    const body = await request.json();

    console.log("the body is ", body);



    const { coverPicture } = body;
    console.log(coverPicture)
    



    try {
        // checking if user is authorized or not 
        const userCookie = await cookies();


        const token = userCookie.get("USER_AUTH_TOKEN")?.value;

        if (!token) {
            return sendNormalResponse(false, 400, "User is not authorized", null)
        }


        // decoding token 
        const decodeToken = JWT.verify(token, FreezeEnv.AUTH_SECRET_KEY);

        const { id, email } = decodeToken;

        // checking if email is exists or not 

        const checkEmail = await checkIfExists(User, { email });
        if (!checkEmail.success) {
            return sendNormalResponse(false, 404, "Invilid Token", null)
        }



        // updating the coverimage link 

        const updateCoverImgField = await User.findOneAndUpdate({ email }, { coverPicture: coverPicture }, { new: true });

        if (!updateCoverImgField) {
            return sendNormalResponse(false, 400, "Field to update your image link", null)
        }

        return sendNormalResponse(true, 201, "Image uploaded sucessfully", updateCoverImgField);





    } catch (error) {
        return sendNormalResponse(false, 500, error.message, null)
    }


}