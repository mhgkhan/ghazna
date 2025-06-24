import ProfileHero from '@/components/profile/ProfileHero'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaBlog, FaBloggerB, FaCog, FaEdit, FaEye, FaHistory, FaSignOutAlt, FaUserEdit } from 'react-icons/fa'

const page = () => {


  return (
    <section className='dashboard-hero w-full px-2'>
      {/* <h1 className='text-4xl text-black'>Hello MHGKHn</h1> */}
      <div className='profile-hero rounded-md my-5'>
        <div className='container mx-auto'>
          <ProfileHero />
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />


      <div className='w-full mt-10'>
        <div className='container mx-auto my-5'>
          {/* <HeadingSection start={"Quick"} end={"Links"} key={"key"} /> */}
          <h2 className='md:text-3xl text-2xl font-bold my-8 text-pink-600 underline px-2 text-center mx-auto'>Profile Status  </h2>
          <div className="flex items-center justify-center flex-wrap gap-5 my-5">

            {
              Array.from([
                { title: "Followers", count: 300 },
                { title: "Profile Views", count: 55 },
                { title: "Blogs", count: 30 },
                { title: "Blog Views", count: 80 },
              ]).map((ele, ind) => {
                return <div key={ind} className='status-block p-2 border border-1 border-pink-600 rounded-md w-[200px] cursor-pointer hover:shadow-md hover:shadow-gray-400 transition-all duration-500'>
                  <h4 className='md:text-lg text-sm text-center  dark:text-pink-400 text-pink-600 font-bold my-2 px-1'>{ele.title}</h4>
                  <hr />
                  <h2 className='text-5xl text-center text-green-800 dark:text-green-300 font-bold  py-2'>{ele.count}</h2>
                </div>


              })
            }


          </div>
        </div>
      </div>



      <div className='w-full mt-10'>
        <div className='container mx-auto my-5'>
          <h2 className='md:text-3xl text-2xl font-bold my-8 text-pink-400 underline px-2 text-center mx-auto'>Quick Links</h2>

          <div className="flex items-center justify-center flex-wrap gap-5 my-5">
            {[
              // { title: 'My Blogs', icon: <FaBlog size={30} className="text-blue-400" />, href: '/my-blogs' },
              { title: 'Create Blog', icon: <FaBloggerB size={30} className="text-yellow-300" />, href: '/profile/blogs/create' },
              { title: 'Settings', icon: <FaCog size={30} className="text-yellow-300" />, href: '/profile/settings' },
              // { title: 'Edit Profile', icon: <FaUserEdit size={30} className="text-green-400" />, href: '/edit-profile' },
              // { title: 'Edit Profile', icon: <FaUserEdit size={30} className="text-green-400" />, href: '/edit-profile' },
              { title: 'History', icon: <FaHistory size={30} className="text-green-400" />, href: '/profile/history' },
              // { title: 'Logout', icon: <FaSignOutAlt size={30} className="text-red-400" />, href: '/logout' },
            ].map((link, ind) => (
              <a
                key={ind}
                href={link.href}
                className='p-4 border border-gray-600 rounded-xl w-[200px] text-center cursor-pointer 
                     hover:bg-gray-800 transition-all duration-300 bg-gray-900'
              >
                <div className="flex justify-center mb-2">{link.icon}</div>
                <h4 className='md:text-lg text-sm text-gray-100 font-semibold'>{link.title}</h4>
              </a>
            ))}
          </div>
        </div>
      </div>


    </section>
  )
}

export default page
