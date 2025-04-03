"use client"

import React from 'react'

const SignupFormComponent = () => {
    return (
        <form onSubmit={(e => e.preventDefault())}>
            <br />

            <div className="flex items-center justify-between w-full md:flex-row flex-col ">
                <div className="firstname md:w-[45%] w-full">
                    <input type="text" name="firstname" autoComplete='off' placeholder="First name" className="dark:text-white text-black font-bold dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md p-2 w-full outline-none border border-1 dark:border-gray-300 border-gray-800 focus:border-2 focus:border-dotted bg-inherit" />
                </div>
                <div className="firstname md:w-[45%] w-full my-3">
                    <input type="text" name="lastname" autoComplete='off' placeholder="Last name" className="dark:text-white text-black font-bold dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md p-2 w-full outline-none border border-1 dark:border-gray-300 border-gray-800 focus:border-2 focus:border-dotted bg-inherit" />
                </div>
            </div>
            <input type="email" name="email" autoComplete='off' placeholder="Email address" className="dark:text-white text-black font-bold dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md p-2 w-full outline-none border border-1 dark:border-gray-300 border-gray-800 focus:border-2 focus:border-dotted bg-inherit" />
            <input type="password" name="password" autoComplete='off' placeholder="Password" className="my-3 dark:text-white text-black font-bold dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md p-2 w-full outline-none border border-1 dark:border-gray-300 border-gray-800 focus:border-2 focus:border-dotted bg-inherit" />
            <input type="password" name="cPassword" autoComplete='off' placeholder="Confirm password" className=" dark:text-white text-black font-bold dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md p-2 w-full outline-none border border-1 dark:border-gray-300 border-gray-800 focus:border-2 focus:border-dotted bg-inherit" />
            {/* <br /> */}
            <button className="my-3 submit w-auto p-3 border-1 border border-gray-500 text-white hover:bg-pink-600 bg-pink-700 text-center my-2 flex items-center justify-center gap-2 rounded-md active:border-2 active:border-dotted"> Register  </button>
        </form>
    )
}

export default SignupFormComponent
