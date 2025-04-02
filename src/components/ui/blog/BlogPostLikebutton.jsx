import React from 'react'

const BlogPostLikebutton = () => {
    return (
        <div className="actions-buttons flex items-center justify-center gap-5 w-full">
            <button className="p-2 font-bold text-center border-none bg-blue-600 md:w-[45%] w-full flex items-center justify-center gap-2 text-white">Like</button>
            {/* <button className="p-2 font-bold text-center border-none bg-blue-600 w-[45%]">Dislike</button> */}
        </div>
    )
}

export default BlogPostLikebutton
