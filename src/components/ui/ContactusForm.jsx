"use client";

import React, { useEffect } from 'react'
import { FaPaperPlane } from 'react-icons/fa';
import 'aos/dist/aos.css';
import Aos from 'aos';


const ContactusForm = () => {
    useEffect(()=>{
        Aos.init()
    })
    const submitMessage = e => {
        e.preventDefault();
        const form = e.target;
        form.reset();
        alert("Message send sucessfully")
    }
    return (
        <div className="contactus-form md:w-[50%]" data-aos="fade-up" data-aos-duration="1000">
            <h3 className="my-2 text-2xl font-bold dark:text-pink-500 text-pink-700 ">Directly Through Form</h3>
            <p className="dark:text-gray-200 text-gray-600">Send your query directly from here. NOTE: you have only three message attempts</p>
            <form onSubmit={submitMessage} method='post' className="w-full p-2 mt-5">
                <div className="first-row flex items-center justify-center gap-3 my-2 md:flex-row flex-col ">
                    <input type="text" name="name" placeholder="Full name" className="dark:text-white text-black font-bold dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md p-2 md:w-[50%] w-full outline-none border border-1 dark:border-gray-300 border-gray-800 focus:border-2 focus:border-dotted bg-inherit" />
                    <input type="email" name="email" placeholder="Email" className="dark:text-white text-black font-bold dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md p-2 md:w-[50%] w-full outline-none border border-1 dark:border-gray-300 border-gray-800 focus:border-2 focus:border-dotted bg-inherit" />
                </div>
                <div className="first-row flex items-center justify-center gap-3 my-2 md:flex-row flex-col ">
                    <input type="text" name="phone" placeholder="Phone" className="dark:text-white text-black font-bold dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md p-2 md:w-[50%] w-full outline-none border border-1 dark:border-gray-300 border-gray-800 focus:border-2 focus:border-dotted bg-inherit" />
                    <input type="text" name="Subject" placeholder="Subject" className="dark:text-white text-black font-bold dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md p-2 md:w-[50%] w-full outline-none border border-1 dark:border-gray-300 border-gray-800 focus:border-2 focus:border-dotted bg-inherit" />
                </div>
                <textarea name="message" placeholder="Type message" rows={5} className="font-bold w-full dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md p-2 outline-none border border-1 dark:border-gray-300 border-gray-800 focus:border-2 focus:border-dotted bg-inherit"></textarea>
                <button className="submit w-auto p-3 border-1 border border-gray-500 text-white hover:bg-pink-600 bg-pink-700 text-center my-2 flex items-center justify-center gap-2 rounded-md active:border-2 active:border-dotted"><span><FaPaperPlane /></span> Send</button>
            </form>
        </div>
    )
}

export default ContactusForm
