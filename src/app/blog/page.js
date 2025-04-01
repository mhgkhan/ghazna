import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaComment, FaComments, FaEye, FaHeart, FaMehRollingEyes } from 'react-icons/fa'

const page = () => {
  return (
    <article className="min-h-screen">
      <section role="heading" className="w-full">
        <div className="container mx-auto">
          <h1 className="md:p-auto px-5 py-4 text-4xl font-bold">Blog</h1>
          <p className="md:p-auto px-5 my-2 text-gray-700 dark:text-gray-200">Explore the latest articles, tutorials and news on current world.</p>
        </div>
      </section>

      <section className="blogs-container container mx-auto my-5 px-3 flex items-center justify-center md:gap-5 gap-2 flex-wrap">

        {
          Array.from([1, 2, 3, 4, 5]).map((ele, ind) => {
            return <div key={ind} className="blog-card md:w-[300px] w-[98%]  md:my-2 my-1 rounded-md shadow-md dark:shadow-gray-900 shadow-gray-300 p-1 md:h-[300px] h-auto border border-1 border-gray-400 ">
              <Link href="/blog/ghaznakhan">
                <div className="Image-area w-full h-[180px] border border-1 border-gray-300 dark:border-gray-500 rounded-md">
                  <Image src="/images/services/fullstack.png" width={"350"} height={200} alt='Blog-Slug-picture' className='w-full h-full object-cover object-center rounded-md' ></Image>
                </div>
                <div className="content-area px-2 py-2">
                  <h3 className='text-xl font-bold'> How to create a software without coding/AI How?</h3>
                </div>
                <div className='blog-card-footer px-3 w-full flex items-center justify-between py-1 pt-2 gap-7 border-1 border-t border-gray-500'>
                  <div className="flex dark:text-gray-300 text-gray-600 items-center justify-center gap-1">
                    <span className="text-2xl"><FaHeart /></span> <span className='text-sm'>300+</span>
                  </div>
                  <div className="flex dark:text-gray-300 text-gray-600 items-center justify-center gap-1">
                    <span className="text-2xl"><FaComments /></span> <span className='text-sm'>200+</span>
                  </div>
                  <div className="flex dark:text-gray-300 text-gray-600 items-center justify-center gap-1">
                    <span className="text-2xl"><FaEye /></span> <span className='text-sm'>300+ </span>
                  </div>
                </div>
              </Link> 
            </div>
          })
        } 


      </section>
    </article>
  )
}

export default page
