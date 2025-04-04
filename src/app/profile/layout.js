// import Header from "@/components/Header";

import ProfileSidebar from "@/components/ui/profile/ProfileSidebar";


export default async function ProfileRootLayout({ children }) {
    return <>
        <div className="flex items-center justify-between w-full my-5 h-full gap-5 relative">
           <ProfileSidebar />
            <article className="w-full bg-blue-900 p-2 relative">
                {children}
            </article>
        </div>
    </>
}

