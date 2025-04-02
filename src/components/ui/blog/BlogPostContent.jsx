"use client"

import React from 'react'
import DOMPurify from 'dompurify';

const BlogPostContent = ({body, title}) => {
    return (
        <article id="blogpost-content" className='blogpost-content px-1 py-5' dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(`<h1> ${title}  </h1>
            <br />
            <p>${body} </p>
            <br />
            <a href="mailto:muhammadhasnainghazna@gmail.com"> Contact us </a> for contributions.                            
            `, { USE_PROFILES: { html: true } })
        }}>

        </article>
    )
}

export default BlogPostContent
