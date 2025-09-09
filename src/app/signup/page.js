import SignupFormComponent from '@/components/ui/auth/SignupFormComponent'
import Link from 'next/link'
import React from 'react'


export const metadata = {
    title:"Signup || Signup Page",
    description: "Sign up for our platform to access exclusive features and benefits. Create your account today and join our community.",
    keywords: "signup, register, create account, user registration, join platform",
    author: "Your Company Name",
   robots: {
    index: true,
    follow: true,
  },
    viewport: "width=device-width, initial-scale=1.0",
    canonical: "https://ghazna.vercel.app/signup"
}


const page = () => {
    return (
        <article className="min-h-screen">
            <section className="w-full">
                <div className="md:w-[50%] w-[95%] mx-auto my-5 rounded-md p-4" >
                    <h1 className="text-4xl font-bold">Register</h1>
                    <p className="my-2 text-gray-700 dark:text-gray-200">Welcome, create a new account for free with your valid credientials.</p>

                    <SignupFormComponent />

                    <div className='flex items-center justify-between gap-5 text-sm mt-5'>
                        <p className='dark:text-gray-200 text-gray-700'>Already have an account <Link href="/login" className='text-blue-500 hover:underline'>Login </Link></p>
                        {/* <Link href="/signup" className='text-blue-500 hover:underline'>Forget password</Link> */}
                    </div>

                </div>
            </section>
        </article>
    )
}

export default page
