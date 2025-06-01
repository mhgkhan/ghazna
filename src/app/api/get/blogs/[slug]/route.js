import connectDB from "@/utils/db/connectDB";
import { sendNormalResponse } from "@/utils/functions/sendResponses";
import BlogPostModel from "@/utils/models/BlogPostModel";
import BlogViews from "@/utils/models/BlogViews";
import User from "@/utils/models/Users";


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
        // console.log("blog is ", blog);
        const user = await User.findOne({ _id: blog?.author }).select("name profilePicture");
        // console.log("user is ", user);
        const blogViews = await BlogViews.findOne({ blogId: blog?._id });


        if (!blog || !user) {
            return sendNormalResponse(false, 404, "Blogpost not found ERR USER|BLOG", { blog, slug });
        }


        const resData = {
            blog,
            user,
            views: blogViews ? blogViews.length : 0,
        }


        return sendNormalResponse(true, 200, "Fetched sucess", resData);


    } catch (error) {
        console.error("Error fetching blog:", error);
        return sendNormalResponse(false, 500, "Internal Server Error", error.message);
    }
}