import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/layout/ScrollToTop"
import type { Metadata } from "next"

// Import hero section styles
import "../styles/hero-section.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Martech Cursos de Software",
  description: "Cursos de software para celulares",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ScrollToTop />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'