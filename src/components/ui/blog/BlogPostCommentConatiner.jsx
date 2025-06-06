"use client"

import React, { useEffect, useState } from 'react'
import BlogPostsCommentForm from './BlogPostsCommentForm'
import BlogPostComments from './BlogPostComments';
import SmallLoading from '../SmallLoading';

const BlogPostCommentConatiner = ({ slug, authoraized }) => {

    const [commentsLoading, setCommentsLoading] = useState(false);
    const [comments, setComments] = useState([]);

    const [isErr, setIserr] = useState(false);
    const [message, setMessage] = useState("")


    const [commentInput, setCommentInput] = useState("")
    const [sendLoading, setSendLoading] = useState(false)


    const fetchBlogComments = async () => {
        try {
            setCommentsLoading(true);
            const request = await fetch(`/api/publicactions/blogcomment/${slug}`, {
                method: "GET",
                headers: {
                    'content-type': "application/json",
                }
            })

            const response = await request.json();

            if (response.success) {
                setIserr(false);
                setComments(response.data)
            }
            else {
                setIserr(true);
                setMessage(response.message)
            }


        } catch (error) {
            setIserr(true);
            setMessage(error.message)
        }
        finally {
            setCommentsLoading(false)
        }
    }

    const submitCommentform = async (e) => {
        e.preventDefault();
        // alert(commentInput)
        if (!authoraized) {
            return alert("You need to login first");
        }

        else {
            setSendLoading(true)

            try {
                const request = await fetch(`/api/publicactions/blogcomment/${slug}`, {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify({ comment: commentInput })
                });

                const response = await request.json();

                setIserr(!response.success);
                setMessage(response.message);
            } catch (error) {
                alert("some went wrong...")
            } finally {
                await fetchBlogComments();
                setSendLoading(false)
            }
        }
    }



    useEffect(() => {
        fetchBlogComments();
    }, [])


    return (
        <div className="my-5">
            <BlogPostsCommentForm authoraized={authoraized} slug={slug} submitFunction={submitCommentform} commentInput={commentInput} changeInput={(e) => setCommentInput(e.target.value)} loading={sendLoading} />
            {commentsLoading ? <div className="my-5"><SmallLoading /></div> : <BlogPostComments comments={comments} />}
        </div>
    )
}

export default BlogPostCommentConatiner
