import FormsButton from '@/components/ui/buttonsandlinks/FormsButton';
import FreezeEnv from '@/config/EnvConfig';
import { cookies } from 'next/headers';
import Link from 'next/link';
import React from 'react'
import { FaBookOpen, FaRepublican } from 'react-icons/fa';



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
                    <div className='md:px-0 px-2'>


                        {/* blog image  */}
                        <div className="blog-image-inp w-full">
                            <label htmlFor="blog-image-url" >Blog Image Url</label>
                            <input value={fetchBlog.data.image} id='blog-image-url' type="text" name="url" autoComplete='off' placeholder="Enter Blog Image URL" className="my-3 italic dark:text-white text-black dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md py-3 px-2 w-full outline-none border border-2   border-gray-400 focus:border-dotted dark:focus:border-white focus:border-gray-800  bg-inherit disabled:bg-gray-300 disabled:text-gray-400" />
                        </div>




                        {/* blog title  */}
                        <div className="blog-image-inp w-full">
                            <label htmlFor="blog-title" >Blog Title </label>
                            <input value={fetchBlog.data.title} id='blog-title' type="text" name="title" autoComplete='off' placeholder="Enter Blog Image URL" className="my-3 italic dark:text-white text-black dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md py-3 px-2 w-full outline-none border border-2   border-gray-400 focus:border-dotted dark:focus:border-white focus:border-gray-800  bg-inherit disabled:bg-gray-300 disabled:text-gray-400" />
                        </div>


                        {/* blog description  */}
                        <div className="blog-image-inp w-full">
                            <label htmlFor="blog-desc" >Blog Description </label>
                            <textarea value={fetchBlog.data.description} rows={5} id='blog-desc' type="text" name="title" autoComplete='off' placeholder="Enter Blog Image URL" className="my-3 italic dark:text-white text-black dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md py-3 px-2 w-full outline-none border border-2   border-gray-400 focus:border-dotted dark:focus:border-white focus:border-gray-800  bg-inherit disabled:bg-gray-300 disabled:text-gray-400" />
                        </div>

                        {/* blog content  */}
                        <div className="blog-image-inp w-full">
                            <label htmlFor="blog-content" >Blogpost Content  </label>
                            <textarea value={fetchBlog.data.content} rows={10} id='blog-content' type="text" name="title" autoComplete='off' placeholder="Enter Blog Image URL" className="my-3 italic dark:text-white text-black dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md py-3 px-2 w-full outline-none border border-2   border-gray-400 focus:border-dotted dark:focus:border-white focus:border-gray-800  bg-inherit disabled:bg-gray-300 disabled:text-gray-400" />
                        </div>


                        <FormsButton type={"button"} loading={false} text={"Preview Blogpost "} icon={<FaBookOpen />} />
                        <br />
                        <FormsButton type={"button"} loading={false} text={"Update Blogpost "} icon={<FaRepublican />} />



                    </div>
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
