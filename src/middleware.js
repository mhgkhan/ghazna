import { NextResponse } from "next/server";
import { userAgent } from "next/server";




export async function middleware(request) {
    console.log("Middleware is running");

    const {browser, device, os} = userAgent(request);
    const ip = request.ip ?? request.headers.get("x-forwarded-for") ?? "unknown";
    const thisPage = request.nextUrl.pathname;




    return NextResponse.next();
}