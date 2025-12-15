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

        console.log(category, startfrom);

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
                    createdAt: new Date().toLocaleDateString(),
                    isPublished: true, isHidden: false
                }).select("-content -isPublished -__v -updatedAt").lean();
            }
            if (startfrom == "popular") {
                Blogs = await BlogPostModel.find({
                    isPublished: true, isHidden: false
                }).sort({ tempViews: -1 })
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

        console.log("Blogs fetched with filters - Category:", category, "Start From:", startfrom);
        console.log("All Blogs are ", Blogs.length)
        if (!Blogs || Blogs.length === 0) {
            return sendNormalResponse(true, 200, "Blogs Retrieved Successfully", []);
        }

        // fetching the categories 
        const allCategories = await BlogPostModel.find({isHidden:false}, { category: 1 });
        const data = {
            categories: allCategories,
            blogs: Blogs
        }
        return sendNormalResponse(true, 200, "Blogs Retrieved Successfully", data);

    } catch (error) {
        console.error("Error fetching blogs:", error);
        return sendNormalResponse(false, 500, "Internal Server Error", error.message);
    }
}
