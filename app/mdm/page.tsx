"use client"

import HeroSection from "@/components/sections/HeroSection"
import MDMSection from "@/components/sections/MDMSection"
import BrandsSection from "@/components/sections/BrandsSection"
import FeaturesSection from "@/components/sections/FeaturesSection"
import BonusSection from "@/components/sections/BonusSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import PricingSection from "@/components/sections/PricingSection"
import FAQSection from "@/components/sections/FAQSection"
import ContactSection from "@/components/sections/ContactSection"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { useEffect } from "react"
import { useSearchParams } from "next/navigation"

// Component to handle scrolling to sections
function ScrollToSection() {
  const searchParams = useSearchParams()
  const section = searchParams.get("section")

  useEffect(() => {
    if (section) {
      // If section is "nossos-cursos", redirect to home page with the section parameter
      if (section === "nossos-cursos") {
        window.location.href = `/?section=${section}`
        return
      }

      // Simple approach that was working before
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

export default function MDMCoursePage() {
  return (
    <div className="flex min-h-screen flex-col" key="MartechTeam-mdm">
      {/* Add the scroll handler */}
      <ScrollToSection />

      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          title="CURSO DE MDM <span class='text-martech-blue'>MAIS COMPLETO</span> DO BRASIL"
          description="Aprenda a utilizar as melhores ferramentas e servidores existentes no mundo, e solucionar mais de 90% dos aparelhos do mercado."
          badge="CURSO 100% ATUALIZADO"
          videoUrl="https://player.vimeo.com/video/1064524980?h=1407b31d02&autoplay=1&loop=1&muted=1"
          videoTitle="APRESENTAÇÃO CURSO REMOÇÃO MDM"
          features={[
            "Acesso direto aos melhores servidores",
            "Suporte até Dezembro de 2025",
            "Comunidade VIP exclusiva",
            "3 bônus especiais inclusos",
          ]}
          page="mdm"
        />

        {/* MDM Nível I Section */}
        <MDMSection />

        {/* Principais Marcas Section */}
        <BrandsSection />

        {/* O que você vai aprender */}
        <FeaturesSection />

        {/* Bônus */}
        <BonusSection />

        {/* Depoimentos */}
        <TestimonialsSection />

        {/* Preços */}
        <PricingSection />

        {/* FAQ */}
        <FAQSection />

        {/* Contato */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

