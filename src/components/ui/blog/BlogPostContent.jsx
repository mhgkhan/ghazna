"use client"

import React from 'react'
import DOMPurify from 'dompurify';

const BlogPostContent = ({ body }) => {

    return (
        <article id="blogpost-content" className='blogpost-content px-1 py-5' dangerouslySetInnerHTML={{ __html: body }} />
    )
}

export default BlogPostContent
