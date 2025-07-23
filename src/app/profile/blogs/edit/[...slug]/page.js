import FreezeEnv from '@/config/EnvConfig';
import React from 'react'



const fetchBlogPost = async (slug) => {
    const obj = {}
    try {

        const request = await fetch(`${FreezeEnv.DOMAIN}/api/users/profile/getblogs/${slug}`)

        obj.isErr = !request.success
        obj.error = request.message
        obj.message = request.message
        obj.data = request.data

    } catch (error) {
        obj.isErr = true;
        obj.error = error;
        obj.message = error.message;
    }
    finally { return obj; }
}


const page = async ({ params }) => {

    const { slug } = await params;




    return (
        <div>
            <h1>Edit Blog Post</h1>

        </div>
    )
}

export default page
