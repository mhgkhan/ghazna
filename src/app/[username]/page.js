import { NextResponse } from 'next/server';
import React from 'react'

const page = async ({ params }) => {


    const { username } = await params;

    return (
        <article className="min-h-screen">
            <h2 className='text-3xl font-bold my-5'>{username}</h2>
        </article>
    )
}

export default page
