import mongoose from "mongoose"

const blogLikeSchema = new mongoose.Schema({

    liked: {
        type: Boolean,
        default: false
    },

    disliked: {
        type: Boolean,
        defult: false
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },

    slug: {
        type: string,
        requried: true,
    }



}, { timestamps: true })


const BlogReactModel = mongoose.models.bloglikes || mongoose.model('bloglikes', blogLikeSchema, 'bloglikes');
export default BlogReactModel;
// This code defines a Mongoose schema for a blog likes model, which includes fields for whether the post is liked or disliked, references to the user and blog post, and timestamps for when the like was created or updated.
// The schema is then exported as a Mongoose model named 'bloglikes', allowing it to be used in other parts of the application for database operations related to blog likes.   
