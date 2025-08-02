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
  const [countdown, setCountdown] = useState({
    days: 3,
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  // Effect for countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return { days: 3, hours: 23, minutes: 59, seconds: 59 } // Reset when reaches zero
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex min-h-screen flex-col" key="MartechTeam-mdm-avancado">
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

        {/* Seção de Investimento - Padronizada */}
        <section className="py-16 bg-black relative" id="precos">
          {/* Adicionar elementos de fundo característicos */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent"></div>
          <div className="absolute -top-10 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 left-1/3 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400"></div>

          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="bg-gradient-to-r from-purple-500 to-purple-400 text-white font-bold mb-4 px-4 py-1.5">
                INVESTIMENTO
              </Badge>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">ESCOLHA SEU PLANO DE ACESSO</h2>
              <p className="text-gray-300">Invista em seu conhecimento e multiplique seus ganhos</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Premium Plan */}
              <div className="bg-gradient-to-b from-purple-900/30 to-black border border-purple-500/30 rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(147,51,234,0.3)]">
                <div className="bg-gradient-to-r from-purple-500 to-purple-400 py-2 px-4">
                  <h3 className="text-white font-bold text-center">ACESSO PREMIUM</h3>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <p className="text-gray-400 text-sm">
                      De <span className="line-through">R$ 5.000,00</span> por apenas:
                    </p>
                    <div className="text-4xl font-bold text-purple-400 mb-2">R$ 800,00</div>
                    <Badge className="bg-purple-500/20 text-purple-400 border border-purple-500/30">
                      Economia de R$ 4.200,00
                    </Badge>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">Acesso por 5 anos completos</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">Suporte VIP até dezembro de 2025</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">Lives semanais exclusivas</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">Acesso a todos os módulos</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">Certificado digital de conclusão</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">Atualizações gratuitas</span>
                    </div>
                  </div>

                  <a
                    href="https://pay.hotmart.com/F87621340K?sck=HOTMART_MEM_CA&off=swo1f3w6&offDiscount=cna-20.00-ue1ok6dn&hotfeature=32&_gl=1*1r1jimo*_gcl_au*MTk4MTc0ODI1MS4xNzQwOTUzNzcz*_ga*MjE0Mzc5NDE3OC4xNzQwOTUzNzcz*_ga_GQH2V1F11Q*MTc0NTI3MjkzMS4zOS.xLjE3NDUyNzQwODQuNTkuMC4w&bid=1745274100318"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-400 hover:from-purple-400 hover:to-purple-500 text-white font-bold py-3 text-lg">
                      QUERO O ACESSO PREMIUM
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>

              {/* Standard Plan */}
              <div className="bg-gradient-to-b from-gray-900/30 to-black border border-gray-500/30 rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(156,163,175,0.3)]">
                <div className="bg-gradient-to-r from-gray-500 to-gray-600 py-2 px-4">
                  <h3 className="text-black font-bold text-center">ACESSO STANDARD</h3>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <p className="text-gray-400 text-sm">
                      De <span className="line-through">R$ 5.000,00</span> por apenas:
                    </p>
                    <div className="text-4xl font-bold text-gray-300 mb-2">R$ 490,00</div>
                    <Badge className="bg-gray-500/20 text-gray-400 border border-gray-500/30">
                      Economia de R$ 4.510,00
                    </Badge>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">Acesso por 1 ano</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">3 meses de suporte VIP</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">Acesso a todos os módulos</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">Certificado digital de conclusão</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">Atualizações durante o período de acesso</span>
                    </div>
                    <div className="flex items-start opacity-50">
                      <CheckCircle className="h-5 w-5 text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-400">Lives semanais exclusivas</span>
                    </div>
                  </div>

                  <a
                    href="https://pay.hotmart.com/S99204912U?sck=HOTMART_MEM_CA&off=yrsnj2bb&offDiscount=cna-50.00-rxcs6mfc&hotfeature=32&_gl=1*7zgaij*_gcl_au*MTk4MTc0ODI1MS4xNzQwOTUzNzcz*_ga*MjE0Mzc5NDE3OC4xNzQwOTUzNzcz*_ga_GQH2V1F11Q*MTc0NTI3MjkzMS4zOS.xLjE3NDUyNzQxMDcuMzYuMC4w&bid=1745274108788"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button className="w-full bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-bold py-3 text-lg">
                      QUERO O ACESSO STANDARD
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

        {/* Final CTA Section */}
        <section className="py-16 bg-black relative">
          {/* Adicionar elementos de fundo característicos */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-martech-darkgray to-transparent"></div>
          <div className="absolute -top-20 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400"></div>

          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto bg-gradient-to-b from-purple-900/30 to-black border border-purple-500/30 rounded-xl p-8 md:p-12 text-center">
              <Badge className="bg-gradient-to-r from-purple-500 to-purple-400 text-white font-bold mb-6 px-4 py-1.5">
                OFERTA POR TEMPO LIMITADO
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">NÃO PERCA ESSA OPORTUNIDADE</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Transforme sua carreira e aumente seus ganhos dominando as técnicas mais avançadas do mercado
              </p>

              <div className="mb-8">
                <p className="text-gray-400 mb-2">Oferta encerra em:</p>
                <div className="flex justify-center gap-4">
                  <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg px-4 py-2 text-center min-w-[70px]">
                    <span className="text-2xl font-bold text-purple-400">{countdown.days}</span>
                    <p className="text-xs text-gray-400">Dias</p>
                  </div>
                  <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg px-4 py-2 text-center min-w-[70px]">
                    <span className="text-2xl font-bold text-purple-400">{countdown.hours}</span>
                    <p className="text-xs text-gray-400">Horas</p>
                  </div>
                  <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg px-4 py-2 text-center min-w-[70px]">
                    <span className="text-2xl font-bold text-purple-400">{countdown.minutes}</span>
                    <p className="text-xs text-gray-400">Min</p>
                  </div>
                  <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg px-4 py-2 text-center min-w-[70px]">
                    <span className="text-2xl font-bold text-purple-400">{countdown.seconds}</span>
                    <p className="text-xs text-gray-400">Seg</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <div className="text-center">
                  <p className="text-gray-400 text-sm">
                    De <span className="line-through">R$ 5.000,00</span> por apenas:
                  </p>
                  <div className="text-4xl font-bold text-white">R$ 800,00</div>
                </div>
                <a
                  href="https://pay.hotmart.com/I92740095I?sck=HOTMART_MEM_CA&off=kzkum1js&offDiscount=cna-30.00-dtz8oi2y&hotfeature=32&_gl=1*1p23c5q*_gcl_au*MTA4MTQ5MDg0My4xNzQxNjQ5MDk3*_ga*MTExMzM1MTEyMS4xNzQxMzU0Mjk4*_ga_GQH2V1F11Q*MTc0MTc0MzIzNi4xMy4xLjE3NDE3NDM0OTUuNjAuMC4w&bid=1741743498370"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                  <Button className="relative bg-gradient-to-r from-purple-500 to-purple-400 hover:from-purple-400 hover:to-purple-500 text-white font-bold px-8 py-6 text-lg shadow-lg transition-all duration-300">
                    GARANTIR MINHA VAGA AGORA
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>

              <p className="text-gray-400 text-sm">
                Pagamento 100% seguro via Hotmart • Acesso imediato após a confirmação
              </p>
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
