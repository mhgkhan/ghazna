import { sendNormalResponse } from "@/utils/functions/sendResponses";
import BlogPostModel from "@/utils/models/BlogPostModel";

export async function GET(request) {
    try {

        const Blogs = await BlogPostModel.find({}).sort({ createdAt: -1 }).select("-content -isPublished -__v -createdAt -updatedAt").lean();
        if (!Blogs || Blogs.length === 0) {
            return sendNormalResponse(false, 404, "No Blogs Found", "No blogs are available at the moment.");
        }

        return sendNormalResponse(true, 200, "Blogs Retrieved Successfully", Blogs);

    } catch (error) {
        return sendNormalResponse(false, 500, "Internal Server Error", error.message);
    }
}
