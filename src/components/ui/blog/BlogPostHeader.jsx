import React from 'react'
import Image from "next/image"

import { FaBookOpen, FaCalendar } from 'react-icons/fa'

const BlogPostHeader = ({title, views}) => {
    return (
        <>
            <div className='header w-full relative max-h-[400px] h-[300px]'>
                <div className="image-blog w-full h-full">
                    <Image src={"/images/website.jpg"} alt='blog-picture' width={600} height={400} className='relative max-w-full max-h-full object-cover object-center' />
                </div>
                <div className="rounded-md dark:bg-[#e7e3e3c2] bg-[#5f5c5cc5] title-area-head-blog absolute bottom-0 w-full h-auto p-5">
                    <h1 className='lg:text-4xl md:text-2xl text-xl dark:text-black text-white font-bold'>
                        {title}
                    </h1>
                </div>
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
