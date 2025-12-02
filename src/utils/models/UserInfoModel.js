import mongoose, { mongo } from 'mongoose';
import { defaultType } from './schemaTypes';

const infoSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    country: String,
    reigon: String,
    religion: String,
    gender: {
        type: string,
        enum: ["male", "female"],
        default: 'male'
    },
    facebook: String,
    tiktok: String,
    address: String
    

}, {
    timestamps: true,
})


export const UserInfo = mongoose.models.userinfos || mongoose.model('userinfo', infoSchema, 'userinfos');
export default UserInfo;
