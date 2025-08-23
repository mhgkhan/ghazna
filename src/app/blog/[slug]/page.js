import React from 'react'
import BlogPostHeader from '@/components/ui/blog/BlogPostHeader';
import BlogPostContent from '@/components/ui/blog/BlogPostContent';
import BlogPostLikebutton from '@/components/ui/blog/BlogPostLikebutton';
import BlogPostRelatedArticles from '@/components/ui/blog/BlogPostRelatedArticles';
import Loading from '@/components/Loading';
import FreezeEnv from '@/config/EnvConfig';
import { cookies, headers } from 'next/headers';
import BlogPostCommentConatiner from '@/components/ui/blog/BlogPostCommentConatiner';


const fetchBlog = async function (slug) {
    try {
        const request = await fetch(`${FreezeEnv.DOMAIN}api/get/blogs/${slug}`);
        const response = await request.json();
        // console.log(response);

        return response;
    } catch (error) {
        return null
    }
}



export async function generateMetadata({ params, searchParams }, parent) {
    const slug = (await params).slug

    const thisBlog = await fetchBlog(slug);

    return {
        title: thisBlog.data.title,
        description: thisBlog.data.description,
    }
}

const page = async ({ params }) => {

    const userHeaders = await headers();
    const thisUserCookies = await cookies();
    const checCookies = thisUserCookies.get("USER_AUTH_TOKEN")?.value;

    const ip = userHeaders.get("x-forwarded-for") || userHeaders.get("remote-addr") || userHeaders.get("cf-connecting-ip") || userHeaders.get("x-real-ip") || userHeaders.get("x-client-ip") || "unknown";


    const { slug } = await params;
    const thisBlog = await fetchBlog(slug);





    const blog = thisBlog?.data;

    // console.log(blog);



    return (
        <article className='min-h-screen md:p-0 px-2' >
            <section role='banner' className="my-5">
                <div className='container mx-auto sm:px-2 flex lg:flex-row flex-col items-start justify-center gap-10  '>
                    <div className='content lg:w-[70%] w-full sm:px-2'>
                        {
                            // blog ? <><BlogPostHeader title={blog.title} views={blog.views} />
                            blog ? <><BlogPostHeader slug={slug} title={blog?.blog?.title} views={blog?.blog?.tempViews} image={blog?.blog?.image} description={blog?.blog?.description} publishedAt={blog?.blog?.createdAt} postedBy={blog?.user?.name} userImg={blog?.user?.profilePicture} ip={ip} />

                                <BlogPostContent body={blog?.blog?.content} title={blog?.blog?.title} description={blog?.blog?.description} />
                                <div className="my-5 px-2 bl">
                                    <BlogPostLikebutton slug={slug} authoraized={checCookies ? true : false} />
                                    <BlogPostCommentConatiner slug={slug} authoraized={checCookies ? true : false} />
                                </div></> : <Loading />
                        }

                    </div>
                    <aside className='lg:w-[28%] w-full lg:border lg:border-1 lg:border-gray-300 rounded-md py-5 '>
                        <h2 className='lg:mx-auto lg:text-center mx-2 text-left font-bold text-2xl'> Related Articles </h2>
                        <BlogPostRelatedArticles />
                    </aside>
                </div>
            </section>
        </article>
    )
}
export default page