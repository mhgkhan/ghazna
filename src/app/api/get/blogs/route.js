import connectDB from "@/utils/db/connectDB";
import { sendNormalResponse } from "@/utils/functions/sendResponses";
import BlogPostModel from "@/utils/models/BlogPostModel";

connectDB();
export async function GET(request) {
    try {
        const Blogs = await BlogPostModel.find({ isPublished: process.env.NODE_ENV == "development" ? false : true }).sort({ createdAt: -1 }).select("-content -isPublished -__v -createdAt -updatedAt").lean();
        // console.log("Blogs retrieved:", Blogs);
        if (!Blogs || Blogs.length === 0) {
            return sendNormalResponse(false, 404, "No Blogs Found", null);
        }

        return sendNormalResponse(true, 200, "Blogs Retrieved Successfully", Blogs);

    } catch (error) {
        return sendNormalResponse(false, 500, "Internal Server Error", error.message);
    }
}
