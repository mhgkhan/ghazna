"use client";



import { useParams, usePathname, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'

const SortBlogs = () => {

    const pathnames =  usePathname();
    const params = useParams();
    const searchParams  = useSearchParams();


    const [category,setCategory] = useState("general");

    const changeCategory = e => {
        setCategory(e.target.value);
        searchParams.set('category',e.target.value);
    }   



    return (
        <section className='sorting-row'>
            <div className="container mx-auto my-5 p-3 flex items-center justify-between dark:gray-gray-800 bg-gray-200 rounded-md">
                <span className='text-2xl'> Sort Now  </span>

                <div className="sorting-options flex items-center gap-3">

                    <select onChange={changeCategory} name='category' className='p-3 outline-none rounded-lg border-none'>
                        <option defaultChecked defaultValue={"general"} className='p'>General </option>
                        <option value={"Jobs"}>Jobs</option>
                    </select>

                </div>
            </div>
        </section>
    )
}

export default SortBlogs
