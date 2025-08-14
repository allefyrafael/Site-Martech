"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { CheckCircle, Shield, Zap, Smartphone, Users, Clock, TrendingUp, ArrowRight, Play, Download, Settings, Database, BarChart3, Volume2, VolumeX, AlertTriangle } from "lucide-react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Script from "next/script"

export default function TechUnionSolutionsPageVariant() {
  const [countdown, setCountdown] = useState({
    days: 5,
    hours: 23,
    minutes: 59,
    seconds: 59,
  })
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set())
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const videoRef = useRef<HTMLVideoElement | null>(null)

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
        return { days: 5, hours: 23, minutes: 59, seconds: 59 } // Reset when reaches zero
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Effect for scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      
      // Check each section for visibility
      Object.keys(sectionRefs.current).forEach((key) => {
        const element = sectionRefs.current[key]
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top
          const elementBottom = rect.bottom
          
          // Element is visible when it's in the viewport
          if (elementTop < windowHeight * 0.8 && elementBottom > 0) {
            setVisibleElements(prev => new Set([...prev, key]))
          }
        }
      })
    }

    // Initial check
    handleScroll()
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Helper function to check if element is visible
  const isElementVisible = (key: string) => visibleElements.has(key)

  // Ensure video starts playing
  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.muted = true
      setIsMuted(true)
      video.play().catch(() => {
        console.log('Autoplay failed, will try on user interaction')
      })
    }
  }, [])

  // Simple unmute on user interaction
  useEffect(() => {
    const handleInteraction = () => {
      if (videoRef.current && isMuted) {
        videoRef.current.muted = false
        setIsMuted(false)
      }
    }

    document.addEventListener('click', handleInteraction, { once: true })

    return () => {
      document.removeEventListener('click', handleInteraction)
    }
  }, [isMuted])

  // Scroll to pricing section
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('precos')
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="flex min-h-screen flex-col" key="TechUnionSolutionsVariant">
      {/* JSON-LD Structured Data */}
      <Script
        id="tech-union-solutions-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Tech Union Solutions",
            "description": "Ferramenta revolucionária para assistência técnica com +1.700 soluções de defeitos crônicos, remoção instantânea de vírus e diagnóstico inteligente.",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Windows",
            "offers": {
              "@type": "Offer",
              "price": "147.00",
              "priceCurrency": "BRL",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "500"
            },
            "featureList": [
              "Remoção instantânea de vírus e aplicativos maliciosos",
              "Diagnóstico inteligente com análise automática",
              "Limpeza avançada que melhora o desempenho",
              "Sistema de ordem de serviços incluso",
              "+1.700 soluções de defeitos documentadas",
              "Atualizações frequentes com novos recursos"
            ]
          })
        }}
      />

      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section - Com Vídeo e Animações */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
          {/* Background Elements - Animados */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20 transition-all duration-1000"></div>
          <div className="absolute -top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse transition-all duration-1000 hover:scale-110"></div>
          <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse transition-all duration-1000 hover:scale-110" style={{animationDelay: '1s'}}></div>
          
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float hover:bg-blue-400/60 transition-all duration-500"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>

          <div className="container relative z-10 px-4 py-20">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Content */}
                <div 
                  ref={(el) => sectionRefs.current['hero-content'] = el}
                  className={`text-center lg:text-left transition-all duration-1000 ${
                    isElementVisible('hero-content') 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold mb-6 px-4 py-2 text-sm animate-bounce hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
                    FERRAMENTA REVOLUCIONÁRIA
                  </Badge>
                  
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight hover:scale-105 transition-all duration-500">
                    TECH UNION <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient">SOLUTIONS</span>
                  </h1>
                  
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 sm:mb-8 leading-relaxed hover:text-gray-200 transition-all duration-500">
                    Aumente o faturamento da sua empresa com <span className="text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-300">+1.700 soluções</span> de defeitos crônicos
                  </p>

                  {/* Benefícios Principais - Animados */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-4xl mx-auto">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 bg-gray-800/30 rounded-lg p-3 sm:p-4 hover:bg-gray-700/50 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-500 hover:-translate-y-1 group">
                      <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-green-400 group-hover:scale-110 group-hover:text-green-300 transition-all duration-300" />
                      <span className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors duration-300">Remoção de Vírus</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 sm:gap-3 bg-gray-800/30 rounded-lg p-3 sm:p-4 hover:bg-gray-700/50 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-500 hover:-translate-y-1 group">
                      <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 group-hover:scale-110 group-hover:text-blue-300 transition-all duration-300" />
                      <span className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors duration-300">Diagnóstico Inteligente</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 sm:gap-3 bg-gray-800/30 rounded-lg p-3 sm:p-4 hover:bg-gray-700/50 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-500 hover:-translate-y-1 group sm:col-span-2 md:col-span-1">
                      <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400 group-hover:scale-110 group-hover:text-purple-300 transition-all duration-300" />
                      <span className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors duration-300">Sistema de Ordens de Serviço</span>
                    </div>
                  </div>

                  {/* CTA Principal - Animado */}
                  <div className="flex justify-center lg:justify-start mb-6 sm:mb-8">
                    <Button onClick={scrollToPricing} className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 text-sm sm:text-base md:text-lg lg:text-xl shadow-lg transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/50 animate-glow hover:animate-pulse w-full sm:w-auto whitespace-normal break-words">
                      QUERO AUMENTAR MEU FATURAMENTO
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 animate-bounce-x group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                    </Button>
                  </div>

                  {/* Trust Indicators - Animados */}
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 text-gray-400">
                    <div className="flex items-center gap-2 hover:text-white transition-all duration-300 hover:scale-105 group">
                      <Shield className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-xs sm:text-sm">100% Seguro</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-white transition-all duration-300 hover:scale-105 group">
                      <Download className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-xs sm:text-sm">Download Imediato</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-white transition-all duration-300 hover:scale-105 group">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-xs sm:text-sm">7136 Técnicos</span>
                    </div>
                  </div>
                </div>

                {/* Right Column - Vídeo */}
                <div 
                  ref={(el) => sectionRefs.current['hero-video'] = el}
                  className={`relative hover:scale-105 transition-all duration-700 ${
                    isElementVisible('hero-video') 
                      ? 'opacity-100 translate-x-0 scale-100' 
                      : 'opacity-0 translate-x-10 scale-95'
                  }`}
                  style={{transitionDelay: '0.3s'}}
                >
                  <div className="relative bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-2xl p-8 backdrop-blur-sm hover:border-blue-400/50 hover:bg-blue-900/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-2">
                    {/* Video Container */}
                    <div className="relative rounded-xl overflow-hidden bg-black hover:scale-105 transition-all duration-500">
                                             <video
                         className="w-full h-48 sm:h-56 md:h-64 object-cover hover:scale-110 transition-all duration-700"
                         autoPlay
                         loop
                         muted={isMuted}
                         playsInline
                         preload="auto"
                         controls
                         ref={videoRef}

                       >
                                                 <source src="/videos/VídeoMartech.mp4" type="video/mp4" />
                        Seu navegador não suporta vídeos.
                      </video>
                      
                      {/* Video Controls Overlay */}
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center group">
                        <div className="absolute top-4 right-4">
                          <button
                            onClick={() => setIsMuted(!isMuted)}
                            className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 hover:scale-110 transition-all duration-300"
                          >
                            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                          </button>
                        </div>
                        

                      </div>
                    </div>
                    
                    {/* Video Info */}
                    <div className="mt-6 text-center">
                      <h3 className="text-2xl font-bold text-white mb-4 hover:text-blue-300 transition-colors duration-300">Tech Union Solutions</h3>
                      
                      <div className="space-y-3 text-left">
                        <div className="flex items-center gap-3 hover:bg-gray-800/30 p-2 rounded-lg transition-all duration-300 group">
                          <div className="w-3 h-3 bg-green-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Sistema Ativo</span>
                        </div>
                        <div className="flex items-center gap-3 hover:bg-gray-800/30 p-2 rounded-lg transition-all duration-300 group">
                          <div className="w-3 h-3 bg-blue-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-300">1.700+ Soluções</span>
                        </div>
                        <div className="flex items-center gap-3 hover:bg-gray-800/30 p-2 rounded-lg transition-all duration-300 group">
                          <div className="w-3 h-3 bg-purple-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Atualizações Automáticas</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Com Animações */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
          <div className="container relative z-10">
            <div 
              ref={(el) => sectionRefs.current['features-header'] = el}
              className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
                isElementVisible('features-header') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 hover:scale-105 transition-all duration-500">
                Tudo que você precisa para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient">revolucionar</span> sua assistência técnica
              </h2>
              <p className="text-xl text-gray-300 hover:text-gray-200 transition-colors duration-500">
                Ferramentas exclusivas que aumentam sua produção diária e faturamento
              </p>
            </div>

            <div 
              ref={(el) => sectionRefs.current['features-grid'] = el}
              className={`grid md:grid-cols-3 gap-8 max-w-5xl mx-auto transition-all duration-1000 ${
                isElementVisible('features-grid') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{transitionDelay: '0.3s'}}
            >
              {[
                {
                  icon: Shield,
                  title: "Remoção Instantânea de Vírus",
                  description: "Elimine vírus e aplicativos maliciosos com apenas um clique, garantindo a segurança total dos dispositivos.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: Database,
                  title: "1.700+ Soluções",
                  description: "Acesso a mais de 1.700 soluções documentadas para defeitos crônicos de iPhone e Android.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: BarChart3,
                  title: "Sistema de Ordens",
                  description: "Gerencie suas ordens de serviço de forma organizada e profissional, aumentando a produtividade.",
                  color: "from-purple-500 to-pink-500"
                }
              ].map((feature, index) => (
                <Card 
                  key={index} 
                  className={`bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800/70 transition-all duration-700 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-3 group ${
                    isElementVisible('features-grid') 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-20'
                  }`}
                  style={{transitionDelay: `${0.5 + index * 0.2}s`}}
                >
                  <div className="p-8">
                    <div className={`w-20 h-20 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 hover:scale-110 hover:rotate-3 transition-all duration-500 group-hover:shadow-lg`}>
                      <feature.icon className="h-10 w-10 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300">{feature.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section - Com Animações */}
        <section className="py-20 bg-black relative">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto">
              {/* Left Column - Benefits */}
              <div 
                ref={(el) => sectionRefs.current['benefits-left'] = el}
                className={`hover:scale-105 transition-all duration-700 ${
                  isElementVisible('benefits-left') 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-20'
                }`}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 hover:scale-105 transition-all duration-500">
                  Aumente seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 animate-gradient">faturamento</span> e <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient">produção</span>
                </h2>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: TrendingUp,
                      title: "Aumento de Faturamento",
                      description: "Com diagnósticos mais rápidos, você atende mais clientes e aumenta seus ganhos.",
                      color: "text-green-400"
                    },
                    {
                      icon: Clock,
                      title: "Economia de Tempo",
                      description: "Processos automatizados que reduzem o tempo de reparo em até 70%.",
                      color: "text-blue-400"
                    },
                    {
                      icon: Users,
                      title: "Mais Clientes",
                      description: "Atenda 3x mais clientes com a mesma estrutura e tempo.",
                      color: "text-purple-400"
                    }
                  ].map((benefit, index) => (
                    <div 
                      key={index} 
                      className={`flex gap-4 hover:bg-gray-800/30 p-4 rounded-lg transition-all duration-500 hover:scale-105 hover:-translate-y-1 group ${
                        isElementVisible('benefits-left') 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-10'
                      }`}
                      style={{transitionDelay: `${0.3 + index * 0.2}s`}}
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-gray-800 to-gray-700 flex items-center justify-center flex-shrink-0 hover:scale-110 hover:rotate-3 transition-all duration-500 group-hover:shadow-lg">
                        <benefit.icon className={`h-6 w-6 ${benefit.color} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">{benefit.title}</h3>
                        <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Stats Animados */}
              <div 
                ref={(el) => sectionRefs.current['benefits-right'] = el}
                className={`bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 hover:bg-gray-800/40 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-2 hover:scale-105 ${
                  isElementVisible('benefits-right') 
                    ? 'opacity-100 translate-x-0 scale-100' 
                    : 'opacity-0 translate-x-20 scale-95'
                }`}
                style={{transitionDelay: '0.5s'}}
              >
                <h3 className="text-2xl font-bold text-white mb-8 text-center hover:text-blue-300 transition-colors duration-300">Resultados Comprovados</h3>
                
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: "70%", label: "Redução no tempo", icon: Clock },
                    { number: "3x", label: "Mais clientes", icon: Users },
                    { number: "1.700+", label: "Soluções", icon: Database },
                    { number: "100%", label: "Compatibilidade", icon: Shield }
                  ].map((stat, index) => (
                    <div 
                      key={index} 
                      className={`text-center hover:scale-110 hover:-translate-y-2 transition-all duration-500 group ${
                        isElementVisible('benefits-right') 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-10'
                      }`}
                      style={{transitionDelay: `${0.7 + index * 0.1}s`}}
                    >
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-500 group-hover:shadow-lg">
                        <stat.icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-2 animate-count-up group-hover:text-blue-300 transition-colors duration-300">{stat.number}</div>
                      <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section - Teste A/B */}
        <section id="precos" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Transição suave superior */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent"></div>

          <div className="container relative z-10 px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
              <div className="inline-block relative mb-4 md:mb-6">
                <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold hover:from-blue-600 hover:to-purple-600 px-4 md:px-6 py-1.5 md:py-2 text-sm md:text-base">
                  INVESTIMENTO ESPECIAL
                </Badge>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
                TRANSFORME SUA <span className="text-blue-400">ASSISTÊNCIA TÉCNICA</span> EM UMA
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block mt-1">
                  MÁQUINA DE RESULTADOS
                </span>
              </h2>

              <p className="text-gray-300 text-base md:text-lg">
                Domine as técnicas avançadas de reparo e diagnóstico e multiplique seus ganhos
              </p>
            </div>

            <div className="max-w-4xl mx-auto relative">
              <Card className="bg-gradient-to-b from-gray-800/90 to-black border-0 text-white overflow-hidden rounded-xl md:rounded-2xl shadow-[0_0_50px_rgba(59,130,246,0.3)] relative">
                {/* Repositioned ribbon for better mobile spacing */}
                <div className="absolute top-0 right-0 z-10">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-1 px-3 md:px-6 text-[10px] md:text-sm shadow-md transform rotate-0 origin-top-right">
                    OFERTA POR TEMPO LIMITADA
                  </div>
                </div>

                {/* Responsive grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                  {/* Features section - full width on mobile, 2 cols on desktop */}
                  <div className="md:col-span-2 bg-gradient-to-br from-gray-800/80 to-black/90 p-4 sm:p-6 md:p-8 border-b md:border-b-0 md:border-r border-blue-500/20 pt-10 md:pt-8 shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">TECH UNION SOLUTIONS</h3>

                    <ul className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                      <li className="flex items-start gap-2 md:gap-3">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base text-gray-200">+1.700 soluções de defeitos documentadas</span>
                      </li>
                      <li className="flex items-start gap-2 md:gap-3">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base text-gray-200">Sistema de ordem de serviços incluso</span>
                      </li>
                      <li className="flex items-start gap-2 md:gap-3">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base text-gray-200">Suporte técnico especializado</span>
                      </li>
                      <li className="flex items-start gap-2 md:gap-3">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base text-gray-200">Atualizações gratuitas durante 1 ano</span>
                      </li>
                      <li className="flex items-start gap-2 md:gap-3">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base text-gray-200">Compatível com iPhone e Android</span>
                      </li>
                    </ul>

                    {/* Benefits section - horizontal on mobile, vertical on desktop */}
                    <div className="grid grid-cols-3 md:grid-cols-1 gap-2 md:gap-3 mt-4 md:mt-8">
                      <div className="flex flex-col md:flex-row items-center md:items-center gap-1 md:gap-2">
                        <Zap className="h-4 w-4 md:h-5 md:w-5 text-blue-400" />
                        <span className="text-xs md:text-sm text-gray-300 text-center md:text-left">Acesso imediato</span>
                      </div>
                      <div className="flex flex-col md:flex-row items-center md:items-center gap-1 md:gap-2">
                        <Shield className="h-4 w-4 md:h-5 md:w-5 text-blue-400" />
                        <span className="text-xs md:text-sm text-gray-300 text-center md:text-left">
                          Garantia de 30 dias
                        </span>
                      </div>
                      <div className="flex flex-col md:flex-row items-center md:items-center gap-1 md:gap-2">
                        <Clock className="h-4 w-4 md:h-5 md:w-5 text-blue-400" />
                        <span className="text-xs md:text-sm text-gray-300 text-center md:text-left">Acesso por 1 ano</span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing section - full width on mobile, 3 cols on desktop */}
                  <div className="md:col-span-3 p-4 sm:p-6 md:p-8 flex flex-col">
                    {/* Enhanced discount section */}
                    <div className="mb-4 md:mb-6">
                      <div className="bg-gradient-to-r from-red-900/30 to-red-800/10 p-3 rounded-lg border border-red-500/30 relative">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 md:gap-3">
                            <AlertTriangle className="h-4 w-4 md:h-5 md:w-5 text-red-500 animate-pulse" />
                            <div>
                              <p className="text-white text-xs md:text-sm font-medium">Preço normal</p>
                              <div className="text-red-400 font-bold text-lg md:text-xl line-through decoration-2">
                                R$ 497,00
                              </div>
                            </div>
                          </div>
                          <div className="bg-red-600 text-white font-bold px-2 md:px-3 py-1 md:py-2 rounded-lg flex items-center justify-center transform rotate-3 shadow-lg">
                            <span className="text-base md:text-lg">-70%</span>
                            <span className="text-xs ml-1 hidden sm:inline">OFF</span>
                          </div>
                        </div>
                        <p className="text-gray-300 text-xs mt-2 hidden sm:block">
                          Promoção válida por tempo limitado. Aproveite enquanto o desconto está disponível!
                        </p>
                      </div>
                    </div>

                    <div className="mb-4 md:mb-8">
                      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2">
                        R$ <span className="text-blue-400">147,00</span>
                      </div>
                      <p className="text-gray-400 text-xs md:text-sm">
                        ou 12x de R$ 15,20 no cartão
                      </p>
                    </div>

                                         {/* CTA Button - adjusted for mobile */}
                     <a href="https://hotm.art/2P86wnmD" target="_blank" rel="noopener noreferrer" className="block w-full">
                       <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold text-sm sm:text-base md:text-lg py-4 md:py-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] mb-4 whitespace-normal break-words">
                         QUERO GARANTIR MINHA LICENÇA AGORA
                       </Button>
                     </a>

                    {/* Footer info - simplified for mobile */}
                    <div className="flex items-center justify-center gap-2 md:gap-4 mt-auto">
                      <div className="text-center">
                        <p className="text-[10px] md:text-xs text-gray-300">LICENÇA 100% FUNCIONAL | ACESSO IMEDIATO</p>
                        <p className="text-[10px] md:text-xs text-blue-400 font-semibold">GARANTIA DE 30 DIAS</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Transição suave inferior */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes bounce-x {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
        }
        
        @keyframes count-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.8), 0 0 40px rgba(147, 51, 234, 0.6);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-bounce-x {
          animation: bounce-x 1s infinite;
        }
        
        .animate-count-up {
          animation: count-up 1s ease-out forwards;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
} 