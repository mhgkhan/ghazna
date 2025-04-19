import Footer from "@/components/Footer";
import ProfileSidebar from "@/components/ui/profile/ProfileSidebar";


export default async function ProfileRootLayout({ children }) {
    return <>
        <html lang="en" className="dark:text-white text-black">
            <body>
                <main className="min-h-screen bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
                    <div className="flex items-start justify-between w-full h-full md:gap-3 gap-1 relative">
                        <ProfileSidebar />
                        <article className="w-full h-full p-2 relative py-5 rounded-md">
                            {children}
                        </article>
                    </div>
                    <Footer />
                </main>
            </body>
        </html>
    </>
}