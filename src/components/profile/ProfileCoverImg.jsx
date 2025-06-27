"use client"


import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const ProfileCoverImg = ({ image, imgServerUrl, imgServerKey, username }) => {


    const [coverImage, setCoverImage] = useState(image || "/images/website.jpg");
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState("");
    const [isErr, setIsErr] = useState(false);



    const formData = new FormData();

    const changeImage = async (e) => {
        const file = e.target.files[0];

        // Check file type
        if (!file || !["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
            setIsErr(true);
            setErr("Please upload a valid image file (jpg, jpeg, png)");
            alert("Please upload a valid image file (jpg, jpeg, png)");
            return;
        }

        // Check file size
        if (file.size > 2000000) {
            alert("Image size must be less than 2 MB");
            return;
        }

        // Create fresh FormData
        const formData = new FormData();
        formData.append(`image-${username}`, file); // Use "image" or whatever the API expects

        try {
            setLoading(true);

            // Upload to image server
            const fileUpload = await fetch(`${imgServerUrl}&key=${imgServerKey}`, {
                method: "POST",
                body: formData
            });

            const fileUPloadRes = await fileUpload.json();

            if (fileUPloadRes.success) {
                const imageUrl = fileUPloadRes.data.image.url;
                setIsErr(false);
                setErr("");
                setCoverImage(imageUrl);

                // Send to your backend
                const request = await fetch(`/api/users/uploads/coverimage`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        coverPicture: imageUrl
                    })
                });

                const response = await request.json();
                console.log(response);

            } else {
                setIsErr(true);
                setErr("Failed to upload image");
            }

        } catch (error) {
            setIsErr(true);
            setErr(error.message);
        } finally {
            setLoading(false);  // <-- IMPORTANT: Set to false when done
        }
    };



    useEffect(() => {

    }, [coverImage])


    return (
        <>

            <div className='coverImage md:z-auto w-full h-full relative'>
                {/* {
                    loading ? <div className='w-full h-full flex items-center justify-center my-5'>
                        <p className='text-gray-400 text-center text-xl font-bold'>Uploading ....</p>
                    </div> : isErr ? <div className='w-full h-full flex items-center justify-center my-5'>
                        <p className='text-gray-400 text-center text-xl font-bold'> {err} </p>
                    </div> :
                } */}
                <Image src={coverImage && coverImage} alt='profile picture' width={700} height={300} className='w-full h-full object-fit object-cover rounded-md' />
            </div>

            {
                image ? "" : <div className="changeCoverImg top-1 absolute right-1 rounded-md px-2 py-1 bg-blue-500 text-white font-bold">
                    <input type="file" name="coverImage" id="coverImage" accept="image/*" className='hidden' onChange={changeImage} />
                    <label htmlFor="coverImage" className='cursor-pointer hover:underline '>Change Cover Image</label>
                </div>

            }

        </>
    )
}

export default ProfileCoverImg
