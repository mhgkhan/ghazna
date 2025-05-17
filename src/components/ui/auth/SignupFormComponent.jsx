"use client"

import React from 'react'
import FormsButton from '../buttonsandlinks/FormsButton';
import Loading from '@/components/Loading';
import RespMessage from '../dailogs/RespMessage';

const SignupFormComponent = () => {

    const [formData, setFormData] = React.useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        cPassword: ""
    });

    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState("");




    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        setError(false);
        setMessage("")

        const { firstname, lastname, email, password, cPassword } = formData;
        if (!firstname || !lastname || !email || !password || !cPassword) {
            setError(true);
            setMessage("Please fill all the fields");
            return;
        }
        if (password !== cPassword) {
            setError(true);
            setMessage("Password and confirm password do not match");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: `${firstname} ${lastname}`,
                    email,
                    password
                })
            })
            const data = await res.json();

            setError(!data.success);
            setMessage(data.message);

            setFormData({
                firstname: "",
                lastname: "",
                email: "",
                password: "",
                cPassword: ""
            })
            return;

        } catch (error) {
            console.log(error);
            setError(true);
            setMessage("Something went wrong, please try again later");
            return;
        }
        finally {
            setLoading(false);
        }
    }


    const hideMessage = () => {
        setMessage("");
        setError(false)
    }


    return (
        <form onSubmit={handleSubmit}>
            <br />

            <div className="flex items-center justify-between w-full md:flex-row flex-col ">
                <div className="firstname md:w-[45%] w-full">
                    <input disabled={loading} onChange={handleChange} value={formData.firstname} type="text" name="firstname" autoComplete='off' placeholder="First name" className="dark:text-white text-black font-bold dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md p-2 w-full outline-none border border-1 dark:border-gray-300 border-gray-800 focus:border-2 focus:border-dotted bg-inherit disabled:bg-gray-300 disabled:text-gray-400" />
                </div>
                <div className="firstname md:w-[45%] w-full my-3">
                    <input disabled={loading} onChange={handleChange} value={formData.lastname} type="text" name="lastname" autoComplete='off' placeholder="Last name" className="dark:text-white text-black font-bold dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md p-2 w-full outline-none border border-1 dark:border-gray-300 border-gray-800 focus:border-2 focus:border-dotted bg-inherit disabled:bg-gray-300 disabled:text-gray-400" />
                </div>
            </div>
            <input disabled={loading} onChange={handleChange} value={formData.email} type="email" name="email" autoComplete='off' placeholder="Email address" className="dark:text-white text-black font-bold dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md p-2 w-full outline-none border border-1 dark:border-gray-300 border-gray-800 focus:border-2 focus:border-dotted bg-inherit disabled:bg-gray-300 disabled:text-gray-400" />
            <input disabled={loading} onChange={handleChange} value={formData.password} type="password" name="password" autoComplete='off' placeholder="Password" className="my-3 dark:text-white text-black font-bold dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md p-2 w-full outline-none border border-1 dark:border-gray-300 border-gray-800 focus:border-2 focus:border-dotted bg-inherit disabled:bg-gray-300 disabled:text-gray-400" />
            <input disabled={loading} onChange={handleChange} value={formData.cPassword} type="password" name="cPassword" autoComplete='off' placeholder="Confirm password" className=" dark:text-white text-black font-bold dark:focus:bg-gray-700 focus:bg-gray-100 rounded-md p-2 w-full outline-none border border-1 dark:border-gray-300 border-gray-800 focus:border-2 focus:border-dotted bg-inherit disabled:bg-gray-300 disabled:text-gray-400" />
            {/* <br /> */}
            {/* <button disabled={loading} className="my-3 disabled:bg-gray-600 disabled:text-gray-800 submit w-auto p-3 border-1 border border-gray-500 text-white hover:bg-pink-600 bg-pink-700 text-center my-2 flex items-center justify-center gap-2 rounded-md active:border-2 active:border-dotted"> Register  </button> */}
            <FormsButton loading={loading} type={"submit"} text={"Register"} />

            {loading ? <Loading /> : message.length > 0 ? <RespMessage hide={hideMessage} isErr={error} message={message} key={"keye"} /> : ""}

        </form>
    )
}

export default SignupFormComponent
