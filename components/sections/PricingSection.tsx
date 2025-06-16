"use client"

import { useState } from "react"

interface PricingSectionProps {
  courseType?: "mdm" | "frp" | "mdm-avancado" | "curso-vip"
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
          "https://pay.hotmart.com/I92740095I?sck=HOTMART_MEM_CA&off=kzkum1js&offDiscount=cna-30.00-dtz8oi2y&hotfeature=32&_gl=1*1kw2nd7*_gcl_au*MTA4MTQ5MDg0My4xNzQxNjQ5MDk3*_ga*MTExMzM1MTEyMS4xNzQxMzU0Mjk4*_ga_GQH2V1F11Q*MTc0MTY0ODg3NS44LjEuMTc0MTY1MDIxMy41Ny4wLjA.&bid=1741650216222",
          "_blank",
        )
      } else {
        window.open(
          "https://pay.hotmart.com/W95189620X?sck=HOTMART_MEM_CA&off=wretdivk&offDiscount=cna-60.00-3anuljqq&hotfeature=32&_gl=1*jv4vma*_gcl_au*MTk4MTc0ODI1MS4xNzQwOTUzNzcz*_ga*MjE0Mzc5NDE3OC4xNzQwOTUzNzcz*_ga_GQH2V1F11Q*MTc0MTY0OTA1NC4xNy4xLjE3NDE2NDk3OTUuNDYuMC4w&bid=1741649815251",
          "_blank",
        )
      }
    } else if (courseType === "mdm") {
      // URLs for MDM course
      if (selectedPlan === "completo") {
        window.open(
          "https://pay.hotmart.com/U94589271J?sck=HOTMART_MEM_CA&off=9nq1zfj8&offDiscount=cna-30.00-ysg574mf&hotfeature=32&_gl=1*iruucb*_gcl_au*MTA4MTQ5MDg0My4xNzQxNjQ5MDk3*_ga*MTExMzM1MTEyMS4xNzQxMzU0Mjk4*_ga_GQH2V1F11Q*MTc0MTY0ODg3NS44LjEuMTc0MTY0OTE2Mi42MC4wLjA.&bid=1741649164793",
          "_blank",
        )
      } else {
        window.open(
          "https://pay.hotmart.com/I94355959M?sck=HOTMART_MEM_CA&off=6d6cocrz&offDiscount=cna-60.00-u0vgxl3s&hotfeature=32&_gl=1*171596c*_ga*MTExMzM1MTEyMS4xNzQxMzU0Mjk4*_ga_GQH2V1F11Q*MTc0MTY0ODg3NS44LjEuMTc0MTY0OTA5MS40My4wLjA.&bid=1741649097579",
          "_blank",
        )
      }
    } else if (courseType === "mdm-avancado") {
      // URLs for MDM Advanced course
      if (selectedPlan === "completo") {
        window.open(
          "https://pay.hotmart.com/F87621340K?sck=HOTMART_MEM_CA&off=swo1f3w6&offDiscount=cna-20.00-ue1ok6dn&hotfeature=32&_gl=1*1r1jimo*_gcl_au*MTk4MTc0ODI1MS4xNzQwOTUzNzcz*_ga*MjE0Mzc5NDE3OC4xNzQwOTUzNzcz*_ga_GQH2V1F11Q*MTc0NTI3MjkzMS4zOS4xLjE3NDUyNzQwODQuNTkuMC4w&bid=1745274100318",
          "_blank",
        )
      } else {
        window.open(
          "https://pay.hotmart.com/S99204912U?sck=HOTMART_MEM_CA&off=yrsnj2bb&offDiscount=cna-50.00-rxcs6mfc&hotfeature=32&_gl=1*7zgaij*_gcl_au*MTk4MTc0ODI1MS4xNzQwOTUzNzcz*_ga*MjE0Mzc5NDE3OC4xNzQwOTUzNzcz*_ga_GQH2V1F11Q*MTc0NTI3MjkzMS4zOS4xLjE3NDUyNzQxMDcuMzYuMC4w&bid=1745274108788",
          "_blank",
        )
      }
    } else if (courseType === "curso-vip") {
      // URLs for curso-vip
      if (selectedPlan === "completo") {
        window.open(
          "https://pay.hotmart.com/A99132064J?sck=HOTMART_MEM_CA&off=g9xkf18r&offDiscount=cna-20.00-wrp70n9h&hotfeature=32&_gl=1*1ju5uvk*_gcl_au*MTM2ODQwNjQ2Ny4xNzQ1MjczNTg4*_ga*Njg4NzkyNjQwLjE3NDI3Mjk5NTE.*_ga_GQH2V1F11Q*MTc0NjE0MDY2Ni42LjEuMTc0NjE0MDcxNi4xMC4wLjEzMjYyMTY2MzQ.&bid=1746142192852",
          "_blank",
        )
      } else {
        window.open(
          "https://pay.hotmart.com/H99211424I?sck=HOTMART_MEM_CA&off=wl2bqj0f&offDiscount=cna-50.00-3g2khe20&hotfeature=32&_gl=1*rwhj6r*_gcl_au*MTM2ODQwNjQ2Ny4xNzQ1MjczNTg4*_ga*Njg4NzkyNjQwLjE3NDI3Mjk5NTE.*_ga_GQH2V1F11Q*MTc0NjE0MDY2Ni42LjEuMTc0NjE0MjE5My41OS4wLjA.&bid=1746142217584",
          "_blank",
        )
      }
    } else {
      // Default URL for other courses
      window.open("https://go.hotmart.com/F87621340K", "_blank")
    }
  }

  return (
    <section
      id="pricing"
      className="py-12 md:py-16 bg-gradient-to-b from-yellow-900/80 to-martech-darkgray relative overflow-hidden"
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
        {/* Conteúdo removido conforme solicitado */}
      </div>

      {/* Transição suave inferior */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}
