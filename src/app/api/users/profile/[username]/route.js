import checkIfExists from "@/utils/functions/DBOperatiosn";
import { sendNormalResponse } from "@/utils/functions/sendResponses";
import User from "@/utils/models/Users";
import { cookies, headers } from "next/headers";
import JWT from "jsonwebtoken";
import FreezeEnv from "@/config/EnvConfig";
import ProfileViewsModel from "@/utils/models/ProfileViews";
import connectDB from "@/utils/db/connectDB";



connectDB();
export async function GET(request, { params }) {

    try {

        const cookiesAll = await cookies();
        console.log("Cookies received:", cookiesAll.getAll());


        const token = (await headers()).get("token");
        // console.log(headersAll)

        // const token = cookiesAll.get("USER_AUTH_TOKEN")?.value;

        const { username } = await params;
        if (!username || username.includes("%") || username.includes(" ")) {
            return sendNormalResponse(false, 400, "username not valid", null)
        }

        const findUserName = await checkIfExists(User, { username });


        // console.log(findUserName)
        if (!findUserName.success) {
            // updating the profile views views 
            return sendNormalResponse(false, 404, findUserName.message, null)
        }


        if (!token) {
            console.log("token not found");
            return sendNormalResponse(true, 200, "User fetched", findUserName.data);
        }

        const decodedToken = JWT.verify(token, FreezeEnv.AUTH_SECRET_KEY);
        if (!decodedToken) {
            return sendNormalResponse(true, 200, "User fetched", findUserName.data);
        }

        const { id, email } = decodedToken;

        const checkThisProfileView = await checkIfExists(ProfileViewsModel, { profileId: findUserName.data?._id, userId: id });

        if (!checkThisProfileView.success) {
            const newProfileView = new ProfileViewsModel({
                profileId: findUserName.data?._id,
                userId: id,
            })
            await newProfileView.save();
        }


        // fetching all profile views 
        const fetchAllProfileViews = await ProfileViewsModel.find({ profileId: findUserName.data?._id });

        const length = fetchAllProfileViews.length;


        // update the user model tempProfileViews field 

        const updateTempProfileViews = await User.findOneAndUpdate({ email: findUserName.data?.email }, { tempProfileViews: length }, { new: true });
        if (!updateTempProfileViews) {
            return sendNormalResponse(false, 500, "Failed to update profile views", null);
        }

        console.log("username data is ", findUserName.data);
        return sendNormalResponse(true, 200, "User fetched", findUserName.data);

    } catch (error) {
        console.log(error);

        return sendNormalResponse(false, 500, error.message, null)
    }
}