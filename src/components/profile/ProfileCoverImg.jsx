"use client"


import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const ProfileCoverImg = ({ image, imgServerUrl, imgServerKey }) => {


    const [coverImage, setCoverImage] = useState(image || "/images/website.jpg");
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState("");
    const [isErr, setIsErr] = useState(false);



    const formData = new FormData();

    const changeImage = async (e) => {

        // set the image size that are must less then 2 mb
        const file = e.target.files[0];

        if (file.type !== "image/png" && file.type !== "image/jpg") {
            return alert("File must be JPG or PNG")
        }

        // ok 



        if (file && file.size < 2000000) {
            formData.append('image', file);

            try {
                setLoading(true);
                const fileUpload = await fetch(`${imgServerUrl}&key=${imgServerKey}`, {
                    method: "POST",
                    body: formData
                });
                const fileUPloadRes = await fileUpload.json();

                if (fileUPloadRes.success) {
                    setIsErr(false);
                    setErr("")
                    setCoverImage(fileUPloadRes.data.image.url);


                    // sending link to the server to save image url 
                    const request = await fetch(`/api/users/uploads/coverimage`, {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify({
                            coverPicture: fileUPloadRes.data.image.url
                        })
                    })

                    const response = await request.json();
                    console.log(response);
                }
                else {

                    setIsErr(true)
                    setErr("File to upload image");
                }

            } catch (error) {
                setErr(true)
                setIsErr(error.message);
            }
            finally {
                setLoading(true);
            }

        }
        else {
            alert("Image size must be less than 2 MB");

        }
        // alert(loading);
        // alert(isErr);
        // alert(coverImage)
    }


    // useEffect(() => {

    // }, [coverImage])


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
                    <input type="file" name="coverImage" id="coverImage" className='hidden' onChange={changeImage} />
                    <label htmlFor="coverImage" className='cursor-pointer hover:underline '>Change Cover Image</label>
                </div>

            }

        </>
    )
}

export default ProfileCoverImg
