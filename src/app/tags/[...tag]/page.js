import SignupFormComponent from '@/components/ui/auth/SignupFormComponent'
import Link from 'next/link'
import React from 'react'


export const metadata = {
    title: "Search by Tag",
    description: "Search Blogs by tags", keywords: "tags, search blog by tag",
    author: "Your Company Name",
    robots: {
        index: true,
        follow: true,
    },
    viewport: "width=device-width, initial-scale=1.0",
    canonical: "https://ghazna.vercel.app/tags/tag"
}


const page = async ({ params }) => {

    const { tag } = await params;


    if (!tag) {
        return <article className="min-h-screen">
            <section className="w-full">
                <div className="md:w-[50%] w-[95%] mx-auto my-5 rounded-md p-4" >
                    <h1 className='text-red-600 text-center text-2xl font-bold'> No Found Blogs on {tag}</h1>

                </div>
            </section>
        </article>
    }




    return (
        <article className="min-h-screen">
            <section className="w-full">
                <div className="md:w-[50%] w-[95%] mx-auto my-5 rounded-md p-4" >
                    <h1 className='text-xl text-purple-600 font-bold text-center'>Found Blogs on {tag}</h1>
                        
                </div>
            </section>
        </article>
    )
}

export default page
