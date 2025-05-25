import BlogForm from '@/components/ui/blog/blogforms/BlogForm'
import React from 'react'


const page = () => {
  return (
    <article>
      <section className="blog-form w-full">
        <div className="container mx-auto relative">

          <h1 className="text-3xl font-bold my-5 text-center">Create a New Blog Post</h1>

          <BlogForm />



        </div>
      </section>
    </article >
  )
}

export default page
