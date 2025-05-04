import { NextResponse } from "next/server"


export const sendNormalResponse = (flag, statusCode, message, data) => {

    return NextResponse.json({
        success: flag,
        message: message,
        data: data ?? null
    }, {
        status: statusCode,
    })
}

