import connectDB from "@/utils/db/connectDB";
import { sendNormalResponse } from "@/utils/functions/sendResponses";
import { validateRequestBody } from "@/utils/functions/utilityFunctions";
import { cookies } from "next/headers";
import JWT from "jsonwebtoken";
import FreezeEnv from "@/config/EnvConfig";
import checkIfExists from "@/utils/functions/DBOperatiosn";
import BlogPostModel from "@/utils/models/BlogPostModel";
import User from "@/utils/models/Users";

connectDB();

export async function POST(request) {

    const thisUserCookies = await cookies();

    const userToken = thisUserCookies.get("USER_AUTH_TOKEN")?.value;
    if (!userToken || userToken == "undefiend") {
        return sendNormalResponse(false, 401, "Unauthorized: You are not authorized to perform this action 1", null);
    }

    // checking if user is logged in or not

    // decrypting token 
    const verifyToken = JWT.verify(userToken, FreezeEnv.AUTH_SECRET_KEY);

    if (verifyToken.isVerified == false) {
        return sendNormalResponse(false, 401, "Unauthorized: You are not authorized to perform this action 2", null);
    }
    if (!verifyToken.email || !verifyToken.id) {
        return sendNormalResponse(false, 401, "Unauthorized: You are not authorized to perform this action 3", null);
    }

    // checking if user is exists or not
    const { email } = verifyToken;

    const checkUser = await checkIfExists(User, { email: email });

    if (!checkUser.success) {
        return sendNormalResponse(false, 404, "User not found", checkUser.message);
    }
    if (checkUser.error) {
        return sendNormalResponse(false, 500, "Internal Server Error", checkUser.message);
    }

    if (checkUser.data.id != verifyToken.id) {
        return sendNormalResponse(false, 401, "Unauthorized: You are not authorized to perform this action 4", null);
    }


    const body = await request.json();
    const validReqBody = validateRequestBody(body, ["title", "image", "description", "content", "tags", "category"]);

    if (!validReqBody.isValid) {
        return sendNormalResponse(false, 400, "Invalid request body", validReqBody.message);
    }

    try {


        const date = new Date();
        const publishedAt = date.toISOString();


        const slug = `${body.title.toLowerCase().split(" ").join("-").toString()}-${Math.floor(Date.now())}`;



        const addingBlog = new BlogPostModel({
            title: body.title,
            image: body.image,
            description: body.description,
            content: body.content,
            tags: body.tags,
            category: body.category,
            author: checkUser.data.id,
            status: "saved",
            isPublished: checkUser.data.email == "muhammadhasnainghazna@gmail.com" ? true : false,
            publishedAt,
            slug
        });



        const savedBlog = await addingBlog.save();

        const fetchAllBlogs = await BlogPostModel.find({ author: checkUser.data.id });

        // updating the user 
        const blogsLength = fetchAllBlogs.length;
        const updateUser = await User.findOneAndUpdate(
            { _id: checkUser.data.id },
            {
                $set: {
                    tempUserBlogs: blogsLength,
                }
            },
            { new: true });


        return sendNormalResponse(true, 201, "Blog Created Sucessfully", savedBlog);

    } catch (error) {
        console.log(error);

        return sendNormalResponse(false, 500, "Internal Server Error", error.message);
    }

}