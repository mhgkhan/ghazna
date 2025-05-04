import { sendNormalResponse } from "@/utils/functions/sendResponses";


export async function POST(request) {
    try {

        const body = await request.json()
        const { ip, browser, platform, visitPages } = body;

        return sendNormalResponse(true, 200, "Visitor data received successfully", { ip, browser, platform, visitPages })
    } catch (error) {
        return sendNormalResponse(false, 500, "Internal server error", null)
    }


}


export async function GET(request) {
    try {
        return sendNormalResponse(true, 200, "Visitor data received successfully", null)
    } catch (error) {
        return sendNormalResponse(false, 500, "Internal server error", null)
    }
}