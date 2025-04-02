import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaBookOpen, FaCalendar, FaHeart, FaUserCircle } from 'react-icons/fa';

const page = async ({ params }) => {
    // const parm = await params;
    // const { slug } = parm;

    return (
        <article className='min-h-screen'>
            <section role='banner' className="my-5">
                <div className='container mx-auto sm:px-2 flex lg:flex-row flex-col items-start justify-center gap-10  '>
                    <div className='content lg:w-[70%] w-full sm:px-2'>
                        <div className='header w-full relative max-h-[400px] h-[300px]'>
                            <div className="image-blog w-full h-full">
                                <Image src={"/images/services/fullstack.png"} alt='blog-picture' width={600} height={400} className='relative max-w-full max-h-full object-cover object-center' />
                                <div className="rounded-md dark:bg-[#e7e3e3c2] bg-[#5f5c5cc5] title-area-head-blog absolute bottom-0 w-full h-auto p-5">
                                    <h1 className='lg:text-4xl md:text-2xl text-xl dark:text-black text-white font-bold'>
                                        WELCOME TO THE GHAZNA BLOGPOST PAGE,
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex items-center justify-between gap-3 p-2'>
                            <div className='flex items-start justify-between flex-wrap gap-2'>
                                <Image src={"/web-app-manifest-192x192.png"} width={20} height={20} alt='user picture' className='w-[30px] h-[30px] rounded-full' />
                                <span className='dark:text-gray-400 text-gray-600 lg:text-sm text-xs text-wrap'><b>Posted By</b> <br /> Muhammad Hasnain </span>
                            </div>
                            <div className='flex items-start justify-between flex-wrap gap-2'>
                                <FaBookOpen />
                                <span className='dark:text-gray-400 text-gray-600 lg:text-sm text-xs '>1300+ <br /> <b>Views </b>  </span>
                            </div>
                            <div className='flex items-start justify-between flex-wrap gap-2'>
                                {/* <Image src={"/web-app-manifest-192x192.png"} width={20} height={20} alt='user picture' className='w-[50px] h-[50px] rounded-full' /> */}
                                <FaCalendar />
                                <span className='dark:text-gray-400 text-gray-600 lg:text-sm text-xs '><b>Created On </b> <br /> 10/11/2025 </span>
                            </div>
                        </div>

                        <article id="blogpost-content" className='blogpost-content px-1 py-5' dangerouslySetInnerHTML={{
                            __html: `
                            <h1 > HI, & NOTE: THIS WEBSITE IS UNDER DEVELOPMENT, SO PLEASE WAIT FOR TO COMPLETION  </h1>
                            <br />
                            <br />
                            <a href="mailto:muhammadhasnainghazna@gmail.com"> Contact us </a> for contributions.                            
                          ` }}>

                        </article>

                        <div className="my-5 px-2 bl">
                            <div className="actions-buttons flex items-center justify-center gap-5 w-full">
                                <button className="p-2 font-bold text-center border-none bg-blue-600 md:w-[45%] w-full flex items-center justify-center gap-2 dark:text-white text-black">Like</button>
                                {/* <button className="p-2 font-bold text-center border-none bg-blue-600 w-[45%]">Dislike</button> */}
                            </div>
                            <div className="my-5">
                                <form className='my-5'>
                                    <h2 className='md:text-2xl text-xl my-5'>Leave your query </h2>
                                    <label htmlFor="message" className='italic'>Type your comment.</label>
                                    <textarea rows={7} name='comment' id='message' required minLength={5} maxLength={500} autoComplete="off" className='w-full p-2  border-none rounded-md my-2 dark:bg-gray-700 bg-gray-300 focus:border-dotted focus:border-2  dark:focus:bg-gray-600 focus:gray-300 bg-none border border-1 border-gray-500 outline-none' placeholder='Type...'></textarea>
                                    <button type="submit" className='w-auto p-3 rounded-md border-none bg-blue-600 font-bold text-center hover:bg-blue-500 dark:text-white text-black'>Submit</button>
                                </form>
                                <div className="mt-10 comments">
                                    <h3 className="md:text-2xl my-5 text-xl">Comments </h3>
                                    {
                                        Array.from([1, 2, 3, 4, 5]).map((ele, ind) => {
                                            return <div key={ind} className="my-5 comment w-full px-2 rounded-sm border-b border-1 border-dotted border-gray-500 py-2">
                                                <div className="comment-header flex items-center justify-between gap-5 my-">
                                                    <div className="flex items-end justify-center gap-2">
                                                        <FaUserCircle className='text-2xl' />
                                                        <span className="text-sm dark:text-gray-200 text-gray-600">MHGKHAN</span>
                                                    </div>
                                                    <div className='flex items-end justify-center gap-2'>
                                                        <FaCalendar className='text-2xl' />
                                                        <span className="text-sm dark:text-gray-200 text-gray-600">12/12/2024</span>
                                                    </div>
                                                </div>
                                                <p className='mt-2 px-2'>this is the comment on this BLOGPOSTthis is the comment on this BLOGPOSTthis is the comment on this BLOGPOST</p>
                                            </div>

                                        })
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                    <aside className='lg:w-[28%] w-full lg:border lg:border-1 lg:border-gray-300 rounded-md py-5 '>
                        <h2 className='lg:mx-auto lg:text-center mx-2 text-left font-bold text-2xl'> Related Articles </h2>

                        <div className='relatedArticlesContainer flex items-center justify-center gap-2 lg:flex-col flex-row flex-wrap my-5 lg:px-2 px-1'>
                            {
                                Array.from([1, 2, 3, 4, 5, 6, 7, 8]).map((ele, ind) => {
                                    return <div key={ind} className='related-block lg:w-full w-auto flex items-center justify-start gap-3 border border-1 border-gray-500 rounded-md px-2'>
                                        <Image src={"/images/services/fullstack.png"} width={100} height={150} className='rounded-md min-h-full md:max-h-[150px] md:w-[100px] w-[150px]' alt='related-slug-picture' />
                                        <h6 className='lg:text-lg text-sm font-bold'>
                                            <Link href={"/"}>How to create a unique design</Link>
                                        </h6>
                                    </div>
                                })
                            }
                        </div>
                    </aside>
                </div>
            </section>
        </article>
    )
}

export default page
