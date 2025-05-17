'use client'



import React, { useEffect, useState } from 'react'
import 'aos/dist/aos.css';
import Aos from 'aos';


const CheckVisitors = () => {



    const [users, setUsers] = useState(null);
    const [isFetch, setIsFetch] = useState(false);


    const fetchVisitors = async () => {
        try {
            const request = await fetch("/api/users/visitor");
            const res = await request.json();

            console.log(res);

            if (res.success) {
                setUsers(res.data.visitors);
                setIsFetch(true);
            }
            else {
                setIsFetch(false);
            }
        } catch (error) {
            setIsFetch(false);
        }
    }

    useEffect(() => {
        fetchVisitors();



        Aos.init({ duration: 1000 })

    }, [])


    return (
        <div className="block" data-aos="fade-down">
            <h2 className="md:text-3xl text-xl font-bold">{`${users && users ? users : "wait..."}+`}</h2>
            <p className="dark:text-gray-300 text-gray-600 my-2">Visitors </p>
        </div>
    )
}

export default CheckVisitors
