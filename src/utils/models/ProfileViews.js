import mongoose from "mongoose"

const profileViewsStr = new mongoose.Schema({
    profileId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    ipAddress: {
        type: String,
        required: true
    },
});


const ProfileViewsModel = mongoose.models.profileviews || mongoose.model("profileviews", profileViewsStr);
export default ProfileViewsModel;