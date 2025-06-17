import checkIfExists from "@/utils/functions/DBOperatiosn";
import { sendNormalResponse } from "@/utils/functions/sendResponses";
import User from "@/utils/models/Users";

export async function GET(request, { params }) {
    try {

        const { username } = await params;
        if (!username || username.includes("%") || username.includes(" ")) {
            return sendNormalResponse(false, 400, "username not valid", null)
        }

        const findUserName = await checkIfExists(User, { username });

        console.log(findUserName)

        if (!findUserName.success) {
            return sendNormalResponse(false, 404, findUserName.message, null)
        }


        return sendNormalResponse(true, 200, "User fetched", findUserName.data);


    } catch (error) {
        return sendNormalResponse(false, 500, error.message, null)
    }
}