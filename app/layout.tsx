import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import GlowingCursor from "@/components/GlowingCursor";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jawumitech.com"),
  title: {
    default: "JawumiTech Software Agency",
    template: "%s | JawumiTech",
  },
  description:
    "JawumiTech transforms ideas into exceptional digital experiences. We deliver professional web development, UI/UX design, mobile apps, software solutions, and ongoing support for businesses globally.",
  keywords: [
    "software development",
    "web development",
    "UI/UX design",
    "mobile app development",
    "business automation",
    "e-commerce solutions",
    "digital transformation",
    "IT consulting",
  ],
  authors: [{ name: "JawumiTech" }],
  creator: "JawumiTech",
  publisher: "JawumiTech",
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
    url: "https://jawumitech.com",
    siteName: "JawumiTech",
    title: "JawumiTech - IT Solutions, Web & UI/UX Design",
    description:
      "Professional IT services for businesses including web development, UI/UX design, software solutions, and ongoing support. Delivering projects with quality, performance, and efficiency.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JawumiTech - Business IT Solutions",
      },
    ],
  },
  alternates: {
    canonical: "https://jawumitech.com",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="c0876b0e7a2b01c2"
        />

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

        {/* Structured Data for JawumiTech */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "JawumiTech",
              description:
                "JawumiTech provides client-focused IT solutions including web development, UI/UX design, software development, maintenance, and digital strategy.",
              url: "https://jawumitech.com",
              logo: "https://jawumitech.com/logo.png",
              founder: {
                "@type": "Person",
                name: "Jawad Haider",
                jobTitle: "Founder & Developer",
                url: "https://jawumitech.com/about",
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
        className={`${poppins.className} antialiased bg-black text-white`}
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
