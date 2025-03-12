"use client"

import HeroSection from "@/components/sections/HeroSection"
import MDMAdvancedSection from "@/components/sections/MDMAdvancedSection"
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

export default function MDMAdvancedCoursePage() {
  return (
    <div className="flex min-h-screen flex-col" key="mdm-avancado-page">
      {/* Add the scroll handler */}
      <ScrollToSection />

      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          title="MDM DO BÁSICO AO <span class='text-purple-400'>AVANÇADO</span>"
          description="Aprenda absolutamente tudo sobre remoções MDM, desde conceitos básicos até técnicas avançadas de EMMC, UFS e microsoldagem."
          badge="CURSO PREMIUM"
          videoUrl="https://player.vimeo.com/video/1064525054?h=e05849844a&autoplay=1&loop=1&muted=1"
          videoTitle="APRESENTAÇÃO CURSO MDM AVANÇADO"
          features={[
            "Acesso direto aos melhores servidores",
            "Suporte até Dezembro de 2025",
            "Comunidade VIP exclusiva",
            "3 bônus especiais inclusos",
          ]}
          page="course"
          backgroundVariant="course"
          primaryColor="rgba(147,51,234,0.15)" // Roxo para MDM Avançado
          secondaryColor="rgba(79,70,229,0.12)"
          tertiaryColor="rgba(255,255,0,0.1)"
        />

        {/* MDM Avançado Section */}
        <MDMAdvancedSection />

        {/* Principais Marcas Section */}
        <BrandsSection />

        {/* O que você vai aprender */}
        <FeaturesSection courseType="mdm" />

        {/* Bônus */}
        <BonusSection />

        {/* Depoimentos */}
        <TestimonialsSection />

        {/* Preços */}
        <PricingSection courseType="mdm-avancado" priceComplete="800,00" priceBasic="490,00" />

        {/* FAQ */}
        <FAQSection courseType="mdm-avancado" />

        {/* Contato */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

