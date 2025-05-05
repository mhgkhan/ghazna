"use client";


import { useRouter } from 'next/navigation';
import React from 'react'
import { useState, useEffect } from 'react';

const AccountVerification = ({ token }) => {
    const [isVerified, setIsVerified] = useState(false);
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const router = useRouter();


    const tokenVerification = async (token) => {
        try {
            const response = await fetch(`/api/auth/verification/${token}`, {
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

            setTimeout(() => {
                router.push("/login");
            }, 5000);
        } else {
            setIsError(true);
            setMessage("Token is required.");
            setIsLoading(false);
            setTimeout(() => {
                router.push("/not-found");
            }, 2000);
        }
    }, [])


    return (
        <>
            {isLoading ? (
                <p className="text-gray-500 text-2xl">Verifying...</p>
            ) : isError ? (
                <div className="bg-red-100 text-red-700 p-4 rounded-md">
                    <p>{message}</p>
                </div>
            ) : isVerified ? (
                <div className="bg-green-100 text-green-700 p-4 rounded-md">
                    <p>{message}</p>
                </div>
            ) : (
                <div className="bg-yellow-100 text-yellow-700 p-4 rounded-md">
                    <p>{message}</p>
                </div>
            )}
        </>
    )
}

export default AccountVerification
