import FreezeEnv from '@/config/EnvConfig'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaComments, FaEye, FaHeart } from 'react-icons/fa'

const fetchBlogs = async function () {
  const request = await fetch(`${FreezeEnv.DOMAIN}api/get/blogs`);
  const response = await request.json();
  // console.log(response);

  return response.data;
}


export const metadata = {
    title: "Blog | Explore the Latest Blogs and Articles on the Modern World",
    description:
        "Discover insightful blogs and articles about the modern world. Stay updated with the latest trends, ideas, and innovations.",
    keywords: [
        "blogs",
        "articles",
        "modern world",
        "trends",
        "innovations",
        "ideas",
        "latest blogs",
        "tech blogs",
        "web development blogs",
    ],
    authors: [{ name: "Muhammad Hasnain Ghazna" }],
    creator: "Muhammad Hasnain Ghazna",
    publisher: "Ghazna Blog",
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://ghazna.vercel.app/blog",
    },
    openGraph: {
        title: "Blog | Explore the Latest Blogs and Articles on the Modern World",
        description:
            "Discover insightful blogs and articles about the modern world. Stay updated with the latest trends, ideas, and innovations.",
        url: "https://ghazna.vercel.app/blog",
        siteName: "Ghazna Blog",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "https://ghazna.vercel.app/images/myProfile.png", // ✅ replace with your blog banner image
                width: 1200,
                height: 630,
                alt: "Latest Blogs and Articles on the Modern World",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog | Explore the Latest Blogs and Articles on the Modern World",
        description:
            "Stay updated with the latest blogs, trends, and innovations from the modern world. Read insightful articles on tech, ideas, and more.",
        images: ["https://ghazna.vercel.app/images/myProfile.jpg"], // ✅ same image
        site: "@ghaznadev", // replace if you have Twitter
        creator: "@ghaznadev",
    },
};



const page = async () => {


  


  const blogs = await fetchBlogs();


  // console.log("the blogs are ", blogs);


  // console.log("the blog is ",blogs);



  return (
    <article className="min-h-screen">
      <section role="heading" className="w-full">
        <div className="container mx-auto">
          <h1 className="md:p-auto px-5 py-4 text-4xl font-bold">Blog</h1>
          <p className="md:p-auto px-5 my-2 text-gray-700 dark:text-gray-200">Explore the latest articles, tutorials and news on current world.</p>
        </div>
      </section>

      <section className="blogs-container container mx-auto my-5 px-3 flex items-center justify-center md:gap-5 gap-2 flex-wrap">

        {
          blogs ? blogs.map((ele, ind) => {

            return <div key={ind} className="blog-card md:w-[300px] w-[95%]  md:my-2 my-1 rounded-md shadow-md dark:shadow-gray-900 shadow-gray-300 p-1 h-auto border border-1 border-gray-400 ">
              {/* <Link href={`/blog/${ind+1}`}> */}
              <div className="Image-area w-full h-[180px] border border-1 border-gray-300 dark:border-gray-500 rounded-md">
                <Image src={ele.image ?? "/images/hero.jpg"} width={"350"} height={200} alt={`Ghazna Dev ${ele.title}`} className='w-full h-full object-cover object-center rounded-md' ></Image>
              </div>
              <div className="content-area px-2 py-2">
                <h3 className='text-xl font-bold'> {ele.title.length < 45 ? ele?.title : ele.title.substring(0, 45)}</h3>
                <p className='text-sm text-gray-600 my-2 dark:text-gray-300'>{ele.description.length < 100 ? ele.description : ele.description.substring(0, 100) + "..."}</p>
              </div>
              <Link href={`/blog/${ele.slug}`} className='my-2 w-full block dark:bg-white bg-black dark:text-black text-white text-center py-2 rounded-md hover:bg-gray-800 transition-all duration-300 ease-in-out'>
                Read More
              </Link>

              <div className='blog-card-footer px-3 w-full flex items-center justify-between py-1 pt-2 gap-7 border-1 border-t border-gray-500'>
                <div className="flex dark:text-gray-300 text-gray-600 items-center justify-center gap-1">
                  <span className="text-2xl"><FaHeart /></span> <span className='text-sm'>{ele.tempLikes ?? 0}+</span>
                </div>
                <div className="flex dark:text-gray-300 text-gray-600 items-center justify-center gap-1">
                  <span className="text-2xl"><FaComments /></span> <span className='text-sm'>{ele.tempComments ?? 0}+</span>
                </div>
                <div className="flex dark:text-gray-300 text-gray-600 items-center justify-center gap-1">
                  <span className="text-2xl"><FaEye /></span> <span className='text-sm'>{ele.tempViews ?? 0} </span>
                </div>
              </div>
              {/* </Link> */}
            </div>
          }) : "loading ..."
        }


      </section>
    </article>
  )
}

export default page
