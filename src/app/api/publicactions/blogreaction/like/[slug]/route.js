import { sendNormalResponse } from "@/utils/functions/sendResponses";
import { cookies } from "next/headers";
import JWT, { verify } from "jsonwebtoken";
import FreezeEnv from "@/config/EnvConfig";
import checkIfExists from "@/utils/functions/DBOperatiosn";
import BlogReactModel from "@/utils/models/BlogLikesModel";
import connectDB from "@/utils/db/connectDB";


connectDB();
export async function PUT(request, { params }) {
    try {
        const { slug } = await params;
        const thisUserCookies = await cookies();

        const userToken = thisUserCookies.get("USER_AUTH_TOKEN")?.value;
        if (!userToken || userToken == "undefiend") {
            return sendNormalResponse(false, 401, "Unauthorized: You are not authorized to perform this action 1", null);
        }

        if (!slug) {
            return sendNormalResponse(false, 400, "Invilid Request!1")
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

        if (!checkUser.success) {
            return sendNormalResponse(false, 404, "User not found", checkUser.message);
        }
        if (checkUser.error) {
            return sendNormalResponse(false, 500, "Internal Server Error", checkUser.message);
        }

        if (checkUser.data.id != verifyToken.id) {
            return sendNormalResponse(false, 401, "Unauthorized: You are not authorized to perform this action 4", null);
        }


        const checkBlogLike = await checkIfExists(BlogReactModel, { slug, userId: verifyToken.id });
        if (!checkBlogLike.success || checkUser.error) {
            const addLike = await new BlogReactModel({
                liked: true,
                disliked: false,
                userId: verify.id,
                slug
            });
            await addLike.save();
            return sendNormalResponse(true, 201, "Liked", addLike);
        }

        if (!checkBlogLike.data.liked) {
            const updatateLIked = await BlogReactModel.findOneAndUpdate({ slug }, { liked: true })
            return sendNormalResponse(true, 201, "Liked", addLike);
        }

        return sendNormalResponse(true, 200, "Already Liked", checkBlogLike);

    } catch (error) {
        return sendNormalResponse(false, 500, error.message, null);
    }
}