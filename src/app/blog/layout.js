

export const metadata = {
    title: "Blog || Explore the Latest Blogs and Articles on the Modern World",
    description: "Discover insightful blogs and articles about the modern world. Stay updated with the latest trends, ideas, and innovations.",
    keywords: "blogs, articles, modern world, trends, innovations, ideas, latest blogs",
    author: "Your Name or Blog Name",
    robots: "index, follow",
    openGraph: {
        title: "Blog || Explore the Latest Blogs and Articles on the Modern World",
        description: "Discover insightful blogs and articles about the modern world. Stay updated with the latest trends, ideas, and innovations.",
        url: "https://ghazna.vercel.app.com/blog",
        type: "website",
        locale: "en_US",
    },
};

export default async function BlogRootLayout({ children }) {
    return <>{children}</>
}