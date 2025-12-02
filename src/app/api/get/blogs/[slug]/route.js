import connectDB from "@/utils/db/connectDB";
import { sendNormalResponse } from "@/utils/functions/sendResponses";
import BlogPostModel from "@/utils/models/BlogPostModel";
import User from "@/utils/models/Users";


connectDB();
export async function GET(request, { params }) {
    const { slug } = await params;



    if (!slug || slug == "undefined") {
        return sendNormalResponse(false, 404, "Not found", null)
    }

    try {

        const blog = await BlogPostModel.findOne({ slug });

        const user = await User.findOne({ _id: blog?.author }).select("name profilePicture");


        if (!blog || !user) {
            return sendNormalResponse(false, 404, "Blogpost not found ERR USER|BLOG", { blog, slug });
        }

        const relatedBlogs = await BlogPostModel.find({ isPublished: true, isHidden: false, category: blog.category }).select("title slug image").sort({ createdAt: -1 });


        const filteredRelatedBlogs = relatedBlogs ? relatedBlogs.length < 1 ? [] : relatedBlogs.filter((b) => b.slug !== slug) : [];


        const resData = {
            blog,
            user,
            relatedBlogs: filteredRelatedBlogs
        }


        return sendNormalResponse(true, 200, "Fetched sucess", resData);


    } catch (error) {
        return sendNormalResponse(false, 500, "Internal Server Error", error.message);
    }
}