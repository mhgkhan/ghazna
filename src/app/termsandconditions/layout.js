
export const metadata = {
    title: "Terms & Conditions || Ghazna.dev",
    description: "Read the terms and conditions of Ghazna.dev to understand the rules and regulations for using our services.",
    keywords: ["Terms and Conditions", "Ghazna.dev", "User Agreement", "Service Terms", "Legal Information"],
    robots: {
        index: true,
        follow: true,
    },
}

export default async function TermsandConditions({ children }) {
    return <>{children}</>
}