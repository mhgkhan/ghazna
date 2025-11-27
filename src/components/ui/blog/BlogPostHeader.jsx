import React from 'react'
import Image from "next/image"

import BlogPostHeaderData from './BlogPostHeaderData'

const BlogPostHeader = ({ title, views, image, description, publishedAt, postedBy, userImg, ip, slug }) => {
    return (
        <>
            <div className='header relative max-h-[400px] h-[300px] w-full'>
                <div className="image-blog w-full h-full">
                    <Image src={image && image ? image : "/images/website.jpg"} alt='blog-picture' width={600} height={400} className='w-full h-full relative max-w-full max-h-full object-cover rounded-md' />
                </div>
                <div className="rounded-md dark:bg-[#e7e3e3c2] bg-[#5f5c5cc5] title-area-head-blog absolute bottom-0 w-full h-auto p-5">
                    <h1 className='lg:text-4xl md:text-2xl text-xl dark:text-black text-white font-bold'>
                        {title}
                    </h1>
                </div>
            </div>
            <div className='blog-post-description px-2 pl-4 py-2 border-l-4 border-gray-500 rounded-md my-2 dark:text-gray-300 text-gray-600'>
                <p className='italic md:text-lg text-sm dark:text-gray-400 text-gray-600'>
                    {description}</p>
            </div>
            <BlogPostHeaderData slug={slug} userImg={userImg} publishedAt={publishedAt} views={views} postedBy={postedBy} ip={ip} />
        </>
    )
}

export default BlogPostHeader;