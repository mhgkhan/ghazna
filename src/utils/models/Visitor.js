import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema({
    ip: {
        type: String,
        required: true,
    },
    browser: {
        type: String,
        required: true
    },
    platform: {
        type: String,
        required: true
    },
    visitPages:{
        type: Array,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }

}, {
    timestamps: true
});

const VisitorModel = mongoose.models.visitors || mongoose.model('visitors', visitorSchema);
export default VisitorModel;