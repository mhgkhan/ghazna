"use client";

import React, { useEffect, useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa';
import 'aos/dist/aos.css';
import Aos from 'aos';
import FormsButton from './buttonsandlinks/FormsButton';


const ContactusForm = () => {



    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: ""
    })

    const changeInput = e => setFormData({ ...formData, [e.target.name]: e.target.value });


    const [loading, setLoading] = useState(false);
    const [isErr, setIsErr] = useState(false);
    const [resMessage, setResMessage] = useState("");







    useEffect(() => {
        Aos.init()
    })

    const submitMessage = async e => {
        e.preventDefault();

        // console.log(formData)

        setIsErr(false);
        setResMessage("");


        if (!formData.name || !formData.email || !formData.subject || !formData.phone || !formData.message) {
            setIsErr(true);
            setResMessage("All Fields are required with validations");
            return;
        }

        try {

            setLoading(true);

            const request = await fetch(`/api/users/contactus`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(formData)
            })

            const res = await request.json();

            setIsErr(!res.success);
            setResMessage(res.message)


        } catch (error) {
            setIsErr(true);
            setResMessage(error.message);
            return;
        }
        finally {
            setLoading(false);
        }



    }


    return (
        <div className="contactus-form md:w-[50%]" data-aos="fade-up" data-aos-duration="1000">
            <h3 className="my-2 text-2xl font-bold dark:text-pink-500 text-pink-700 ">Directly Through Form</h3>
            <p className="dark:text-gray-200 text-gray-600">Send your query directly from here. NOTE: you have only three message attempts</p>
            <form onSubmit={submitMessage} method='post' className="w-full p-2 mt-5">
                <div className="first-row flex items-center justify-center gap-3 my-2 md:flex-row flex-col ">
                    <input onChange={changeInput} disabled={loading} value={formData.name} type="text" name="name" placeholder="Full name" className="dark:text-white text-black font-bold dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md p-2 md:w-[50%] w-full outline-none border border-1 dark:border-gray-300 border-gray-800 focus:border-2 focus:border-dotted bg-inherit" />
                    <input onChange={changeInput} disabled={loading} value={formData.email} type="email" name="email" placeholder="Email" className="dark:text-white text-black font-bold dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md p-2 md:w-[50%] w-full outline-none border border-1 dark:border-gray-300 border-gray-800 focus:border-2 focus:border-dotted bg-inherit" />
                </div>
                <div className="first-row flex items-center justify-center gap-3 my-2 md:flex-row flex-col ">
                    <input onChange={changeInput} disabled={loading} value={formData.phone} type="text" name="phone" placeholder="Phone" className="dark:text-white text-black font-bold dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md p-2 md:w-[50%] w-full outline-none border border-1 dark:border-gray-300 border-gray-800 focus:border-2 focus:border-dotted bg-inherit" />
                    <input onChange={changeInput} disabled={loading} value={formData.subject} type="text" name="subject" placeholder="Subject" className="dark:text-white text-black font-bold dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md p-2 md:w-[50%] w-full outline-none border border-1 dark:border-gray-300 border-gray-800 focus:border-2 focus:border-dotted bg-inherit" />
                </div>
                <textarea onChange={changeInput} disabled={loading} value={formData.message} name="message" placeholder="Type message" rows={5} className="font-bold w-full dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md p-2 outline-none border border-1 dark:border-gray-300 border-gray-800 focus:border-2 focus:border-dotted bg-inherit"></textarea>
                <FormsButton type={"submit"} loading={loading} text={"Send"} icon={<FaPaperPlane />} />
            </form>
            {
                resMessage.length > 0 ? <div className={`text-xl italic text-white p-5 rounded-md ${isErr ? "bg-red-600" : "bg-green-600"}`}>{resMessage}</div> : ""
            }
        </div>
    )
}

export default ContactusForm
