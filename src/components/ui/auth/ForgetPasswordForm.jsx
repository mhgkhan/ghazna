"use client"

import Loading from '@/components/Loading';
import React, { useState } from 'react'
import RespMessage from '../dailogs/RespMessage';
import FormsButton from '../buttonsandlinks/FormsButton';
import { FaPaperPlane } from 'react-icons/fa';

const ForgetPasswordForm = () => {


    const [email, setEmail] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)
    const [message, setMessage] = useState("")


    const hideMessage = () => {
        setMessage("");
        setError(false)
    }

    const submitForm = async e => {
        e.preventDefault();

        setError(false)
        setMessage("")


        if (!email || email.length < 5) {
            setError(true)
            setMessage("Email is not valid")
            return;
        }

        else {

            setLoading(true);

            try {

                const request = await fetch("/api/auth/forget_password", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        email
                    })
                })

                const res = await request.json();

                setError(res.success);
                setMessage(res.message)


            } catch (error) {
                setError(true)
                setMessage(error.message)
                return;
            }



        }


    }







    return (<form method="post" onSubmit={submitForm}>

        <input onChange={(e) => setEmail(e.target.value)} value={email} disabled={loading} type="email" name="email" autoComplete='off' placeholder="Email address" className="dark:text-white text-black font-bold dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md p-2 w-full outline-none border border-1 dark:border-gray-300 border-gray-800 focus:border-2 focus:border-dotted bg-inherit disabled:bg-gray-300 disabled:text-gray-400" />
        <FormsButton loading={loading} type={submitForm} text={"Submit"} icon={<FaPaperPlane />} />
        {loading ? <Loading /> : message.length > 0 ? <RespMessage hide={hideMessage} isErr={error} message={message} /> : ""}

    </form>

    )
}

export default ForgetPasswordForm
