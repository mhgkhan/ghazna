import React from 'react'

const page = () => {
  return (
    <article>
      <section className="blog-form w-full">
        <div className="container mx-auto relative">

          <div className="blog-form relative w-full h-full">
            <h1 className="text-3xl font-bold my-5 text-center">Create a New Blog Post</h1>


            <div className="blog-form-start my-5">


              {/* blog image  */}
              <div className="blog-image-inp w-full">
                {/* <label htmlFor="blog-image-url">Blog Image Url</label> */}
                <input type="url" name="url" autoComplete='off' placeholder="Enter Blog Image URL" className="my-3 italic dark:text-white text-black dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md py-3 px-2 w-full outline-none border border-2   border-gray-400 focus:border-dotted dark:focus:border-white focus:border-gray-800  bg-inherit disabled:bg-gray-300 disabled:text-gray-400" />
              </div>


              {/* // blog title  */}
              <div className="blog-title-inp w-full">
                {/* <label htmlFor="blog-image-url">Blog Title </label> */}
                <input type="text" name="title" autoComplete='off' placeholder="Blog Title" className="my-3 dark:text-white md:text-2xl text-xl text-black font-bold dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md py-3 px-2 w-full outline-none border border-2  border-gray-400 focus:border-dotted dark:focus:border-white focus:border-gray-800  bg-inherit disabled:bg-gray-300 disabled:text-gray-400" />
              </div>

              {/* blog description  */}
              <div className="blog-image-inp w-full">
                {/* <label htmlFor="blog-image-url">Blog Image Url</label> */}
                <textarea rows={5} name="description" autoComplete='off' placeholder="Type your blog description here" className="my-3   dark:text-white text-black dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md py-3 px-2 w-full outline-none border border-2  border-gray-400 focus:border-dotted dark:focus:border-white focus:border-gray-800  bg-inherit disabled:bg-gray-300 disabled:text-gray-400" />
              </div>


              {/* blog category and tags */}
              <div className="blog-category-tags flex md:flex-row flex-col items-center justify-center gap-5">

                <div className='md:w-[50%] w-full'>
                  <select name="category" className="my-3 font-bold dark:text-white text-black dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md py-3 px-2 w-full outline-none border border-2   border-gray-400 focus:border-dotted dark:focus:border-white focus:border-gray-800  bg-inherit disabled:bg-gray-300 disabled:text-gray-400">
                    <option defaultChecked value={"general"} disabled selected>Select your category</option>
                    {
                      Array.from(["Technology", "Health", "Lifestyle", "Travel", "Food", "Education", "Business", "Entertainment", "Sports", "Fashion", "Finance", "Science", "Art", "Music", "Photography"]).map((category, index) => {
                        return (
                          <option className='p-1' key={index} value={category.toLowerCase()}>{category}</option>
                        )
                      })
                    }
                  </select>
                </div>


                <div className='md:w-[50%] w-full'>
                  <input type="text" name="tags" autoComplete='off' placeholder="Enter your tags with space" className="my-3 font-bold dark:text-white text-black dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md py-3 px-2 w-full outline-none border border-2   border-gray-400 focus:border-dotted dark:focus:border-white focus:border-gray-800  bg-inherit disabled:bg-gray-300 disabled:text-gray-400" />
                </div>


              </div>
                    

            </div>


          </div>
          <div className="blog-preview">

          </div>

        </div>
      </section>
    </article>
  )
}

export default page
