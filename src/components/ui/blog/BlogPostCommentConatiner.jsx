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


    useEffect(() => {
        fetchBlogComments();
    }, [])


    return (
        <div className="my-5">
            <BlogPostsCommentForm />
            {commentsLoading ? <div className="my-5"><SmallLoading /></div> : <BlogPostComments comments={comments} loading={commentsLoading} />}
        </div>
    )
}

export default BlogPostCommentConatiner
