import BlogPostsContainer from '@/components/profile/BlogPostsContainer'
import React from 'react'

const page = () => {
  return (
    <article>
      <div className="container mx-auto sm:px-1">
        <h2 className='md:text-3xl text-2xl font-bold my-5 text-pink-600 underline px-2 text-left'>Your Blogs   </h2>
        <p className='text-xl italic'>here you can edit, delete your blogs seriously.</p>
      
      <BlogPostsContainer  />
      
      </div>
    </article>
  )
}

export default page
