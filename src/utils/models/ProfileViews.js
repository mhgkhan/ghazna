import mongoose from "mongoose"
import { defaultType } from "./schemaTypes";

const profileViewsStr = new mongoose.Schema({
    profileId: defaultType,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    ipAddress: {
        type: String,
    },
});


const ProfileViewsModel = mongoose.models.profileviews || mongoose.model("profileviews", profileViewsStr);
export default ProfileViewsModel;