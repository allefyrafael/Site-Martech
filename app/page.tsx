"use client"

import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/sections/HeroSection"
import FeaturedCoursesSection from "@/components/sections/FeaturedCoursesSection"
import AboutSection from "@/components/sections/AboutSection"
import ContactSection from "@/components/sections/ContactSection"
import CertificationPartnersSection from "@/components/sections/CertificationPartnersSection"
import { useEffect } from "react"
import { useSearchParams } from "next/navigation"

// Component to handle scrolling to sections
function ScrollToSection() {
  const searchParams = useSearchParams()
  const section = searchParams.get("section")

  useEffect(() => {
    if (section) {
      const element = document.getElementById(section)
      if (element) {
        // Add a small delay to ensure the page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
        }, 500)
      }
    }
  }, [section])

  return null
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col" key="MartechTeam-home">
      {/* Add the scroll handler */}
      <ScrollToSection />

      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          title="CURSOS DE <span class='text-martech-yellow'>SOFTWARE</span> PARA CELULARES"
          description="Aprenda as técnicas mais avançadas de reparo de software para celulares e transforme sua carreira."
          badge="CURSOS ATUALIZADOS"
          features={[
            "Acesso a todos os cursos",
            "Suporte especializado",
            "Comunidade exclusiva",
            "Certificado de conclusão",
          ]}
          page="home"
        />

        {/* Featured Courses Section */}
        <FeaturedCoursesSection />

        {/* Certification Partners Section */}
        <CertificationPartnersSection />

        {/* About Section */}
        <AboutSection />

        {/* Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

