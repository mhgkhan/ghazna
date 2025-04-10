import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <article className="min-h-screen">
            <section className="w-full">
                <div className="md:w-[50%] w-[95%] mx-auto my-5 rounded-md p-4" >
                    <h1 className="text-4xl font-bold">Forget Password ?</h1>
                    <p className="my-2 text-gray-700 dark:text-gray-200">Please Enter your valid (registered) email address</p>

                    <input type="email" name="email" autoComplete='off' placeholder="Email address" className="dark:text-white text-black font-bold dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md p-2 w-full outline-none border border-1 dark:border-gray-300 border-gray-800 focus:border-2 focus:border-dotted bg-inherit" />
                    <button className="my-3 submit w-auto p-3 border-1 border border-gray-500 text-white hover:bg-pink-600 bg-pink-700 text-center my-2 flex items-center justify-center gap-2 rounded-md active:border-2 active:border-dotted"> Submit  </button>


                    <div className='flex items-center justify-between gap-5 text-sm mt-5'>
                        <p className='dark:text-gray-200 text-gray-700'>Not have an account  <Link href="/signup" className='text-blue-500 hover:underline'>Login </Link></p>
                        {/* <Link href="/signup" className='text-blue-500 hover:underline'>Forget password</Link> */}
                    </div>

                </div>
            </section>
        </article>
    )
}

export default page
