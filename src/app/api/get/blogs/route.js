import connectDB from "@/utils/db/connectDB";
import { sendNormalResponse } from "@/utils/functions/sendResponses";
import BlogPostModel from "@/utils/models/BlogPostModel";

connectDB();
export async function GET(request) {
    try {
        const Blogs = await BlogPostModel.find({ isPublished: true, isHidden: false }).sort({ createdAt: -1 }).select("-content -isPublished -__v -updatedAt").lean();
        // console.log("Blogs retrieved:", Blogs);
        if (!Blogs || Blogs.length === 0) {
            return sendNormalResponse(true, 200, "Blogs Retrieved Successfully", []);
            // return sendNormalResponse(false, 404, "No Blogs Found", null);
        }

        // fetching the categories 
        const allCategories = await BlogPostModel.find({},{category:1});
        // Blogs.categories = allCategories;
        const data = {
            categories: allCategories,
            blogs:Blogs
        }
        return sendNormalResponse(true, 200, "Blogs Retrieved Successfully", data);

    } catch (error) {
        return sendNormalResponse(false, 500, "Internal Server Error", error.message);
    }
}
