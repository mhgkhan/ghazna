import mongoose from "mongoose";


const HistorySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    action: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
}, {
    timestamps: true
})

const HistoryModel = mongoose.models.History || mongoose.model("History", HistorySchema);
export default HistoryModel;
