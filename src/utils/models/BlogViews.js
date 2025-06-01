import mongoose from "mongoose"

const blogViewsSchema = new mongoose.Schema({
    blogId: {
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
},{timestamps: true});

const BlogViews = mongoose.models.BlogViews || mongoose.model("BlogViews", blogViewsSchema);
export default BlogViews;

