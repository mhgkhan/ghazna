import { NextResponse } from "next/server";

export async function middleware(request) {
    console.log("Middleware is running");
    return NextResponse.next();
}