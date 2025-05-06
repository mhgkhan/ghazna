"use client";


import { useRouter } from 'next/navigation';
import React from 'react'
import { useState, useEffect } from 'react';

const ForgetPasswordVerification = ({ token }) => {
    const [isVerified, setIsVerified] = useState(false);
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const router = useRouter();


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

    }

    return (
        <>
            {isLoading ? (
                <p className="text-gray-500 text-2xl">Verifying...</p>
            ) : isError ? (
                <div className="bg-red-100 text-red-700 p-4 rounded-md">
                    <p>{message}</p>
                </div>
            ) : isVerified ? (
                <article className="min-h-screen">
                    <section className="w-full">
                        <form onSubmit={handleSubmit} className="md:w-[50%] w-[95%] mx-auto my-5 rounded-md p-4" >
                            <h1 className="text-4xl font-bold">Reset Password  ?</h1>
                            <p className="my-2 text-gray-700 dark:text-gray-200">Please reset your password. NOTE: Password Should not be same to your old password </p>

                            <input type="password" name="password" autoComplete='off' placeholder="New Password" className="dark:text-white text-black font-bold dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md p-2 w-full outline-none border  dark:border-gray-300 border-gray-800 border-2 focus:border-dotted bg-inherit my-5" />
                            <input type="password" name="confirmPassword" autoComplete='off' placeholder="Confirm New Password" className="dark:text-white text-black font-bold dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md p-2 w-full outline-none  border-1 dark:border-gray-300 border-gray-800 border-2 focus:border-dotted bg-inherit" />

                            <button type='submit' className="my-3 submit w-auto p-3 border-1 border border-gray-500 text-white hover:bg-pink-600 bg-pink-700 text-center my-2 flex items-center justify-center gap-2 rounded-md active:border-2 active:border-dotted"> Submit  </button>

                        </form>
                    </section>
                </article>
            ) : (
                <div className="bg-yellow-100 text-yellow-700 p-4 rounded-md">
                    <p>{message}</p>
                </div>
            )}
        </>
    )
}

export default ForgetPasswordVerification   
