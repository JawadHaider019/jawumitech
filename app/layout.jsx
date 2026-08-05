import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import GlowingCursor from "@/components/GlowingCursor";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://Jawumitech.com"),
  title: {
    default: "Jawumitech Software Agency",
    template: "%s | Jawumitech",
  },
  description:
    "Jawumitech transforms ideas into exceptional digital experiences. We deliver professional web development, UI/UX design, software solutions, and ongoing support for businesses.",
  keywords: [
    "software development",
    "web development",
    "UI/UX design",
    "business automation",
    "e-commerce solutions",
    "digital transformation",
    "IT consulting",
  ],
  authors: [{ name: "Jawumitech" }],
  creator: "Jawumitech",
  publisher: "Jawumitech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://Jawumitech.com",
    siteName: "Jawumitech",
    title: "Jawumitech Software Agency",
    description:
      "Professional IT services for businesses including web development, UI/UX design, software solutions, and ongoing support. Delivering projects with quality, performance, and efficiency.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jawumitech - Business IT Solutions",
      },
    ],
  },
  alternates: {
    canonical: "https://Jawumitech.com",
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="c0876b0e7a2b01c2" />

        {/* Preload Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="/favicon-48x48.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#bff747" />
        <meta name="msapplication-TileColor" content="#bff747" />

        {/* Structured Data for Jawumitech */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Jawumitech",
              description:
                "Jawumitech provides client-focused IT solutions including web development, UI/UX design, software development, maintenance, and digital strategy.",
              url: "https://Jawumitech.com",
              logo: "https://Jawumitech.com/logo.png",
              founder: {
                "@type": "Person",
                name: "Jawad Haider",
                jobTitle: "Founder & Developer",
                url: "https://Jawumitech.com/about",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+92-329-1927168",
                contactType: "customer service",
                areaServed: "Worldwide",
                availableLanguage: ["en", "ur"],
              },
              knowsAbout: [
                "Web Development",
                "UI/UX Design",
                "Software Development",
                "Maintenance & Support",
                "Digital Strategy",
                "E-commerce Solutions",
              ],
              serviceType: [
                "Web Development",
                "UI/UX Design",
                "Software Development",
                "IT Maintenance & Support",
                "Digital Strategy Consulting",
                "Social Media Management",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${plusJakartaSans.className} antialiased bg-white text-slate-900`}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
        <GlowingCursor />
        <Footer />
      </body>
    </html>
  );
}
