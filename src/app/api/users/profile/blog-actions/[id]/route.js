import checkIfExists from "@/utils/functions/DBOperatiosn";
import { sendNormalResponse } from "@/utils/functions/sendResponses";
import BlogPostModel from "@/utils/models/BlogPostModel";
import User from "@/utils/models/Users";
import { cookies } from "next/headers";







export async function DELETE(request, { params }) {
    try {

        const { id: blogId } = await params;

        if (!blogId) {
            return sendNormalResponse(false, 400, "Unable to find blogpost", null);
        };
        // checking if the blog is exists or not 
        const findBlog = await checkIfExists(BlogPostModel, { _id: blogId })

        if (!findBlog.success) {
            return sendNormalResponse(false, 400, findBlog.message, null);
        }


        // checking if user is authoraized or not 
        const allCookies = await cookies();

        const thisUserCookies = allCookies.get("USER_AUTH_TOKEN")?.value;

        if (!thisUserCookies) {
            return sendNormalResponse(false, 401, "authorization token not found", null)
        }

        const { id, email } = thisUserCookies;

        // checking if user is exists or not 
        const getUser = await checkIfExists(User, { email });

        if (!getUser.success) {
            return sendNormalResponse(false, 400, getUser.message, null)
        }

        if (getUser.data.id !== findBlog.data.author) {
            return sendNormalResponse(false, 401, "not authoraized", null)
        }

        // delete the blog 
        const deleteBlog = await BlogPostModel.findOneAndDelete({ id: blogId, author: id });
        if (!deleteBlog) {
            return sendNormalResponse(false, 500, "blogpost not deleted", null)
        }

        return sendNormalResponse(true, 200, "Blogpost deleted sucessfully.", deleteBlog);





    } catch (error) {
        return sendNormalResponse(false, 500, error.message, null)
    }
}


export async function PUT(request, { params }) {

}