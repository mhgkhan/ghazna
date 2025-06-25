import connectDB from "@/utils/db/connectDB";
import { sendNormalResponse } from "@/utils/functions/sendResponses";
import { cookies, headers } from "next/headers";
import JWT from "jsonwebtoken"
import FreezeEnv from "@/config/EnvConfig";
import checkIfExists from "@/utils/functions/DBOperatiosn";
import User from "@/utils/models/Users";

connectDB();
export async function GET(request) {

    console.log("the params are ");

    try {

        // const userCookies = await cookies();
        const userHeaders = await headers();

        const token = userHeaders.get("token");

        // console.log("the cookies are ", userCookies.getAll());

        // const token = userCookies.get("USER_AUTH_TOKEN")?.value;
        if (!token) {
            return sendNormalResponse(false, 400, "User is not authoried", null)
        }

        // decoding the token 
        const decodingToken = JWT.verify(token, FreezeEnv.AUTH_SECRET_KEY);

        const { id, email } = decodingToken;


        // checking if user is exists or not 
        const checkUser = await checkIfExists(User, { email });
        console.log(checkUser)

        if (!checkUser.success) {
            return sendNormalResponse(false, 404, checkUser.message, null)
        }

        return sendNormalResponse(true, 200, "User fetched", checkUser.data)

    } catch (error) {
        console.log(error)
        return sendNormalResponse(false, 500, error.message, null);
    }
}