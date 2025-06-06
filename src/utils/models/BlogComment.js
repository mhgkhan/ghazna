import mongoose from "mongoose";
import { defaultType } from "./schemaTypes";

const blogCommentStr = new mongoose.Schema({
    comment: defaultType,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
    },
    blogId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "blogposts",
    }
}, {
    timestamps: true
});

const BlogCommentModel = mongoose.models.blogcomments || mongoose.model("blogcomments", blogCommentStr);
export default BlogCommentModel;
