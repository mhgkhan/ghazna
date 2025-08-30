import connectDB from "@/utils/db/connectDB";
import checkIfExists from "@/utils/functions/DBOperatiosn";
import { sendNormalResponse } from "@/utils/functions/sendResponses";
import BlogPostModel from "@/utils/models/BlogPostModel";
import BlogViews from "@/utils/models/BlogViews";
import User from "@/utils/models/Users";

connectDB();

export async function POST(request, { params }) {
    const { slug } = await params;
    if (!slug || slug == "undefined") {
        sendNormalResponse(false, 404, "Not found", null);
    }
    try {

        const requestData = await request.json();
        const { userId, ipAddress } = requestData;
        if (!ipAddress) {
            return sendNormalResponse(false, 400, "Bad Request", "IP Address is required.", null);
        }
        else {

            // checking if blog is exists or not 
            const blog = await checkIfExists(BlogPostModel, { slug: slug });

            if (!blog.success) {
                return sendNormalResponse(false, 404, "Blog not found", "The requested blog does not exist.", null);
            }
            if (blog.error) {
                return sendNormalResponse(false, 500, blog.message, null);
            }
            // if blog exists then we will check if the user has already opened the blog or not
            const blogViews = await checkIfExists(BlogViews, { blogId: blog.data._id, ipAddress: ipAddress });

            if (blogViews.success) {
                const updatedBlogviws = await BlogViews.find({ blogId: blog.data._id });
                const viewsCount = updatedBlogviws.length;
                return sendNormalResponse(true, 200, "Blog already opened", { views: viewsCount });
            }
            else {
                // if blog is not opened by the user then we will create a new entry in the BlogViews collection
                const newBlogView = new BlogViews({
                    blogId: blog.data._id,
                    userId: userId || null, // userId can be null if not provided
                    ipAddress: ipAddress,
                });

                await newBlogView.save();

                // fetch all updated blog views count
                const updatedBlogviws = await BlogViews.find({ blogId: blog.data._id });
                const viewsCount = updatedBlogviws.length;
                // update the blog post with the new views count

                const blogViewsUpdate = await BlogPostModel.findOneAndUpdate(
                    { slug: slug },
                    { tempViews: viewsCount }, // Increment the views count by 1
                    { new: true } // Return the updated document
                );


                // updating main user model 
                const allBlogsViews = await BlogPostModel.find({ authorId: blog.data.authorId });
                let counter = 0;


                if (!allBlogsViews.length < 0) {
                    allBlogsViews.forEach((ele, ind) => {
                        console.log(ele)
                        counter = counter + ele.tempViews;
                    })
                }

                // updating the main user model
                await User.findOneAndUpdate({ _id: blog.data.authorId }, { allBlogViews: counter }, { new: true });



                return sendNormalResponse(true, 200, "Sucess", { views: viewsCount });
            }
        }



    }
    catch {
        return sendNormalResponse(false, 500, "Internal Server Error", "An error occurred while processing your request.", null);
    }
}