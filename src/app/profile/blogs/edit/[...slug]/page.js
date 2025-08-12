import UpdateBlogPostForm from '@/components/ui/blog/blogforms/UpdateBlogPostForm';
import FreezeEnv from '@/config/EnvConfig';
import { cookies } from 'next/headers';
import Link from 'next/link';
import React from 'react'




const fetchBlogPost = async (slug) => {
    const userCookies = await cookies();

    const obj = {}
    try {

        const request = await fetch(`${FreezeEnv.DOMAIN}/api/users/profile/getblogs/${slug}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                token: userCookies.get("USER_AUTH_TOKEN")?.value
            }
        })

        const response = await request.json();

        if (!response.success) {
            obj.success = false;
            obj.message = request.message;
        }
        else {
            obj.success = true;
            obj.data = response.data;
        }



    } catch (error) {
        obj.success = false;
        obj.message = error.message || "Something went wrong while fetching the blog post";
    }
    finally { return obj; }
}


const page = async ({ params }) => {

    const { slug } = await params;


    if (!slug || slug == "undefined") {
        return (
            <div>
                <h1 className="text-3xl text-center my-5 font-bold"> Invalid Blog Id </h1>
                <Link href="/profile/blogs" className="my-5 p-4 text-lg bg-blue-500 text-black">Go to Blogs</Link>
            </div>
        )
    }


    const fetchBlog = await fetchBlogPost(slug);
    console.log("the blog is ", fetchBlog);

    if (fetchBlog.success) {
        return (
            <div>
                <h1 className='text-2xl text-center font-bold my-5'> {fetchBlog.data.title} </h1>

                <div className="container mx-auto">
                   <UpdateBlogPostForm id={fetchBlog.data?._id} slug={fetchBlog.data?.slug} title={fetchBlog.data?.title} image={fetchBlog.data?.image} desc={fetchBlog.data?.description} content={fetchBlog.data?.content} />
                </div>
            </div>

        )
    }

    else {
        return (
            <div>
                <h1 className="text-3xl text-center my-5 font-bold"> {fetchBlog.message}  </h1>
                <Link href="/profile/blogs" className="my-5 p-4 text-lg bg-blue-500 text-black">Go to Blogs</Link>
            </div>
        )
    }
}

export default page
