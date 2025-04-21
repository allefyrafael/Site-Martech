"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ChevronRight, Clock, Users, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function FeaturedCoursesSection() {
  return (
    <section id="nossos-cursos" className="py-12 sm:py-16 bg-gradient-to-b from-black to-martech-darkgray relative">
      {/* Transição suave superior */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/80 to-transparent"></div>

      <div className="container relative z-10 px-2 sm:px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-block relative mb-3 sm:mb-4 transform hover:scale-105 transition-transform duration-300">
            <Badge className="bg-gradient-to-r from-martech-blue to-blue-700 text-white hover:from-blue-700 hover:to-martech-blue mb-1 shadow-lg px-4 py-1.5">
              NOSSOS CURSOS
            </Badge>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-martech-blue to-transparent"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            <span className="relative inline-block">
              ESCOLHA SEU <span className="text-martech-yellow">CURSO</span>
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-martech-yellow to-transparent opacity-50"></span>
            </span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            Selecione o curso e o plano que melhor atende às suas necessidades e transforme sua carreira
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1: Curso MDM */}
          <CourseCard
            title="CURSO MDM NÍVEL 1"
            description="Aprenda a utilizar as melhores ferramentas e servidores existentes no mundo, e solucionar mais de 90% dos aparelhos do mercado."
            imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Curso%20MDM-ctm2yiWLj6Xv92CLd7qNcbpZFSrUky.webp"
            imageAlt="Curso MDM Nível 1"
            badge={{ text: "MAIS POPULAR", color: "bg-martech-blue" }}
            borderColor="border-martech-blue"
            accentColor="text-martech-yellow"
            iconColor="text-martech-yellow"
            buttonColor="border-martech-blue text-martech-blue hover:bg-martech-blue"
            ctaColor="from-martech-blue to-blue-700 hover:from-blue-700 hover:to-martech-blue text-white"
            shadowColor="hover:shadow-[0_0_25px_rgba(0,160,233,0.4)]"
            plans={[
              {
                name: "Acesso Completo",
                price: "490,00",
                features: ["5 anos de acesso", "Suporte até dezembro de 2025"],
                learnMoreLink: "/mdm",
                buyLink: "https://pay.hotmart.com/O92848631P?off=ixvzw9oj", // Link específico para Acesso Completo
              },
              {
                name: "Acesso Básico",
                price: "280,00",
                features: ["1 ano de acesso", "2 meses de suporte"],
                learnMoreLink: "/mdm",
                buyLink: "https://pay.hotmart.com/O92848631P?off=7qz9ygqz", // Link específico para Acesso Básico
              },
            ]}
          />

          {/* Card 2: Curso FRP */}
          <CourseCard
            title="CURSO DE REMOÇÃO DE ICLOUD E FRP ANDROID"
            description="Aprenda técnicas avançadas de desbloqueio, incluindo servidores e UnlockTool para os principais modelos de smartphones do mercado."
            imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Curso%20FRP-dtw7hfyapIjkplcX83T8nrD2CjWnoN.webp"
            imageAlt="Curso FRP e iCloud"
            badge={{ text: "COMPLETO", color: "bg-gradient-to-r from-green-500 to-emerald-500" }}
            borderColor="border-green-500"
            accentColor="text-green-400"
            iconColor="text-green-400"
            buttonColor="border-green-500 text-green-500 hover:bg-green-500"
            ctaColor="from-green-500 to-emerald-500 hover:from-emerald-500 hover:to-green-500 text-white"
            shadowColor="hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]"
            plans={[
              {
                name: "Acesso Completo",
                price: "490,00",
                features: ["5 anos de acesso", "Suporte até dezembro de 2025"],
                learnMoreLink: "/frp",
                buyLink: "https://pay.hotmart.com/T92848631P?off=ixvzw9oj", // Link específico para Acesso Completo
              },
              {
                name: "Acesso Básico",
                price: "280,00",
                features: ["1 ano de acesso", "2 meses de suporte"],
                learnMoreLink: "/frp",
                buyLink: "https://pay.hotmart.com/T92848631P?off=7qz9ygqz", // Link específico para Acesso Básico
              },
            ]}
          />

          {/* Card 3: MDM Avançado */}
          <CourseCard
            title="MDM DO BÁSICO AO AVANÇADO"
            description="Aprenda absolutamente tudo sobre remoções MDM, desde conceitos básicos até técnicas avançadas de EMMC, UFS e microsoldagem."
            imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MDM%20B%20a%20A-AY9BspbxjLfwz1SGaNF50fKDmNMBc8.webp"
            imageAlt="MDM do Básico ao Avançado"
            badge={{ text: "EM BREVE", color: "bg-gradient-to-r from-purple-600 to-indigo-600" }}
            borderColor="border-purple-500/50"
            accentColor="text-purple-400"
            iconColor="text-purple-400"
            buttonColor="border-purple-500 text-purple-400 hover:bg-purple-600"
            ctaColor="from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white"
            shadowColor="hover:shadow-[0_0_25px_rgba(147,51,234,0.4)]"
            imageOpacity="opacity-70"
            singlePlan={false}
            plans={[
              {
                name: "Acesso Completo",
                price: "800,00",
                originalPrice: "1.000,00",
                features: ["5 anos de acesso", "Suporte até dezembro de 2025", "Acesso a todos os módulos"],
                learnMoreLink: "/mdm-avancado",
                buyLink:
                  "https://pay.hotmart.com/F87621340K?sck=HOTMART_MEM_CA&off=swo1f3w6&offDiscount=cna-20.00-ue1ok6dn&hotfeature=32&_gl=1*1r1jimo*_gcl_au*MTk4MTc0ODI1MS4xNzQwOTUzNzcz*_ga*MjE0Mzc5NDE3OC4xNzQwOTUzNzcz*_ga_GQH2V1F11Q*MTc0NTI3MjkzMS4zOS4xLjE3NDUyNzQwODQuNTkuMC4w&bid=1745274100318",
              },
              {
                name: "Acesso Básico",
                price: "500,00",
                originalPrice: "1.000,00",
                features: ["1 ano de acesso", "2 meses de suporte", "Acesso a todos os módulos"],
                learnMoreLink: "/mdm-avancado",
                buyLink:
                  "https://pay.hotmart.com/S99204912U?sck=HOTMART_MEM_CA&off=yrsnj2bb&offDiscount=cna-50.00-rxcs6mfc&hotfeature=32&_gl=1*7zgaij*_gcl_au*MTk4MTc0ODI1MS4xNzQwOTUzNzcz*_ga*MjE0Mzc5NDE3OC4xNzQwOTUzNzcz*_ga_GQH2V1F11Q*MTc0NTI3MjkzMS4zOS4xLjE3NDUyNzQxMDcuMzYuMC4w&bid=1745274108788",
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
                <a href="https://wa.link/iz362r" target="_blank" rel="noopener noreferrer">
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

// Componente de card de curso reutilizável para garantir consistência
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
  // Use state to track the active plan
  const [activePlan, setActivePlan] = useState(0)

  // Function to handle plan selection
  const handlePlanSelect = (index) => {
    setActivePlan(index)
  }

  return (
    <Card
      className={`bg-gradient-to-b from-martech-darkgray to-black ${borderColor} text-white overflow-hidden group ${shadowColor} transition-all duration-300 flex flex-col h-full`}
    >
      <div className="relative">
        <div className={`absolute top-0 right-0 z-10 ${badge.color} text-white text-xs font-bold py-1 px-3`}>
          {badge.text}
        </div>
        <div className="relative h-48 bg-martech-darkgray overflow-hidden">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            fill
            className={`object-cover transition-transform duration-500 group-hover:scale-110 ${imageOpacity}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
      </div>

      <div className="p-4 sm:p-5 flex flex-col h-full">
        {/* Título e descrição com altura fixa */}
        <div className="mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-white h-14 sm:h-16 flex items-start">{title}</h3>
          <p className="text-gray-300 text-xs sm:text-sm h-16 sm:h-20 mb-2">{description}</p>
        </div>

        {/* Custom plan selector */}
        <div className="w-full flex-grow">
          {/* Custom tabs */}
          <div className="flex w-full mb-3 rounded-lg overflow-hidden border border-gray-700/30">
            {plans.map((plan, index) => (
              <button
                key={index}
                onClick={() => handlePlanSelect(index)}
                className={`flex-1 py-2 px-1 text-xs sm:text-sm transition-all duration-300 ${
                  index === 0 ? "rounded-l-lg" : index === plans.length - 1 ? "rounded-r-lg" : ""
                } ${
                  activePlan === index
                    ? badge.color.includes("gradient")
                      ? badge.color
                      : badge.color
                    : "bg-transparent hover:bg-gray-800"
                } ${activePlan === index ? "text-white" : "text-gray-400"}`}
              >
                {plan.name}
              </button>
            ))}
          </div>

          {/* Content area */}
          <div className="relative h-[200px]">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-300 ${
                  activePlan === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <div className="flex flex-col h-full">
                  {/* Features section with fixed height */}
                  <div className="space-y-2 h-[120px]">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        {i === 0 ? (
                          <Clock className={`h-4 w-4 ${iconColor}`} />
                        ) : i === 1 ? (
                          <Users className={`h-4 w-4 ${iconColor}`} />
                        ) : (
                          <CheckCircle className={`h-4 w-4 ${iconColor}`} />
                        )}
                        <span className="text-gray-300 text-xs sm:text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Área de preço e botões - posição fixa na parte inferior */}
                  <div className="pt-2 mt-auto border-t border-gray-700/30">
                    {/* Área de preço */}
                    <div className="mb-2">
                      <p className="text-gray-400 text-xs">
                        {plan.originalPrice ? "Preço com 20% OFF" : "Investimento"}
                      </p>
                      <div className="flex items-center gap-2">
                        {plan.originalPrice && (
                          <span className="text-gray-500 text-xs line-through">R$ {plan.originalPrice}</span>
                        )}
                        <p className={`${accentColor} font-bold text-lg`}>R$ {plan.price}</p>
                      </div>
                    </div>

                    {/* Área de botões */}
                    <div className="grid grid-cols-2 gap-2">
                      <Link href={plan.learnMoreLink} className="block">
                        <Button variant="outline" className={`${buttonColor} hover:text-white text-xs h-9 w-full`}>
                          Saiba mais
                        </Button>
                      </Link>
                      <Link
                        href={
                          // Link específico para o acesso básico do curso MDM NÍVEL 1
                          title === "CURSO MDM NÍVEL 1" && plan.name === "Acesso Básico"
                            ? "https://pay.hotmart.com/I94355959M?sck=HOTMART_MEM_CA&off=6d6cocrz&offDiscount=cna-60.00-u0vgxl3s&hotfeature=32&_gl=1*171596c*_ga*MTExMzM1MTEyMS4xNzQxMzU0Mjk4*_ga_GQH2V1F11Q*MTc0MTY0ODg3NS44LjEuMTc0MTY0OTA5MS40My4wLjA.&bid=1741649097579"
                            : title === "CURSO MDM NÍVEL 1" && plan.name === "Acesso Completo"
                              ? "https://pay.hotmart.com/U94589271J?sck=HOTMART_MEM_CA&off=9nq1zfj8&offDiscount=cna-30.00-ysg574mf&hotfeature=32&_gl=1*iruucb*_gcl_au*MTA4MTQ5MDg0My4xNzQxNjQ5MDk3*_ga*MTExMzM1MTEyMS4xNzQxMzU0Mjk4*_ga_GQH2V1F11Q*MTc0MTY0ODg3NS44LjEuMTc0MTY0OTE2Mi42MC4wLjA.&bid=1741649164793"
                              : title === "CURSO DE REMOÇÃO DE ICLOUD E FRP ANDROID" && plan.name === "Acesso Básico"
                                ? "https://pay.hotmart.com/W95189620X?sck=HOTMART_MEM_CA&off=wretdivk&offDiscount=cna-60.00-3anuljqq&hotfeature=32&_gl=1*jv4vma*_gcl_au*MTk4MTc0ODI1MS4xNzQwOTUzNzcz*_ga*MjE0Mzc5NDE3OC4xNzQwOTUzNzcz*_ga_GQH2V1F11Q*MTc0MTY0OTA1NC4xNy4xLjE3NDE2NDk3OTUuNDYuMC4w&bid=1741649815251"
                                : title === "CURSO DE REMOÇÃO DE ICLOUD E FRP ANDROID" &&
                                    plan.name === "Acesso Completo"
                                  ? "https://pay.hotmart.com/I92740095I?sck=HOTMART_MEM_CA&off=kzkum1js&offDiscount=cna-30.00-dtz8oi2y&hotfeature=32&_gl=1*1kw2nd7*_gcl_au*MTA4MTQ5MDg0My4xNzQxNjQ5MDk3*_ga*MTExMzM1MTEyMS4xNzQxMzU0Mjk4*_ga_GQH2V1F11Q*MTc0MTY0ODg3NS44LjEuMTc0MTY1MDIxMy41Ny4wLjA.&bid=1741650216222"
                                  : title === "MDM DO BÁSICO AO AVANÇADO" && plan.name === "Acesso Completo"
                                    ? "https://pay.hotmart.com/F87621340K?sck=HOTMART_MEM_CA&off=swo1f3w6&offDiscount=cna-20.00-ue1ok6dn&hotfeature=32&_gl=1*1r1jimo*_gcl_au*MTk4MTc0ODI1MS4xNzQwOTUzNzcz*_ga*MjE0Mzc5NDE3OC4xNzQwOTUzNzcz*_ga_GQH2V1F11Q*MTc0NTI3MjkzMS4zOS4xLjE3NDUyNzQwODQuNTkuMC4w&bid=1745274100318"
                                    : title === "MDM DO BÁSICO AO AVANÇADO" && plan.name === "Acesso Básico"
                                      ? "https://pay.hotmart.com/S99204912U?sck=HOTMART_MEM_CA&off=yrsnj2bb&offDiscount=cna-50.00-rxcs6mfc&hotfeature=32&_gl=1*7zgaij*_gcl_au*MTk4MTc0ODI1MS4xNzQwOTUzNzcz*_ga*MjE0Mzc5NDE3OC4xNzQwOTUzNzcz*_ga_GQH2V1F11Q*MTc0NTI3MjkzMS4zOS4xLjE3NDUyNzQxMDcuMzYuMC4w&bid=1745274108788"
                                      : plan.buyLink
                        }
                        className="block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          className={`bg-gradient-to-r ${
                            // Special case for MDM basic course
                            title === "CURSO MDM NÍVEL 1"
                              ? "from-martech-blue to-blue-700 hover:from-blue-700 hover:to-martech-blue text-white"
                              : ctaColor
                          } font-bold text-xs h-9 w-full`}
                        >
                          Comprar
                          <ChevronRight className="ml-1 h-3 w-3" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
