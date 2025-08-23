
export const metadata = {
    title:"Privacy-Policy || Ghazna.dev",
    description: "Read the privacy policy of Ghazna.dev to understand how we handle your data and ensure your privacy.",
    keywords: ["Privacy Policy", "Ghazna.dev", "Data Privacy", "User Data", "Privacy Practices"],
    author: "Ghazna.dev",
   robots: {
    index: true,
    follow: true,
  },
    viewport: "width=device-width, initial-scale=1.0",
    charset: "UTF-8"
}

export default async function PrivacyPolicy({children}) {
    return <>{children}</>
}