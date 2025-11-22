import { sendNormalResponse } from "@/utils/functions/sendResponses";
import connectDB from "@/utils/db/connectDB";
import { checkUserAuthorization } from "@/utils/functions/utilityFunctions";
import HistoryModel from "@/utils/models/HistoryModel";



connectDB();
export async function DELETE(request) {

    try {
        // checking user authorization
        const checkUserAuth = await checkUserAuthorization();
        // console.log(checkUserAuth)
        if (!checkUserAuth.success) {
            return sendNormalResponse(false, checkUserAuth.status, checkUserAuth.message, null);
        }

       const delteHistory = await HistoryModel.deleteMany({ userId: checkUserAuth.user._id });


        return sendNormalResponse(true, 200, "history Deleted", null);

    } catch (error) {
        return sendNormalResponse(false, 500, error.message, null)
    }
}