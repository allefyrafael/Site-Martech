"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import SocialConnectSection from "@/components/sections/SocialConnectSection"
import AboutPage from "@/components/sections/about/AboutPage"

// Component to handle scrolling to sections
function ScrollToSection() {
  const searchParams = useSearchParams()
  const section = searchParams.get("section")

  useEffect(() => {
    // Check if we have a section parameter
    if (section) {
      // If section is "nossos-cursos", redirect to home page with the section parameter
      if (section === "nossos-cursos") {
        window.location.href = `/?section=${section}`
        return
      }

      // Otherwise try to find the section on this page
      const element = document.getElementById(section)
      if (element) {
        // Add a small delay to ensure the page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
        }, 500)
      }
    }
    // Also check if we have a hash in the URL
    else if (window.location.hash) {
      // Remove the # character
      const id = window.location.hash.substring(1)

      // Give the DOM time to render
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 500)
    }
  }, [section])

  return null
}

export default function SobreNosPage() {
  return (
    <div className="flex min-h-screen flex-col" key="MartechTeam-sobre-nos">
      {/* Add the scroll handler */}
      <ScrollToSection />

      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Página Sobre Nós Unificada */}
        <AboutPage />

        {/* Social Connect Section */}
        <SocialConnectSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
