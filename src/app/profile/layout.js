// import Header from "@/components/Header";


export default async function ProfileRootLayout({ children }) {
    return <>
        <div className="flex items-center justify-between w-full my-5 h-full gap-5">
            <aside className="w-[200px] h-full bg-blue-900">
                this is aside
            </aside>
            <article className="w-full bg-blue-900 p-2">
                {children}
            </article>
        </div>
    </>
}

