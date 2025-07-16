"use client"

import Image from 'next/image'
import React, { useRef } from 'react'
import FormsButton from '../ui/buttonsandlinks/FormsButton'
import { FaTrash, FaBookOpen, FaEdit, FaEyeSlash } from 'react-icons/fa'
import { useRouter } from 'next/navigation'


const ProfileBlogPostCard = ({ img, title, description, slug, deleteBlog, id, index }) => {
    const router = useRouter();
    const ref = useRef();


    const delteBlogFunction = (id,index) => {
        // () => deleteBlog(id, index)
        // console.log(e.target.parentElement.parentElement)
        ref.current.classList.add("blur-sm");
        deleteBlog(id, index);
    }

    return (

        <div ref={ref} className="blog-card md:w-[400px] h-auto w-[350px] shadow-md shadow-gray-400 rounded-lg p-1">
            <Image src={(img == "null" || img==null || img==undefined)?"/images/hero.jpg":img} width={300} alt='profile pic' height={370} className='rounded-lg w-full h-[200px] object-fill' />
            <div className="w-full px-2">
                <h3 className='text-2xl font-bold mt-5'>{title.length > 20 ? title.substring(0, 20) : title}</h3>
                <p className='dark:text-gray-200 text-gray-700 my-2'>{description.length > 60 ? description.substring(0, 60) : description}</p>
            </div>
            <div className="action-buttons flex px-3 items-center justify-between gap-3 mb-0 border-t border-gray-300">
                <FormsButton icon={<FaBookOpen />} clickFun={() => router.push(`/blog/${slug}`)} />
                <FormsButton icon={<FaEdit />} />
                <FormsButton icon={<FaTrash />} clickFun={() => delteBlogFunction(id, index)} />
                <FormsButton icon={<FaEyeSlash />} />
            </div>
        </div>
    )
}

export default ProfileBlogPostCard
