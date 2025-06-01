import mongoose from "mongoose";
import { defaultType } from "./schemaTypes";


const blogPostSchema = new mongoose.Schema({
    title: defaultType,
    description: {
        ...defaultType,
        trim: true,
    },
    image: defaultType,
    category: defaultType,
    tags: defaultType,
    content: defaultType,
    slug: {
        ...defaultType,
        unique: true,
        lowercase: true,
        trim: true,
    },

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },
    status: {
        type: String,
        default: "draft", // or "saved"
    },
    tempViews: {
        type: Number,
        default: 0,
    },

    isPublished: {
        type: Boolean,
        default: false,
    },
    publishedAt: {
        type: Date,
        default: null,
    },

}, {
    timestamps: true,
})


const BlogPostModel = mongoose.models.blogposts || mongoose.model("blogposts", blogPostSchema);
export default BlogPostModel;

