
export const metadata = {
    metadataBase: new URL("https://ghazna.vercel.app/"),
    title: "Login | Ghazna Dev",
    description: "Login to your Ghazna Dev account to access exclusive features and content.",
    keywords: [
        "login", "ghazna", "ghazna dev", "muhammad hasnain", "hasnain ghazna",
        "Muhammad Hasnain Ghazna", "Web Developer", "Fullstack Developer",
        "React Developer", "JavaScript Developer", "Portfolio", "Web Development Blog"
    ],
    authors: [{ name: "Muhammad Hasnain Ghazna" }],
    creator: "Muhammad Hasnain Ghazna",
    publisher: "Ghazna Dev",

    openGraph: {
        title: "Login | Ghazna Dev",
        description: "Login to your Ghazna Dev account to access exclusive features and content.",
        url: "https://ghazna.vercel.app/login",
        siteName: "Ghazna Portfolio",
        images: [
            {
                url: "https://ghazna.vercel.app/images/hero.jpg",
                width: 1200,
                height: 630,
                alt: "Muhammad Hasnain Ghazna Portfolio",
            },
        ],
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Login | Ghazna Dev",
        description: "Login to your Ghazna Dev account to access exclusive features and content.",
        images: ["https://ghazna.vercel.app/images/hero.jpg"],
        site: "@ghaznadev",
        creator: "@ghaznadev",
    },
    alternates: {
        canonical: "https://ghazna.vercel.app/login",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
        },
    },
};

export default async function LoginRootLayout({ children }) {
    return <>{children} </>
}