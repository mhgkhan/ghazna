"use client";


import { useRouter } from 'next/navigation';
import React from 'react'
import { useState, useEffect } from 'react';
import Loading from '../Loading';
import FreezeEnv from '@/config/EnvConfig';

const ForgetPasswordVerification = ({ token }) => {
    const [isVerified, setIsVerified] = useState(false);
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const router = useRouter();


    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [formSubmitLoading, setFormSubmitLoading] = useState(false);
    const [formSubmitIsError, setFormSubmitIsError] = useState(false);
    const [formSubmitMessage, setFormSubmitMessage] = useState("");


    const tokenVerification = async (token) => {
        try {
            const response = await fetch(`/api/auth/forget_password/tokenverification/${token}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            if (data.success) {
                setIsVerified(true);
                setMessage(data.message);
                return data;
            } else {
                setIsError(true);
                setMessage(data.message);
                return data;
            }
        } catch (error) {
            console.error("Error verifying token:", error);
            setIsError(true);
            setMessage("An error occurred while verifying the token.");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (token) {
            tokenVerification(token);

        } else {
            setIsError(true);
            setMessage("Token is required.");
            setIsLoading(false);
            setTimeout(() => {
                router.push("/not-found");
            }, 2000);
        }
    }, [])



    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!token || !password || !confirmPassword || password.length < 5 || confirmPassword.length < 5 || password !== confirmPassword) {
            setFormSubmitIsError(true);
            setFormSubmitMessage("Password and confirm password are not same or password is less than 5 characters.");
            return;
        }
        else {
            setFormSubmitIsError(false);
            setFormSubmitMessage("");


            setFormSubmitLoading(true)



            try {

                const request = await fetch(`/api/auth/forget_password/password_update/`, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify({
                        token,
                        password,
                        confirmPassword
                    })
                })

                const response = await request.json();

                if (!response.success) {
                    setFormSubmitIsError(true);
                    setFormSubmitMessage(response.message);
                }
                else {
                    setFormSubmitIsError(false);
                    setFormSubmitMessage(response.message);
                    setTimeout(() => {
                        router.push("/login");
                    }, 2000);
                }


            } catch (error) {
                console.error("Error updating password:", error);
                setFormSubmitIsError(true);
                setFormSubmitMessage("An error occurred while updating the password.");
            }
            finally {
                setFormSubmitLoading(false);
            }



        }


    }

    return (
        <>
            <article className="min-h-screen">
                {isLoading ? (
                    <p key={1} className="text-gray-500 text-2xl w-full text-center my-10 ">
                        <Loading />
                    </p>
                ) : isError ? (
                    <p key={2} className="bg-red-100 text-red-700 p-4 rounded-md my-5 text-center w-full p-20">
                        {message}
                    </p>
                ) : isVerified ? (
                    <section className="w-full">
                        {
                            !formSubmitLoading ? <form onSubmit={handleSubmit} className="md:w-[50%] w-[95%] mx-auto my-5 rounded-md p-4" >
                                <h1 className="text-4xl font-bold">Reset Password  ?</h1>
                                <p className="my-2 text-gray-700 dark:text-gray-200">Please reset your password. NOTE: Password Should not be same to your old password </p>

                                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" autoComplete='off' placeholder="New Password" className="dark:text-white text-black font-bold dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md p-2 w-full outline-none border  dark:border-gray-300 border-gray-800 border-2 focus:border-dotted bg-inherit my-5" />
                                <input onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} type="password" name="confirmPassword" autoComplete='off' placeholder="Confirm New Password" className="dark:text-white text-black font-bold dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md p-2 w-full outline-none  border-1 dark:border-gray-300 border-gray-800 border-2 focus:border-dotted bg-inherit" />

                                <button type='submit' className="my-3 submit w-auto p-3 border-1 border border-gray-500 text-white hover:bg-pink-600 bg-pink-700 text-center my-2 flex items-center justify-center gap-2 rounded-md active:border-2 active:border-dotted"> Submit  </button>


                            </form> : <Loading />
                        }
                        {formSubmitMessage.length > 0 ? <p className='my-5 w-full py-5 bg-green-700 text-white rounded-md text-center'>
                            {formSubmitMessage}
                        </p> : ""}
                        {formSubmitIsError ? <p className='my-5 w-ful py-5 bg-red-700 text-white rounded-md text-center'>
                            {formSubmitMessage}
                        </p> : ""}
                    </section>
                ) : (
                    <p className="bg-red-100 text-red-700 rounded-md my-5 text-center w-full p-20">
                        {message}
                    </p>
                )}
            </article>
        </>
    )
}

export default ForgetPasswordVerification   
