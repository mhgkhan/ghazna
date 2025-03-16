import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema({
    IpToken: {
        type: String,
        required: true,
    }
},{
    timestamps:true
});

const VisitorModel = mongoose.models.visitors || mongoose.model('visitors', visitorSchema);
export default VisitorModel;