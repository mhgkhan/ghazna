import connectDB from "@/utils/db/connectDB";
import { sendNormalResponse } from "@/utils/functions/sendResponses";
import BlogPostModel from "@/utils/models/BlogPostModel";


connectDB();
export async function GET(request) {
    try {

        const { searchParams } = new URL(request.url);

        // console.log("Search Params:", searchParams);
        let category = searchParams.get('category') || null;
        const startfrom = searchParams.get('startfrom') || null;


        let Blogs;

        let date = new Date();

        if (startfrom == "today") {
            startFromFilter = new Date(date.now()).toLocaleDateString()

        }


        if (category) {
            category = category.toLowerCase();
            Blogs = await BlogPostModel.find({
                category: category,
                isPublished: true, isHidden: false
            }).select("-content -isPublished -__v -updatedAt").lean();
        }
        else if (startfrom) {



            if (startfrom === "today") {
                Blogs = await BlogPostModel.find({
                    publishedAt: new Date().toISOString(),
                    isPublished: true, isHidden: false
                }).select("-content -isPublished -__v -updatedAt").lean();
            }
            if (startfrom == "popular") {
                Blogs = await BlogPostModel.find({
                    isPublished: true, isHidden: false
                }).sort({ tempViews: -1 }).limit(5)
            }
            if (startfrom == "latest") {
                Blogs = await BlogPostModel.find({
                    isPublished: true, isHidden: false
                }).sort({ createdAt: -1 })
            }
            else {
                Blogs = await BlogPostModel.find({
                    isPublished: true, isHidden: false
                }).sort({ createdAt: -1 })
            }

        }

        else {

            Blogs = await BlogPostModel.find({ isPublished: true, isHidden: false }).sort({ createdAt: -1 }).select("-content -isPublished -__v -updatedAt").lean();
        }

        // fetching the categories 
        const allCategories = await BlogPostModel.find({ isHidden: false }, { category: 1 });
        const data = {
            categories: allCategories,
            blogs: Blogs
        }

        if (!Blogs || Blogs.length === 0) {
            return sendNormalResponse(true, 200, "Blogs Retrieved Successfully", {
                categories: allCategories,
                blogs: []
            });
        }


        return sendNormalResponse(true, 200, "Blogs Retrieved Successfully", data);

    } catch (error) {
        return sendNormalResponse(false, 500, "Internal Server Error", error.message);
    }
}
