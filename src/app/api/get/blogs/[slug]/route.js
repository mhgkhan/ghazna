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

        // // updating the blogpost view count 
        // const blogViewsUpdate = await BlogPostModel.findOneAndUpdate(
        //     { slug: slug },
        //     { $inc: { tempViews: 1 } }, // Increment the views count by 1
        //     { new: true } // Return the updated document
        // );

        const blog = await BlogPostModel.findOne({ slug });

        // console.log("blog is ", blog);
        const user = await User.findOne({ _id: blog?.author }).select("name profilePicture");
        // console.log("user is ", user);
        // const blogViews = await BlogViews.findOne({ blogId: blog?._id });

        
        if (!blog || !user) {
            return sendNormalResponse(false, 404, "Blogpost not found ERR USER|BLOG", { blog, slug });
        }
        

        // const tags = blog.tags.split(",");
        // fetching related blogposts 
        
        const regexPattern = tags.map(tag => `(${tag})`).join('|');
        const relatedBlogs = await BlogPostModel.find({ isPublished: true, isHidden: false, tags: { $regex: regexPattern, $options: 'i' } }).limit(5).select("title slug image").sort({ createdAt: -1 });
        

        const resData = {
            blog,
            user,
            relatedBlogs : relatedBlogs || []
        }


        return sendNormalResponse(true, 200, "Fetched sucess", resData);


    } catch (error) {
        console.error("Error fetching blog:", error);
        return sendNormalResponse(false, 500, "Internal Server Error", error.message);
    }
}