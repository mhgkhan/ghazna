import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {

    // const platForm = await headers.get("");
    const platform = request.headers.get("sec-ch-ua-platform")
    const browser = request.headers.get("sec-ch-ua")?.split(";")[0];




    try {
        return NextResponse.json({ success: true, message: "welcoem to https://ghazna.vercel.app/" }, { status: 200, browser, platform });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}