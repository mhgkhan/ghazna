import { sendNormalResponse } from "@/utils/functions/sendResponses";

export async function PUT(request) {
    return sendNormalResponse(true, "Profile updated successfully", 200, null);
}