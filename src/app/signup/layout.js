
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

export default async function RegisterRootLayout({children}) {
    return <>{children}</>
}