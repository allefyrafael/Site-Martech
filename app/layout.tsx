import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/layout/ScrollToTop"
import type { Metadata } from "next"
import { Suspense } from "react"
import FacebookPixelWrapper from "@/components/facebook-pixel-wrapper"

// Import hero section styles
import "../styles/hero-section.css"

const inter = Inter({ subsets: ["latin"] })

// Comprehensive favicon configuration for cross-browser compatibility
export const metadata: Metadata = {
  title: "Martech Team - Cursos de Software",
  description: "Cursos de software para celulares - Especialistas em MDM, FRP e iCloud",
  generator: "Martech Team",
  icons: {
    // Basic favicon - most important for cross-browser compatibility
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    // Apple Touch Icon
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
    // Shortcut icon
    shortcut: [{ url: "/favicon.ico" }],
    // Other icons for various browsers and devices
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/favicon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/favicon.png",
      },
    ],
  },
  // Web app manifest
  manifest: "/site.webmanifest",
  // Open Graph image for social sharing
  openGraph: {
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Martech Team - Cursos de Software",
      },
    ],
    siteName: "Martech Team",
  },
  // Twitter card image
  twitter: {
    card: "summary",
    images: ["/favicon.png"],
    site: "@MartechTeam",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Additional meta tags for better SEO and device compatibility */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/favicon.png" />

        {/* Legacy favicon link for maximum compatibility */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.png" />

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=750997919442336&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>
            <FacebookPixelWrapper />
          </Suspense>
          <ScrollToTop />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
