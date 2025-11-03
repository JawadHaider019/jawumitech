import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import ScrollToTop from '@/components/ScrollToTop'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: 'swap', // Better performance
})

export const metadata: Metadata = {
  title: {
    default: "Jawumi Tech - Digital Solutions for Startups",
    template: "%s | Jawumi Tech"
  },
  description: "We help startups and businesses build their digital future with cutting-edge web and app solutions.",
  keywords: ["web development", "startups", "digital solutions", "app development"],
  authors: [{ name: "Jawumi Tech" }],
  creator: "Jawumi Tech",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/favicon.png',
  },
  manifest: '/manifest.json', // Optional: for PWA
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased bg-black text-white`} suppressHydrationWarning>
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}