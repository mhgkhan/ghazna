import checkIfExists from "@/utils/functions/DBOperatiosn";
import { sendNormalResponse } from "@/utils/functions/sendResponses";
import User from "@/utils/models/Users";
import { cookies, headers } from "next/headers";
import JWT from "jsonwebtoken";
import FreezeEnv from "@/config/EnvConfig";
import ProfileViewsModel from "@/utils/models/ProfileViews";
import connectDB from "@/utils/db/connectDB";
import BlogPostModel from "@/utils/models/BlogPostModel";



connectDB();
export async function GET(request) {

    try {

        const cookiesAll = await cookies();
        // console.log("Cookies received:", cookiesAll.getAll());




        const token = cookiesAll.get("USER_AUTH_TOKEN")?.value;
        if (!token) {
            console.log("token not found");
            return sendNormalResponse(false, 404, "unauthorized user", null);
        }
        const decodedToken = JWT.verify(token, FreezeEnv.AUTH_SECRET_KEY);
        const { id, email } = decodedToken;



        if (!decodedToken) {
            return sendNormalResponse(false, 400, "Invilid user", null);
        }


        const findUserName = await checkIfExists(User, { email });


        // console.log(findUserName)
        if (!findUserName.success) {
            // updating the profile views views 
            return sendNormalResponse(false, 404, findUserName.message, null)
        }

        // fetching all user blogposts 
        const userBlogs = await BlogPostModel.find({author: findUserName.data._id});
        if (!userBlogs || userBlogs.length === 0) {
            return sendNormalResponse(false, 404, "No blogs found for this user", null);
        }

        return sendNormalResponse(true, 200, "Blogs fetched successfully", userBlogs);

    } catch (error) {
        console.log(error);

        return sendNormalResponse(false, 500, error.message, null)
    }
}