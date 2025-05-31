import React from 'react'
import BlogPostComments from '@/components/ui/blog/BlogPostComments';
import BlogPostsCommentForm from '@/components/ui/blog/BlogPostsCommentForm';
import BlogPostHeader from '@/components/ui/blog/BlogPostHeader';
import BlogPostContent from '@/components/ui/blog/BlogPostContent';
import BlogPostLikebutton from '@/components/ui/blog/BlogPostLikebutton';
import BlogPostRelatedArticles from '@/components/ui/blog/BlogPostRelatedArticles';
import Loading from '@/components/Loading';
import FreezeEnv from '@/config/EnvConfig';


const fetchBlog = async function (slug) {
    const request = await fetch(`${FreezeEnv.DOMAIN}api/get/blogs/${slug}`);
    const response = await request.json();
    // console.log(response);
    
    return response;
}

const page = async ({ params }) => {

    const { slug } = await params;
    const thisBlog = await fetchBlog(slug);



    const blog = thisBlog.data;

    // console.log(blog);



    return (
        <article className='min-h-screen md:p-0 px-2' >
            <section role='banner' className="my-5">
                <div className='container mx-auto sm:px-2 flex lg:flex-row flex-col items-start justify-center gap-10  '>
                    <div className='content lg:w-[70%] w-full sm:px-2'>
                        {
                            // blog ? <><BlogPostHeader title={blog.title} views={blog.views} />
                            blog ? <><BlogPostHeader title={blog?.title} views={5000} image={blog.image} description={blog?.description} />

                                <BlogPostContent body={blog.content} title={blog.title} description={blog.description} />

                                <div className="my-5 px-2 bl">
                                    <BlogPostLikebutton />
                                    <div className="my-5">
                                        <BlogPostsCommentForm />
                                        <BlogPostComments />
                                    </div>
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