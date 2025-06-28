import { cookies } from "next/headers";
import { NextResponse } from "next/server";




export async function middleware(request) {

    const savedCookies = await cookies();

    const userCookie = savedCookies.get("USER_AUTH_TOKEN");


    if (request.nextUrl.pathname == "/api/auth/editprofile" || request.nextUrl.pathname == "/api/blogs/create") {
        if (userCookie) {
            return NextResponse.next();
        }
        else {
            // return unauthorize error 
            return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
        }
    }



    if (request.nextUrl.pathname.startsWith("/profile")) {
        if (userCookie) {
            return NextResponse.next();
        }
        else {
            return NextResponse.redirect(new URL("/login", request.url))
        }
    }


    return NextResponse.next();
}

export const config = {
    matcher: ["/profile/:pages*", "/login", "/signup"]
}