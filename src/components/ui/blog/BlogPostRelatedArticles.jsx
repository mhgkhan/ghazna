import Image from 'next/image'
import React from 'react'
import Link from "next/link"



const BlogPostRelatedArticles = ({ articlesArray }) => {
    return (
        <div className='relatedArticlesContainer flex items-center justify-center gap-2 lg:flex-col flex-row flex-wrap my-5 lg:px-2 px-1'>
            {
                Array.from(articlesArray).map((ele, ind) => {
                    return <div key={ind} className='related-block lg:w-full w-auto flex items-center justify-start gap-3 border border-1 border-gray-500 rounded-md px-0 pr-2'>
                        <Image src={ele.image || "/images/website.jpg"} width={100} height={150} className='rounded-md min-h-full md:max-h-[150px] md:w-[100px] w-[150px]' alt='related-slug-picture' />
                        <h6 className='lg:text-lg text-sm font-bold'>
                            <Link href={`/blog/${ele.slug}`}>{ele.title?.length > 50 ? ele.title.substring(0, 50) : ele.title}</Link>
                        </h6>
                    </div>
                })
            }
        </div>
    )
}

export default BlogPostRelatedArticles
