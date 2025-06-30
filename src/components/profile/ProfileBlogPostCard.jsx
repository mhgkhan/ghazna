import Image from 'next/image'
import React from 'react'
import FormsButton from '../ui/buttonsandlinks/FormsButton'
import { FaBook, FaBookOpen, FaEdit, FaEyeSlash, FaList, FaPlus, FaSortAmountDown, FaSortAmountUp, FaTrash } from 'react-icons/fa'


const ProfileBlogPostCard = () => {
    return (

        <div className="blog-card md:w-[400px] h-auto w-[350px] shadow-md shadow-gray-400 rounded-lg p-1">
            <Image src={"/images/projects/kstp.png"} width={300} alt='profile pic' height={370} className='rounded-lg w-full h-[200px] object-fill' />
            <div className="w-full px-2">
                <h3 className='text-2xl font-bold mt-5'>Title of the blog </h3>
                <p className=' dark:text-gray-200 text-gray-700 my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
            <div className="action-buttons flex px-3 items-center justify-between gap-3 mb-0 border-t border-gray-300">
                <FormsButton icon={<FaBookOpen />} />
                <FormsButton icon={<FaEdit />} />
                <FormsButton icon={<FaTrash />} />
                <FormsButton icon={<FaEyeSlash />} />
            </div>
        </div>
    )
}

export default ProfileBlogPostCard
