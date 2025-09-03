import connectDB from "@/utils/db/connectDB";
import { sendNormalResponse } from "@/utils/functions/sendResponses";
import BlogPostModel from "@/utils/models/BlogPostModel";
import User from "@/utils/models/Users";


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

        const blog = await BlogPostModel.findOne({ slug });

        // console.log("blog is ", blog);
        const user = await User.findOne({ _id: blog?.author }).select("name profilePicture");
        // console.log("user is ", user);
        // const blogViews = await BlogViews.findOne({ blogId: blog?._id });


        if (!blog || !user) {
            return sendNormalResponse(false, 404, "Blogpost not found ERR USER|BLOG", { blog, slug });
        }

        const relatedBlogs = await BlogPostModel.find({ isPublished: true, isHidden: false, category: blog.category }).limit(5).select("title slug image").sort({ createdAt: -1 });


        const resData = {
            blog,
            user,
            relatedBlogs: relatedBlogs ? relatedBlogs.length < 2 ? [] : relatedBlogs.splice(0, 1) : [] || []
        }


        return sendNormalResponse(true, 200, "Fetched sucess", resData);


    } catch (error) {
        console.error("Error fetching blog:", error);
        return sendNormalResponse(false, 500, "Internal Server Error", error.message);
    }
}