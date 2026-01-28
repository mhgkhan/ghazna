import FreezeEnv from '@/config/EnvConfig'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaComments, FaEye, FaHeart } from 'react-icons/fa'

const fetchBlogs = async function (params) {
  let url = `${FreezeEnv.DOMAIN}api/get/blogs`;

  if (params.category && params.startfrom) {
    url += `?category=${params.category}&startfrom=${params.startfrom}`;
  } else if (params.category) {
    url += `?category=${params.category}`;
  } else if (params.startfrom) {
    url += `?startfrom=${params.startfrom}`;
  }

  const request = await fetch(url);
  const response = await request.json();
  return response.data;
};


export const metadata = {
  title: "Blog | Ghazna Dev",
  description:
    "Discover insightful blogs and articles about the modern world. Stay updated with the latest trends, ideas, and innovations.",
  keywords: [
    "ghazna Blog",
    "ghazna dev blog",
    "ghazna dev blogs",
    "ghazna blogs",
    "muhamad hasnain blog",
    "muhamad hasnain ghazna blog",
    "hasnain ghazna blog",
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
    canonical: "https://ghazna.online/blog",
  },
  openGraph: {
    title: "Blog | Ghazna Dev",
    description:
      "Discover insightful blogs and articles about the modern world. Stay updated with the latest trends, ideas, and innovations.",
    url: "https://ghazna.online/blog",
    siteName: "Ghazna Blog",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://ghazna.online/images/myProfile.png", // ✅ replace with your blog banner image
        width: 1200,
        height: 630,
        alt: "Ghazna Dev Latest Blogs and Articles on the Modern World",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Ghazna Dev",
    description:
      "Stay updated with the latest blogs, trends, and innovations from the modern world. Read insightful articles on tech, ideas, and more.",
    images: ["https://ghazna.online/images/myProfile.jpg"], // ✅ same image
    site: "@ghaznadev", // replace if you have Twitter
    creator: "@ghaznadev",
  },
};



const page = async ({ searchParams }) => {

  const params = await searchParams;
  // console.log(params);


  const blogs = await fetchBlogs({ category: params.category ?? null, startfrom: params.startfrom ?? null });
  // console.log(blogs);

  const categories = !blogs.categories ? [] : [...new Set(blogs?.categories.map(ele => ele.category))]



  return (
    <article className="min-h-screen">
      <section role="heading" className="w-full">
        <div className="container mx-auto">
          <h1 className="md:p-auto px-5 py-4 text-4xl font-bold">Blog</h1>
          <p className="md:p-auto px-5 my-2 text-gray-700 dark:text-gray-200">Explore the latest articles, tutorials and news on current world.</p>
        </div>
      </section>

      {/* <SortBlogs /> */}

      <div className=" blogs-all-container mx-auto my-10 flex items-start justify-start gap-5 md:flex-row flex-col-reverse container">


        {/* sidebar for blogposts filter  */}
        <div className='sidebar py-2 px-1 md:w-[20%] w-full md:flex imd:items-center justify-center md:flex-col border border-1 dark:border-gray-400 border-gray-300 rounded-md shadow-md dark:shadow-gray-500 shadow-gray-200'>

          <div className="blog-head my-5">
            <h4>Filter By Category</h4>
            <div className='py-[1px] bg-gray-400 rounded-lg w-full'></div>
          </div>

          <div className="py-3 px-1 border-1 border border-gray-400 rounded-md flex md:flex-col md:items-center justify-between md:gap-0 gap-3 flex-wrap">

            {
              categories && categories.length > 0 ? categories.map((ele, ind) => <Link href={`/blog?category=${ele.toLowerCase()}`} key={ind} className=" md:blck filter-radio md:w-full my-2 rounded-lg py-1 px-2 dark:bg-gray-400 dark:text-white bg-gray-300 text-black cursor-pointer dark:hover:bg-gray-300 dark:hover:text-black hover:bg-gray-500 hover:text-white md:inline-block">{ele.toUpperCase()}</Link>) : "No Categories Found"
            }
          </div>





          {/* <div className="blog-head mt-5">
            <h4>Filter By Tags</h4>
            <div className='py-[1px] bg-gray-400 rounded-lg w-full'></div>
          </div>
          <div className="my-2 py-2 px-1 rounded-md flex items-center justify-between flex-wrap ">

            {
              Array.from(["Tag1", "Tag2", "Tag3", "Tag4", "Tag5", "Tag6"]).map((ele, ind) => <Link href={`/tags/${ele}`} key={ind} className="filter-radio my-2 rounded-lg py-1 px-2 dark:bg-gray-400 dark:text-white bg-gray-300 text-black cursor-pointer dark:hover:bg-gray-300 dark:hover:text-black hover:bg-gray-500 hover:text-white">{ele}</Link>)
            }
          </div> */}





        </div>




        {/* blogs that are display here  */}

        <section className="flex flex-col gap-4">
          {/* start from filter  */}
          <div className="py-1 px-1 border-1 border-b border-gray-400 rounded-md flex items-center justify-start gap-3 md:w-fit w-full ">

            {
              // Array.from(["Latest", "Popular","Today"]).map((ele, ind) => <Link href={`/blog?startfrom=${ele.toLowerCase()}`} key={ind} className=" blck filter-radio w-full md:w-auto my-2 rounded-lg p-2 dark:bg-gray-400 dark:text-white text-center bg-gray-300 text-black cursor-pointer dark:hover:bg-gray-300 dark:hover:text-black hover:bg-gray-500 hover:text-white">{ele}</Link>)
              Array.from(["Latest", "Popular"]).map((ele, ind) => <Link href={`/blog?startfrom=${ele.toLowerCase()}`} key={ind} className=" blck filter-radio w-full md:w-auto my-2 rounded-lg p-2 dark:bg-gray-400 dark:text-white text-center bg-gray-300 text-black cursor-pointer dark:hover:bg-gray-300 dark:hover:text-black hover:bg-gray-500 hover:text-white">{ele}</Link>)
            }
          </div>

          <div className="blogs-container container mx-auto px-1 flex items-center md:justify-start justify-center md:gap-5 gap-2 flex-wrap">
            {
              blogs ? blogs.blogs?.map((ele, ind) => {

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
          </div>

        </section>
      </div>

    </article>
  )
}

export default page
