"use client";

import React, { useState } from 'react'
import { FaBookOpen, FaRepublican } from 'react-icons/fa';
import FormsButton from '@/components/ui/buttonsandlinks/FormsButton';
import Link from 'next/link';


const UpdateBlogPostForm = ({ image, title, desc, content }) => {


    const [blogData, setBlogData] = useState({
        title: title || "",
        description: desc || "",
        content: content || "",
        image: image || ""
    })


    const handleChange = e => {
        const { name, value } = e.target;
        setBlogData({ ...blogData, [name]: value });
    }




    return (
        <div className='md:px-0 px-2'>


            {/* blog image  */}
            <div className="blog-image-inp w-full">
                <label htmlFor="blog-image-url" >Blog Image Url</label>
                <input onChange={handleChange} value={blogData.image} id='blog-image-url' type="text" name="url" autoComplete='off' placeholder="Enter Blog Image URL" className="my-3 italic dark:text-white text-black dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md py-3 px-2 w-full outline-none border border-2   border-gray-400 focus:border-dotted dark:focus:border-white focus:border-gray-800  bg-inherit disabled:bg-gray-300 disabled:text-gray-400" />
            </div>




            {/* blog title  */}
            <div className="blog-image-inp w-full">
                <label htmlFor="blog-title" >Blog Title </label>
                <input onChange={handleChange} value={blogData.title} id='blog-title' type="text" name="title" autoComplete='off' placeholder="Enter Blog Image URL" className="my-3 italic dark:text-white text-black dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md py-3 px-2 w-full outline-none border border-2   border-gray-400 focus:border-dotted dark:focus:border-white focus:border-gray-800  bg-inherit disabled:bg-gray-300 disabled:text-gray-400" />
            </div>


            {/* blog description  */}
            <div className="blog-image-inp w-full">
                <label htmlFor="blog-desc" >Blog Description </label>
                <textarea onChange={handleChange} value={blogData.description} rows={5} id='blog-desc' type="text" name="title" autoComplete='off' placeholder="Enter Blog Image URL" className="my-3 italic dark:text-white text-black dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md py-3 px-2 w-full outline-none border border-2   border-gray-400 focus:border-dotted dark:focus:border-white focus:border-gray-800  bg-inherit disabled:bg-gray-300 disabled:text-gray-400" />
            </div>

            {/* blog content  */}
            <div className="blog-image-inp w-full">
                <label htmlFor="blog-content" >Blogpost Content  </label>
                <textarea onChange={handleChange} value={blogData.content} rows={10} id='blog-content' type="text" name="title" autoComplete='off' placeholder="Enter Blog Image URL" className="my-3 italic dark:text-white text-black dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md py-3 px-2 w-full outline-none border border-2   border-gray-400 focus:border-dotted dark:focus:border-white focus:border-gray-800  bg-inherit disabled:bg-gray-300 disabled:text-gray-400" />
            </div>


            <FormsButton type={"button"} loading={false} text={"Preview Blogpost "} icon={<FaBookOpen />} />
            <br />

            <Link href="#preview" className="submit w-auto p-3  border-gray-500 text-white bg-pink-600 dark:bg-white text-white dark:text-black font-bold text-center my-2 flex items-center justify-center gap-2 rounded-md border border-2 border-transparent active:border-white active:dark:border-black active:border-dotted">
                Preview Blogpost
            </Link>


            <div className='mt-30'>
                <div id='preview' className="px-3 py-5" dangerouslySetInnerHTML={{ __html: blogData.content }} />
            </div>
        </div>
    )
}

export default UpdateBlogPostForm
