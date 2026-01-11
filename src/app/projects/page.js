import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export const metadata = {
    title: "Projects || ghazna.dev",
    description: "Explore all my previous production work, projects, and more. Find everything here easily.",
    keywords: ["projects", "portfolio", "ghazna.dev", "production work", "web development", "software projects"],
    author: "Ghazna",
    robots: {
        index: true,
        follow: true,
    },
    viewport: "width=device-width, initial-scale=1.0",
    charset: "UTF-8",
    openGraph: {
        title: "Projects || ghazna.dev",
        description: "Explore all my previous production work, projects, and more. Find everything here easily.",
        url: "https://ghazna.dev/projects",
        type: "website",
        locale: "en_US",
        site_name: "ghazna.dev",
    },
    twitter: {
        card: "summary_large_image",
        title: "Projects || ghazna.dev",
        description: "Explore all my previous production work, projects, and more. Find everything here easily.",
        site: "@ghazna",
        creator: "@ghazna",
    },
    alternates: {
        canonical: "https://ghazna.online/projects",
    },
};


const page = () => {
    return (
        <article>
            <header className="projects-header py-5 px-3 my-5">
                <h1 className='text-4xl font-bold my-3'>My Projects/Previous work/ Archive </h1>
                <p className='dark:text-gray-200 text-gray-600'>Explore a collection of my past projects, showcasing creativity, problem-solving, and technical expertise.</p>
            </header>

            <div className="my-5 p-2 flex items-center justify-center  flex-wrap">
                {Array.from([
                    { title: "Ghazna Programmar", subtitle: "My previous Portfolio & Blog website.", year: "2024", image: "/images/projects/ghazaprogrammar.png", link: "https://mhgkhanp.netlify.app/" },
                    { title: "Ghazna Shop", subtitle: "An Ecommerce Project with all functionalities.", year: "2024", image: "/images/projects/ghaznashop.png", link: "https://ghazna.shop/" },
                    { title: "KSTP", subtitle: "Khyber Stdents Testing Portal.", year: "2024", image: "/images/projects/kstp.png", link: "https://ghazna.shop/" },
                    { title: "GH Urlshortner", subtitle: "A fullstack URL Shortner Project", year: "2023", image: "/images/projects/usgh.png", link: "https://usgh.netlify.app/" },
                ]).map((ele, ind) => {
                    return <Link href={ele.link} key={ind} className="project-block border border-1 border-gray-500 border-dotted border-t-0 px-4 py-3 md:w-[400px] md:h-[300px] h-auto w-full">
                        <div className="w-full h-[180px]">
                            <Image src={ele.image} alt="alternate" width={300} height={195} className='rounded-md w-full h-full object-fill object-center' />
                        </div>
                        <div className="proejct-content border-1 border-b border-b-1 border-gray-600 p-1">
                            <h3 className="text-lg font-bold">{ele.title}</h3>
                            <p className='text-sm dark:text-gray-300 text-gray-700 my-1'>{ele.subtitle}</p>
                        </div>
                        <span className='text-sm text-gray-600 dark:text-gray-300 px-2'>{ele.year}</span>
                    </Link>
                })}
            </div>
        </article>
    )
}

export default page
