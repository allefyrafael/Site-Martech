"use client"

import { useEffect, useState, useRef } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight } from "lucide-react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import FAQSection from "@/components/sections/FAQSection"
import BonusSection from "@/components/sections/BonusSection"
import ContactSection from "@/components/sections/ContactSection"
import HeroSection from "@/components/sections/HeroSection"

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

export default function CursoVIPPage() {
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
    <div className="flex min-h-screen flex-col" key="MartechTeam-curso-vip">
      {/* Add the scroll handler */}
      <ScrollToSection />

      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          title="CURSO VIP DO <span class='text-yellow-400'>BÁSICO AO AVANÇADO</span> (JTAG & EMMC)"
          description="Aprenda a utilizar as melhores ferramentas físicas e digitais para desbloqueios e reparos avançados, com acesso direto aos servidores mais efetivos do mundo."
          badge="CURSO EXCLUSIVO VIP"
          videoUrl="https://player.vimeo.com/video/1064525027?h=1abefc6443&autoplay=1&loop=1&muted=1"
          videoTitle="APRESENTAÇÃO CURSO VIP DO BÁSICO AO AVANÇADO"
          features={[
            "Acesso direto aos melhores servidores",
            "Suporte até Dezembro de 2025",
            "Comunidade VIP exclusiva",
            "Procedimentos via JTAG & EMMC",
          ]}
          page="course"
          backgroundVariant="course"
          primaryColor="rgba(234,179,8,0.15)" // Amarelo para Curso VIP
          secondaryColor="rgba(255,127,0,0.12)"
          tertiaryColor="rgba(255,255,0,0.1)"
        />

        {/* O que você vai aprender - Redesigned with visual icons */}
        <section className="py-16 bg-martech-darkgray relative" id="o-que-voce-vai-aprender">
          {/* Adicionar elementos de fundo característicos */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent"></div>
          <div className="absolute -top-10 right-1/4 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 left-1/3 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-400"></div>

          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-bold mb-4 px-4 py-1.5">
                O QUE VOCÊ VAI APRENDER
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                TREINAMENTO COMPLETO DO BÁSICO AO AVANÇADO
              </h2>
              <p className="text-gray-300">
                Domine as técnicas mais avançadas de desbloqueio e reparo que vão transformar sua carreira
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Feature Card 1 */}
              <FeatureCard
                icon="🛠️"
                title="FRP ANDROID"
                description="Remoção de conta Google em todos os modelos de smartphones, incluindo os mais recentes lançamentos."
                color="yellow"
              />

              {/* Feature Card 2 */}
              <FeatureCard
                icon="🍎"
                title="ICLOUD iOS"
                description="Desbloqueio de ativação em aparelhos Apple usando métodos avançados e servidores exclusivos."
                color="gray"
              />

              {/* Feature Card 3 */}
              <FeatureCard
                icon="🔓"
                title="SCREEN LOCK"
                description="Técnicas para remoção de senhas sem perder os dados do dispositivo, preservando informações importantes."
                color="blue"
              />

              {/* Feature Card 4 */}
              <FeatureCard
                icon="⚙️"
                title="UNLOCK TOOL"
                description="Domine a ferramenta mais poderosa do mercado para desbloqueios, com acesso direto aos servidores."
                color="green"
              />

              {/* Feature Card 5 */}
              <FeatureCard
                icon="🔧"
                title="SERVIDORES"
                description="Acesso aos principais servidores mundiais sem intermediários, economizando tempo e dinheiro."
                color="orange"
              />

              {/* Feature Card 6 */}
              <FeatureCard
                icon="💾"
                title="JTAG & EMMC"
                description="Procedimentos avançados de reprogramação para casos que outras técnicas não resolvem."
                color="purple"
              />
            </div>

            {/* CTA Button */}
            <div className="mt-12 text-center">
              <a
                href="https://pay.hotmart.com/A99132064J?sck=HOTMART_MEM_CA&off=g9xkf18r&offDiscount=cna-20.00-wrp70n9h&hotfeature=32"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                <Button className="relative bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-amber-500 hover:to-yellow-500 text-black font-bold px-8 py-6 text-lg shadow-lg transition-all duration-300">
                  QUERO DOMINAR ESSAS TÉCNICAS
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Adicionar divisor de seção característico */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <div className="relative h-12">
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent"></div>
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-1/2 h-12 bg-gradient-to-b from-yellow-500/10 to-transparent blur-xl"></div>
            </div>
          </div>
        </section>

        {/* Por que escolher este curso - Social proof section */}
        <section className="py-16 bg-black relative" id="por-que-escolher">
          {/* Adicionar elementos de fundo característicos */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-martech-darkgray to-transparent"></div>
          <div className="absolute -top-20 left-1/4 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-400"></div>

          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-bold mb-4 px-4 py-1.5">
                POR QUE ESCOLHER ESTE CURSO
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">VANTAGENS EXCLUSIVAS DO TREINAMENTO</h2>
              <p className="text-gray-300">Descubra por que este é o treinamento mais completo do mercado</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Advantage Card 1 */}
              <AdvantageCard
                icon="💰"
                title="Independência Técnica"
                description="Pare de terceirizar remoções de FRP e faça você mesmo na sua bancada, aumentando seus lucros."
              />

              {/* Advantage Card 2 */}
              <AdvantageCard
                icon="🏅"
                title="Certificação Digital"
                description="Receba certificado digital de conclusão reconhecido pelo mercado."
              />

              {/* Advantage Card 3 */}
              <AdvantageCard
                icon="🌐"
                title="Acesso Premium"
                description="Utilize os melhores e mais efetivos servidores do mundo sem intermediários."
              />

              {/* Advantage Card 4 */}
              <AdvantageCard
                icon="🛠️"
                title="Domínio Técnico"
                description="Aprenda a utilizar as ferramentas adequadas para cada procedimento com precisão."
              />

              {/* Advantage Card 5 */}
              <AdvantageCard
                icon="📈"
                title="Aumento de Lucro"
                description="Amplie consideravelmente o faturamento da sua empresa com novos serviços."
              />

              {/* Advantage Card 6 */}
              <AdvantageCard
                icon="👥"
                title="Suporte VIP"
                description="Acesso ao grupo exclusivo com suporte e lives semanais até Dez/2025."
              />
            </div>

            {/* Stats section */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">25+</div>
                <p className="text-gray-300">Anos de experiência</p>
              </div>

              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">2.000+</div>
                <p className="text-gray-300">Alunos formados</p>
              </div>

              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
                <p className="text-gray-300">Satisfação garantida</p>
              </div>
            </div>
          </div>

          {/* Adicionar divisor de seção característico */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <div className="relative h-12">
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent"></div>
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-1/2 h-12 bg-gradient-to-b from-yellow-500/10 to-transparent blur-xl"></div>
            </div>
          </div>
        </section>

        {/* Conteúdo do curso - Redesigned module section */}
        <section className="py-16 bg-martech-darkgray relative" id="conteudo-do-curso">
          {/* Adicionar elementos de fundo característicos */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent"></div>
          <div className="absolute -top-10 right-1/3 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 left-1/4 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-400"></div>

          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-bold mb-4 px-4 py-1.5">
                CONTEÚDO COMPLETO
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">MÓDULOS DO CURSO</h2>
              <p className="text-gray-300">Conteúdo estruturado para você evoluir do básico ao avançado</p>
            </div>

            <div className="max-w-4xl mx-auto relative">
              {/* Vertical timeline line - improved with animation and better visibility */}
              <div className="absolute left-5 md:left-8 top-6 bottom-6 w-1 md:w-1.5 bg-gradient-to-b from-yellow-500 via-amber-500 to-yellow-900/30 rounded-full hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-500 via-amber-500 to-yellow-900/30 rounded-full opacity-50 blur-sm"></div>
              </div>

              {/* Module cards with timeline dots - improved spacing and visual cues */}
              <div className="space-y-10 relative">
                {/* Module 1 */}
                <div className="relative group" id="module-1">
                  {/* Timeline dot with improved visibility and animation */}
                  <div className="hidden md:flex absolute left-8 top-6 w-6 h-6 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-[0_0_15px_rgba(234,179,8,0.7)] items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>

                  {/* Mobile indicator */}
                  <div className="md:hidden absolute left-0 top-6 w-2 h-10 bg-gradient-to-b from-yellow-400 to-amber-500 rounded-r-full transform -translate-y-1/2 z-10"></div>

                  <div className="md:ml-12">
                    <ModuleCard
                      number="01"
                      title="ACESSO AO SUPORTE"
                      lessons={[
                        "SUPER IMPORTANTE | ASSISTA ESSE VÍDEO ANTES DE INICIAR SUAS AULAS",
                        "INTRODUÇÃO E ACESSO AO SUPORTE!",
                      ]}
                    />
                  </div>
                </div>

                {/* Module 2 */}
                <div className="relative group" id="module-2">
                  {/* Timeline dot with improved visibility and animation */}
                  <div className="hidden md:flex absolute left-8 top-6 w-6 h-6 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-[0_0_15px_rgba(234,179,8,0.7)] items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>

                  {/* Mobile indicator */}
                  <div className="md:hidden absolute left-0 top-6 w-2 h-10 bg-gradient-to-b from-yellow-400 to-amber-500 rounded-r-full transform -translate-y-1/2 z-10"></div>

                  <div className="md:ml-12">
                    <ModuleCard
                      number="02"
                      title="CURSO | BASE INICIAL"
                      lessons={[
                        "Criando conta no PAYPAL",
                        "APRENDENDO UTILIZAR O PAYPAL",
                        "BINANCE - APRESENTAÇÃO E CADASTRO",
                        "DEPÓSITO NA BINANCE, COMPRA NO UP, ATIVAÇÃO DA UNLOCK TOOL",
                        "+ 15 aulas completas",
                      ]}
                    />
                  </div>
                </div>

                {/* Module 3 - Featured */}
                <div className="relative group" id="module-3">
                  {/* Timeline dot with improved visibility and animation - featured */}
                  <div className="hidden md:flex absolute left-8 top-6 w-8 h-8 bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-[0_0_20px_rgba(234,179,8,0.9)] items-center justify-center animate-pulse group-hover:scale-110 transition-all duration-300">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>

                  {/* Mobile indicator - featured */}
                  <div className="md:hidden absolute left-0 top-6 w-3 h-14 bg-gradient-to-b from-yellow-300 to-amber-500 rounded-r-full transform -translate-y-1/2 z-10"></div>

                  <div className="md:ml-12">
                    <ModuleCard
                      number="03"
                      title="CURSO | SERVIDORES"
                      lessons={[
                        "SERVIDOR | GSM",
                        "SERVIDOR | SK",
                        "SERVIDOR | Desbloqueio de operadora de fora do país",
                        "SERVIDOR | TMT & MARTECH CURSOS",
                        "+ 30 aulas completas",
                      ]}
                      featured={true}
                    />
                  </div>
                </div>

                {/* Module 4 */}
                <div className="relative group" id="module-4">
                  {/* Timeline dot with improved visibility and animation */}
                  <div className="hidden md:flex absolute left-8 top-6 w-6 h-6 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-[0_0_15px_rgba(234,179,8,0.7)] items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>

                  {/* Mobile indicator */}
                  <div className="md:hidden absolute left-0 top-6 w-2 h-10 bg-gradient-to-b from-yellow-400 to-amber-500 rounded-r-full transform -translate-y-1/2 z-10"></div>

                  <div className="md:ml-12">
                    <ModuleCard
                      number="04"
                      title="USB REDIRECTOR | ACESSO REMOTO"
                      lessons={[
                        "Compartilhamento de porta USB - FLEXIHUB - USB NETWORK GATE",
                        "Adquirindo a licença do USB REDIRECTOR",
                        "Trabalhando com USB REDIRECTOR conexão remota",
                        "+ 5 aulas completas",
                      ]}
                    />
                  </div>
                </div>

                {/* Module 5 */}
                <div className="relative group" id="module-5">
                  {/* Timeline dot with improved visibility and animation */}
                  <div className="hidden md:flex absolute left-8 top-6 w-6 h-6 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-[0_0_15px_rgba(234,179,8,0.7)] items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>

                  {/* Mobile indicator */}
                  <div className="md:hidden absolute left-0 top-6 w-2 h-10 bg-gradient-to-b from-yellow-400 to-amber-500 rounded-r-full transform -translate-y-1/2 z-10"></div>

                  <div className="md:ml-12">
                    <ModuleCard
                      number="05"
                      title="CURSO | FRP ANDROID | FERRAMENTAS"
                      lessons={[
                        "FRP ANDROID | UNLOCKTOOL & GUERRATOOL | FRP XIAOMI REDMI NOTE 12",
                        "FRP ANDROID | UNLOCK TOOL | FRP MOTOROLA, MOTO G04",
                        "FRP ANDROID | PHOENIX TOOL | FRP XIAOMI NOTE 13",
                        "+ 8 aulas completas",
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-12 text-center">
              <a
                href="https://pay.hotmart.com/A99132064J?sck=HOTMART_MEM_CA&off=g9xkf18r&offDiscount=cna-20.00-wrp70n9h&hotfeature=32"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                <Button className="relative bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-amber-500 hover:to-yellow-500 text-black font-bold px-8 py-6 text-lg shadow-lg transition-all duration-300">
                  QUERO TER ACESSO A ESSE CONTEÚDO
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Adicionar divisor de seção característico */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <div className="relative h-12">
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent"></div>
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-1/2 h-12 bg-gradient-to-b from-yellow-500/10 to-transparent blur-xl"></div>
            </div>
          </div>
        </section>

        {/* Ferramentas section */}
        <section className="py-16 bg-black relative" id="ferramentas">
          {/* Adicionar elementos de fundo característicos */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-martech-darkgray to-transparent"></div>
          <div className="absolute -top-20 left-1/3 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-400"></div>

          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-bold mb-4 px-4 py-1.5">
                FERRAMENTAS PROFISSIONAIS
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                DOMINE AS MELHORES FERRAMENTAS DO MERCADO
              </h2>
              <p className="text-gray-300">Aprenda a utilizar as ferramentas mais avançadas de reprogramação</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
              <ToolCard name="EASY JTAG" icon="⚙️" description="Reprogramação avançada" />
              <ToolCard name="MEDUSA" icon="🔧" description="Recuperação de dados" />
              <ToolCard name="UFI BOX" icon="📱" description="Multimarca universal" />
              <ToolCard name="MIPI" icon="🔌" description="Interface de precisão" />
              <ToolCard name="F64" icon="💾" description="Programador universal" />
            </div>

            <div className="mt-10 max-w-3xl mx-auto bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6">
              <p className="text-gray-300 text-center">
                Com nosso treinamento você vai dominar as melhores ferramentas e servidores do mercado mundial,
                capacitando-se para solucionar qualquer problema que chegue à sua bancada.
              </p>
            </div>
          </div>

          {/* Adicionar divisor de seção característico */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <div className="relative h-12">
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent"></div>
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-1/2 h-12 bg-gradient-to-b from-yellow-500/10 to-transparent blur-xl"></div>
            </div>
          </div>
        </section>

        {/* Pricing section - Redesigned with better value proposition */}
        <section className="py-16 bg-black relative" id="precos">
          {/* Adicionar elementos de fundo característicos */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent"></div>
          <div className="absolute -top-10 right-1/4 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 left-1/3 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-400"></div>

          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-bold mb-4 px-4 py-1.5">
                INVESTIMENTO
              </Badge>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">ESCOLHA SEU PLANO DE ACESSO</h2>
              <p className="text-gray-300">Invista em seu conhecimento e multiplique seus ganhos</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Premium Plan */}
              <div className="bg-gradient-to-b from-yellow-900/30 to-black border border-yellow-500/30 rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(234,179,8,0.3)]">
                <div className="bg-gradient-to-r from-yellow-500 to-amber-500 py-2 px-4">
                  <h3 className="text-black font-bold text-center">ACESSO PREMIUM</h3>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <p className="text-gray-400 text-sm">
                      De <span className="line-through">R$ 5.000,00</span> por apenas:
                    </p>
                    <div className="text-4xl font-bold text-yellow-400 mb-2">R$ 800,00</div>
                    <Badge className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                      Economia de R$ 4.510,00
                    </Badge>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">Acesso por 5 anos completos</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">Suporte VIP até dezembro de 2025</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">Lives semanais exclusivas</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">Acesso a todos os módulos</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">Certificado digital de conclusão</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">Atualizações gratuitas</span>
                    </div>
                  </div>

                  <a
                    href="https://pay.hotmart.com/A99132064J?sck=HOTMART_MEM_CA&off=g9xkf18r&offDiscount=cna-20.00-wrp70n9h&hotfeature=32"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-amber-500 hover:to-yellow-500 text-black font-bold py-3 text-lg">
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
                      Economia de R$ 4.720,00
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
                    href="https://pay.hotmart.com/H99211424I?sck=HOTMART_MEM_CA&off=wl2bqj0f&offDiscount=cna-50.00-3g2khe20&hotfeature=32"
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
            <div className="mt-12 max-w-3xl mx-auto bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-12 w-12 text-yellow-500" />
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
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent"></div>
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-1/2 h-12 bg-gradient-to-b from-yellow-500/10 to-transparent blur-xl"></div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection courseType="curso-vip" />

        {/* Bonus Section */}
        <BonusSection courseType="mdm-avancado" />

        {/* Final CTA Section */}
        <section className="py-16 bg-black relative">
          {/* Adicionar elementos de fundo característicos */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-martech-darkgray to-transparent"></div>
          <div className="absolute -top-20 left-1/4 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-400"></div>

          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto bg-gradient-to-b from-yellow-900/30 to-black border border-yellow-500/30 rounded-xl p-8 md:p-12 text-center">
              <Badge className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-bold mb-6 px-4 py-1.5">
                OFERTA POR TEMPO LIMITADO
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">NÃO PERCA ESSA OPORTUNIDADE</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Transforme sua carreira e aumente seus ganhos dominando as técnicas mais avançadas do mercado
              </p>

              <div className="mb-8">
                <p className="text-gray-400 mb-2">Oferta encerra em:</p>
                <div className="flex justify-center gap-4">
                  <div className="bg-yellow-900/30 border border-yellow-500/30 rounded-lg px-4 py-2 text-center min-w-[70px]">
                    <span className="text-2xl font-bold text-yellow-400">{countdown.days}</span>
                    <p className="text-xs text-gray-400">Dias</p>
                  </div>
                  <div className="bg-yellow-900/30 border border-yellow-500/30 rounded-lg px-4 py-2 text-center min-w-[70px]">
                    <span className="text-2xl font-bold text-yellow-400">{countdown.hours}</span>
                    <p className="text-xs text-gray-400">Horas</p>
                  </div>
                  <div className="bg-yellow-900/30 border border-yellow-500/30 rounded-lg px-4 py-2 text-center min-w-[70px]">
                    <span className="text-2xl font-bold text-yellow-400">{countdown.minutes}</span>
                    <p className="text-xs text-gray-400">Min</p>
                  </div>
                  <div className="bg-yellow-900/30 border border-yellow-500/30 rounded-lg px-4 py-2 text-center min-w-[70px]">
                    <span className="text-2xl font-bold text-yellow-400">{countdown.seconds}</span>
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
                  href="https://pay.hotmart.com/A99132064J?sck=HOTMART_MEM_CA&off=g9xkf18r&offDiscount=cna-20.00-wrp70n9h&hotfeature=32"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                  <Button className="relative bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-amber-500 hover:to-yellow-500 text-black font-bold px-8 py-6 text-lg shadow-lg transition-all duration-300">
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
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent"></div>
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-1/2 h-12 bg-gradient-to-b from-yellow-500/10 to-transparent blur-xl"></div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

// Feature Card Component
function FeatureCard({ icon, title, description, color }) {
  const getColorClasses = () => {
    switch (color) {
      case "yellow":
        return "from-yellow-500/20 to-yellow-900/20 border-yellow-500/30 hover:shadow-[0_5px_15px_rgba(234,179,8,0.2)]"
      case "gray":
        return "from-gray-500/20 to-gray-900/20 border-gray-500/30 hover:shadow-[0_5px_15px_rgba(156,163,175,0.2)]"
      case "blue":
        return "from-blue-500/20 to-blue-900/20 border-blue-500/30 hover:shadow-[0_5px_15px_rgba(59,130,246,0.2)]"
      case "green":
        return "from-green-500/20 to-green-900/20 border-green-500/30 hover:shadow-[0_5px_15px_rgba(34,197,94,0.2)]"
      case "orange":
        return "from-orange-500/20 to-orange-900/20 border-orange-500/30 hover:shadow-[0_5px_15px_rgba(249,115,22,0.2)]"
      case "purple":
        return "from-purple-500/20 to-purple-900/20 border-purple-500/30 hover:shadow-[0_5px_15px_rgba(168,85,247,0.2)]"
      default:
        return "from-yellow-500/20 to-yellow-900/20 border-yellow-500/30 hover:shadow-[0_5px_15px_rgba(234,179,8,0.2)]"
    }
  }

  const getIconBgColor = () => {
    switch (color) {
      case "yellow":
        return "bg-yellow-500/10"
      case "gray":
        return "bg-gray-500/10"
      case "blue":
        return "bg-blue-500/10"
      case "green":
        return "bg-green-500/10"
      case "orange":
        return "bg-orange-500/10"
      case "purple":
        return "bg-purple-500/10"
      default:
        return "bg-yellow-500/10"
    }
  }

  return (
    <div
      className={`bg-gradient-to-br ${getColorClasses()} border rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 h-full relative overflow-hidden group`}
    >
      {/* Adicionar efeito de brilho no hover */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

      {/* Adicionar brilho no canto */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-white/5 rounded-full blur-xl"></div>

      <div className="flex items-start gap-4 relative z-10">
        <div
          className={`text-3xl w-12 h-12 flex items-center justify-center rounded-full ${getIconBgColor()} border border-white/10`}
        >
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}

// Advantage Card Component
function AdvantageCard({ icon, title, description }) {
  return (
    <div className="bg-gradient-to-br from-yellow-900/10 to-black border border-yellow-500/20 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(234,179,8,0.2)] h-full relative overflow-hidden group">
      {/* Adicionar efeito de brilho no hover */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

      {/* Adicionar brilho no canto */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-yellow-500/10 rounded-full blur-xl"></div>

      <div className="flex flex-col items-center text-center relative z-10">
        <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center text-3xl mb-4 border border-yellow-500/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent"></div>
          {icon}
        </div>
        <h3 className="text-lg font-bold text-yellow-400 mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  )
}

// Tool Card Component
function ToolCard({ name, icon, description }) {
  return (
    <div className="bg-gradient-to-b from-yellow-900/20 to-black border border-yellow-500/20 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(234,179,8,0.2)] group relative">
      {/* Adicionar brilho no canto */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-yellow-500/20 rounded-full blur-xl"></div>

      <div className="bg-yellow-500/10 p-4 flex justify-center relative overflow-hidden">
        {/* Adicionar efeito de brilho no hover */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        <span className="text-yellow-500 text-3xl group-hover:scale-110 transition-transform relative z-10">
          {icon}
        </span>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold text-yellow-400 mb-1">{name}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  )
}

// Module Card Component with improved design and usability
function ModuleCard({ number, title, lessons, featured = false }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const contentRef = useRef(null)
  const [contentHeight, setContentHeight] = useState(0)

  // Calculate content height when expanded
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isExpanded ? contentRef.current.scrollHeight : 0)
    }
  }, [isExpanded, lessons])

  return (
    <div
      className={`bg-gradient-to-b ${
        featured ? "from-yellow-900/40 to-black border-yellow-500/40" : "from-gray-900/30 to-black border-gray-700/30"
      } border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_5px_15px_rgba(234,179,8,0.3)] group`}
    >
      <button
        className={`w-full flex items-center justify-between p-5 text-left relative overflow-hidden ${isExpanded ? "pb-4" : ""}`}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-controls={`content-${number}`}
      >
        {/* Improved hover effect */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

        {/* Improved focus indicator */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-1 ${featured ? "bg-yellow-500" : "bg-gray-500"} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        ></div>

        <div className="flex items-center gap-4 relative z-10">
          <div
            className={`w-12 h-12 rounded-full ${
              featured
                ? "bg-gradient-to-br from-yellow-400 to-amber-600 text-black"
                : "bg-gradient-to-br from-gray-400 to-gray-600 text-white"
            } flex items-center justify-center font-bold text-lg shadow-lg transition-transform duration-300 group-hover:scale-110`}
          >
            {number}
          </div>
          <h3
            className={`font-bold text-lg ${featured ? "text-yellow-400" : "text-white"} transition-colors duration-300 group-hover:text-yellow-300`}
          >
            {title}
          </h3>
        </div>

        {/* Improved expand/collapse button */}
        <div
          className={`flex items-center justify-center w-8 h-8 rounded-full ${
            featured ? "bg-yellow-500/20" : "bg-gray-700/30"
          } transition-all duration-300 ${isExpanded ? "rotate-180 bg-yellow-500/30" : ""}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${featured ? "text-yellow-400" : "text-gray-300"}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </button>

      {/* Improved animation for content expansion */}
      <div
        id={`content-${number}`}
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: `${contentHeight}px` }}
      >
        <div
          className={`p-5 pt-0 border-t ${featured ? "border-yellow-500/30" : "border-gray-700/30"} bg-gradient-to-b ${
            featured ? "from-yellow-900/10 to-transparent" : "from-gray-900/10 to-transparent"
          }`}
        >
          <ul className="space-y-4 pl-16">
            {lessons.map((lesson, index) => (
              <li key={index} className="text-gray-300 text-sm md:text-base relative group/item">
                {/* Improved lesson indicator */}
                <div
                  className={`absolute -left-6 top-1/2 transform -translate-y-1/2 flex items-center justify-center ${
                    featured ? "text-yellow-500" : "text-gray-400"
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                {/* Lesson content with hover effect */}
                <div
                  className={`py-2 px-3 rounded-lg transition-all duration-300 ${
                    featured ? "hover:bg-yellow-500/10" : "hover:bg-gray-700/30"
                  } cursor-pointer`}
                >
                  {lesson}
                </div>
              </li>
            ))}
          </ul>

          {/* View all button for modules with many lessons */}
          {lessons.length > 4 && (
            <div className="mt-4 pl-16">
              <button
                className={`text-sm ${featured ? "text-yellow-500 hover:text-yellow-400" : "text-gray-400 hover:text-gray-300"} flex items-center transition-colors duration-300`}
                onClick={(e) => e.stopPropagation()}
              >
                Ver todas as aulas
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
