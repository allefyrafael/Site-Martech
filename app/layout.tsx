import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/layout/ScrollToTop"
import { Suspense } from "react"
import FacebookPixelWrapper from "@/components/facebook-pixel-wrapper"

// Import hero section styles
import "../styles/hero-section.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <title>Martech Cursos de Software</title>
        <meta name="description" content="Cursos de software para celulares - Especialistas em MDM, FRP e iCloud" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon como base64 diretamente no HTML - isso vai funcionar imediatamente */}
        <link
          rel="icon"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTAzLTIwVDEwOjA4OjE3LTAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0wMy0yMFQxMDoxMDoxMC0wMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wMy0yMFQxMDoxMDoxMC0wMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3YzY4ZDQzMC1jZjU1LTI1NDQtOWIzZC1mNzVhZjRlMzEzNzMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5ZDFkYzYzYi1jMDM0LWE2NDctOTQ2ZC1mZWE1OTJmMzM5ZTAiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3YzFiMjJiZS1lMzRmLTZiNDMtOGU2ZC1iNDcwNWM1NWYxMzEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjdjMWIyMmJlLWUzNGYtNmI0My04ZTZkLWI0NzA1YzU1ZjEzMSIgc3RFdnQ6d2hlbj0iMjAyMy0wMy0yMFQxMDowODoxNy0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3YzY4ZDQzMC1jZjU1LTI1NDQtOWIzZC1mNzVhZjRlMzEzNzMiIHN0RXZ0OndoZW49IjIwMjMtMDMtMjBUMTA6MTA6MTAtMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7Yd2MgAAADDElEQVR4nO2bTUhUURTHf6OWZUaLwlZBRVC0KoKgRQstrIjaFBRUVLRpE0RQQUEfq6AggqJNH9CqKKiVRdGXBUVRtCgIKloUFUVRkZaVjU7L5r1hGOc9Z+a+92bGew/+MKP3zrn3/O+5H/NmRsiyLAoVxbwdyDcKHgDfDhQVCh4A3w4UFQoeAN8OFBUKHgDfDhQVCh4A3w4UFQoeAN8OFBUKHgDfDhQVCh4A3w4UFQoeAN8OFBUKHgDfDhQVCh4A3w4UFQoeAN8OFBUKHgDfDhQVCh4A3w4UFQoeAN8OFBUKHgDfDhQVCh4A3w4UFQoeAN8OFBUKHgDfDhQVCh4A3w4UFQoeAN8OFBUKHgDfDhQVCh4A3w4UFQoeAN8OFBUKHgDfDhQVCh4A3w4UFQoeAN8OFBUKHgDfDhQVCh4A3w4UFQoeAN8OFBUKHgDfDhQVCh4A3w4UFQoeAN8OFBUKHgDfDhQVCh4A3w4UFQoeAN8OFBUKHgDfDhQVCh4A3w4UFQoeAN8OFBUKHgDfDhQVCh4A3w4UFQoeAN8OFBUKHgDfDhQVCh4A3w4UFQoeAN8OFBUKHgDfDhQVCh4A3w4UFQoeAN8OFBUKHgDfDhQVCh4A3w4UFQoeAN8OFBUKHgDfDhQVCh4A3w4UFQoeAN8OFBUKHgDfDhQVCh4A3w4UFQoeAN8OFBUKHgDfDhQVCh4A3w4UFQoeAN8OFBUKHgDfDhQVCh4A3w4UFQoeAN8OFBUKHgDfDhQVCh4A3w4UFQoeAN8OFBUKHgDfDhQVCh4A3w4UFQoeAN8OFBUKHgDfDhQVCh4A3w4UFQoeAN8OFBUKHgDfDhQVCh4A3w4UFQoeAN8OFBUKHgDfDhQVCh4A3w4UFQoeAN8OFBUKHgDfDhQVCh4A3w4UFQoeAN8OFBUKHgDfDhQVCh4A3w4UFQoeAN8OFBUKHgDfDhQVCh4A3w4UFQoeAN8OFBUKHgDfDhQVCh4A3w4UFQoeAN8OFBUKHgDfDhQVCh4A3w4UFQoeAN8OFBUKHgDfDhQVCh4A3w4UFQoeAN8OFBUKHgDfDhQVCh4A3w4UFf4BgTcYAw0V8AAAAAAASUVORK5CYII="
        />

        {/* Facebook Pixel noscript */}
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

