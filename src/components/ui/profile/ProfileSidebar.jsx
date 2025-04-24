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
        <header className={`${sidebarOpened ? "w-[300px]" : "w-[100px]"} overflow-hidden transition-all duration-300 h-full dark:bg-gray-900 bg-gray-200 md:p-2 p-1 rounded-md`}>

        </header>
    )
}

export default ProfileSidebar
