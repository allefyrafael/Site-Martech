import type React from "react"
import { CheckCircle, Award, Users, Zap, GraduationCap } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Clock, Instagram } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="vantagens" className="py-16 bg-martech-black bg-martech-gradient relative overflow-hidden">
      {/* Transição suave superior */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-martech-black/40 to-transparent"></div>

      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-martech-blue/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-martech-orange/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/3 w-48 h-48 bg-martech-yellow/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2.5s" }}
        ></div>
      </div>

      <div className="container relative z-10 px-4 sm:px-6 max-w-7xl mx-auto">
        {/* Header com design mais moderno */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block relative mb-4 md:mb-6 transform hover:scale-105 transition-transform duration-300">
            <Badge className="bg-gradient-to-r from-martech-orange to-martech-yellow text-black font-bold hover:from-martech-yellow hover:to-martech-orange px-6 py-1.5 text-sm shadow-lg">
              POR QUE ESCOLHER A MARTECH?
            </Badge>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-martech-orange to-martech-yellow"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-martech-blue via-white to-martech-yellow bg-clip-text text-transparent">
                VANTAGENS DOS NOSSOS CURSOS
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-martech-blue to-transparent opacity-50"></span>
            </span>
          </h2>

          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
            Descubra por que milhares de técnicos escolheram a Martech para transformar suas carreiras e aumentar
            significativamente seus ganhos mensais
          </p>
        </div>

        {/* Layout principal com grid mais moderno */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Coluna esquerda - Vantagens */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            {/* Cards de vantagens em grid com animação hover */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <AdvantageCard
                icon={<Award className="h-6 w-6 text-martech-yellow" />}
                title="Conteúdo Premium"
                description="Acesso a técnicas avançadas e exclusivas que não são compartilhadas em tutoriais gratuitos."
                color="from-martech-yellow/10 to-martech-yellow/5"
                borderColor="border-martech-yellow/30"
                hoverColor="hover:bg-martech-yellow/20"
                shadowColor="rgba(255,255,0,0.3)"
                iconBgColor="bg-martech-yellow/20"
              />

              <AdvantageCard
                icon={<GraduationCap className="h-6 w-6 text-martech-blue" />}
                title="Certificado Reconhecido"
                description="Receba um certificado digital de conclusão reconhecido pelo mercado que valida sua expertise profissional."
                color="from-martech-blue/10 to-martech-blue/5"
                borderColor="border-martech-blue/30"
                hoverColor="hover:bg-martech-blue/20"
                shadowColor="rgba(0,160,233,0.3)"
                iconBgColor="bg-martech-blue/20"
              />
            </div>

            {/* Segunda linha de cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <AdvantageCard
                icon={<Clock className="h-6 w-6 text-martech-orange" />}
                title="Acesso por 5 Anos"
                description="Assista às aulas quantas vezes quiser durante 5 anos completos, sem mensalidades."
                color="from-martech-orange/10 to-martech-orange/5"
                borderColor="border-martech-orange/30"
                hoverColor="hover:bg-martech-orange/20"
                shadowColor="rgba(255,127,0,0.3)"
                iconBgColor="bg-martech-orange/20"
              />

              <AdvantageCard
                icon={<Zap className="h-6 w-6 text-green-400" />}
                title="Retorno Garantido"
                description="Recupere seu investimento com apenas 2-3 serviços realizados após o aprendizado."
                color="from-green-500/10 to-green-500/5"
                borderColor="border-green-500/30"
                hoverColor="hover:bg-green-500/20"
                shadowColor="rgba(34,197,94,0.3)"
                iconBgColor="bg-green-500/20"
              />
            </div>

            {/* Card de garantia com design mais moderno */}
            <div className="relative overflow-hidden group transform transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-martech-blue/20 to-martech-blue/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-black/60 backdrop-blur-sm rounded-xl p-6 border-2 border-martech-blue/60 shadow-[0_0_15px_rgba(0,160,233,0.15)]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-martech-blue/10 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110">
                    <CheckCircle className="h-6 w-6 text-martech-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Garantia de Satisfação</h3>
                    <div className="w-20 h-0.5 bg-martech-blue/30 mt-1"></div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm ml-16">
                  Oferecemos 7 dias de garantia incondicional. Se você não ficar satisfeito com o conteúdo, devolvemos
                  100% do seu investimento, sem perguntas.
                </p>
              </div>
            </div>

          </div>

          {/* Coluna direita - Professores com CTA acima em telas grandes */}
          <div className="lg:col-span-5">
            <div className="floating-card-container relative transform transition-all duration-500 hover:-translate-y-2">
              {/* Efeito de brilho sutil */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-martech-blue/20 to-martech-orange/20 rounded-xl blur-md"></div>

              {/* Card principal com animação e estilo melhorado */}
              <Card className="relative bg-gradient-to-b from-martech-darkgray/90 to-black border border-white/5 text-white animate-float overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.3)]">
                {/* Linhas de acento */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-martech-blue to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-martech-orange to-transparent"></div>
                <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-martech-blue to-transparent"></div>
                <div className="absolute right-0 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-martech-orange to-transparent"></div>

                <div className="p-4 space-y-3 relative z-10">
                  {/* Título redesenhado */}
                  <div className="flex items-center justify-center mb-3">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-martech-blue via-martech-yellow to-martech-orange rounded-full opacity-70 blur-sm"></div>
                      <div className="relative bg-black px-4 py-1 rounded-full border border-martech-yellow/30">
                        <h3 className="text-lg font-bold bg-gradient-to-r from-martech-blue via-white to-martech-yellow bg-clip-text text-transparent">
                          Nossos Professores
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm text-center mb-1">
                    Aprenda com especialistas reconhecidos no mercado de software para celulares
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {/* Cards de professores com design melhorado */}
                    <div className="bg-gradient-to-b from-martech-darkgray/80 to-black border-0 rounded-lg p-2 transition-all duration-300 group hover:-translate-y-1 flex flex-col h-full relative overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
                      <div className="absolute inset-0 border border-martech-blue/40 rounded-lg"></div>
                      <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-martech-blue/30 to-transparent"></div>
                      <div className="relative w-full aspect-square mb-2 rounded-md overflow-hidden bg-white">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Marcos.jpg-ofPGGxZapYDZXCxgM0B6Fexb2LYvof.jpeg"
                          alt="Professor Marcos"
                          width={120}
                          height={120}
                          className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="text-center flex flex-col flex-grow justify-between">
                        <div>
                          <h4 className="text-base font-bold text-white mb-1">Professor Marcos</h4>
                          <p className="text-martech-blue text-xs">Especialista em Software</p>
                        </div>
                        <a
                          href="https://instagram.com/martech.cursos.software"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center text-gray-400 hover:text-martech-yellow transition-colors text-xs mt-2 bg-black/30 py-1 px-2 rounded-full"
                        >
                          <Instagram className="h-3 w-3 mr-1" />
                          <span>@martech</span>
                        </a>
                      </div>
                    </div>

                    <div className="bg-gradient-to-b from-martech-darkgray/80 to-black border-0 rounded-lg p-2 transition-all duration-300 group hover:-translate-y-1 flex flex-col h-full relative overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
                      <div className="absolute inset-0 border border-[#00FF00]/40 rounded-lg"></div>
                      <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-[#00FF00]/30 to-transparent"></div>
                      <div className="relative w-full aspect-square mb-2 rounded-md overflow-hidden bg-white">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Richard.jpg-NqgRNkvBq5JI78h3j3hRpWHMRoFUjx.jpeg"
                          alt="Professor Richard - MetacelMaster"
                          width={120}
                          height={120}
                          className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="text-center flex flex-col flex-grow justify-between">
                        <div>
                          <h4 className="text-base font-bold text-white mb-1">Professor Richard</h4>
                          <p className="text-[#00FF00] text-xs">MetacelMaster</p>
                        </div>
                        <a
                          href="https://instagram.com/metacelmaster"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center text-gray-400 hover:text-[#00FF00] transition-colors text-xs mt-2 bg-black/30 py-1 px-2 rounded-full"
                        >
                          <Instagram className="h-3 w-3 mr-1" />
                          <span>@metacelmaster</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Linha de separação com design mais moderno */}
        <div className="mt-12 w-full">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-martech-blue/30 to-transparent opacity-50"></div>
        </div>
      </div>

      {/* Transição suave inferior */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-martech-darkgray to-transparent"></div>
    </section>
  )
}

interface AdvantageCardProps {
  icon: React.ReactNode
  title: string
  description: string
  color: string
  borderColor: string
  hoverColor: string
  shadowColor: string
  iconBgColor: string
}

function AdvantageCard({
  icon,
  title,
  description,
  color,
  borderColor,
  hoverColor,
  shadowColor,
  iconBgColor,
}: AdvantageCardProps) {
  return (
    <div
      className={`bg-gradient-to-br ${color} p-5 rounded-lg border ${borderColor} group ${hoverColor} transition-all duration-300 hover:shadow-[0_0_15px_${shadowColor}] relative overflow-hidden h-full`}
    >
      <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity">
        <div className="w-24 h-24 rounded-full bg-white/10"></div>
      </div>

      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 h-10 w-10 rounded-full ${iconBgColor} flex items-center justify-center`}>
          {icon}
        </div>
        <div>
          <h3 className="font-bold text-white text-base mb-2">{title}</h3>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}
