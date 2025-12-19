"use client"

import Image from 'next/image'
import React, { useRef } from 'react'
import FormsButton from '../ui/buttonsandlinks/FormsButton'
import { FaTrash, FaBookOpen, FaEdit, FaEyeSlash, FaRegEyeSlash, FaEye } from 'react-icons/fa'
import { useRouter } from 'next/navigation'


const ProfileBlogPostCard = ({isGrid, img, title, description, slug, deleteBlog, hideUnhideBlog, id, index, isHidden,isPublished }) => {
    const router = useRouter();
    const ref = useRef();


    const delteBlogFunction = (id,index) => {
        // () => deleteBlog(id, index)
        // console.log(e.target.parentElement.parentElement)
        ref.current.classList.add("blur-sm");
        deleteBlog(id, index);
    }
    const toggleHideBlog = (id,index) =>{
        ref.current.classList.add("blur-sm");
        hideUnhideBlog(id, index, isHidden? "unhide" : "hide");
        ref.current.classList.remove("blur-sm");
    }

    return (

        <div ref={ref} className={`blog-card ${!isGrid?"md:w-[100%] w-[100%] flex items-center justify-start gap-10":"md:w-[400px] w-[350px]"} h-auto  shadow-md shadow-gray-400 rounded-lg p-1`}>
            <Image src={(img == "null" || img==null || img==undefined)?"/images/hero.jpg":img} width={300} alt='profile pic' height={370} className={`rounded-lg ${!isGrid?"md:w-[200px] w-[100px]":"w-full h-[200px]"} object-fill`} />
            <div className="w-full px-2">
                <h3 className='text-2xl font-bold mt-5'>{title.length > 20 ? title.substring(0, 20) : title}</h3>
                <p className='dark:text-gray-200 text-gray-700 my-2'>{description.length > 60 ? description.substring(0, 60) : description}</p>
            </div>
            <div className={`action-buttons flex px-3 items-center justify-between ${!isGrid?"flex-wrap":""} gap-3 mb-0 border-t border-gray-300`}>
                <FormsButton icon={<FaBookOpen />} clickFun={() => router.push(`/blog/${slug}`)} />
                <FormsButton icon={<FaEdit />} clickFun={()=> router.push(`/profile/blogs/edit/${slug}`)}  />
                <FormsButton icon={<FaTrash />} clickFun={() => delteBlogFunction(id, index)} />
                <FormsButton clickFun={()=> toggleHideBlog (id,index)} icon={isHidden?<FaEye />:<FaEyeSlash />} />
            </div>
        </div>
    )
}

export default ProfileBlogPostCard
