import { sendNormalResponse } from "@/utils/functions/sendResponses";
import User from "@/utils/models/Users";
import { cookies } from "next/headers";
import JWT from "jsonwebtoken";
import FreezeEnv from "@/config/EnvConfig";
import checkIfExists from "@/utils/functions/DBOperatiosn";

export async function PUT(request) {
    const body = await request.json();
    const userCookies = (await cookies()).get("USER_AUTH").value;

    if (!userCookies) {
        return sendNormalResponse(false, "User not authenticated", 401, null);
    }

    const userData = JWT.verify(userCookies, FreezeEnv.AUTH_SECRET_KEY);

    if (!userData || !userData.id) {
        return sendNormalResponse(false, "Invalid user data", 401, null);
    }
    const { id } = userData;

    const { name, email, phone, address } = body;

    if (!name || !email || !phone || !address) {
        return sendNormalResponse(false, "All fields are required", 400, null);
    }

    // CHECKING USER IS EXISTSING OR NOT 
    const userExists = await checkIfExists(User, { _id: id });
    if (!userExists.success) {
        return sendNormalResponse(false, "User not found", 404, null);
    }
    // UPDATE USER PROFILE
    const updatedUser = await User.findByIdAndUpdate(
        id,
        { name, email, phone, address },
        { new: true }
    );
    if (!updatedUser) {
        return sendNormalResponse(false, "Failed to update profile", 500, null);
    }
    // Optionally, you can return the updated user data
    const { password, ...userWithoutPassword } = updatedUser._doc;
    // Return success response
    if (!userWithoutPassword) {
        return sendNormalResponse(false, "Failed to retrieve updated user data", 500, null);
    }
    // Set the updated user data in cookies
    const userToken = JWT.sign(userWithoutPassword, FreezeEnv.AUTH_SECRET_KEY, { expiresIn: "1d" });
    cookies().set("USER_AUTH", userToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24, // 1 day
    });

    // Return success response

    return sendNormalResponse(true, "Profile updated successfully", 200, null);
}