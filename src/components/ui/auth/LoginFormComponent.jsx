"use client"


import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const LoginFormComponent = () => {


    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [isErr, setIsErr] = useState(false);
    const [resMessage, setResMessage] = useState("");



    const submitLoginForm = async function (e) {
        setIsErr(false);
        setResMessage("");
        e.preventDefault();

        if (!email || email.length < 5) {
            setIsErr(true);
            setResMessage("Email is not valid")
            return;
        }
        if (!password || password.length < 5) {
            setIsErr(true);
            setResMessage("Password must be atleast 5 characters long")
            return;
        }

        else {
            setLoading(true);
            try {
                // calling to api 
                const request = await fetch(`/api/auth/signin`, {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify({ email, password })
                })

                const response = await request.json();

                if (!response.success) {
                    setIsErr(true);
                    setResMessage(response.message)
                    return;
                }
                else {

                    setIsErr(false);
                    setResMessage(response.message);

                    router.push("/profile");
                }


            } catch (error) {
                setIsErr(true);
                setResMessage("Some Error Occured");
                setLoading(false)
                return;
            } finally {
                setLoading(false)
            }
        }
    }

    const hideMessage = () => {
        setResMessage("");
        setIsErr(false)
    }


    return (
        <form onSubmit={submitLoginForm}>
            <br />
            <input disabled={loading} onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" autoComplete='off' placeholder="Email address" className="dark:text-white text-black font-bold dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md p-2 w-full outline-none border border-2 dark:border-gray-300 border-gray-800 focus:border-2 focus:border-dotted bg-inherit disabled:bg-gray-300 disabled:text-gray-400" />
            <input disabled={loading} onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" autoComplete='off' placeholder="Password" className="my-3 dark:text-white text-black font-bold dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md p-2 w-full outline-none border border-2 dark:border-gray-300 border-gray-800 focus:border-2 focus:border-dotted bg-inherit disabled:bg-gray-300 disabled:text-gray-400" />
            <button disabled={loading} type='submit' className="disabled:bg-gray-600 disabled:text-gray-800  submit w-auto p-3 border-1 border border-gray-500 text-white hover:bg-pink-600 bg-pink-700 text-center my-2 flex items-center justify-center gap-2 rounded-md active:border-2 active:border-dotted"> Login </button>

            {resMessage.length > 0 ? <div onClick={hideMessage} className={`my-5 py-5 px-3  rounded-md ${isErr ? "bg-red-600" : "bg-green-700"} text-white font-bold italic`}>{resMessage}</div> : ""}
        </form>
    )
}

export default LoginFormComponent
