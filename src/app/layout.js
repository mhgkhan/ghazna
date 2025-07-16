import { Poppins, Rubik } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cookies } from "next/headers";
import GoogleSiteVerification from "@/components/GoogleSiteVerification";
import FreezeEnv from "@/config/EnvConfig";

const rubikFont = Rubik({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const headingsFont = Poppins({
  variable: "--font-headings",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata = {
  title: "Ghazna | Muhammad Hasnain Ghazna | Fullstack Web Developer",
  description: "Muhammad Hasnain Ghazna, a skilled fullstack web developer specializing in modern web technology Javascript and their frameworks like NextJs, ReactJs, TailwindCSS, Nodejs, ExpressJs etc.",
  image: "/images/hero.jpg",
  url: "https://ghazna.dev",
  type: "website",
  keywords: [
    "ghazna", "ghazna.dev", "ghazna dev", "muhammad hasnain", "ghazna khan", "hasnain", "hasnain ghazna",
    "hasnain dev", "hasnain ghazna dev", "Muhammad Hasnain Ghazna",
    "Web Developer", "Fullstack Developer", "React Developer",
    "JavaScript Developer", "Portfolio", "Web Development Blog"
  ],
  author: "Muhammad Hasnain Ghazna",
  publisher: "Ghazna Dev",
  robots: "index, follow",
  og: {
    title: "Ghazna | Muhammad Hasnain Ghazna | Fullstack Web Developer",
    description: "Explore the portfolio and blog of Muhammad Hasnain Ghazna, a skilled fullstack web developer specializing in modern web technologies.",
    image: "/images/hero.jpg",
    url: "https://ghazna.dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghazna | Muhammad Hasnain Ghazna | Fullstack Web Developer",
    description: "Explore the portfolio and blog of Muhammad Hasnain Ghazna, a skilled fullstack web developer specializing in modern web technologies.",
    image: "/images/hero.jpg",
    site: "@ghaznadev",
  },
  viewport: "width=device-width, initial-scale=1.0",
  // themeColor: "#ffffff",
  graphc: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ghazna | Muhammad Hasnain Ghazna | Fullstack Web Developer",
    url: "https://ghazna.dev",
    description: "Explore the portfolio and blog of Muhammad Hasnain Ghazna, a skilled fullstack web developer specializing in modern web technologies.",
    publisher: {
      "@type": "Person",
      name: "Muhammad Hasnain Ghazna",
    },
    image: {
      "@type": "ImageObject",
      url: "/images/hero.jpg",
      width: 1200,
      height: 630,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://ghazna.dev/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
};

export default async function RootLayout({ children }) {


  const usercCookies = await cookies();
  const cookieName = usercCookies.get("USER_AUTH_TOKEN");


  return (
    <html lang="en" className="scroll-m-20 scroll-smooth">
      <head>
        <meta name="apple-mobile-web-app-title" content="Ghazna Dev" />
        <GoogleSiteVerification contentVal={FreezeEnv.GoogleSiteVerificationContent} />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${headingsFont.variable} ${rubikFont.variable} antialiased`}
      >
        <main className="dark:bg-gray-800 bg-white dark:text-white text-black min-h-screen pt-2">
          <Header isLogged={cookieName ? true : false} />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}