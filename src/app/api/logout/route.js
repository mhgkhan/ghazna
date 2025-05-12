import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { deleteCookie } from "cookies-next";

export async function GET(request) {
    const cookie = (await cookies()).delete("USER_AUTH_TOKEN");
    await deleteCookie('USER_AUTH_TOKEN', { cookies, httpOnly:true, secure:true, sameSite:"strict" });
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url);
}
