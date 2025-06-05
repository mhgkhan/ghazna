"use client"

import React, { useEffect, useState } from 'react'
import SmallLoading from '../SmallLoading';

const BlogPostLikebutton = ({ authoraized, slug }) => {

    const [liked, setLiked] = useState(false);
    const [loading, setLoading] = useState(false);

    const likePost = async () => {
        if (!authoraized) {
            alert("You need to login first");
        }
        else {

            setLiked(true);
            try {
                const request = await fetch(`/api/publicactions/blogreaction/like/${slug}`, {
                    method: "PUT",
                    headers: { "content-type": "application/json" },
                    cache:"force-cache"
                });
                const response = await request.json();

                setLiked(response.success ? true : false)
            } catch (error) {
                setLiked(false)
            }
        }
    }

    const checkIfLiked = async () => {

        setLoading(true)
        try {
            const request = await fetch(`/api/publicactions/blogreactcheck/${slug}`);

            const response = await request.json();


            if (response.success) {
                setLiked(true);
            }
            else { setLiked: false }


        } catch (error) {
            setLiked(false)
        }
        finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        checkIfLiked();
    }, [])

    return (
        <div className="actions-buttons flex items-center justify-center gap-5 w-full">
            <button disabled={liked} className={`p-2 font-bold text-center border-none ${liked ? "bg-gray-400" : "bg-blue-600"} md:w-[45%] w-full flex items-center justify-center gap-2 text-white`} onClick={likePost}>{loading ? <SmallLoading /> : liked && liked ? "Liked" : "Like"}</button>
            {/* <button className="p-2 font-bold text-center border-none bg-blue-600 w-[45%]">Dislike</button> */}
        </div>
    )
}

export default BlogPostLikebutton
