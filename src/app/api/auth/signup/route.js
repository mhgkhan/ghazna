const { default: connectDB } = require("@/utils/db/connectDB");



connectDB();

import FreezeEnv from "@/config/EnvConfig";
import checkIfExists from "@/utils/functions/DBOperatiosn";
import { sendNormalResponse } from "@/utils/functions/sendResponses";
import { validateRequestBody } from "@/utils/functions/utilityFunctions";
import User from "@/utils/models/Users";
import JWT from "jsonwebtoken";

export async function POST(request) {
    try {

        const body = await request.json()
        const validateBody = validateRequestBody(body, ["name", "email", "password"]);

        // checking if the body is empty or not 
        // validate body 
        if (!body || !validateBody.isValid) {
            return sendNormalResponse(false, 400, validateBody.message, null)
        }

        // checking if user is exists or not 
        const checkUser = await checkIfExists(User, { email: body.email });
        if (checkUser.success) {
            return sendNormalResponse(false, 400, "User already exists", null)
        }

        // creating token for verification 

        const token = JWT.sign({ email: body.email, isVerfiied: false }, FreezeEnv.VERIFICATION_SECRET_KEY);

        const { name, email, password } = body;
        const addUserInfo = new User({
            name,
            email,
            password,
            role: "user",
            isVerified: false,
            verificationToken: token,
        })

        const savedUserInfo = await addUserInfo.save();

        return sendNormalResponse(true, 200, "User created successfully", { user: savedUserInfo, token })



    } catch (error) {
        return sendNormalResponse(false, 500, "Internal server error", null)
    }
}