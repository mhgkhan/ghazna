"use client"


import React from 'react'


const BlogPostsCommentForm = ({ authoraized, submitFunction, commentInput, loading, changeInput }) => {
    return (
        <form className={`my-5 ${loading ?"blur-0":""}`} onSubmit={submitFunction} >
            <h2 className='md:text-2xl text-xl my-5'>Leave your query </h2>
            <label htmlFor="message" className='italic'>Type your comment.</label>
            <textarea onChange={changeInput} value={commentInput} disabled={loading || !authoraized} rows={7} name='comment' id='message' required minLength={5} maxLength={500} autoComplete="off" className='w-full p-2  border-none rounded-md my-2 dark:bg-gray-700 bg-gray-300 focus:border-dotted focus:border-2  dark:focus:bg-gray-600 focus:gray-300 bg-none border border-1 border-gray-500 outline-none' placeholder='Type...'></textarea>
            <button disabled={!authoraized || loading} type="submit" className='w-auto p-3 rounded-md border-none bg-blue-600 font-bold text-center hover:bg-blue-500 text-white'>Submit</button>
        </form>
    )
}

export default BlogPostsCommentForm
