import Link from 'next/link';
import React from 'react'
import { FaHome } from 'react-icons/fa';

const notFound = () => {
  return (
    <article className='w-full min-h-screen page'>
      <section className="main w-full">
        <div className='container mx-auto'>
          <div className="content py-10  flex items-center justify-center flex-col">
            <h1 className='md:text-5xl text-3xl font-bold text-center mx-auto '>PAGE NOT FOUND</h1>
            <p className='my-3 dark:text-gray-300 text-gray-700 text-center'>
              Were sorry, but the page youre looking for doesnt exist. It might have been removed, renamed, or its possible you entered the URL incorrectly. Please check the address or use the navigation links below to find your way.
            </p>
            <div className="links my-5">
              <h2 className='text-2xl font-bold text-center mx-auto'>Quick Links</h2>
              <div className="links flex items-center justify-center gap-5 flex-wrap my-2">
                <Link href="/" className="text-blue-500 font-bold flex items-center justify-center flex-col gap-2 p-2"><span className="text-xl dark:text-white text-black"><FaHome /> </span>HOME</Link>
                {/* <Link href="/about" className="text-blue-500 font-bold flex items-center justify-center flex-col gap-2 p-2"><span className="text-xl dark:text-white text-black"><FaHome /> </span>ABOUT</Link> */}
              </div>
            </div>
          </div>
        </div>

      </section>
    </article>
  )
}

export default notFound;
