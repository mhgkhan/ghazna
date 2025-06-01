"use client";

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaBookOpen, FaCalendar } from 'react-icons/fa';



const BlogPostHeaderData = ({ userImg, views, publishedAt, postedBy, slug, ip }) => {

    const [response, setResponse] = useState({ views: views, message: "" });
    const [loading, setLoading] = useState(false);




    const addView = async () => {
        try {
            setLoading(true);
            const request = await fetch(`/api/publicactions/blogopened/${slug}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userId: null, // or pass the userId if available
                    ipAddress: ip
                })
            });
            const res = await request.json();
            console.log("Response from adding view:", res);
            // Check if the response is successful

            if (res.success) {
                setResponse(res.data);
            } else {
                setResponse({ views: views, message: res.message });
            }
        } catch (err) {
            console.error("Error adding view:", err);
            setResponse({ views: views, message: "Failed to add view" });
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        if (slug && ip) {
            addView();
        }
    }, [])




    return (
        <div className='w-full flex items-center justify-between gap-3 p-2'>
            <div className='flex items-start justify-between flex-wrap gap-2'>
                <Image src={userImg ? userImg : "/images/user.png"} width={20} height={20} alt='user picture' className='w-[30px] h-[30px] rounded-full' />
                <span className='dark:text-gray-400 text-gray-600 lg:text-sm text-xs text-wrap'><b>Posted By</b> <br /> {postedBy} </span>
            </div>
            <div className='flex items-start justify-between flex-wrap gap-2'>
                <FaBookOpen />
                <span className='dark:text-gray-400 text-gray-600 lg:text-sm text-xs '>{loading ? "Wait." : response.views}+ <br /> <b>Views </b>  </span>
            </div>
            <div className='flex items-start justify-between flex-wrap gap-2'>
                {/* <Image src={"/web-app-manifest-192x192.png"} width={20} height={20} alt='user picture' className='w-[50px] h-[50px] rounded-full' /> */}
                <FaCalendar />
                <span className='dark:text-gray-400 text-gray-600 lg:text-sm text-xs '><b>Created On </b> <br /> {new Date(publishedAt).toLocaleDateString()} </span>
            </div>
        </div>
    )
}

export default BlogPostHeaderData
