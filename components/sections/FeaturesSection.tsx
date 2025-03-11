import { CheckCircle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { features } from "@/lib/data/features"
import { featuresFRP } from "@/lib/data/features-frp"

interface FeaturesSectionProps {
  courseType?: "mdm" | "frp"
}

export default function FeaturesSection({ courseType = "mdm" }: FeaturesSectionProps) {
  // Selecionar os dados corretos com base no tipo de curso
  const featuresData = courseType === "frp" ? featuresFRP : features

  // Título e descrição específicos para cada curso
  const sectionTitle = courseType === "frp" ? "O QUE VOCÊ VAI APRENDER" : "O QUE VOCÊ VAI APRENDER"

  const sectionDescription =
    courseType === "frp"
      ? "Você vai aprender tudo sobre as remoções de FRP Android e desbloqueios de iCloud, utilizando as ferramentas mais eficientes do mercado."
      : "Você vai aprender tudo sobre as remoções de MDM que não envolvam intervenção física com procedimentos de JTAG/EMMC e reprogramação."

  const badgeText = courseType === "frp" ? "CURSO FRP E ICLOUD" : "CURSO MDM NÍVEL I"
  const badgeColors =
    courseType === "frp" ? "from-green-500 to-green-600 text-white" : "from-martech-orange to-martech-yellow text-black"

  return (
    <section
      id="cursos"
      className="py-16 bg-gradient-to-b from-martech-black to-martech-darkgray bg-martech-gradient relative"
    >
      {/* Transição suave superior */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-martech-black to-transparent"></div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge
            className={`bg-gradient-to-r ${badgeColors} font-bold hover:from-martech-yellow hover:to-martech-orange mb-4`}
          >
            {badgeText}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{sectionTitle}</h2>
          <p className="text-gray-300">{sectionDescription}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {featuresData.map((card, index) => (
            <Card key={index} className="bg-martech-card border-martech-blue text-white h-full">
              <div className="p-4 sm:p-6 flex flex-col h-full justify-between">
                {/* Icon section */}
                <div className="mb-4 sm:mb-6 flex-shrink-0">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-r from-martech-orange to-martech-yellow flex items-center justify-center">
                    {card.icon}
                  </div>
                </div>

                {/* Content section */}
                <div className="flex flex-col flex-grow space-y-4">
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold break-words min-h-[3rem] flex items-center">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <div className="flex-shrink-0">
                    <p className="text-sm sm:text-base text-gray-300">{card.description}</p>
                  </div>

                  {/* List section */}
                  <div className="mt-auto flex-grow flex flex-col justify-end">
                    <ul className="grid gap-2 sm:gap-3 min-h-[8rem]">
                      {card.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle className="text-green-500 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base text-white">
                            {item.includes("Apple") ? item.replace("Apple", "fabricante Apple") : item}
                          </span>
                        </li>
                      ))}
                      {/* Add additional tools for MDM Advanced course */}
                      {window.location.pathname === "/mdm-avancado" && card.title === "Ferramentas Profissionais" && (
                        <>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="text-green-500 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-0.5" />
                            <span className="text-sm sm:text-base text-white">EASY JTAG</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="text-green-500 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-0.5" />
                            <span className="text-sm sm:text-base text-white">MEDUSA</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="text-green-500 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-0.5" />
                            <span className="text-sm sm:text-base text-white">UFI entre outros</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Seção de conteúdo detalhado do curso - design unificado para MDM e FRP */}
        <div className="mt-16 relative">
          {/* Fundo com efeito de gradiente */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 rounded-2xl blur-sm -m-2"></div>

          {/* Borda superior com gradiente */}
          <div
            className={`absolute top-0 left-1/2 transform -translate-x-1/2 h-1 w-3/4 rounded-full ${
              courseType === "frp"
                ? "bg-gradient-to-r from-transparent via-green-500 to-transparent"
                : "bg-gradient-to-r from-transparent via-martech-blue to-transparent"
            }`}
          ></div>

          <div
            className={`relative p-8 rounded-xl border ${
              courseType === "frp" ? "border-green-500/20" : "border-martech-blue/20"
            } bg-black/40 backdrop-blur-sm`}
          >
            {/* Contador de aulas com design destacado */}
            <div className="flex flex-col items-center justify-center mb-8">
              <div
                className={`flex items-center justify-center w-20 h-20 rounded-full ${
                  courseType === "frp" ? "bg-green-500/10" : "bg-martech-blue/10"
                } mb-3`}
              >
                <span className={`text-3xl font-bold ${courseType === "frp" ? "text-green-400" : "text-martech-blue"}`}>
                  200+
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white text-center">Aulas Detalhadas</h3>
              <p className="text-gray-400 text-sm mt-1">Conteúdo completo e atualizado regularmente</p>
            </div>

            {/* Categorias principais do curso */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {courseType === "mdm" ? (
                <>
                  {/* Categorias para MDM - com altura fixa e alinhamento padronizado */}
                  <div className="group h-full flex">
                    <div className="bg-gradient-to-br from-black to-martech-darkgray p-5 rounded-xl border border-martech-blue/20 w-full transform transition-all duration-300 group-hover:border-martech-blue/50 group-hover:shadow-[0_0_15px_rgba(0,160,233,0.2)] flex flex-col">
                      <div className="flex items-center mb-3">
                        <div className="min-w-[2.5rem] min-h-[2.5rem] w-10 h-10 rounded-full bg-martech-blue/20 flex items-center justify-center mr-3 transition-all duration-300 group-hover:bg-martech-blue/30 group-hover:scale-110">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-martech-blue transition-colors duration-300 group-hover:text-martech-blue"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                            />
                          </svg>
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-white/90 transition-colors duration-300">
                          Ferramentas Profissionais
                        </h4>
                      </div>
                      <div className="pl-2 border-l-2 border-martech-blue/30 flex-grow flex flex-col">
                        <ul className="space-y-2 text-gray-300 flex-grow">
                          <li className="flex items-start">
                            <span className="text-martech-blue mr-2">•</span>
                            <span>Unlock Tool, Octoplus, AMT</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-martech-blue mr-2">•</span>
                            <span>Tool G-U, GT/TMT, MFT</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-martech-blue mr-2">•</span>
                            <span>Moto King Pro Tool</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-martech-blue mr-2">•</span>
                            <span>EASY JTAG, MEDUSA, UFI entre outros</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-martech-blue mr-2">•</span>
                            <span>Acesso a todos os servidores</span>
                          </li>
                        </ul>
                        <div className="mt-3 text-xs text-gray-500">23 módulos específicos</div>
                      </div>
                    </div>
                  </div>

                  <div className="group h-full flex">
                    <div className="bg-gradient-to-br from-black to-martech-darkgray p-5 rounded-xl border border-martech-orange/20 w-full transform transition-all duration-300 group-hover:border-martech-orange/50 group-hover:shadow-[0_0_15px_rgba(255,127,0,0.2)] flex flex-col">
                      <div className="flex items-center mb-3">
                        <div className="min-w-[2.5rem] min-h-[2.5rem] w-10 h-10 rounded-full bg-martech-orange/20 flex items-center justify-center mr-3 transition-all duration-300 group-hover:bg-martech-orange/30 group-hover:scale-110">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-martech-orange transition-colors duration-300 group-hover:text-martech-orange"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-white/90 transition-colors duration-300">
                          Dispositivos Suportados
                        </h4>
                      </div>
                      <div className="pl-2 border-l-2 border-martech-orange/30 flex-grow flex flex-col">
                        <ul className="space-y-2 text-gray-300 flex-grow">
                          <li className="flex items-start">
                            <span className="text-martech-orange mr-2">•</span>
                            <span>Samsung (Exynos, Qualcomm e Mediatek)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-martech-orange mr-2">•</span>
                            <span>Motorola, Xiaomi, Realme</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-martech-orange mr-2">•</span>
                            <span>APPLE</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-martech-orange mr-2">•</span>
                            <span>Todos os principais modelos</span>
                          </li>
                          {/* Item invisível para manter alinhamento */}
                          <li className="flex items-start invisible">
                            <span className="text-martech-orange mr-2">•</span>
                            <span>Espaçador</span>
                          </li>
                        </ul>
                        <div className="mt-3 text-xs text-gray-500">Compatível com +90% do mercado</div>
                      </div>
                    </div>
                  </div>

                  <div className="group h-full flex">
                    <div className="bg-gradient-to-br from-black to-martech-darkgray p-5 rounded-xl border border-yellow-500/20 w-full transform transition-all duration-300 group-hover:border-yellow-500/50 group-hover:shadow-[0_0_15px_rgba(255,255,0,0.1)] flex flex-col">
                      <div className="flex items-center mb-3">
                        <div className="min-w-[2.5rem] min-h-[2.5rem] w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center mr-3 transition-all duration-300 group-hover:bg-yellow-500/30 group-hover:scale-110">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-yellow-400 transition-colors duration-300 group-hover:text-yellow-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-white/90 transition-colors duration-300">
                          Suporte Exclusivo
                        </h4>
                      </div>
                      <div className="pl-2 border-l-2 border-yellow-500/30 flex-grow flex flex-col">
                        <ul className="space-y-2 text-gray-300 flex-grow">
                          <li className="flex items-start">
                            <span className="text-yellow-400 mr-2">•</span>
                            <span>Lives semanais exclusivas</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-yellow-400 mr-2">•</span>
                            <span>Comunidade VIP até 2025</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-yellow-400 mr-2">•</span>
                            <span>Atualizações constantes</span>
                          </li>
                          {/* Itens invisíveis para manter alinhamento */}
                          <li className="flex items-start invisible">
                            <span className="text-yellow-400 mr-2">•</span>
                            <span>Espaçador</span>
                          </li>
                          <li className="flex items-start invisible">
                            <span className="text-yellow-400 mr-2">•</span>
                            <span>Espaçador</span>
                          </li>
                        </ul>
                        <div className="mt-3 text-xs text-gray-500">+20 lives exclusivas gravadas</div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Categorias para FRP - com altura fixa e alinhamento padronizado */}
                  <div className="group h-full flex">
                    <div className="bg-gradient-to-br from-black to-martech-darkgray p-5 rounded-xl border border-green-500/20 w-full transform transition-all duration-300 group-hover:border-green-500/50 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] flex flex-col">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-500/20 flex items-center justify-center mr-2 sm:mr-3 transition-all duration-300 group-hover:bg-green-500/30 group-hover:scale-110">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 transition-colors duration-300 group-hover:text-green-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-white/90 transition-colors duration-300">
                          FRP Android
                        </h4>
                      </div>
                      <div className="pl-2 border-l-2 border-green-500/30 flex-grow flex flex-col">
                        <ul className="space-y-2 text-gray-300 flex-grow">
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            <span>UnlockTool, Phoenix, Chimera</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            <span>Remoção via servidores premium</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            <span>Bypass para todos os modelos</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            <span>Técnicas para Android 9-13</span>
                          </li>
                        </ul>
                        <div className="mt-3 text-xs text-gray-500">+70 aulas específicas</div>
                      </div>
                    </div>
                  </div>

                  <div className="group h-full flex">
                    <div className="bg-gradient-to-br from-black to-martech-darkgray p-5 rounded-xl border border-gray-500/20 w-full transform transition-all duration-300 group-hover:border-gray-500/50 group-hover:shadow-[0_0_15px_rgba(156,163,175,0.2)] flex flex-col">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-600/20 flex items-center justify-center mr-2 sm:mr-3 transition-all duration-300 group-hover:bg-purple-600/30 group-hover:scale-110">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400 transition-colors duration-300 group-hover:text-purple-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-white/90 transition-colors duration-300">
                          iCloud iOS
                        </h4>
                      </div>
                      <div className="pl-2 border-l-2 border-gray-500/30 flex-grow flex flex-col">
                        <ul className="space-y-2 text-gray-300 flex-grow">
                          <li className="flex items-start">
                            <span className="text-gray-300 mr-2">•</span>
                            <span>iRemoval, SMD, LPRO, HFZ</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-gray-300 mr-2">•</span>
                            <span>Desbloqueio para iPhone 7-13</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-gray-300 mr-2">•</span>
                            <span>Soluções para modo LOST</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-gray-300 mr-2">•</span>
                            <span>Bypass de ativação definitivo</span>
                          </li>
                        </ul>
                        <div className="mt-3 text-xs text-gray-500">+50 aulas específicas</div>
                      </div>
                    </div>
                  </div>

                  <div className="group h-full flex">
                    <div className="bg-gradient-to-br from-black to-martech-darkgray p-5 rounded-xl border border-blue-500/20 w-full transform transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] flex flex-col">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-2 sm:mr-3 transition-all duration-300 group-hover:bg-blue-500/30 group-hover:scale-110">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 transition-colors duration-300 group-hover:text-blue-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-white/90 transition-colors duration-300">
                          Screen Lock
                        </h4>
                      </div>
                      <div className="pl-2 border-l-2 border-blue-500/30 flex-grow flex flex-col">
                        <ul className="space-y-2 text-gray-300 flex-grow">
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            <span>Remoção sem perda de dados</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            <span>Extração via Test Point e JTAG</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            <span>Ferramentas profissionais</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            <span>Técnicas para Samsung, Xiaomi, iPhone</span>
                          </li>
                        </ul>
                        <div className="mt-3 text-xs text-gray-500">+40 aulas específicas</div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Rodapé com informações adicionais */}
            <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-center">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${courseType === "frp" ? "text-green-400" : "text-martech-blue"} mr-2`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-gray-300">5 anos de acesso ao conteúdo</span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${courseType === "frp" ? "text-green-400" : "text-martech-blue"} mr-2`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                <span className="text-gray-300">Atualizações constantes</span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${courseType === "frp" ? "text-green-400" : "text-martech-blue"} mr-2`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span className="text-gray-300">Garantia de 7 dias</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transição suave inferior */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-martech-darkgray to-transparent"></div>
    </section>
  )
}

