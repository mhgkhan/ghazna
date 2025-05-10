"use client"

import React, { useState } from 'react'

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
        <button disabled={loading} type='submit' className="my-3 disabled:bg-gray-600 disabled:text-gray-800 submit w-auto p-3 border-1 border border-gray-500 text-white hover:bg-pink-600 bg-pink-700 text-center my-2 flex items-center justify-center gap-2 rounded-md active:border-2 active:border-dotted"> Submit  </button>

        {message.length > 0 ? <div onClick={hideMessage} className={`my-5 py-5 px-3  rounded-md ${error ? "bg-red-600" : "bg-green-700"} text-white font-bold italic`}>{message}</div> : ""}

    </form>

    )
}

export default ForgetPasswordForm
