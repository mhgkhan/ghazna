import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <article>
            <header className="projects-header py-5 px-3 my-5">
                <h1 className='text-4xl font-bold my-3'>My Projects/Previous work/ Archive </h1>
                <p className='dark:text-gray-200 text-gray-600'>Explore a collection of my past projects, showcasing creativity, problem-solving, and technical expertise.</p>
            </header>

            <div className="my-5 p-2 flex items-center justify-center  flex-wrap">
                {Array.from([0,1,2,34374,3833,3,3,2,23,3,3,2,3,3,2,3,2,3,32,24,3,2,2,34,3,3,2,223,2,3,2,3,43,2,23,3,32,3,3,3,3,3,3,3,]).map((ele, ind) => {
                    return <div key={ind} className="project-block border border-1 border-gray-500 border-dotted border-t-0 px-4 py-3 md:w-[400px] md:h-[300px] h-auto w-full">
                        <div className="w-full h-[195px]">
                            <Image src={"/images/website.jpg"} alt="alternate" width={300} height={250} className='rounded-md w-full h-full object-fill object-center' />
                        </div>
                        <div className="proejct-content border-1 border-b border-b-1 border-gray-600 p-1">
                            <h3 className="text-lg font-bold">Title of the project </h3>
                            <p className='text-sm dark:text-gray-300 text-gray-700 my-1'>Some text about the upepr project.</p>
                        </div>
                        <span className='text-sm text-gray-600 dark:text-gray-300 px-2'>2025</span>
                    </div>
                })}
            </div>

        </article>
    )
}

export default page
