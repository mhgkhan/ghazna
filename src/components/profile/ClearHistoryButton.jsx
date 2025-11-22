"use client"


import React, { useState } from 'react'

const ClearHistoryButton = () => {

    const [loading, setLoading] = useState(false);

    const handleClearHistory = async () => {
        setLoading(true)
        try {

            const clearHistoryRequest = await fetch(`/api/users/profile/clearhistory`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                }
            });
            const clearHistoryResponse = await clearHistoryRequest.json();
            if (clearHistoryResponse.success) {
                alert(clearHistoryResponse.message);
                window.location.reload();
            } else {
                alert("Failed to clear history: " + clearHistoryResponse.message);
            }

        } catch (error) {
            alert("Error clearing history: " + error.message);
        } finally {
            setLoading(false);
        }
    }



    return (
        <button onClick={handleClearHistory} className='px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-all duration-300'>
            {loading ? "Clearing..." : "Clear all"}
        </button>
    )
}

export default ClearHistoryButton
