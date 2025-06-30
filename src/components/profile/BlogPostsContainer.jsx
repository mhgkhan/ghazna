"use client"

import React, { useState } from 'react'
import FormsButton from '../ui/buttonsandlinks/FormsButton'
import { useRouter } from 'next/navigation'
import { BsGrid3X3Gap } from "react-icons/bs";
import ProfileBlogPostCard from './ProfileBlogPostCard'
import { FaList, FaPlus, FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';

const BlogPostsContainer = () => {
    const router = useRouter();

    const [sorted, setSorted] = useState(false);
    const [isGrid, setIsGrid] = useState(true); // grid or list


    return (
        <div className="blogposts-section my-5 md:px-auto px-2">

            <div className="blogs-filter flex items-center justify-between gap-5 border border-1 border-gra-300 rounded-md p-3 mb-5">
                <FormsButton icon={<FaPlus />} text={"Create"} clickFun={() => router.push("/profile/blogs/create")} />
                <div className="filter-buttons flex items-center justify-center gap-3">
                    <FormsButton icon={sorted ? <FaSortAmountUp /> : <FaSortAmountDown />} clickFun={() => setSorted(!sorted)} classes={"text-xl"} />
                    <FormsButton icon={isGrid ? <FaList /> : <BsGrid3X3Gap />} clickFun={() => setIsGrid(!isGrid)} classes={"text-xl"} />
                </div>
            </div>

            <div className="blogs-container flex items-center justify-center gap-5 flex-wrap my-5">

              <ProfileBlogPostCard />
              <ProfileBlogPostCard />
              <ProfileBlogPostCard />
              <ProfileBlogPostCard />
              <ProfileBlogPostCard />
              <ProfileBlogPostCard />



            </div>
        </div>

    )
}

export default BlogPostsContainer
