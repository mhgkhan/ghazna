"use client"
import React, { useEffect, useState } from 'react'
import FormsButton from '../ui/buttonsandlinks/FormsButton'
import { useRouter } from 'next/navigation'
import { BsGrid3X3Gap } from "react-icons/bs";
import ProfileBlogPostCard from './ProfileBlogPostCard'
import { FaList, FaPlus, FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';
import Loading from '../Loading';


const ProfileBlogPostsAll = () => {
    const router = useRouter();

    const [sorted, setSorted] = useState(false);
    const [isGrid, setIsGrid] = useState(true); // grid or list


    const [userBlogs, setUserBlogs] = useState([]); // to store user blogs
    const [loading, setLoading] = useState(true); // to show loading state
    const [error, setError] = useState(null); // to store error if any


    const fetchUserBlogs = async function getUserBlogs() {
        try {
            const request = await fetch("/api/users/profile/getblogs");
            const response = await request.json();
            if (!response.success) {
                setError(response.message);
            }
            setUserBlogs(response.data);
            setError(null);

        } catch (error) {
            setError(error.message);
            console.log("Error fetching user blogs: ", error);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUserBlogs();
    }, [])


    const deleteBlog = async (id, index) => {
        console.log("Deleting blog with id: ", id);
        try {
            // setLoading(true)
            const request = await fetch(`/api/users/profile/blog-actions/${id}`, {
                method: "DELETE",
            });
            const response = await request.json();
            // console.log(response);
            if (!response.success) {
                setError(response.message);
                return;
            }
            fetchUserBlogs(); // refetch blogs after deletion
        } catch (error) {
            setError(error.message);
        }
    }

    const sortingBlog = () => {
        setSorted(!sorted)
        userBlogs.length > 0 ? setUserBlogs(userBlogs.reverse()) : setSorted(false)
    }



    const hideUnhideBlog = async (id, index, action) => {
        console.log("Hiding/Unhiding blog with id: ", id, "Action: ", action);
        try {
            // setLoading(true)
            const request = await fetch(`/api/users/profile/blog-actions/${id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ action: action }),
            });
            const response = await request.json();
            console.log(response);
            if (!response.success) {
                setError(response.message);
                return;
            }
            await fetchUserBlogs(); // refetch blogs after deletion
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="blogposts-section my-5 md:px-auto px-2">

            <div className="blogs-filter flex items-center justify-between gap-5 border border-1 border-gra-300 rounded-md p-3 mb-5">
                <FormsButton icon={<FaPlus />} text={"Create"} clickFun={() => router.push("/profile/blogs/create")} />
                <div className="filter-buttons flex items-center justify-center gap-3">
                    <FormsButton icon={sorted ? <FaSortAmountUp /> : <FaSortAmountDown />} clickFun={sortingBlog} classes={"text-xl"} />
                    <FormsButton icon={isGrid ? <FaList /> : <BsGrid3X3Gap />} clickFun={() => setIsGrid(!isGrid)} classes={"text-xl"} />
                </div>
            </div>

            <div className={`blogs-container ${!isGrid?"flex items-center justify-center flex-col":"flex items-center justify-center gap-5 flex-wrap"} my-5`}>

                {
                    loading ? <Loading /> : userBlogs ? userBlogs.length > 0 ? userBlogs && userBlogs.map((blog, ind) => {
                        return <ProfileBlogPostCard isGrid={isGrid} hideUnhideBlog={hideUnhideBlog} isHidden={blog.isHidden} isPublished={blog.isPublished} id={blog._id} index={ind} slug={blog.slug} key={ind} img={blog.image} title={blog.title} description={blog.description} deleteBlog={deleteBlog} />
                    }) : <h1 className='text-2xl text-red-500 font-bold'>No blogs found</h1> : <h1 className='text-2xl text-red-500 font-bold'>No blogs found</h1>
                }



            </div>
        </div>

    )
}

export default ProfileBlogPostsAll
