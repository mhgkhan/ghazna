import React from 'react'

export const metadata = {
    title: "Projects || ghazna.dev",
    description: "Explore all my previous production work, projects, and more. Find everything here easily.",
    keywords: ["projects", "portfolio", "ghazna.dev", "production work", "web development", "software projects"],
    author: "Ghazna",
    robots: {
        index: true,
        follow: true,
    },
    viewport: "width=device-width, initial-scale=1.0",
    charset: "UTF-8",
    openGraph: {
        title: "Projects || ghazna.dev",
        description: "Explore all my previous production work, projects, and more. Find everything here easily.",
        url: "https://ghazna.dev/projects",
        type: "website",
        locale: "en_US",
        site_name: "ghazna.dev",
    },
    twitter: {
        card: "summary_large_image",
        title: "Projects || ghazna.dev",
        description: "Explore all my previous production work, projects, and more. Find everything here easily.",
        site: "@ghazna",
        creator: "@ghazna",
    },
};

export default async function ProjectRootLayout({ children }) {
    return (
        <>{children}</>
    )
}

