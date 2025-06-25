import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaEdit, FaEye } from 'react-icons/fa'
import ProfileCoverImg from './ProfileCoverImg'
import FreezeEnv from '@/config/EnvConfig'

const ProfileHero = ({ username, name, profileImg, coverImg }) => {
    return (
        <div className='profile-img relative w-full md:h-[250px] h-[150px]  md:dark:bg-gray-800 md:bg-gray-300 sm:bg-none border  border-1 border-gray-300 rounded-md shadow-md dark:shadow-gray-400 shadow-gray-200 '>


            <ProfileCoverImg imgServerUrl={FreezeEnv.IMAGE_SERVER_URL} imgServerKey={FreezeEnv.IMAGE_SERVER_KEY} />

            <div className='profile-data w-full md:absolute static md:top-[150px]  flex md:items-start md:justify-start items-center justify-center gap-5 md:h-[150px] md:flex-row flex-col md:mt-auto mt-[-70px]'>
                <div className='profileImg md:z-auto z-10 md:w-[200px] md:h-[200px] w-[130px] h-[130px] rounded-full shadow-md shadow-gray-300 mx-5 border-8 border-pink-500'>
                    <Image src={"/images/hero.jpg"} alt='profile picture' width={200} height={200} className='rounded-full w-full h-full object-fit object-cover' />
                </div>
                <div className='profileInfo flex md:h-[200px] ha-auto md:items-end items-center flex-col md:justify-end justify-center md:mt-14 md:w-auto w-full'>
                    <h3 className='md:text-2xl text-xl font-bold md:w-full inline-block'>Muhammad Hasnain  </h3>
                    <h4 className='user-email italic md:text-xl text-sm dark:text-gray-400 text-gray-500'>muhammadhasnainghazna@gmail.com</h4>
                    <div className='buttons flex items-center md:justify-start  justify-center w-full gap-3 my-5 '>
                        <Link href={"/"} className='p-3 text-sm flex items-cente justify-center gap-2 bg-pink-600 text-white font-bold rounded-md'><span className='text-xl'><FaEdit /></span> Edit Profile </Link>
                        <Link href={"/"} className='p-3 text-sm flex items-cente justify-center gap-2 bg-pink-600 text-white font-bold rounded-md'><span className='text-xl'><FaEye /></span> View Profile </Link>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default ProfileHero
