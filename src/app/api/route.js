import connectDB from "@/utils/db/connectDB";
import { sendNormalResponse } from "@/utils/functions/sendResponses";
import VisitorModel from "@/utils/models/Visitor";
import { userAgent } from "next/server";


connectDB();

export async function POST(request) {
    try {

        const body = await request.json()
        const { ip, browser, platform, visitPages } = body;

        console.log("Visitor data:", body)

        return sendNormalResponse(true, 200, "Visitor data received successfully", { ip, browser, platform, visitPages })
    } catch (error) {
        return sendNormalResponse(false, 500, "Internal server error", null)
    }


}


export async function GET(request) {
    try {
        const ip = request.headers.get("x-forwarded-for") || request.headers.get("remote-addr") || request.headers.get("cf-connecting-ip") || request.headers.get("x-real-ip") || request.headers.get("x-client-ip") || request.headers.get("x-cluster-client-ip") || request.headers.get("x-forwarded") || request.headers.get("forwarded-for") || request.headers.get("forwarded") || "known"

        const agent = userAgent(request);
        // console.log(agent);
        
        
        const browser = agent?.browser?.name || "unknown"
        const os = agent?.os?.name || "unknown"
        const platform = agent?.platform?.type || "unknown"

        const addUserInfo = new VisitorModel({
            ip,
            browser,
            platform,
        })

        const savedUserInfo = await addUserInfo.save();
        if (!savedUserInfo) {
            return sendNormalResponse(false, 500, "Failed to save visitor data", null)
        }


        return sendNormalResponse(true, 200, "Visitor data received successfully", { ip, browser, os })
    } catch (error) {
        return sendNormalResponse(false, 500, "Internal server error", null)
    }
}
