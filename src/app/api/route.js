import { NextResponse } from "next/server";

export async function GET(request){
    try {
        return NextResponse.json({success:true, message: "welcoem to https://ghazna.vercel.app/"}, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}