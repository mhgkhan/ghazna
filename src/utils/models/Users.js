import mongoose from 'mongoose';
import { defaultType } from './schemaTypes';

const userSchema = new mongoose.Schema({
    name: defaultType,
    email: {
        ...defaultType,
        unique: true,
        lowercase: true,
    },
    password: {
        ...defaultType,
        required: true,
    },
    address: {
        // ...defaultType,
        type: String,
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    verificationToken: {
        type: String,
        default: null,
    },
    verificationTokenExpiry: {
        type: Date,
        default: null,
    },
    resetPasswordToken: {
        type: String,
        default: null,
    },
    resetPasswordTokenExpiry: {
        type: Date,
        default: null,
    },

    lastLogin: {
        type: Date,
        default: null,
    },
    profilePicture: {
        type: String,
        default: null,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    deletedAt: {
        type: Date,
        default: null,
    },
    isSuspended: {
        type: Boolean,
        default: false,
    },
    suspendedAt: {
        type: Date,
        default: null,
    },
    suspensionReason: {
        type: String,
        default: null,
    },
})


export const User = mongoose.models.users || mongoose.model('users', userSchema, 'users');
export default User;
