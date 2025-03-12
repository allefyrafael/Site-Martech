"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Zap, Shield, Clock, AlertTriangle } from "lucide-react"

interface PricingSectionProps {
  courseType?: "mdm" | "frp" | "mdm-avancado"
  priceComplete?: string
  priceBasic?: string
}

export default function PricingSection({
  courseType = "mdm",
  priceComplete = "490,00",
  priceBasic = "280,00",
}: PricingSectionProps) {
  // State to track which plan is selected
  const [selectedPlan, setSelectedPlan] = useState<"completo" | "basico">("completo")

  // Cor de destaque específica para cada curso
  const highlightColor =
    courseType === "frp"
      ? "shadow-[0_0_50px_rgba(34,197,94,0.3)]"
      : courseType === "mdm-avancado"
        ? "shadow-[0_0_50px_rgba(147,51,234,0.3)]"
        : "shadow-[0_0_50px_rgba(0,160,233,0.3)]"

  const buttonGradient =
    courseType === "frp"
      ? "from-green-500 to-green-600 hover:from-green-600 hover:to-green-500"
      : courseType === "mdm-avancado"
        ? "from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-600"
        : "from-martech-orange to-martech-yellow hover:from-martech-yellow hover:to-martech-orange"

  // Título específico para cada curso
  const courseTitle =
    courseType === "frp"
      ? "CURSO FRP E ICLOUD"
      : courseType === "mdm-avancado"
        ? "MDM DO BÁSICO AO AVANÇADO"
        : "CURSO MDM NÍVEL I"

  // Modify the handleButtonClick function to restore the original routing functionality
  const handleButtonClick = () => {
    if (courseType === "frp") {
      // URLs for FRP course
      if (selectedPlan === "completo") {
        window.open(
          "https://pay.hotmart.com/I92740095I?sck=HOTMART_MEM_CA&off=kzkum1js&offDiscount=cna-30.00-dtz8oi2y&hotfeature=32&_gl=1*1p23c5q*_gcl_au*MTA4MTQ5MDg0My4xNzQxNjQ5MDk3*_ga*MTExMzM1MTEyMS4xNzQxMzU0Mjk4*_ga_GQH2V1F11Q*MTc0MTc0MzIzNi4xMy4xLjE3NDE3NDM0OTUuNjAuMC4w&bid=1741743498370",
          "_blank",
        )
      } else {
        window.open(
          "https://pay.hotmart.com/W95189620X?sck=HOTMART_MEM_CA&off=wretdivk&offDiscount=cna-60.00-3anuljqq&hotfeature=32&_gl=1*106tirz*_gcl_au*MTk4MTc0ODI1MS4xNzQwOTUzNzcz*_ga*MjE0Mzc5NDE3OC4xNzQwOTUzNzcz*_ga_GQH2V1F11Q*MTc0MTc0MzA1Mi4yNS4xLjE3NDE3NDM2NDMuMTguMC4w&bid=1741743646011",
          "_blank",
        )
      }
    } else if (courseType === "mdm") {
      // URLs for MDM course
      if (selectedPlan === "completo") {
        window.open(
          "https://pay.hotmart.com/U94589271J?sck=HOTMART_MEM_CA&off=9nq1zfj8&offDiscount=cna-30.00-ysg574mf&hotfeature=32&_gl=1*1skhmp6*_gcl_au*MTA4MTQ5MDg0My4xNzQxNjQ5MDk3*_ga*MTExMzM1MTEyMS4xNzQxMzU0Mjk4*_ga_GQH2V1F11Q*MTc0MTc0MzIzNi4xMy4xLjE3NDE3NDMyNzIuMjQuMC4w",
          "_blank",
        )
      } else {
        window.open(
          "https://pay.hotmart.com/I94355959M?sck=HOTMART_MEM_CA&off=6d6cocrz&offDiscount=cna-60.00-u0vgxl3s&hotfeature=32",
          "_blank",
        )
      }
    } else {
      // Default URL for MDM Advanced or other courses
      window.open("https://go.hotmart.com/F87621340K", "_blank")
    }
  }

  return (
    <section
      id="pricing"
      className="py-12 md:py-16 bg-gradient-to-b from-martech-black to-martech-darkgray relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-martech-blue/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-martech-orange/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Transição suave superior */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-martech-black to-transparent"></div>

      <div id="pricing" className="container relative z-10 px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <div className="inline-block relative mb-4 md:mb-6">
            <Badge className="bg-gradient-to-r from-martech-orange to-martech-yellow text-black font-bold hover:from-martech-yellow hover:to-martech-orange px-4 md:px-6 py-1.5 md:py-2 text-sm md:text-base">
              INVESTIMENTO ESPECIAL
            </Badge>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-1 bg-gradient-to-r from-martech-orange to-martech-yellow"></div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            TRANSFORME SUA <span className="text-martech-yellow">BANCADA</span> EM UMA
            <span className="bg-gradient-to-r from-martech-blue to-martech-orange bg-clip-text text-transparent block mt-1">
              MÁQUINA DE RESULTADOS
            </span>
          </h2>

          <p className="text-gray-300 text-base md:text-lg">
            {courseType === "frp"
              ? "Domine as técnicas avançadas de desbloqueio FRP e iCloud e multiplique seus ganhos"
              : "Domine as técnicas avançadas de remoção de MDM e multiplique seus ganhos"}
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* No floating banner - using an integrated ribbon instead */}
          <Card
            className={`bg-gradient-to-b from-martech-darkgray/90 to-black border-0 text-white overflow-hidden rounded-xl md:rounded-2xl ${highlightColor} relative`}
          >
            {/* Repositioned ribbon for better mobile spacing */}
            <div className="absolute top-0 right-0 z-10">
              <div className="bg-gradient-to-r from-martech-orange to-martech-yellow text-black font-bold py-1 px-3 md:px-6 text-[10px] md:text-sm shadow-md transform rotate-0 origin-top-right">
                OFERTA POR TEMPO LIMITADA
              </div>
            </div>

            {/* Responsive grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
              {/* Features section - full width on mobile, 2 cols on desktop */}
              <div
                className={`md:col-span-2 bg-gradient-to-br from-martech-darkgray/80 to-black/90 p-4 sm:p-6 md:p-8 border-b md:border-b-0 md:border-r ${courseType === "mdm-avancado" ? "border-purple-500/20" : "border-martech-blue/20"} pt-10 md:pt-8 ${courseType === "mdm-avancado" ? "shadow-[0_0_15px_rgba(147,51,234,0.3)]" : ""} transition-all duration-300`}
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">{courseTitle}</h3>

                <ul className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                  <li className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-martech-yellow flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-gray-200">Acesso a todos os servidores premium</span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-martech-yellow flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-gray-200">Suporte até Dezembro de 2025</span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-martech-yellow flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-gray-200">Comunidade VIP exclusiva</span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-martech-yellow flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-gray-200">3 bônus especiais inclusos</span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-martech-yellow flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-gray-200">Certificado de conclusão</span>
                  </li>
                </ul>

                {/* Benefits section - horizontal on mobile, vertical on desktop */}
                <div className="grid grid-cols-3 md:grid-cols-1 gap-2 md:gap-3 mt-4 md:mt-8">
                  <div className="flex flex-col md:flex-row items-center md:items-center gap-1 md:gap-2">
                    <Zap className="h-4 w-4 md:h-5 md:w-5 text-martech-blue" />
                    <span className="text-xs md:text-sm text-gray-300 text-center md:text-left">Acesso imediato</span>
                  </div>
                  <div className="flex flex-col md:flex-row items-center md:items-center gap-1 md:gap-2">
                    <Shield className="h-4 w-4 md:h-5 md:w-5 text-martech-blue" />
                    <span className="text-xs md:text-sm text-gray-300 text-center md:text-left">
                      Garantia de 7 dias
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row items-center md:items-center gap-1 md:gap-2">
                    <Clock className="h-4 w-4 md:h-5 md:w-5 text-martech-blue" />
                    <span className="text-xs md:text-sm text-gray-300 text-center md:text-left">Acesso por 5 anos</span>
                  </div>
                </div>
              </div>

              {/* Pricing section - full width on mobile, 3 cols on desktop */}
              <div className="md:col-span-3 p-4 sm:p-6 md:p-8 flex flex-col">
                {/* Enhanced discount section - only shown for non-mdm-avancado courses */}
                {courseType !== "mdm-avancado" && (
                  <div className="mb-4 md:mb-6">
                    <div className="bg-gradient-to-r from-red-900/30 to-red-800/10 p-3 rounded-lg border border-red-500/30 relative">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 md:gap-3">
                          <AlertTriangle className="h-4 w-4 md:h-5 md:w-5 text-red-500 animate-pulse" />
                          <div>
                            <p className="text-white text-xs md:text-sm font-medium">Preço normal</p>
                            <div className="text-red-400 font-bold text-lg md:text-xl line-through decoration-2">
                              R$ 700,00
                            </div>
                          </div>
                        </div>
                        <div className="bg-red-600 text-white font-bold px-2 md:px-3 py-1 md:py-2 rounded-lg flex items-center justify-center transform rotate-3 shadow-lg">
                          <span className="text-base md:text-lg">-30%</span>
                          <span className="text-xs ml-1 hidden sm:inline">OFF</span>
                        </div>
                      </div>
                      <p className="text-gray-300 text-xs mt-2 hidden sm:block">
                        Promoção válida por tempo limitado. Aproveite enquanto o desconto está disponível!
                      </p>
                    </div>
                  </div>
                )}

                {/* Preço com desconto para MDM Avançado */}
                {courseType === "mdm-avancado" && (
                  <div className="mb-4 md:mb-6">
                    <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/10 p-3 rounded-lg border border-purple-500/30 relative">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 md:gap-3">
                          <AlertTriangle className="h-4 w-4 md:h-5 md:w-5 text-purple-500 animate-pulse" />
                          <div>
                            <p className="text-white text-xs md:text-sm font-medium">Preço normal</p>
                            <div className="text-purple-400 font-bold text-lg md:text-xl line-through decoration-2">
                              R$ 1.000,00
                            </div>
                          </div>
                        </div>
                        <div className="bg-purple-600 text-white font-bold px-2 md:px-3 py-1 md:py-2 rounded-lg flex items-center justify-center transform rotate-3 shadow-lg">
                          <span className="text-base md:text-lg">-20%</span>
                          <span className="text-xs ml-1 hidden sm:inline">OFF</span>
                        </div>
                      </div>
                      <p className="text-gray-300 text-xs mt-2 hidden sm:block">
                        Promoção válida por tempo limitado. Aproveite enquanto o desconto está disponível!
                      </p>
                    </div>
                  </div>
                )}

                <div className="mb-4 md:mb-8">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2">
                    R${" "}
                    <span className={courseType === "mdm-avancado" ? "text-purple-400" : "text-martech-yellow"}>
                      {selectedPlan === "completo" ? priceComplete : priceBasic}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs md:text-sm">
                    {courseType === "mdm-avancado"
                      ? "Investimento único com 20% de desconto"
                      : "Investimento único com acesso vitalício"}
                  </p>
                </div>

                {/* Payment options tabs - simplified for mobile */}
                <Tabs
                  defaultValue="completo"
                  className="w-full mb-4 md:mb-8"
                  onValueChange={(value) => setSelectedPlan(value as "completo" | "basico")}
                >
                  {courseType === "mdm-avancado" ? (
                    <div className="mb-3 md:mb-6">
                      <div className="bg-gradient-to-r from-purple-600/20 to-purple-600/10 rounded-xl p-3 md:p-4 border border-purple-500/20">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-white font-medium text-sm md:text-base">ACESSO COMPLETO</p>
                            <p className="text-gray-400 text-xs md:text-sm">5 anos de acesso + Suporte até 2025</p>
                          </div>
                          <p className="text-xl md:text-2xl font-bold text-purple-400">R$ {priceComplete}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <TabsList className="grid w-full grid-cols-2 mb-3 md:mb-6 bg-black/20 p-1 rounded-xl">
                        <TabsTrigger
                          value="completo"
                          className={`${
                            courseType === "frp"
                              ? "data-[state=active]:bg-green-500"
                              : courseType === "mdm-avancado"
                                ? "data-[state=active]:bg-purple-600"
                                : "data-[state=active]:bg-gradient-to-r data-[state=active]:from-martech-orange data-[state=active]:to-amber-500"
                          } data-[state=active]:text-white text-xs md:text-sm py-2 rounded-lg transition-all duration-300`}
                        >
                          Acesso Completo
                        </TabsTrigger>
                        <TabsTrigger
                          value="basico"
                          className={`${
                            courseType === "frp"
                              ? "data-[state=active]:bg-green-500"
                              : courseType === "mdm-avancado"
                                ? "data-[state=active]:bg-purple-600"
                                : "data-[state=active]:bg-gradient-to-r data-[state=active]:from-martech-orange data-[state=active]:to-amber-500"
                          } data-[state=active]:text-white text-xs md:text-sm py-2 rounded-lg transition-all duration-300`}
                        >
                          Acesso Básico
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="completo" className="space-y-4 mt-0">
                        <div
                          className={`bg-gradient-to-r ${
                            courseType === "frp"
                              ? "from-green-500/10 to-green-500/5 border-green-500/20"
                              : courseType === "mdm-avancado"
                                ? "from-purple-600/10 to-purple-600/5 border-purple-500/20"
                                : "from-martech-blue/10 to-martech-blue/5 border-martech-blue/20"
                          } rounded-xl p-3 md:p-4 border`}
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-white font-medium text-sm md:text-base">ACESSO COMPLETO</p>
                              <p className="text-gray-400 text-xs md:text-sm">5 anos de acesso + Suporte até 2025</p>
                            </div>
                            <p className="text-xl md:text-2xl font-bold text-martech-yellow">R$ {priceComplete}</p>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="basico" className="space-y-4 mt-0">
                        <div
                          className={`bg-gradient-to-r ${
                            courseType === "frp"
                              ? "from-green-500/10 to-green-500/5 border-green-500/20"
                              : courseType === "mdm-avancado"
                                ? "from-purple-600/10 to-purple-600/5 border-purple-500/20"
                                : "from-martech-blue/10 to-martech-blue/5 border-martech-blue/20"
                          } rounded-xl p-3 md:p-4 border`}
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-white font-medium text-sm md:text-base">ACESSO BÁSICO</p>
                              <p className="text-gray-400 text-xs md:text-sm">1 ano de acesso + 2 meses de suporte</p>
                            </div>
                            <div className="text-right">
                              <p className="text-xl md:text-2xl font-bold text-martech-yellow">R$ {priceBasic}</p>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    </>
                  )}
                </Tabs>

                {/* CTA Button - adjusted for mobile */}
                <Button
                  onClick={handleButtonClick}
                  className={`w-full bg-gradient-to-r ${buttonGradient} text-black font-bold text-base md:text-lg py-4 md:py-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,127,0,0.4)] mb-4`}
                >
                  QUERO GARANTIR MINHA VAGA AGORA
                </Button>

                {/* Footer info - simplified for mobile */}
                <div className="flex items-center justify-center gap-2 md:gap-4 mt-auto">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2025-02-15_at_15.49.15__1_-removebg-preview-WF6yeWqtspwBEg8lsQY3UcCDpxNjAE.png"
                    alt="Martech Hotmart Premium Club"
                    width={40}
                    height={40}
                    className="h-8 md:h-10 w-auto"
                  />
                  <div className="text-center">
                    <p className="text-[10px] md:text-xs text-gray-300">CURSO 100% ON-LINE | ACESSO HOTMART</p>
                    <p className="text-[10px] md:text-xs text-martech-yellow font-semibold">GARANTIA DE 7 DIAS</p>
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
  )
}

