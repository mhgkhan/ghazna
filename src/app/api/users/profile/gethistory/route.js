import { sendNormalResponse } from "@/utils/functions/sendResponses";
import connectDB from "@/utils/db/connectDB";
import { checkUserAuthorization } from "@/utils/functions/utilityFunctions";
import HistoryModel from "@/utils/models/HistoryModel";



connectDB();
export async function GET(request) {

    try {
        // checking user authorization
        const checkUserAuth = await checkUserAuthorization();
        console.log(checkUserAuth)
        if (!checkUserAuth.success) {
            return sendNormalResponse(false, checkUserAuth.status, checkUserAuth.message, null);
        }

        const history = await HistoryModel.find({ userId: checkUserAuth.user._id }).sort({ createdAt: -1 });

        return sendNormalResponse(true, 200, "history is here", history);

    } catch (error) {
        return sendNormalResponse(false, 500, error.message, null)
    }
}