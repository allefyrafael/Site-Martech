"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ChevronRight, Clock, Users, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import CountdownTimer from "./CountdownTimer"
import BlackNovemberEffects from "./BlackNovemberEffects"

export default function FeaturedCoursesSection() {
  return (
    <section id="nossos-cursos" className="courses-section-enhanced relative overflow-hidden">
      {/* Background com profundidade e referências Martech */}
      <div className="courses-bg-layer-1"></div>
      <div className="courses-bg-layer-2"></div>
      <div className="courses-bg-layer-3"></div>
      
      {/* Elementos tecnológicos flutuantes */}
      <div className="tech-floating-elements">
        <div className="tech-element tech-circuit-1"></div>
        <div className="tech-element tech-circuit-2"></div>
        <div className="tech-element tech-circuit-3"></div>
        <div className="tech-element tech-hexagon-1"></div>
        <div className="tech-element tech-hexagon-2"></div>
        <div className="tech-element tech-data-flow"></div>
      </div>
      
      {/* Efeitos visuais Black November */}
      <BlackNovemberEffects />
      
      {/* Grid tecnológico de fundo */}
      <div className="tech-grid-overlay"></div>

      <div className="container relative z-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          {/* Badge principal com efeito tecnológico */}
          <div className="courses-header-badge-wrapper">
            <div className="courses-header-badge">
              <span className="badge-tech-icon">⚡</span>
              <span className="badge-text">NOSSOS CURSOS</span>
              <div className="badge-tech-lines"></div>
            </div>
          </div>
          
          {/* Título principal com profundidade */}
          <div className="courses-title-container">
            <h2 className="courses-main-title">
              <span className="title-line-1">ESCOLHA SEU</span>
              <span className="title-line-2">
                <span className="title-highlight">CURSO</span>
                <span className="title-tech-accent">TECH</span>
              </span>
            </h2>
            <div className="title-depth-effect"></div>
          </div>
          
          {/* Descrição com destaque Black November */}
          <div className="courses-description-enhanced">
            <div className="black-november-highlight">
              <div className="bn-icon-wrapper">
                <div className="bn-fire-icon">🔥</div>
              </div>
              <div className="bn-content">
                <span className="bn-title">BLACK NOVEMBER</span>
                <span className="bn-subtitle">Mais de 70% OFF nos treinamentos avançados</span>
              </div>
              <div className="bn-validity">
                <span className="validity-text">Válido até 01/12/2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contador Regressivo Black November */}
        <div className="mb-8 sm:mb-12">
          <CountdownTimer />
        </div>

        {/* Container de Cards Otimizado */}
        <div className="card-container grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto px-8">
          {/* Card 1: MDM Avançado */}
          <CourseCard
            title="MDM DO BÁSICO AO AVANÇADO"
            description="Aprenda absolutamente tudo sobre remoções MDM, desde conceitos básicos até técnicas avançadas de EMMC, UFS e microsoldagem."
            imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MDM%20B%20a%20A-AY9BspbxjLfwz1SGaNF50fKDmNMBc8.webp"
            imageAlt="MDM do Básico ao Avançado"
            badge={{ text: "BLACK NOVEMBER", color: "bg-gradient-to-r from-red-600 to-red-700" }}
            borderColor="border-purple-500/50"
            accentColor="text-purple-400"
            iconColor="text-purple-400"
            buttonColor="border-purple-500 text-purple-400 hover:bg-purple-600"
            ctaColor="from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white"
            shadowColor="hover:shadow-[0_0_25px_rgba(147,51,234,0.4)]"
            imageOpacity="opacity-70"
            singlePlan={true}
            plans={[
              {
                name: "Acesso Completo",
                price: "297,00",
                originalPrice: "1000,00",
                features: [],
                learnMoreLink: "/mdm-avancado",
                buyLink: "https://pay.hotmart.com/F87621340K?checkoutMode=6&off=swo1f3w6&offDiscount=BLACKNOVEMBER",
              },
            ]}
          />

          {/* Card 2: CURSO VIP DO BÁSICO AO AVANÇADO (JTAG & EMMC) */}
          <CourseCard
            title="CURSO VIP DO BÁSICO AO AVANÇADO (JTAG & EMMC)"
            description="Aprenda absolutamente tudo sobre remoções FRP, Screen Lock, Servidores, Unlock Tool e iCloud com procedimentos via JTAG & EMMC."
            imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/600X600martEch2-MZu5cQ2SAzZ9oBfuK0xIDddhwWjPSM.webp"
            imageAlt="Curso VIP JTAG & EMMC"
            badge={{ text: "BLACK NOVEMBER", color: "bg-gradient-to-r from-red-600 to-red-700" }}
            borderColor="border-amber-500/50"
            accentColor="text-amber-400"
            iconColor="text-amber-400"
            buttonColor="border-amber-500 text-amber-400 hover:bg-amber-600"
            ctaColor="from-amber-500 to-yellow-500 hover:from-yellow-500 hover:to-amber-500 text-black font-bold"
            shadowColor="hover:shadow-[0_0_25px_rgba(245,158,11,0.4)]"
            imageOpacity="opacity-90"
            singlePlan={true}
            plans={[
              {
                name: "Acesso Completo",
                price: "297,00",
                originalPrice: "1000,00",
                features: [],
                learnMoreLink: "/curso-vip",
                buyLink: "https://pay.hotmart.com/A99132064J?checkoutMode=6&off=g9xkf18r&offDiscount=BLACKNOVEMBER",
              },
            ]}
          />
        </div>

        <div className="mt-8 sm:mt-10 md:mt-14 relative max-w-6xl mx-auto">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-martech-blue/30 to-martech-orange/30 rounded-xl blur-sm"></div>
          <div className="relative bg-martech-darkgray/50 backdrop-blur-sm border border-martech-blue/20 rounded-xl p-6 sm:p-8 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-martech-blue to-transparent"></div>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-martech-blue/5 rounded-full blur-3xl"></div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 relative z-10">
              <div className="space-y-2 sm:space-y-3 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-white">Não sabe qual curso escolher?</h3>
                <p className="text-gray-300 text-sm sm:text-base max-w-xl">
                  Entre em contato conosco e ajudaremos você a encontrar a melhor opção para suas necessidades e
                  objetivos profissionais.
                </p>
              </div>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-martech-orange to-martech-yellow opacity-75 rounded-lg blur group-hover:opacity-100 transition duration-200"></div>
                <a href="https://wa.link/u5r4ah" target="_blank" rel="noopener noreferrer">
                  <Button className="relative bg-gradient-to-r from-martech-orange to-martech-yellow hover:from-martech-yellow hover:to-martech-orange text-black font-bold px-6 sm:px-8 py-3 sm:py-6 text-sm sm:text-base whitespace-nowrap w-full sm:w-auto shadow-lg transition-all duration-300 transform group-hover:-translate-y-0.5">
                    Falar com um consultor
                    <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transição suave inferior */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-martech-black to-transparent"></div>
    </section>
  )
}

// Componente de card de curso otimizado
function CourseCard({
  title,
  description,
  imageSrc,
  imageAlt,
  badge,
  borderColor,
  accentColor,
  iconColor,
  buttonColor,
  ctaColor,
  shadowColor,
  imageOpacity = "",
  singlePlan = false,
  plans,
}) {
  return (
    <Card className={`card-wrapper bg-gradient-to-b from-martech-darkgray to-black ${borderColor} text-white overflow-visible group ${shadowColor} transition-all duration-300 min-h-[600px] w-full`}>
      {/* Badge BLACK NOVEMBER - Position Absolute (não interfere no fluxo) */}
      <div className={`absolute top-4 right-4 z-20 ${badge.color} text-white text-xs font-bold py-1 px-3 rounded shadow-lg`}>
        {badge.text}
      </div>

      {/* Card Content - Área principal com padding superior */}
      <div className="card-content px-6 pt-12 pb-8 flex flex-col justify-between h-full">
        {/* Área de imagem - 180px sem cortes */}
        <div className="card-image-container mb-6">
          <div className="relative w-full h-[180px] bg-martech-darkgray/50 rounded-lg flex items-center justify-center p-4">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              fill
              className={`object-contain object-center transition-transform duration-500 group-hover:scale-105 ${imageOpacity}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        {/* Título e descrição */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 leading-tight">{title}</h3>
          <p className="text-gray-300 text-sm line-clamp-3 leading-relaxed mb-4">{description}</p>
        </div>

        {/* Conteúdo do plano otimizado */}
        <div className="flex flex-col flex-grow">
          {/* Espaço vazio removido - features e badge foram removidos */}
        </div>

        {/* Card Footer - Preços e Botões */}
        <div className="card-footer mt-auto pt-6 border-t border-gray-700/30">
          {/* Área de preços - Layout horizontal compacto */}
          <div className="flex items-baseline justify-center gap-3 mb-4">
            {plans[0]?.originalPrice && (
              <span className="text-red-600 text-base font-semibold line-through decoration-2 decoration-red-600">R$ {plans[0].originalPrice}</span>
            )}
            <span className={`${accentColor} font-bold text-2xl`}>R$ {plans[0]?.price}</span>
          </div>
          
          {/* Badge de economia destacado com vermelho, dourado e preto */}
          {plans[0]?.originalPrice && (
            <div className="text-center mb-6">
              <Badge className="relative overflow-hidden bg-gradient-to-r from-red-900 via-yellow-600 to-red-900 text-white border-2 border-yellow-500/50 text-xs font-bold px-4 py-2 shadow-lg">
                <span className="relative z-10 flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-300">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                  <span className="text-yellow-200">ECONOMIA DE MAIS DE 70%</span>
                </span>
                {/* Efeito de brilho animado */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" style={{ animation: 'shimmer 2s ease-in-out infinite' }}></div>
                {/* Efeito de sombra dourada */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-red-900/40 blur-sm"></div>
              </Badge>
            </div>
          )}

          {/* Botões de ação - Altura fixa 48px com espaçamento adequado */}
          <div className="flex gap-4 pb-2">
            <Link href={plans[0]?.learnMoreLink || "#"} className="flex-1">
              <Button variant="outline" className={`${buttonColor} hover:text-white text-sm h-[48px] w-full`}>
                Saiba mais
              </Button>
            </Link>
            <Link
              href={plans[0]?.buyLink || "#"}
              className="flex-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className={`bg-gradient-to-r ${
                  title === "MDM DO BÁSICO AO AVANÇADO"
                    ? "from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white"
                    : ctaColor
                } font-bold text-sm h-[48px] w-full`}
              >
                Comprar agora
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  )
}