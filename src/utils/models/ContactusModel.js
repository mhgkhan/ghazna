import mongoose from "mongoose"
import { defaultType } from "./schemaTypes"


const contactUsSchema = mongoose.Schema({
    name: defaultType,
    subject: defaultType,
    phone: defaultType,
    email: defaultType,
    message: defaultType,
    ip: defaultType,
    browser: defaultType,
    os: defaultType,
},{
    tiemstamps: true,
});

const ContactUsModel = mongoose.models.contactmessages || mongoose.model("contactmessages", contactUsSchema);
export default ContactUsModel;

