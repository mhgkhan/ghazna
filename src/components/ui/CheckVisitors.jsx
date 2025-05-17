'use client'



import React, { useEffect, useState } from 'react'


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
    }, [])


    return (
        <div className="block">
            <h2 className="md:text-3xl text-xl font-bold">{`${users && users ? users+"+" : "..."}`}</h2>
            <p className="dark:text-gray-300 text-gray-600 my-2">Visitors </p>
        </div>
    )
}

export default CheckVisitors
