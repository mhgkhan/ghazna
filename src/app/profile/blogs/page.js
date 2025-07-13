import BlogPostsContainer from '@/components/profile/BlogPostsContainer'
import React from 'react'

const page = async () => {
  return (
    <article>
      <div className="container mx-auto ">
        <h2 className='md:text-3xl text-2xl md:px-auto font-bold my-5 text-pink-600 underline px-2 text-left'>Your Blogs   </h2>
        <p className='text-xl italic md:px-auto px-2'>here you can edit, delete your blogs seriously.</p>
      
      <BlogPostsContainer  />
      
      </div>
    </article>
  )
}

export default page
