import { sendNormalResponse } from "@/utils/functions/sendResponses";
import connectDB from "@/utils/db/connectDB";
import BlogPostModel from "@/utils/models/BlogPostModel";
import { checkUserAuthorization } from "@/utils/functions/utilityFunctions";



connectDB();
export async function GET(request) {

    try {
        // checking user authorization
        const checkUserAuth = await checkUserAuthorization();
        if (!checkUserAuth) {
            return sendNormalResponse(false, checkUserAuth.status, checkUserAuth.message, null);
        }

        const userBlogs = await BlogPostModel.find({ author: checkUserAuth.user._id });

        if (!userBlogs || userBlogs.length === 0) {
            return sendNormalResponse(false, 404, "No blogs found for this user", null);
        }

        return sendNormalResponse(true, 200, "Blogs fetched successfully", userBlogs);

    } catch (error) {
        return sendNormalResponse(false, 500, error.message, null)
    }
}