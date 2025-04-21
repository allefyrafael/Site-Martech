"use client"

import HeroSection from "@/components/sections/HeroSection"
import FRPSection from "@/components/sections/FRPSection"
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

export default function FRPCoursePage() {
  return (
    <div className="flex min-h-screen flex-col" key="MartechTeam-frp">
      {/* Add the scroll handler */}
      <ScrollToSection />

      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          title="CURSO DE FRP E ICLOUD <span class='text-green-400'>MAIS COMPLETO</span> DO BRASIL"
          description="Aprenda a utilizar as melhores ferramentas físicas e digitais para desbloqueios, com acesso direto aos servidores mais efetivos do mundo."
          badge="CURSO 100% ATUALIZADO"
          videoUrl="https://player.vimeo.com/video/1064525027?h=1abefc6443&autoplay=1&loop=1&muted=1"
          videoTitle="APRESENTAÇÃO CURSO FRP E ICLOUD"
          features={[
            "Acesso direto aos melhores servidores",
            "Suporte até Dezembro de 2025",
            "Comunidade VIP exclusiva",
            "3 bônus especiais inclusos",
          ]}
          page="course"
          backgroundVariant="course"
          primaryColor="rgba(34,197,94,0.15)" // Verde para FRP
          secondaryColor="rgba(255,127,0,0.12)"
          tertiaryColor="rgba(255,255,0,0.1)"
        />

        {/* FRP Section */}
        <FRPSection />

        {/* Principais Marcas Section */}
        <BrandsSection />

        {/* O que você vai aprender */}
        <FeaturesSection courseType="frp" />

        {/* Bônus */}
        <BonusSection courseType="frp" />

        {/* Depoimentos */}
        <TestimonialsSection />

        {/* Preços */}
        <PricingSection courseType="frp" />

        {/* FAQ */}
        <FAQSection courseType="frp" />

        {/* Contato */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
