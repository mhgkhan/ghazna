// import Header from "@/components/Header";

import Image from "next/image";
import { FaBell, FaBlog, FaBookmark, FaHome, FaPlusCircle, FaSignOutAlt, FaUserCog } from "react-icons/fa";


export default async function ProfileRootLayout({ children }) {
    return <>
        <div className="flex items-center justify-between w-full my-5 h-full gap-5">
            <aside className="md:w-[300px] h-full dark:bg-gray-900 bg-gray-200 p-2 rounded-md">
                <section className="aside-header my-10">
                    <Image src="/images/user.png" alt="user picture" width={100} height={100} className="rounded-full mx-auto" />
                    <h2 className="fullname text-xl text-center mx-auto my-1 font-bold">Muhammad Hasnain </h2>
                    <h3 className="text-center dark:text-gray-300 text-gray-500 underline username italic">@mhgkhan</h3>
                    <hr />
                </section>
                <nav className="aside-nav my-3 px-4">
                    <ul className="space-y-4">
                        <li className="flex items-center space-x-2 hover:text-yellow-400 transition">
                            <FaHome /> <span>Dashboard</span>
                        </li>
                        <li className="flex items-center space-x-2 hover:text-yellow-400 transition">
                            <FaBlog /> <span>My Blogs</span>
                        </li>
                        <li className="flex items-center space-x-2 hover:text-yellow-400 transition">
                            <FaPlusCircle /> <span>New Blog</span>
                        </li>
                        <li className="flex items-center space-x-2 hover:text-yellow-400 transition">
                            <FaUserCog /> <span>Account Settings</span>
                        </li>
                        <li className="flex items-center space-x-2 hover:text-yellow-400 transition">
                            <FaBell/> <span>Notifications</span>
                        </li>
                        <li className="flex items-center space-x-2 hover:text-yellow-400 transition">
                            <FaBookmark /> <span>Saved Posts</span>
                        </li>
                        <li className="flex items-center space-x-2 hover:text-yellow-400 transition">
                            <FaSignOutAlt /> <span>Logout</span>
                        </li>
                    </ul>
                </nav>
            </aside>
            <article className="w-full bg-blue-900 p-2">
                {children}
            </article>
        </div>
    </>
}

