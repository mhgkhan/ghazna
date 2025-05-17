import connectDB from "@/utils/db/connectDB";
import checkIfExists from "@/utils/functions/DBOperatiosn";
import { sendNormalResponse } from "@/utils/functions/sendResponses";
import VisitorModel from "@/utils/models/Visitor";


connectDB();


export async function POST(request) {


    try {
        const data = await request.json();
        const { ip } = data;

        // const agent = userAgent(request);

        // const { browser, os, device } = agent;

        // console.log(agent);


        // console.log(typeof browser, typeof os, typeof device);

        // checking if ip is exists or not 
        const findIp = await checkIfExists(VisitorModel, { ip });

        // console.log("visitors is ", findIp);

        if (findIp.success) {
            return sendNormalResponse(false, 200, "user already exists", null);
        }

        else {

            // adding this data into the database 
            const adding = new VisitorModel({
                ip: ip
            })

            await adding.save();

            return sendNormalResponse(true, 201, "Visitor added", { ip })
        }




    } catch (error) {
        return sendNormalResponse(false, 500, error.message, null)
    }

}


export async function GET(request) {
    try {

        const visitors = await VisitorModel.find({})
        // console.log("the visitors is ", visitors);



        if (!visitors) {
            return sendNormalResponse(true, 200, "Zero length users", { visitors: 0 })
        }
        else {
            return sendNormalResponse(true, 200, "Data is here", { visitors: visitors.length })
        }

    } catch (error) {
        // console.log("the error is ", error);

        return sendNormalResponse(false, 500, "Server error", null)
    }
}