"use client"

import React from 'react'
import DOMPurify from 'dompurify';

const BlogPostContent = ({ body }) => {

    return (
        <article id="blogpost-content" className='blogpost-content px-1 py-5' dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(body, {
                USE_PROFILES: { html: true },
            })
        }} />
    )
}

export default BlogPostContent
