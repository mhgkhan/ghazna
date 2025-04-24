

export default async function ProfileRootLayout({ children }) {
    return <>
        <article className="min-h-screen">
            {children}
        </article>
    </>
}