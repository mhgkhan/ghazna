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

        if (!request.success) {
            obj.success = false;
            obj.isErr = true;
        }
        else {
            obj.success = true;
            obj.isErr = false;
            obj.data = request.data
        }
        obj.error = request.message
        obj.message = request.message

    } catch (error) {
        obj.success = false;
        obj.isErr = true;
        obj.error = error;
        obj.message = error.message;
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

    if (fetchBlog.success) {
        return (
            <div>
                <h1>Edit Blog {fetchBlog.data.title} </h1>
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
