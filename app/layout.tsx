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
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-02-15%20%C3%A0%28s%29%2015.49.18_bbd04fea.jpg-xWUYbgk2gnUNA3USSav9poS4bVhbUm.jpeg",
        sizes: "any",
      },
    ],
    apple: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-02-15%20%C3%A0%28s%29%2015.49.18_bbd04fea.jpg-xWUYbgk2gnUNA3USSav9poS4bVhbUm.jpeg",
        sizes: "180x180",
        type: "image/jpeg",
      },
    ],
    shortcut: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-02-15%20%C3%A0%28s%29%2015.49.18_bbd04fea.jpg-xWUYbgk2gnUNA3USSav9poS4bVhbUm.jpeg",
      },
    ],
    other: [
      {
        rel: "icon",
        type: "image/jpeg",
        sizes: "16x16",
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-02-15%20%C3%A0%28s%29%2015.49.18_bbd04fea.jpg-xWUYbgk2gnUNA3USSav9poS4bVhbUm.jpeg",
      },
      {
        rel: "icon",
        type: "image/jpeg",
        sizes: "32x32",
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-02-15%20%C3%A0%28s%29%2015.49.18_bbd04fea.jpg-xWUYbgk2gnUNA3USSav9poS4bVhbUm.jpeg",
      },
      {
        rel: "icon",
        type: "image/jpeg",
        sizes: "192x192",
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-02-15%20%C3%A0%28s%29%2015.49.18_bbd04fea.jpg-xWUYbgk2gnUNA3USSav9poS4bVhbUm.jpeg",
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