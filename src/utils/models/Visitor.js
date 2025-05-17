import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema({
    ip: {
        type: String,
        required: true,
        unique: true
    },
    browser: {
        type: String,
    },
    visitPages: {
        type: String,
    },
    os: {
        type: String,
    },
    device: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }

}, {
    timestamps: true
});

const VisitorModel = mongoose.models.visitors || mongoose.model('visitors', visitorSchema);
export default VisitorModel;

