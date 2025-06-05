import { sendNormalResponse } from "@/utils/functions/sendResponses";
import { cookies } from "next/headers";
import JWT, { verify } from "jsonwebtoken";
import FreezeEnv from "@/config/EnvConfig";
import checkIfExists from "@/utils/functions/DBOperatiosn";
import BlogReactModel from "@/utils/models/BlogLikesModel";
import connectDB from "@/utils/db/connectDB";
import User from "@/utils/models/Users";


connectDB();
export async function GET(request, { params }) {
    try {
        const { slug } = await params;
        const thisUserCookies = await cookies();

        const userToken = thisUserCookies.get("USER_AUTH_TOKEN")?.value;
        if (!userToken || userToken == "undefiend") {
            return sendNormalResponse(false, 401, "Unauthorized: You are not authorized to perform this action 1", null);
        }

        if (!slug) {
            return sendNormalResponse(false, 400, "Invilid Request!1", null)
        }

        // decrypting token 
        const verifyToken = JWT.verify(userToken, FreezeEnv.AUTH_SECRET_KEY);

        if (verifyToken.isVerified == false) {
            return sendNormalResponse(false, 401, "Unauthorized: You are not authorized to perform this action 2", null);
        }
        if (!verifyToken.email || !verifyToken.id) {
            return sendNormalResponse(false, 401, "Unauthorized: You are not authorized to perform this action 3", null);
        }

        // checking if user is exists or not
        const { email } = verifyToken;

        const checkUser = await checkIfExists(User, { email: email });
        console.log(verifyToken);



        if (!checkUser.success) {
            return sendNormalResponse(false, 404, "User not found", checkUser.message);
        }
        if (checkUser.error) {
            return sendNormalResponse(false, 500, "Internal Server Error", checkUser.message);
        }

        if (checkUser.data.id != verifyToken.id) {
            return sendNormalResponse(false, 401, "Unauthorized: You are not authorized to perform this action 4", null);
        }




        const checkBlogLike = await checkIfExists(BlogReactModel, { slug });
        console.log(checkBlogLike);



        if (!checkBlogLike.success || checkUser.error) {
            return sendNormalResponse(false, 200, "Not liked by this user", null)
        }

        if (!checkBlogLike.data.liked) {
            return sendNormalResponse(false, 200, "Not liked by this user", null)
        }

        return sendNormalResponse(true, 200, "Already Liked", checkBlogLike);

    } catch (error) {
        console.log(error);

        return sendNormalResponse(false, 500, error.message, null);
    }
}