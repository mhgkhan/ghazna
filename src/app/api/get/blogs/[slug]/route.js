import connectDB from "@/utils/db/connectDB";
import { sendNormalResponse } from "@/utils/functions/sendResponses";
import BlogPostModel from "@/utils/models/BlogPostModel";


connectDB();
export async function GET(request, { params }) {
    const { slug } = await params;
    console.log("slug is ", slug);
    

    // console.log(slug)

    if (!slug || slug == "undefined") {
        // return new Response(JSON.stringify({ success: false, message: "Invalid slug" }), { status: 400 });
        return sendNormalResponse(false, 404, "Not found", null)
    }

    try {
        const blog = await BlogPostModel.findOne({ slug });

        if (!blog) {
            return sendNormalResponse(false, 404, "Blog not found", {blog, slug});
        }

        return sendNormalResponse(true, 200, "Fetched sucess", blog)

    } catch (error) {
        console.error("Error fetching blog:", error);
        return sendNormalResponse(false, 500, "Internal Server Error", error.message);
    }
}