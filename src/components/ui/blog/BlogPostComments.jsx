import React from 'react'
import { FaCalendar, FaUserCircle } from 'react-icons/fa'


const fetchComments = async function (id) {
  const request = await fetch('https://dummyjson.com/comments?limit=10');
  const response = await request.json();
  return response.comments;
}

const BlogComment = async () => {

  const comments = await fetchComments();

  return (
    <div className="mt-10 comments">
      <h3 className="md:text-2xl my-5 text-xl">Comments </h3>
      {
        comments ? comments.map((ele, ind) => {
          return <div key={ind} className="my-5 comment w-full px-2 rounded-sm border-b border-1 border-dotted border-gray-500 py-2">
            <div className="comment-header flex items-center justify-between gap-5 my-">
              <div className="flex items-end justify-center gap-2">
                <FaUserCircle className='text-2xl' />
                <span className="text-sm dark:text-gray-200 text-gray-600">{ele.user.username}</span>
              </div>
              <div className='flex items-end justify-center gap-2'>
                <FaCalendar className='text-2xl' />
                <span className="text-sm dark:text-gray-200 text-gray-600">12/12/2024</span>
              </div>
            </div>
            <p className='mt-2 px-2'>{ele.body}</p>
          </div>

        }) : "Loading ..."
      }
    </div>
  )
}

export default BlogComment
