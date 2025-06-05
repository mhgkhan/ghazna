import { sendNormalResponse } from "@/utils/functions/sendResponses";
import { cookies } from "next/headers";
import JWT, { verify } from "jsonwebtoken";
import FreezeEnv from "@/config/EnvConfig";
import checkIfExists from "@/utils/functions/DBOperatiosn";
import BlogReactModel from "@/utils/models/BlogLikesModel";
import connectDB from "@/utils/db/connectDB";
import User from "@/utils/models/Users";
import BlogPostModel from "@/utils/models/BlogPostModel";


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
            console.log("created blog category called")
            const addLike = await new BlogReactModel({
                liked: true,
                disliked: false,
                userId: verifyToken.id,
                slug
            });
            await addLike.save();

            // fetching all blogpost likes 
            const fetchBlogPostLikes = await BlogReactModel.find({ slug, userId: verifyToken.id });
            console.log(fetchBlogPostLikes)
            const count = fetchBlogPostLikes ? fetchBlogPostLikes.length : 0
            // updating blogpost tempLikes 
            const updatingBlogPostTempLikes = await BlogPostModel.findOneAndUpdate({ slug: slug }, { $set: { tempLikes: count } }, { new: true })

            console.log(updatingBlogPostTempLikes)
            return sendNormalResponse(true, 201, "Liked", addLike);
        }

        if (!checkBlogLike.data.liked) {
            console.log("not liked category called")
            const updatateLIked = await BlogReactModel.findOneAndUpdate({ slug }, { liked: true });
            // fetching all blogpost likes 
            const fetchBlogPostLikes = await BlogReactModel.find({ slug, userId: verifyToken.id });
            console.log(fetchBlogPostLikes);

            const count = fetchBlogPostLikes ? fetchBlogPostLikes.length : 0
            // updating blogpost tempLikes 
            const updatingBlogPostTempLikes = await BlogPostModel.findOneAndUpdate({ slug: slug }, { $set: { tempLikes: count } }, { new: true })
            console.log(updatingBlogPostTempLikes)
            return sendNormalResponse(true, 201, "Liked", addLike);
        }

        console.log("end category called")
        // fetching all blogpost likes 
        const fetchBlogPostLikes = await BlogReactModel.find({ slug, userId: verifyToken.id });
        console.log(fetchBlogPostLikes);
        const count = fetchBlogPostLikes ? fetchBlogPostLikes.length : 0
        // updating blogpost tempLikes 
        const updatingBlogPostTempLikes = await BlogPostModel.findOneAndUpdate({ slug: slug }, { $set: { tempLikes: count } }, { new: true })
        console.log(updatingBlogPostTempLikes)


        return sendNormalResponse(true, 200, "Already Liked", checkBlogLike);

    } catch (error) {
        console.log(error);

        return sendNormalResponse(false, 500, error.message, null);
    }
}