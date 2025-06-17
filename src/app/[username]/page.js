import React from 'react'
import { redirect } from "next/navigation"
import FreezeEnv from '@/config/EnvConfig'



const fetchUserData = async function (username) {
    let obj = {}
    try {
        const request = await fetch(`${FreezeEnv.DOMAIN}api/users/profile/${username}`);
        const response = await request.json();
        obj.success = response.success;
        obj.message = response.message;
        obj.data = response.data;
    } catch (error) {
        obj.success = false;
        obj.message = error.message;
        obj.data = null;
    }
    finally {
        return obj;
    }
}


const page = async ({ params }) => {


    const { username } = await params;

        console.log(username);
        

    if (username.includes("%") || username.includes(" ") || username.length > 20) {
        return redirect("/not-found/404")
    }

    const userData = await fetchUserData(username);

    if (!userData.success) {
        return redirect("/not-found/404")
        // return (
        //     <article className="min-h-screen">
        //         <h2 className='text-3xl font-bold my-5 text-red-500'>{userData.message}</h2>
        //     </article>
        // )
    }

    return (
        <article className="min-h-screen">
            <h2 className='text-3xl font-bold my-5 text-center mx-auto'>{userData.data.name}</h2>
        </article>
    )
}

export default page
