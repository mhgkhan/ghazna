


export const metadata = {
    title: "Blog | Explore the Latest Blogs and Articles on the Modern World",
    description:
        "Discover insightful blogs and articles about the modern world. Stay updated with the latest trends, ideas, and innovations.",
    keywords: [
        "blogs",
        "articles",
        "modern world",
        "trends",
        "innovations",
        "ideas",
        "latest blogs",
        "tech blogs",
        "web development blogs",
    ],
    authors: [{ name: "Muhammad Hasnain Ghazna" }],
    creator: "Muhammad Hasnain Ghazna",
    publisher: "Ghazna Blog",
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://ghazna.vercel.app/blog",
    },
    openGraph: {
        title: "Blog | Explore the Latest Blogs and Articles on the Modern World",
        description:
            "Discover insightful blogs and articles about the modern world. Stay updated with the latest trends, ideas, and innovations.",
        url: "https://ghazna.vercel.app/blog",
        siteName: "Ghazna Blog",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "https://ghazna.vercel.app/images/myProfile.png", // ✅ replace with your blog banner image
                width: 1200,
                height: 630,
                alt: "Latest Blogs and Articles on the Modern World",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog | Explore the Latest Blogs and Articles on the Modern World",
        description:
            "Stay updated with the latest blogs, trends, and innovations from the modern world. Read insightful articles on tech, ideas, and more.",
        images: ["https://ghazna.vercel.app/images/myProfile.jpg"], // ✅ same image
        site: "@ghaznadev", // replace if you have Twitter
        creator: "@ghaznadev",
    },
};



export default async function BlogRootLayout({ children }) {
    return <>{children}</>
}