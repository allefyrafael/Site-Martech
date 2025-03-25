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

export const metadata: Metadata = {
  title: "Martech Cursos de Software",
  description: "Cursos de software para celulares - Especialistas em MDM, FRP e iCloud",
  generator: "MartechTeam",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon.ico",
        sizes: "any",
      },
    ],
    apple: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-32x32.png",
      },
    ],
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android-icon-192x192.png",
      },
    ],
  },
  manifest: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/site.webmanifest",
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
        <meta
          name="msapplication-TileImage"
          content="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ms-icon-144x144.png"
        />
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



import './globals.css'