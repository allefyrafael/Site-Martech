"use client"
import { Badge } from "@/components/ui/badge"
import { faqs } from "@/lib/data/faqs"
import { faqsFRP } from "@/lib/data/faqs-frp"

interface FAQSectionProps {
  courseType?: "mdm" | "frp" | "mdm-avancado" | "curso-vip"
}

export default function FAQSection({ courseType = "mdm" }: FAQSectionProps) {
  // Selecionar os dados corretos com base no tipo de curso
  const faqsData = courseType === "frp" ? faqsFRP : faqs

  // Título específico para cada curso
  const sectionTitle = courseType === "frp" ? "PERGUNTAS FREQUENTES SOBRE FRP E ICLOUD" : "PERGUNTAS FREQUENTES"

  // Definir cores com base no tipo de curso
  const getBorderColor = () => {
    if (courseType === "frp") return "border-green-500/30"
    if (courseType === "mdm-avancado") return "border-purple-500/30"
    if (courseType === "curso-vip") return "border-amber-500/30"
    return "border-martech-blue/30"
  }

  const getShadowColor = () => {
    if (courseType === "frp") return "hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]"
    if (courseType === "mdm-avancado") return "hover:shadow-[0_0_15px_rgba(147,51,234,0.3)]"
    if (courseType === "curso-vip") return "hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]"
    return "hover:shadow-[0_0_15px_rgba(0,160,233,0.3)]"
  }

  const getCircleColor = () => {
    if (courseType === "frp") return "bg-green-500"
    if (courseType === "mdm-avancado") return "bg-purple-500"
    if (courseType === "curso-vip") return "bg-amber-500"
    return "bg-martech-blue"
  }

  const getTextHoverColor = () => {
    if (courseType === "frp") return "group-open:text-green-400"
    if (courseType === "mdm-avancado") return "group-open:text-purple-400"
    if (courseType === "curso-vip") return "group-open:text-amber-400"
    return "group-open:text-martech-yellow"
  }

  const getIconColor = () => {
    if (courseType === "frp") return "text-green-400"
    if (courseType === "mdm-avancado") return "text-purple-400"
    if (courseType === "curso-vip") return "text-amber-400"
    return "text-martech-yellow"
  }

  const getBorderTopColor = () => {
    if (courseType === "frp") return "border-green-500/20"
    if (courseType === "mdm-avancado") return "border-purple-500/20"
    if (courseType === "curso-vip") return "border-amber-500/20"
    return "border-martech-blue/20"
  }

  return (
    <section className="py-16 bg-martech-black relative">
      {/* Transição suave superior */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent"></div>

      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <Badge className="bg-martech-blue text-white hover:bg-martech-blue/80 mb-4 px-4 py-1.5 text-sm">
            <span className="mr-2">💡</span>DÚVIDAS FREQUENTES
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{sectionTitle}</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Encontre respostas para as perguntas mais comuns sobre o nosso treinamento
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 px-4">
          {faqsData.map((faq, index) => (
            <div
              key={index}
              className={`bg-martech-darkgray border ${getBorderColor()} rounded-xl overflow-hidden shadow-lg ${getShadowColor()} transition-all duration-300`}
            >
              <details className="group">
                <summary className="flex items-center justify-between p-5 cursor-pointer focus:outline-none">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-full ${getCircleColor()} flex items-center justify-center text-xl transition-transform duration-300 group-open:scale-110`}
                    >
                      {faq.emoji}
                    </div>
                    <h3
                      className={`text-base sm:text-lg font-bold text-white transition-colors duration-300 ${getTextHoverColor()}`}
                    >
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`flex-shrink-0 ml-2 transition-all duration-300 group-open:rotate-180 ${getTextHoverColor()}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={getIconColor()}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </summary>
                <div className="overflow-hidden transition-all duration-500 max-h-0 group-open:max-h-[500px]">
                  <div className={`p-5 pt-0 border-t ${getBorderTopColor()} animate-fadeIn`}>
                    <div className="pl-12 pr-4 text-gray-300 text-sm sm:text-base space-y-2">
                      {faq.answer.split("!!!").map((paragraph, i) => (
                        <p
                          key={i}
                          className={`${i > 0 ? "mt-3" : ""} transition-opacity duration-500 opacity-0 group-open:opacity-100 delay-150`}
                        >
                          {paragraph.trim()}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>

      {/* Transição suave inferior */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-martech-black/40"></div>
    </section>
  )
}
