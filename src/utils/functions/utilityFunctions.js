import { cookies, cookies } from 'next/headers';
import { sendNormalResponse } from './sendResponses';
import JWT from "jsonwebtoken";
import FreezeEnv from '@/config/EnvConfig';
import User from '../models/Users';

export const sendUserInfo = async () => {
    const res = await fetch(`http://localhost:3000/api`)

    const response = await res.json();
    return response;
};


export const validateRequestBody = (body, requiredFields) => {
    const missingFields = requiredFields.filter(field => !body[field]);
    if (missingFields.length > 0) {
        return {
            isValid: false,
            message: `Missing required fields: ${missingFields.join(', ')}`,
        };
    }
    return { isValid: true };
}




export const checkUserAuthorization = async () => {

    const userCookies = await cookies();
    const userAuthToken = userCookies.get("USER_AUTH_TOKEN")?.value;
    if (!userAuthToken) {
        return {
            success: false,
            message: "Authorization token not found",
            status: 401
        }
    }


    // decoding the token 

    try {
        const decodedToken = JWT.verify(userAuthToken, FreezeEnv.AUTH_SECRET_KEY);
        if (!decodedToken) {
            return {
                success: false,
                message: "Invalid authorization token",
                status: 401
            }
        }


        // checking if user exists or not
        const { id, email } = decodedToken;

        const checkUser = await User.findOne({ _id: id, email });
        if (!checkUser) {
            return {
                success: false,
                message: "User not found",
                status: 404
            }
        }

        return {
            success: true,
            user: checkUser
        }


    } catch (error) {
        return {
            success: false,
            message: error.message,
            status: 500
        }
    }




}