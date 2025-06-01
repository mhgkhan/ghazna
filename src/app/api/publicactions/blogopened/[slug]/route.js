import checkIfExists from "@/utils/functions/DBOperatiosn";
import { sendNormalResponse } from "@/utils/functions/sendResponses";
import BlogPostModel from "@/utils/models/BlogPostModel";
import BlogViews from "@/utils/models/BlogViews";

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
                return sendNormalResponse(false, 200, "Blog already opened", "You have already opened this blog.", null);
            }
            else {
                // if blog is not opened by the user then we will create a new entry in the BlogViews collection
                const newBlogView = new BlogViews({
                    blogId: blog.data._id,
                    userId: userId || null, // userId can be null if not provided
                    ipAddress: ipAddress,
                });

                await newBlogView.save();
                return sendNormalResponse(true, 200, "Blog opened successfully", "You have successfully opened the blog.", null);
            }
        }



    }
    catch {
        return sendNormalResponse(false, 500, "Internal Server Error", "An error occurred while processing your request.", null);
    }
}