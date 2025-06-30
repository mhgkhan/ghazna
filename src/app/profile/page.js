import ProfileHero from '@/components/profile/ProfileHero'
import FreezeEnv from '@/config/EnvConfig'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaBlog, FaBloggerB, FaCog, FaCross, FaEdit, FaEye, FaHistory, FaSignOutAlt, FaUserEdit } from 'react-icons/fa'



const getUserData = async function (token) {
  let obj = {};

  try {
    console.log("calling the api");
    const request = await fetch(`${FreezeEnv.DOMAIN}api/users/getuser`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        token
      }
    });
    const response = await request.json();

    console.log("the response is ", response);

    if (!response.success) {
      obj.error = true;
      obj.message = response.message;
    }
    else { 
      obj.error = false;
      obj.message = response.message;
      obj.data = response.data;
    }

  } catch (error) {
    console.log(error)
    obj.error = true;
    obj.message = error.message;
  }
  finally {
    return obj;
  }
}

const page = async () => {

  const cookiesAll = await cookies();

  const tok = cookiesAll.get("USER_AUTH_TOKEN")?.value;
  if (!tok) {
    return (
      <div className='w-full h-screen flex items-center justify-center'>
        <h1 className='text-3xl text-red-500 font-bold'>You are not authorized to view this page</h1>
        <Link href={"/login"} className='text-blue-500 underline ml-2'>Login</Link>
      </div>
    )
  }



  const userData = await getUserData(tok);

  console.log("the user data is ", userData);


  return (
    <section className='dashboard-hero w-full px-2'>
      {/* <h1 className='text-4xl text-black'>Hello MHGKHn</h1> */}
      <div className='profile-hero rounded-md my-5'>
        <div className='container mx-auto'>
          <ProfileHero name={userData?.data.name} email={userData?.data?.email} username={userData?.data.username} coverImg={userData?.data.coverPicture} profileImg={userData?.data.profilePicture} />
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
                { title: "Profile Views", count: userData.data.tempProfileViews },
                { title: "Blogs", count: userData.data.tempUserBlogs },
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
              { title: 'Your Blogs', icon: <FaBloggerB size={30} className="text-yellow-300" />, href: '/profile/blogs/' },
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
