import { sendNormalResponse } from "@/utils/functions/sendResponses";
import { validateRequestBody } from "@/utils/functions/utilityFunctions";
import { cookies } from "next/headers";
import JWT from "jsonwebtoken"
import FreezeEnv from "@/config/EnvConfig";
import checkIfExists from "@/utils/functions/DBOperatiosn";
import User from "@/utils/models/Users";
import BlogPostModel from "@/utils/models/BlogPostModel";
import BlogCommentModel from "@/utils/models/BlogComment";
import connectDB from "@/utils/db/connectDB";

connectDB();

export async function POST(request, { params }) {

    try {
        const body = await request.json();
        const { slug } = await params;


        const savedCookies = await cookies();



        const thisUserCookies = savedCookies.get("USER_AUTH_TOKEN")?.value ?? null;

        if (!thisUserCookies) {
            return sendNormalResponse(false, 400, "Unauthoraized user", null);
        }

        const dcryptToken = JWT.verify(thisUserCookies, FreezeEnv.AUTH_SECRET_KEY);

        if (!dcryptToken.email || !dcryptToken.id) {
            return sendNormalResponse(false, 400, "Invilid Token", null);
        }

        // fetching user data 
        const { email, id } = dcryptToken;

        const thisUser = await checkIfExists(User, { email });

        if (!thisUser.success) {
            return sendNormalResponse(false, 400, "User Not Exists", null)
        }

        if (thisUser.error) {
            return sendNormalResponse(false, 400, thisUser.message, null)
        }

        const checkBodyValidation = validateRequestBody(body, ["comment"]);

        if (!checkBodyValidation.isValid) {
            return sendNormalResponse(false, 400, checkBodyValidation.message, null);
        }

        const findSlug = await checkIfExists(BlogPostModel, { slug });

        if (!findSlug.success || findSlug.error) {
            return sendNormalResponse(false, 400, "Blogpost not found", null)
        }

        // checking the comments length if they are > 5 we will not save 
        const fetchComments = await BlogCommentModel.find({ userId: id, blogId: findSlug.data?.id });

        if (fetchComments && fetchComments.length > 5) {
            return sendNormalResponse(false, 401, "You reached your commenting limit", null)
        }

        else {
            // adding new comment 
            const newComment = new BlogCommentModel({
                comment: body.comment,
                userId: id,
                blogId: findSlug.data.id,
                name: thisUser.data?.name ?? "Anonymous",
                email
            });

            await newComment.save();
        }

        let fetchingAllComments;
        fetchingAllComments = await BlogCommentModel.find({ slug });

        const fetchingCommentsLength = fetchingAllComments.length ?? 1

        // updating the tempcomments field in Blogpost Model 

        const updaingBlogPostCommentTemp = await BlogPostModel.findOneAndUpdate({ slug }, { $set: { tempComments: fetchingCommentsLength } }, { new: true });

        if (!updaingBlogPostCommentTemp) {
            return sendNormalResponse(false, 201, "Comment saved but temp no updated", savedComment)
        }

        return sendNormalResponse(true, 201, "Comment saved", updaingBlogPostCommentTemp)

    } catch (error) {
        console.log(error)
        return sendNormalResponse(false, 500, error.message, null);
    }

}



export async function GET(request, { params }) {
    try {

        const { slug } = await params;

        if (!slug) {
            return sendNormalResponse(false, 404, "Blogpost comments not found", null);
        }

        const checkIfBlogExsists = await checkIfExists(BlogPostModel, { slug });

        if (!checkIfBlogExsists.success) {
            return sendNormalResponse(false, 404, "Blogpost comments not found", null);
        }


        // const blogpostAllComments = await BlogCommentModel.find({ slug });
        // const length = blogpostAllComments.length;

        // updating 
        // const updating = await BlogPostModel.findOneAndUpdate({ slug }, { $set: { tempComments: length } }, { new: true })
        const comments = await BlogCommentModel.find({ blogId: checkIfBlogExsists.data.id });


        return sendNormalResponse(true, 200, "comments fetched", comments);

    } catch (error) {
        return sendNormalResponse(false, 500, error.message, null)
    }
}

