

export const metadata = {
    title: "Blog || Explore the Latest Blogs and Articles on the Modern World",
    description: "Discover insightful blogs and articles about the modern world. Stay updated with the latest trends, ideas, and innovations.",
    keywords: "blogs, articles, modern world, trends, innovations, ideas, latest blogs",
    author: "Your Name or Blog Name",
    viewport: "width=device-width, initial-scale=1.0",
    robots: "index, follow",
    charset: "UTF-8",
    language: "en-US",
    openGraph: {
        title: "Blog || Explore the Latest Blogs and Articles on the Modern World",
        description: "Discover insightful blogs and articles about the modern world. Stay updated with the latest trends, ideas, and innovations.",
        url: "https://yourwebsite.com/blog",
        type: "website",
        locale: "en_US",
        site_name: "Your Blog Name",
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog || Explore the Latest Blogs and Articles on the Modern World",
        description: "Discover insightful blogs and articles about the modern world. Stay updated with the latest trends, ideas, and innovations.",
        site: "@yourtwitterhandle",
        creator: "@yourtwitterhandle",
    },
};

export default async function BlogRootLayout({ children }) {
    return <>{children}</>
}