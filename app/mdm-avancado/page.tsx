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
import BlackNovemberBanner from "@/components/sections/BlackNovemberBanner"
import CountdownTimer from "@/components/sections/CountdownTimer"
import BlackNovemberEffects from "@/components/sections/BlackNovemberEffects"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight } from "lucide-react"

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
    <div className="flex min-h-screen flex-col" key="MartechTeam-mdm-avancado">
      {/* Black November Banner */}
      <BlackNovemberBanner />
      
      {/* Add the scroll handler */}
      <ScrollToSection />

      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          title="MDM DO BÁSICO AO <span class='text-gradient bg-gradient-to-r from-red-400 via-martech-orange to-martech-yellow bg-clip-text text-transparent'>AVANÇADO</span>"
          description="🔥 Aprenda absolutamente tudo sobre remoções MDM, desde conceitos básicos até técnicas avançadas de EMMC, UFS e microsoldagem. Tecnologia de ponta ao seu alcance!"
          badge="🚀 BLACK NOVEMBER - 70% OFF 🚀"
          videoUrl="https://player.vimeo.com/video/1064525054?h=e05849844a&autoplay=1&loop=1&muted=1"
          videoTitle="APRESENTAÇÃO CURSO MDM AVANÇADO"
          features={[
            "🌐 Acesso direto aos melhores servidores",
            "🛠️ Suporte técnico até Dezembro de 2025",
            "👥 Comunidade VIP exclusiva",
            "🎁 3 bônus especiais inclusos",
          ]}
          page="course"
          backgroundVariant="course"
          primaryColor="rgba(147,51,234,0.15)" // Roxo para MDM Avançado
          secondaryColor="rgba(79,70,229,0.12)"
          tertiaryColor="rgba(255,255,0,0.1)"
        />

        {/* Contador Black November */}
        <section className="py-12 bg-gradient-to-b from-black to-martech-darkgray relative overflow-hidden">
          <BlackNovemberEffects />
          <div className="container relative z-10">
            <CountdownTimer />
          </div>
        </section>

        {/* Seção de Investimento - Black November */}
        <section className="py-16 bg-gradient-to-b from-martech-darkgray to-black relative overflow-hidden" id="precos">
          <BlackNovemberEffects />
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-martech-darkgray to-transparent z-10"></div>
          <div className="absolute -top-10 right-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 left-1/3 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-400"></div>

          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="bg-gradient-to-r from-red-600 to-red-700 text-white font-bold mb-4 px-4 py-1.5 animate-pulse">
                BLACK NOVEMBER - OFERTA LIMITADA
              </Badge>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-red-400">MAIS DE 70% OFF</span> - APENAS R$ 297,00
              </h2>
              <p className="text-gray-300">🔥 Promoção válida até 31 de dezembro - Não perca!</p>
            </div>

            <div className="max-w-2xl mx-auto">
              {/* Plano Único Black November */}
              <div className="bg-gradient-to-b from-red-900/30 to-black border border-red-500/30 rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(239,68,68,0.4)] relative">
                <div className="bg-gradient-to-r from-red-600 to-red-700 py-3 px-4">
                  <h3 className="text-white font-bold text-center text-lg">🔥 BLACK NOVEMBER - ACESSO COMPLETO</h3>
                </div>
                <div className="p-8">
                  <div className="text-center mb-8">
                    <p className="text-gray-400 text-sm mb-2">
                      De <span className="line-through text-lg text-red-600 font-semibold decoration-2 decoration-red-600">R$ 1.000,00</span> por apenas:
                    </p>
                    <div className="text-5xl font-bold mb-3" style={{
                      background: 'linear-gradient(135deg, #FBBF24, #F59E0B, #9333EA)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textShadow: '0 0 20px rgba(251, 191, 36, 0.5), 0 0 40px rgba(147, 51, 234, 0.3)',
                    }}>
                      R$ 297,00
                    </div>
                    <Badge className="bg-green-600/20 text-green-400 border border-green-500/50 hover:bg-blue-400/20 hover:text-blue-300 hover:border-blue-400/50 transition-all duration-300 cursor-pointer text-sm px-3 py-1">
                      Economia de R$ 703,00 (70% OFF)
                    </Badge>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 font-medium">Acesso completo até o final do ano</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 font-medium">Suporte até dezembro de 2025</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 font-medium">Acesso a todos os módulos</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 font-medium">Certificado digital de conclusão</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 font-medium">Atualizações gratuitas</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 font-medium">Garantia de 7 dias</span>
                    </div>
                  </div>

                  <a
                    href="https://pay.hotmart.com/F87621340K?checkoutMode=6&off=swo1f3w6&offDiscount=BLACKNOVEMBER"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full relative group"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-700 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                    <Button className="relative w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-600 text-white font-bold py-4 text-lg shadow-lg">
                      🔥 GARANTIR OFERTA BLACK NOVEMBER
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Guarantee section */}
            <div className="mt-12 max-w-3xl mx-auto bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-12 w-12 text-purple-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Garantia de 7 dias</h3>
                <p className="text-gray-300">
                  Se você não ficar satisfeito com o conteúdo nos primeiros 7 dias, devolvemos 100% do seu investimento,
                  sem perguntas. Nossa confiança na qualidade do material é total.
                </p>
              </div>
            </div>
          </div>

          {/* Adicionar divisor de seção característico */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <div className="relative h-12">
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-1/2 h-12 bg-gradient-to-b from-purple-500/10 to-transparent blur-xl"></div>
            </div>
          </div>
        </section>

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
