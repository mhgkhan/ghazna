import { NextResponse } from "next/server";
import { userAgent } from "next/server";
import VisitorModel from "./utils/models/Visitor";
import ConnectDB from "./utils/db/ConnectDB";



ConnectDB();

export async function middleware(request) {


    if (request.nextUrl.pathname.startsWith("/profile")) {
        console.log("Profile page accessed by visitor with IP: ", ip);
    }



    // console.log(request);
    const ageent = userAgent(request)
    const { browser, os } = ageent;
    const ip = request.ip ?? request.headers.get("x-forwarded-for") ?? "undefined";

    // checking if user is exists or not 
    const visitor = await VisitorModel.findOne({ ip: ip });
    if (!visitor) {
        // if not exists then create a new visitor
        const pageVisitObj = {
            page: request.nextUrl.pathname,
            method: request.method,
            time: new Date().toISOString()
        }
        const newVisitor = new VisitorModel({
            ip: ip,
            browser: browser?.name,
            platform: os?.name,
            visitPages: [pageVisitObj]
        });
        await newVisitor.save();
    }
    else {

        // if user is exists then update the visitPages array (push the new page)
        const pageVisitObj = {
            page: request.nextUrl.pathname,
            time: new Date().toISOString(),
            method: request.method,
        }
        const updatedVisitor = await VisitorModel.findOneAndUpdate(
            { ip: ip },
            { $push: { visitPages: pageVisitObj } },
            { new: true }
        );

    }

   

    return NextResponse.next();
}