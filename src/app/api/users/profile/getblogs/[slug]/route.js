import connectDB from "@/utils/db/connectDB";
import { sendNormalResponse } from "@/utils/functions/sendResponses";
import { checkUserAuthorization } from "@/utils/functions/utilityFunctions";
import BlogPostModel from "@/utils/models/BlogPostModel";


connectDB();
export async function GET(request, { params }) {
    const { slug } = await params;
    // console.log("slug is ", slug);


    // console.log(slug)

    if (!slug || slug == "undefined") {
        // return new Response(JSON.stringify({ success: false, message: "Invalid slug" }), { status: 400 });
        return sendNormalResponse(false, 404, "Not found", null)
    }

    try {


        // console.log("Fetching blog with slug:", slug);
        // check user authorization 
        const checkUserAuth = await checkUserAuthorization();

        // console.log(checkUserAuth)

        if (!checkUserAuth.success) {
            return sendNormalResponse(checkUserAuth.success, checkUserAuth.status, checkUserAuth.message, null);
        }

        // checking if this action is allowed for the user
        // console.log("the blog slug is ", slug);
        const blog = await BlogPostModel.findOne({ slug: slug, author: checkUserAuth.user._id });
        // console.log("the blog slug is ", blog); 

        if (!blog) {
            return sendNormalResponse(false, 404, "Blog not found or you are not authorized to edit this blog", null);
        }

        return sendNormalResponse(true, 200, "Fetched success", blog);


    } catch (error) {
        console.error("Error fetching blog:", error);
        return sendNormalResponse(false, 500, "Internal Server Error", error.message);
    }
}