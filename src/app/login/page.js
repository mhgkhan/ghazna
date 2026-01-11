import LoginFormComponent from '@/components/ui/auth/LoginFormComponent'
import Link from 'next/link'
import React from 'react'


export const metadata = {
  title: "Login || Login Page",
  description: "Login page of ghazna.dev. Enter your valid credientials to access your account",
  keywords: ["login", "ghazna.dev", "user login", "account access", "authentication"],
  author: "Ghazna Dev Team",
  alternates: {
    canonical: "https://ghazna.online/login",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1.0",
  charset: "UTF-8",
  ogTitle: "Login || Login Page",
  ogDescription: "Login page of ghazna.dev. Enter your valid credentials to access your account",
  ogType: "website",
  ogUrl: "https://ghazna.dev/login",
  ogImage: "https://ghazna.dev/assets/login-page-image.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Login || Login Page",
  twitterDescription: "Login page of ghazna.dev. Enter your valid credentials to access your account",
  twitterImage: "https://ghazna.dev/assets/login-page-image.png"
}


const page = () => {
  return (
    <article className="min-h-screen">
      <section className="w-full">
        <div className="md:w-[50%] w-[95%] mx-auto my-5 rounded-md p-4" >
          <h1 className="text-4xl font-bold">Login</h1>
          <p className="my-2 text-gray-700 dark:text-gray-200">Welcome back!, Enter your valid credientials to accees your account.</p>

          <LoginFormComponent />

          <div className='flex items-center md:flex-row flex-col justify-between gap-5 text-sm mt-5'>
            <p className='dark:text-gray-200 text-gray-700'>Not have an account <Link href="/signup" className='text-blue-500 hover:underline'>Register</Link></p>
            <Link href="/forget_password" className='text-blue-500 hover:underline'>Forget password</Link>
          </div>

        </div>
      </section>
    </article>
  )
}

export default page
