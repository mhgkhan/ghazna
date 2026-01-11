import { Poppins, Rubik } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cookies } from "next/headers";
import FreezeEnv from "@/config/EnvConfig";
import GoogleAdsenceComponent from "@/components/ui/blog/blogforms/GoogleAdsenceComponent";
import GoogleSiteVerification from "@/components/GoogleSiteVerification";

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
  metadataBase: new URL("https://ghazna.online/"),
  title: "Muhammad Hasnain Ghazna | Ghazna Dev",
  description:
    "Portfolio of Muhammad Hasnain (Ghazna), a full-stack web developer skilled in MERN, Next.js & Node.js, showcasing projects and blogs.",
  keywords: [
    "ghazna", "https://ghazna.online/", "ghazna dev", "muhammad hasnain", "ghazna khan",
    "hasnain", "hasnain ghazna", "hasnain dev", "hasnain ghazna dev",
    "Muhammad Hasnain Ghazna", "Web Developer", "Fullstack Developer",
    "React Developer", "JavaScript Developer", "Portfolio", "Web Development Blog"
  ],
  authors: [{ name: "Muhammad Hasnain Ghazna" }],
  creator: "Muhammad Hasnain Ghazna",
  publisher: "Ghazna Dev",

  openGraph: {
    title: "Ghazna Dev | Muhammad Hasnain Ghazna | Fullstack Web Developer",
    description:
      "Explore the portfolio and blog of Muhammad Hasnain Ghazna, a skilled fullstack web developer specializing in modern web technologies.",
    url: "https://ghazna.online/",
    siteName: "Ghazna Portfolio",
    images: [
      {
        url: "https://ghazna.online/images/hero.jpg",
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
    title: "Ghazna Dev | Muhammad Hasnain Ghazna | Fullstack Web Developer",
    description:
      "Explore the portfolio and blog of Muhammad Hasnain Ghazna, a skilled fullstack web developer specializing in modern web technologies.",
    images: ["https://ghazna.online/images/hero.jpg"],
    site: "@ghaznadev",
    creator: "@ghaznadev",
  },

  alternates: {
    canonical: "https://ghazna.online/",
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



export default async function RootLayout({ children }) {


  const usercCookies = await cookies();
  const cookieName = usercCookies.get("USER_AUTH_TOKEN");


  return (
    <html lang="en" className="scroll-m-20 scroll-smooth">
      <head>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Ghazna Dev | Muhammad Hasnain Ghazna | Fullstack Web Developer",
              url: "https://ghazna.online/",
              description:
                "Explore the portfolio and blog of Muhammad Hasnain Ghazna, a skilled fullstack web developer specializing in modern web technologies.",
              publisher: {
                "@type": "Person",
                name: "Muhammad Hasnain Ghazna",
              },
              image: {
                "@type": "ImageObject",
                url: "https://ghazna.online/images/hero.jpg",
                width: 1200,
                height: 630,
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://ghazna.online/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />


        <meta name="apple-mobile-web-app-title" content="Ghazna Dev" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" ></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" ></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" ></link>
        <meta name="msvalidate.01" content="73AD4F6854D89DF13F9CCC49174C42AB" />
        <GoogleSiteVerification contentVal={FreezeEnv.GoogleSiteVerificationContent} />
        <GoogleAdsenceComponent pubid={FreezeEnv.ADPUBID} />

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