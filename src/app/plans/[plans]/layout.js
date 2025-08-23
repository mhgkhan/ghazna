
export const metadata = {
    title:"Our Plans || Services Pricing",
    description: "Explore our plans and pricing for services. Find the perfect plan that suits your needs with transparent pricing and detailed features.",
    keywords: ["plans", "pricing", "services", "subscription plans", "service pricing", "affordable plans"],
    author: "Your Company Name",
    viewport: "width=device-width, initial-scale=1.0",
    canonical: "https://ghazna.ercel.app/plans",
     robots: {
    index: true,
    follow: true,
  },
}

export default async function PlansLayout({children}) {
    return <>{children}</>
}