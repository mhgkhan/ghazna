import checkIfExists from "@/utils/functions/DBOperatiosn";
import { sendNormalResponse } from "@/utils/functions/sendResponses";
import { checkUserAuthorization } from "@/utils/functions/utilityFunctions";
import BlogPostModel from "@/utils/models/BlogPostModel";







export async function DELETE(request, { params }) {
    try {



        const { id: blogId } = await params;


        if (!blogId) {
            return sendNormalResponse(false, 400, "Unable to find blogpost", null);
        };
        // checking if the blog is exists or not 
        const findBlog = await checkIfExists(BlogPostModel, { _id: blogId })
        console.log(findBlog);


        if (!findBlog.success) {
            return sendNormalResponse(false, 400, findBlog.message, null);
        }

        // // checking if user is authoraized or not 
        const checkUser = await checkUserAuthorization();

        if (!checkUser) {
            return sendNormalResponse(false, checkUser.status, checkUser.message, null);
        }

        // console.log("checkuser: ", checkUser.user._id.toString()===findBlog.data.author.toString());

        if (checkUser.user._id.toString() !== findBlog.data.author.toString()) {
            return sendNormalResponse(false, 401, "not authoraized", null)
        }

        // delete the blog 
        const deleteBlog = await BlogPostModel.findByIdAndDelete(blogId);
        // console.log("deleteBlog: ", deleteBlog);
        if (!deleteBlog) {
            return sendNormalResponse(false, 500, "blogpost not deleted", null)
        }

        return sendNormalResponse(true, 200, "Blogpost deleted sucessfully.", deleteBlog);


    } catch (error) {
        console.log("Error in deleting blog post: ", error);
        return sendNormalResponse(false, 500, error.message, null)
    }
}


export async function GET(request, { params }) {

    try {

        const user = await checkUserAuthorization();

        if (!user.success) {
            return sendNormalResponse(false, user.status, user.message, null);
        }


        return sendNormalResponse(true, 200, "Blog post updated successfully", null);






    } catch (error) {

    }


}