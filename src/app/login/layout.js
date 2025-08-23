
export const metadata = {
    title: "Login || Login Page",
    description: "Login page of ghazna.dev. Enter your valid credientials to access your account",
    keywords: ["login", "ghazna.dev", "user login", "account access", "authentication"],
    author: "Ghazna Dev Team",
    robots: {
        index: true,
        follow: true,
    },
    viewport: "width=device-width, initial-scale=1.0",
    charset: "UTF-8",
    ogTitle: "Login || Login Page",
    ogDescription: "Login page of ghazna.dev. Enter your valid credentials to access your account",
    ogType: "website",
    ogUrl: "https://ghazna.dev/login",
    ogImage: "https://ghazna.dev/assets/login-page-image.png",
    twitterCard: "summary_large_image",
    twitterTitle: "Login || Login Page",
    twitterDescription: "Login page of ghazna.dev. Enter your valid credentials to access your account",
    twitterImage: "https://ghazna.dev/assets/login-page-image.png"
}

export default async function LoginRootLayout({ children }) {
    return <>{children} </>
}