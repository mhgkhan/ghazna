"use client";
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { FaBell, FaBlog, FaBookmark, FaHome, FaPlusCircle, FaSignOutAlt, FaUserCog } from "react-icons/fa";
import { GoSidebarExpand, GoSidebarCollapse } from "react-icons/go";
import Link from 'next/link';


const ProfileSidebar = () => {
    const [sidebarOpened, setSidebarOpened] = useState(true);


    useEffect(() => {
        if (window.innerWidth <= 720) setSidebarOpened(false);
        else setSidebarOpened(true)
    }, [])

    return (
        <aside className={`${sidebarOpened ? "w-[300px]" : "w-[100px]"} overflow-hidden transition-all duration-300 h-full dark:bg-gray-900 bg-gray-200 md:p-2 p-1 rounded-md`}>
            <span onClick={() => setSidebarOpened(!sidebarOpened)} className="text-3xl cursor-pointer aboslute top-3 right-3 float-right dark:text-white text-gray-600">{sidebarOpened ? <GoSidebarExpand /> : <GoSidebarCollapse />}</span>
            <section className="aside-header my-10">
                <Image src="/images/user.png" alt="user picture" width={100} height={100} className="rounded-full mx-auto my-1" />
                <h2 className={`fullname text-xl text-center mx-auto my-1 font-bold ${sidebarOpened ? "w-auto" : "w-[0px] h-[0px]"} overflow-hidden`}>Muhammad Hasnain </h2>
                <h3 className={`text-center dark:text-gray-300 text-gray-500 underline username italic ${sidebarOpened ? "w-auto" : "w-[0px] h-[0px]"} overflow-hidden`}>@mhgkhan</h3>
                <hr />
            </section>
            <nav className="aside-nav my-3 md:px-4 px-2 ">
                <Link href="/profile" className={`flex items-center md:justify-start justify-center ${sidebarOpened?"justify-start":""} gap-2 my-2 hover:text-yellow-400 transition text-xl border-b border-gray-500 p-1`}>
                    <span className={`${!sidebarOpened ? "text-3xl" : ""}`}><FaHome /></span> <span className={`${sidebarOpened ? "w-auto" : "w-[0px] overflow-hidden"}`}>Dashboard </span>
                </Link>
                <Link href="/profile/myblogs" className={`flex items-center md:justify-start justify-center ${sidebarOpened?"justify-start":""} gap-2 my-2 hover:text-yellow-400 transition text-xl border-b border-gray-500 p-1`}>
                    <span className={`${!sidebarOpened ? "text-3xl" : ""}`}><FaBlog /></span> <span className={`${sidebarOpened ? "w-auto" : "w-[0px] overflow-hidden"}`}>My Blogs</span>
                </Link>
                <Link href="/profile/createblog" className={`flex items-center md:justify-start justify-center ${sidebarOpened?"justify-start":""} gap-2 my-2 hover:text-yellow-400 transition text-xl border-b border-gray-500 p-1`}>
                    <span className={`${!sidebarOpened ? "text-3xl" : ""}`}><FaPlusCircle /></span> <span className={`${sidebarOpened ? "w-auto" : "w-[0px] overflow-hidden"}`}>New Blog</span>
                </Link>
                <Link href="/profile/settings" className={`flex items-center md:justify-start justify-center ${sidebarOpened?"justify-start":""} gap-2 my-2 hover:text-yellow-400 transition text-xl border-b border-gray-500 p-1`}>
                    <span className={`${!sidebarOpened ? "text-3xl" : ""}`}><FaUserCog /></span> <span className={`${sidebarOpened ? "w-auto" : "w-[0px] overflow-hidden"}`}>Settings</span>
                </Link>
                <Link href="/profile/notifications" className={`flex items-center md:justify-start justify-center ${sidebarOpened?"justify-start":""} gap-2 my-2 hover:text-yellow-400 transition text-xl border-b border-gray-500 p-1`}>
                    <span className={`${!sidebarOpened ? "text-3xl" : ""}`}><FaBell /></span> <span className={`${sidebarOpened ? "w-auto" : "w-[0px] overflow-hidden"}`}>Notifications</span>
                </Link>
                <Link href="/profile/saved" className={`flex items-center md:justify-start justify-center ${sidebarOpened?"justify-start":""} gap-2 my-2 hover:text-yellow-400 transition text-xl border-b border-gray-500 p-1`}>
                    <span className={`${!sidebarOpened ? "text-3xl" : ""}`}><FaBookmark /></span> <span className={`${sidebarOpened ? "w-auto" : "w-[0px] overflow-hidden"}`}>Saved Posts</span>
                </Link>
                <Link href="/logout" className={`flex items-center md:justify-start justify-center ${sidebarOpened?"justify-start":""} gap-2 my-2 hover:text-yellow-400 transition text-xl border-b border-gray-500 p-1`}>
                    <span className={`${!sidebarOpened ? "text-3xl" : ""}`}><FaSignOutAlt /></span> <span className={`${sidebarOpened ? "w-auto" : "w-[0px] overflow-hidden"}`}>Logout</span>
                </Link>

                {/* <Link href="/profile/myblogs/" className={`flex items-center md:justify-start justify-center ${sidebarOpened?"justify-start":""} gap-2 my-2 hover:text-yellow-400 transition">
                    <FaBlog className={`${!sidebarOpened ? "p-2 dark`}bg-gray-300 bg-gray-300 text-black font-bold rounded-md text-4xl" : ""}`} /> <span className={`${sidebarOpened ? "block" : "hidden"}`}>My Blogs</span>
                </Link>
                <Link href="/profile/createblog/" className={`flex items-center md:justify-start justify-center ${sidebarOpened?"justify-start":""} gap-2 my-2 hover:text-yellow-400 transition">
                    <FaPlusCircle className={`${!sidebarOpened ? "p-2 dark`}bg-gray-300 bg-gray-300 text-black font-bold rounded-md text-4xl" : ""}`} /> <span className={`${sidebarOpened ? "block" : "hidden"}`}>New Blog</span>
                </Link>
                <Link href="/profile/settings/" className={`flex items-center md:justify-start justify-center ${sidebarOpened?"justify-start":""} gap-2 my-2 hover:text-yellow-400 transition">
                    <FaUserCog className={`${!sidebarOpened ? "p-2 dark`}bg-gray-300 bg-gray-300 text-black font-bold rounded-md text-4xl" : ""}`} /> <span className={`${sidebarOpened ? "block" : "hidden"}`}>Settings</span>
                </Link>
                <Link href="/profile/notifications/" className={`flex items-center md:justify-start justify-center ${sidebarOpened?"justify-start":""} gap-2 my-2 hover:text-yellow-400 transition">
                    <FaBell className={`${!sidebarOpened ? "p-2 dark`}bg-gray-300 bg-gray-300 text-black font-bold rounded-md text-4xl" : ""}`} /> <span className={`${sidebarOpened ? "block" : "hidden"}`}>Notifications</span>
                </Link>
                <Link href="/profile/saved/" className={`flex items-center md:justify-start justify-center ${sidebarOpened?"justify-start":""} gap-2 my-2 hover:text-yellow-400 transition">
                    <FaBookmark className={`${!sidebarOpened ? "p-2 dark`}bg-gray-300 bg-gray-300 text-black font-bold rounded-md text-4xl" : ""}`} /> <span className={`${sidebarOpened ? "block" : "hidden"}`}>Saved Posts</span>
                </Link>
                <Link href="/logout/" className={`flex items-center md:justify-start justify-center ${sidebarOpened?"justify-start":""} gap-2 my-2 hover:text-yellow-400 transition">
                    <FaSignOutAlt className={`${!sidebarOpened ? "p-2 dark`}bg-gray-300 bg-gray-300 text-black font-bold rounded-md text-4xl" : ""}`} /> <span className={`${sidebarOpened ? "block" : "hidden"}`}>Logout</span>
                </Link> */}
            </nav>
        </aside>
    )
}

export default ProfileSidebar
