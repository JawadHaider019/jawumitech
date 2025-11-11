import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import ScrollToTop from '@/components/ScrollToTop'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "Jawumi Tech - Custom Software, Web & POS Development",
    template: "%s | Jawumi Tech"
  },
  description: "Jawumi Tech delivers custom software solutions, web applications, POS systems, and mobile apps. End-to-end development with modern tech stack for startups and enterprises.",
  keywords: [
    "custom software development",
    "web application development", 
    "POS system development",
    "mobile app development", 
    "ecommerce solutions",
    "startup development", 
    "react development",
    "next.js development",
    "node.js development",
    "laravel development",
    "UI/UX design",
    "digital transformation",
    "business automation"
  ],
  authors: [{ name: "Jawumi Tech" }],
  creator: "Jawumi Tech",
  publisher: "Jawumi Tech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jawumitech.com",
    siteName: "Jawumi Tech",
    title: "Jawumi Tech - Custom Software, Web & POS Development",
    description: "Professional software development services including web apps, POS systems, mobile apps, and custom business solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jawumi Tech - Software Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jawumi Tech - Software Development Company",
    description: "Custom software, web apps, POS systems, and mobile app development services.",
    creator: "@jawumitech",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://jawumitech.com",
  },
  category: "technology",
  // Add Google verification here
  verification: {
    google: "c0876b0e7a2b01c2",
  },
  // Alternative method using other field
  other: {
    'google-site-verification': 'c0876b0e7a2b01c2',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="c0876b0e7a2b01c2" />
        
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Comprehensive Favicon Setup */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ADF802" />
        <meta name="msapplication-TileColor" content="#ADF802" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Structured Data for Software Development Company */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Jawumi Tech",
              "description": "Custom software development company specializing in web applications, POS systems, mobile apps, and business automation solutions.",
              "url": "https://jawumitech.com",
              "logo": "https://jawumitech.com/logo.png",
              "sameAs": [
                "https://twitter.com/jawumitech",
                "https://linkedin.com/company/jawumitech",
                "https://github.com/jawumitech"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+92-329-1927168",
                "contactType": "customer service",
                "areaServed": "Worldwide",
                "availableLanguage": ["en", "ur"]
              },
              "knowsAbout": [
                "Web Development",
                "Mobile App Development", 
                "POS Systems",
                "E-commerce Solutions",
                "Custom Software",
                "UI/UX Design",
                "Business Automation"
              ],
              "serviceType": [
                "Custom Software Development",
                "Web Application Development",
                "Mobile App Development",
                "POS System Development",
                "E-commerce Solutions",
                "UI/UX Design Services"
              ]
            })
          }}
        />
      </head>
      <body className={`${poppins.className} antialiased bg-black text-white`} suppressHydrationWarning>
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}