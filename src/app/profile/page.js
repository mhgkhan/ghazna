import React from 'react'

const page = () => {
  return (
    <div className='p-2'>
      <h1 className='text-2xl'>Welcome Back! </h1>
      <p className='text-gray-500'>This is your profile page. You can manage your account settings here.</p>
      <p className='text-gray-500'>You can also view your saved posts and notifications.</p>
      <p className='text-gray-500'>If you have any questions, feel free to contact us.</p>
      <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='bg-white shadow-md rounded-lg p-4'>
          <h2 className='text-xl font-semibold mb-2 dark:text-black text-white'>Account Settings</h2>
          <ul className='text-gray-600'>
            <li className='mb-1'>Change Password</li>
            <li className='mb-1'>Update Email</li>
            <li className='mb-1'>Manage Subscriptions</li>
          </ul>
        </div>
        <div className='bg-white shadow-md rounded-lg p-4'>
          <h2 className='text-xl font-semibold mb-2 dark:text-black text-white'>Saved Posts</h2>
          <p className='text-gray-600'>You have 5 saved posts. <a href='#' className='text-blue-500'>View all</a></p>
        </div>
        <div className='bg-white shadow-md rounded-lg p-4'>
          <h2 className='text-xl font-semibold mb-2 dark:text-black text-white'>Notifications</h2>
          <p className='text-gray-600'>You have 3 new notifications. <a href='#' className='text-blue-500'>Check now</a></p>
        </div>
        <div className='bg-white shadow-md rounded-lg p-4'>
          <h2 className='text-xl font-semibold mb-2 dark:text-black text-white'>Support</h2>
          <p className='text-gray-600'>Need help? <a href='#' className='text-blue-500'>Contact us</a></p>
        </div>
      </div>

      <div className='mt-4'>
        <h2 className='text-xl font-semibold mb-2 dark:text-white text-black'>Recent Activity</h2>
        <ul className='dark:text-gray-200 text-gray-600'>
          <li className='mb-1'>You liked a post by John Doe</li>
          <li className='mb-1'>You commented on a post by Jane Smith</li>
          <li className='mb-1'>You followed a new user</li>
        </ul>
      </div>
      <div className='mt-4'>
        <h2 className='text-xl font-semibold mb-2 dark:text-white text-black'>Your Blogs</h2>
        <ul className='dark:text-gray-200 text-gray-600'>
          <li className='mb-1'>How to learn React in 2023</li>
          <li className='mb-1'>Top 10 JavaScript Frameworks</li>
          <li className='mb-1'>Understanding CSS Flexbox</li>
        </ul>
      </div>


    </div>
  )
}

export default page
