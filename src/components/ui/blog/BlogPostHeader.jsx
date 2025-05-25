import React from 'react'
import Image from "next/image"

import { FaBookOpen, FaCalendar } from 'react-icons/fa'

const BlogPostHeader = ({title, views, image}) => {
    return (
        <>
            <div className='header relative max-h-[400px] h-[300px] w-full'>
                <div className="image-blog w-full h-full">
                    <Image src={image?image:"/images/website.jpg"} alt='blog-picture' width={600} height={400} className='w-full h-full relative max-w-full max-h-full object-scale-down rounded-md' />
                </div>
                <div className="rounded-md dark:bg-[#e7e3e3c2] bg-[#5f5c5cc5] title-area-head-blog absolute bottom-0 w-full h-auto p-5">
                    <h1 className='lg:text-4xl md:text-2xl text-xl dark:text-black text-white font-bold'>
                        {title}
                    </h1>
                </div>
            </div>
            <div className='blog-post-description px-2 pl-4 py-2 border-l-4 border-gray-500 rounded-md my-2 dark:text-gray-300 text-gray-600'>
                <p className='italic md:text-lg text-sm dark:text-gray-400 text-gray-600'>
                This blog dives into the fascinating intersection of technology and history, exploring how artificial intelligence is reshaping efforts to decode, preserve, and revive ancient languages and scripts. It highlights the potential of AI to connect modern society with the rich heritage of the past.</p>    
            </div>
            <div className='w-full flex items-center justify-between gap-3 p-2'>
                <div className='flex items-start justify-between flex-wrap gap-2'>
                    <Image src={"/web-app-manifest-192x192.png"} width={20} height={20} alt='user picture' className='w-[30px] h-[30px] rounded-full' />
                    <span className='dark:text-gray-400 text-gray-600 lg:text-sm text-xs text-wrap'><b>Posted By</b> <br /> Muhammad Hasnain </span>
                </div>
                <div className='flex items-start justify-between flex-wrap gap-2'>
                    <FaBookOpen />
                    <span className='dark:text-gray-400 text-gray-600 lg:text-sm text-xs '>{views}+ <br /> <b>Views </b>  </span>
                </div>
                <div className='flex items-start justify-between flex-wrap gap-2'>
                    {/* <Image src={"/web-app-manifest-192x192.png"} width={20} height={20} alt='user picture' className='w-[50px] h-[50px] rounded-full' /> */}
                    <FaCalendar />
                    <span className='dark:text-gray-400 text-gray-600 lg:text-sm text-xs '><b>Created On </b> <br /> 10/11/2025 </span>
                </div>
            </div>
        </>
    )
}

export default BlogPostHeader
