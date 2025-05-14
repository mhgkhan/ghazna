import mongoose from "mongoose"
import { defaultType } from "./schemaTypes"


const contactUsSchema = mongoose.Schema({
    name: defaultType,
    subject: defaultType,
    phone: defaultType,
    email: defaultType,
    message: defaultType,
    ip: defaultType
});

const ContactUsModel = mongoose.models.contactmessages || mongoose.model("contactmessages", contactUsSchema);
export default ContactUsModel;

