"use client"

import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

// Adicionar estilos CSS globais para a barra de rolagem personalizada
import { useEffect } from "react"

export default function CursoVIPSection() {
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({})

  // Adicionar useEffect para aplicar estilos de scrollbar
  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = `
      .custom-scrollbar::-webkit-scrollbar {
        width: 8px;
      }
      .custom-scrollbar::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.2);
        border-radius: 10px;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb {
        background: rgba(234, 179, 8, 0.5);
        border-radius: 10px;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: rgba(234, 179, 8, 0.7);
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  const toggleModule = (moduleId: string) => {
    setExpandedModules((prev) => {
      const newState = {
        ...prev,
        [moduleId]: !prev[moduleId],
      }

      // Se o módulo está sendo expandido, role até ele
      if (!prev[moduleId]) {
        setTimeout(() => {
          const element = document.getElementById(moduleId)
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        }, 100)
      }

      return newState
    })
  }

  return (
    <section className="bg-gradient-to-b from-martech-darkgray to-martech-black relative overflow-hidden">
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
        <div className="relative overflow-hidden bg-gradient-to-r from-martech-black via-martech-darkgray to-martech-black p-8 md:p-10 shadow-[0_0_35px_rgba(234,179,8,0.3)] border-y border-yellow-500/30 transform transition-all duration-300 hover:shadow-[0_0_50px_rgba(234,179,8,0.5)]">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-martech-yellow to-martech-orange"></div>
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-yellow-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-martech-orange/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="h-1 w-16 bg-yellow-500 rounded-full"></div>
              <h3 className="mx-4 text-3xl font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-white to-martech-yellow">
                CURSO VIP DO BÁSICO AO AVANÇADO
              </h3>
              <div className="h-1 w-16 bg-martech-yellow rounded-full"></div>
            </div>

            <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-4xl mx-auto text-center">
              ➡️📢🛠️⚙️DO BÁSICO AO AVANÇADO🔬VOCÊ VAI APRENDER➡️ABSOLUTAMENTE TUDO SOBRE AS REMOÇÕES
            </p>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
              <Badge className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-4 py-2 text-base shadow-lg transform transition-transform hover:scale-105">
                <span className="flex items-center">
                  <span className="mr-1">🛠️</span> FRP ANDROID
                </span>
              </Badge>
              <Badge className="bg-gradient-to-r from-gray-200 to-gray-300 text-black px-4 py-2 text-base shadow-lg transform transition-transform hover:scale-105">
                <span className="flex items-center">
                  <span className="mr-1">🍎</span> ICLOUD iOS
                </span>
              </Badge>
              <Badge className="bg-gradient-to-r from-martech-blue to-blue-700 text-white px-4 py-2 text-base shadow-lg transform transition-transform hover:scale-105">
                <span className="flex items-center">
                  <span className="mr-1">🔓</span> SCREEN LOCK
                </span>
              </Badge>
              <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 text-base shadow-lg transform transition-transform hover:scale-105">
                <span className="flex items-center">
                  <span className="mr-1">⚙️</span> UNLOCK TOOL
                </span>
              </Badge>
              <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 text-base shadow-lg transform transition-transform hover:scale-105">
                <span className="flex items-center">
                  <span className="mr-1">🔧</span> SERVIDORES
                </span>
              </Badge>
            </div>

            {/* Descrição do curso */}
            <div className="bg-black/30 rounded-xl p-6 border border-yellow-500/20 mb-8">
              <h4 className="text-xl font-bold text-center text-white mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-martech-yellow">
                  TREINAMENTO COMPLETO DO BÁSICO AO AVANÇADO
                </span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-black/60 to-black/40 p-5 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all shadow-lg hover:shadow-yellow-500/10">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center mr-3">
                      <span className="text-yellow-500 text-xl">🛠️</span>
                    </div>
                    <h5 className="text-yellow-500 font-bold">FRP ANDROID</h5>
                  </div>
                  <p className="text-gray-300 pl-13">
                    REMOÇÃO DE CONTA GOOGLE - Procedimentos avançados para todos os modelos de smartphones
                  </p>
                </div>

                <div className="bg-gradient-to-br from-black/60 to-black/40 p-5 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all shadow-lg hover:shadow-yellow-500/10">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center mr-3">
                      <span className="text-yellow-500 text-xl">🔓</span>
                    </div>
                    <h5 className="text-yellow-500 font-bold">SCREEN LOCK</h5>
                  </div>
                  <p className="text-gray-300 pl-13">
                    REMOÇÃO DA SENHA PADRÃO - Técnicas sem apagar os dados do dispositivo
                  </p>
                </div>

                <div className="bg-gradient-to-br from-black/60 to-black/40 p-5 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all shadow-lg hover:shadow-yellow-500/10">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center mr-3">
                      <span className="text-yellow-500 text-xl">🔧</span>
                    </div>
                    <h5 className="text-yellow-500 font-bold">SERVIDORES</h5>
                  </div>
                  <p className="text-gray-300 pl-13">
                    SOLUÇÕES COMPLETAS - Acesso aos principais fabricantes e desenvolvedores mundiais
                  </p>
                </div>

                <div className="bg-gradient-to-br from-black/60 to-black/40 p-5 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all shadow-lg hover:shadow-yellow-500/10">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center mr-3">
                      <span className="text-yellow-500 text-xl">🍎</span>
                    </div>
                    <h5 className="text-yellow-500 font-bold">ICLOUD</h5>
                  </div>
                  <p className="text-gray-300 pl-13">
                    DESBLOQUEIO DE ATIVAÇÃO - Métodos avançados para aparelhos Apple
                  </p>
                </div>

                <div className="bg-gradient-to-br from-black/60 to-black/40 p-5 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all shadow-lg hover:shadow-yellow-500/10 md:col-span-2">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center mr-3">
                      <span className="text-yellow-500 text-xl">⚙️</span>
                    </div>
                    <h5 className="text-yellow-500 font-bold">UNLOCK TOOL</h5>
                  </div>
                  <p className="text-gray-300 pl-13">
                    CURSO COMPLETO - Domine a ferramenta mais poderosa do mercado para desbloqueios
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 bg-black/40 p-4 rounded-lg">
                <div className="flex items-center gap-3 border-l-4 border-yellow-500 pl-3 py-2">
                  <span className="text-yellow-500 text-xl">✔️</span>
                  <p className="text-gray-200 font-medium">PROCEDIMENTOS VIA JTAG & EMMC</p>
                </div>
                <div className="flex items-center gap-3 border-l-4 border-yellow-500 pl-3 py-2">
                  <span className="text-yellow-500 text-xl">✔️</span>
                  <p className="text-gray-200 font-medium">CURSO 100% ATUALIZADO</p>
                </div>
                <div className="flex items-center gap-3 border-l-4 border-yellow-500 pl-3 py-2">
                  <span className="text-yellow-500 text-xl">💵</span>
                  <p className="text-gray-200 font-medium">DIRETO NA FONTE SEM ATRAVESSADORES</p>
                </div>
              </div>
            </div>

            {/* Ferramentas */}
            <div className="bg-black/30 rounded-xl p-6 border border-yellow-500/20 mb-8">
              <div className="flex items-center justify-center mb-6">
                <div className="h-px w-16 bg-yellow-500/50 rounded-full"></div>
                <h4 className="mx-4 text-xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-martech-yellow">
                  FERRAMENTAS PROFISSIONAIS DE REPROGRAMAÇÃO
                </h4>
                <div className="h-px w-16 bg-yellow-500/50 rounded-full"></div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                <div className="bg-gradient-to-b from-black/60 to-black/40 rounded-xl border border-yellow-500/20 overflow-hidden hover:border-yellow-500/40 transition-all shadow-lg hover:shadow-yellow-500/10 group">
                  <div className="bg-yellow-500/10 p-3 flex justify-center">
                    <span className="text-yellow-500 text-2xl group-hover:scale-110 transition-transform">⚙️</span>
                  </div>
                  <div className="p-4 text-center">
                    <h5 className="text-yellow-500 font-bold mb-2">EASY JTAG</h5>
                    <p className="text-gray-300 text-sm">Reprogramação avançada</p>
                  </div>
                </div>

                <div className="bg-gradient-to-b from-black/60 to-black/40 rounded-xl border border-yellow-500/20 overflow-hidden hover:border-yellow-500/40 transition-all shadow-lg hover:shadow-yellow-500/10 group">
                  <div className="bg-yellow-500/10 p-3 flex justify-center">
                    <span className="text-yellow-500 text-2xl group-hover:scale-110 transition-transform">🔧</span>
                  </div>
                  <div className="p-4 text-center">
                    <h5 className="text-yellow-500 font-bold mb-2">MEDUSA</h5>
                    <p className="text-gray-300 text-sm">Recuperação de dados</p>
                  </div>
                </div>

                <div className="bg-gradient-to-b from-black/60 to-black/40 rounded-xl border border-yellow-500/20 overflow-hidden hover:border-yellow-500/40 transition-all shadow-lg hover:shadow-yellow-500/10 group">
                  <div className="bg-yellow-500/10 p-3 flex justify-center">
                    <span className="text-yellow-500 text-2xl group-hover:scale-110 transition-transform">📱</span>
                  </div>
                  <div className="p-4 text-center">
                    <h5 className="text-yellow-500 font-bold mb-2">UFI BOX</h5>
                    <p className="text-gray-300 text-sm">Multimarca universal</p>
                  </div>
                </div>

                <div className="bg-gradient-to-b from-black/60 to-black/40 rounded-xl border border-yellow-500/20 overflow-hidden hover:border-yellow-500/40 transition-all shadow-lg hover:shadow-yellow-500/10 group">
                  <div className="bg-yellow-500/10 p-3 flex justify-center">
                    <span className="text-yellow-500 text-2xl group-hover:scale-110 transition-transform">🔌</span>
                  </div>
                  <div className="p-4 text-center">
                    <h5 className="text-yellow-500 font-bold mb-2">MIPI</h5>
                    <p className="text-gray-300 text-sm">Interface de precisão</p>
                  </div>
                </div>

                <div className="bg-gradient-to-b from-black/60 to-black/40 rounded-xl border border-yellow-500/20 overflow-hidden hover:border-yellow-500/40 transition-all shadow-lg hover:shadow-yellow-500/10 group">
                  <div className="bg-yellow-500/10 p-3 flex justify-center">
                    <span className="text-yellow-500 text-2xl group-hover:scale-110 transition-transform">💾</span>
                  </div>
                  <div className="p-4 text-center">
                    <h5 className="text-yellow-500 font-bold mb-2">F64</h5>
                    <p className="text-gray-300 text-sm">Programador universal</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-black/40 p-5 rounded-lg border-l-4 border-yellow-500">
                <p className="text-gray-200 text-center">
                  Com nosso treinamento você vai dominar as melhores ferramentas e servidores do mercado mundial,
                  capacitando-se para solucionar qualquer problema que chegue à sua bancada.
                </p>
              </div>
            </div>

            {/* Vantagens do curso */}
            <div className="bg-black/30 rounded-xl p-6 border border-yellow-500/20 mb-8">
              <div className="flex items-center justify-center mb-6">
                <div className="h-px w-16 bg-yellow-500/50 rounded-full"></div>
                <h4 className="mx-4 text-xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-martech-yellow">
                  VANTAGENS EXCLUSIVAS DO TREINAMENTO
                </h4>
                <div className="h-px w-16 bg-yellow-500/50 rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-gradient-to-br from-black/60 to-black/40 p-4 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all shadow-md hover:shadow-yellow-500/10 flex flex-col">
                  <div className="bg-yellow-500/10 w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <span className="text-yellow-500 text-xl">💰</span>
                  </div>
                  <h5 className="text-yellow-500 font-bold text-center mb-2">Independência Técnica</h5>
                  <p className="text-gray-300 text-center text-sm">
                    Pare de terceirizar remoções de FRP e faça você mesmo na sua bancada
                  </p>
                </div>

                <div className="bg-gradient-to-br from-black/60 to-black/40 p-4 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all shadow-md hover:shadow-yellow-500/10 flex flex-col">
                  <div className="bg-yellow-500/10 w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <span className="text-yellow-500 text-xl">🏅</span>
                  </div>
                  <h5 className="text-yellow-500 font-bold text-center mb-2">Certificação Digital</h5>
                  <p className="text-gray-300 text-center text-sm">
                    Receba certificado digital de conclusão reconhecido pelo mercado
                  </p>
                </div>

                <div className="bg-gradient-to-br from-black/60 to-black/40 p-4 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all shadow-md hover:shadow-yellow-500/10 flex flex-col">
                  <div className="bg-yellow-500/10 w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <span className="text-yellow-500 text-xl">🌐</span>
                  </div>
                  <h5 className="text-yellow-500 font-bold text-center mb-2">Acesso Premium</h5>
                  <p className="text-gray-300 text-center text-sm">
                    Utilize os melhores e mais efetivos servidores do mundo
                  </p>
                </div>

                <div className="bg-gradient-to-br from-black/60 to-black/40 p-4 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all shadow-md hover:shadow-yellow-500/10 flex flex-col">
                  <div className="bg-yellow-500/10 w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <span className="text-yellow-500 text-xl">🛠️</span>
                  </div>
                  <h5 className="text-yellow-500 font-bold text-center mb-2">Domínio Técnico</h5>
                  <p className="text-gray-300 text-center text-sm">
                    Aprenda a utilizar as ferramentas adequadas para cada procedimento
                  </p>
                </div>

                <div className="bg-gradient-to-br from-black/60 to-black/40 p-4 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all shadow-md hover:shadow-yellow-500/10 flex flex-col">
                  <div className="bg-yellow-500/10 w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <span className="text-yellow-500 text-xl">📈</span>
                  </div>
                  <h5 className="text-yellow-500 font-bold text-center mb-2">Aumento de Lucro</h5>
                  <p className="text-gray-300 text-center text-sm">
                    Amplie consideravelmente o faturamento da sua empresa
                  </p>
                </div>

                <div className="bg-gradient-to-br from-black/60 to-black/40 p-4 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all shadow-md hover:shadow-yellow-500/10 flex flex-col">
                  <div className="bg-yellow-500/10 w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <span className="text-yellow-500 text-xl">💵</span>
                  </div>
                  <h5 className="text-yellow-500 font-bold text-center mb-2">Economia Real</h5>
                  <p className="text-gray-300 text-center text-sm">
                    Pague serviços e ferramentas diretamente na fonte sem intermediários
                  </p>
                </div>

                <div className="bg-gradient-to-br from-black/60 to-black/40 p-4 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all shadow-md hover:shadow-yellow-500/10 flex flex-col">
                  <div className="bg-yellow-500/10 w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <span className="text-yellow-500 text-xl">👥</span>
                  </div>
                  <h5 className="text-yellow-500 font-bold text-center mb-2">Suporte VIP</h5>
                  <p className="text-gray-300 text-center text-sm">
                    Acesso ao grupo exclusivo com suporte e lives semanais até Dez/2025
                  </p>
                </div>

                <div className="bg-gradient-to-br from-black/60 to-black/40 p-4 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all shadow-md hover:shadow-yellow-500/10 flex flex-col">
                  <div className="bg-yellow-500/10 w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <span className="text-yellow-500 text-xl">🔄</span>
                  </div>
                  <h5 className="text-yellow-500 font-bold text-center mb-2">Atualizações</h5>
                  <p className="text-gray-300 text-center text-sm">
                    Conteúdo constantemente atualizado com as últimas tecnologias
                  </p>
                </div>
              </div>

              <div className="bg-black/40 p-5 rounded-lg border-t border-yellow-500/30">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
                  <div className="flex flex-col items-center">
                    <div className="bg-yellow-500/10 w-14 h-14 rounded-full flex items-center justify-center mb-2">
                      <span className="text-yellow-500 text-2xl">🏆</span>
                    </div>
                    <p className="text-gray-200 font-medium">25 anos de experiência</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-yellow-500/10 w-14 h-14 rounded-full flex items-center justify-center mb-2">
                      <span className="text-yellow-500 text-2xl">🎓</span>
                    </div>
                    <p className="text-gray-200 font-medium">+2.000 alunos formados</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-yellow-500/10 w-14 h-14 rounded-full flex items-center justify-center mb-2">
                      <span className="text-yellow-500 text-2xl">🥇</span>
                    </div>
                    <p className="text-gray-200 font-medium">Pioneiro no Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Conteúdo do curso */}
            <div className="bg-black/30 rounded-xl p-6 border border-yellow-500/20">
              <h4 className="text-xl font-bold text-yellow-500 text-center mb-6">CONTEÚDO COMPLETO DO CURSO</h4>
              <div className="flex justify-center mb-6">
                <a
                  href="https://sso.hotmart.com/login?service=https%3A%2F%2Fsso.hotmart.com%2Foauth2.0%2FcallbackAuthorize%3Fclient_id%3Db432cdd3-eb60-46bd-892b-5b450a65153e%26redirect_uri%3Dhttps%253A%252F%252Fhotmart.com%252Fen%252Fclub%252Fmartech-cursos-de-software-ead%252Fauth%252Flogin%26response_type%3Dcode%26response_mode%3Dquery%26client_name%3DCasOAuthClient"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
                >
                  <span>Acessar Cursos</span>
                  <ChevronDown className="h-4 w-4 rotate-270" />
                </a>
              </div>

              {/* Módulo 1 */}
              <div className="mb-4 border border-yellow-500/20 rounded-lg overflow-hidden">
                <button
                  id="modulo1"
                  className="w-full flex items-center justify-between bg-black/50 p-4 text-left"
                  onClick={() => toggleModule("modulo1")}
                >
                  <span className="text-yellow-500 font-bold">01 【ACESSO AO SUPORTE】</span>
                  <ChevronDown
                    className={`h-5 w-5 text-yellow-500 transition-transform ${expandedModules["modulo1"] ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedModules["modulo1"] && (
                  <div className="p-6 bg-gradient-to-b from-black/40 to-black/20 border-t border-yellow-500/10 max-h-[400px] overflow-y-auto custom-scrollbar">
                    <ul className="grid gap-3">
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          01
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">VÍDEO</span> | SUPER IMPORTANTE | ASSISTA
                            ESSE VÍDEDO ANTES DE INICIAR SUAS AULAS.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          02
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">VÍDEO</span> | INTRODUÇÃO E ACESSO AO
                            SUPORTE!
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Módulo 2 */}
              <div className="mb-4 border border-yellow-500/20 rounded-lg overflow-hidden">
                <button
                  id="modulo2"
                  className="w-full flex items-center justify-between bg-gradient-to-r from-black/70 via-yellow-950/20 to-black/70 p-4 text-left"
                  onClick={() => toggleModule("modulo2")}
                >
                  <div className="flex items-center">
                    <span className="inline-block w-6 h-6 rounded-full bg-yellow-500/20 text-yellow-500 text-xs font-bold flex items-center justify-center mr-2">
                      02
                    </span>
                    <span className="text-yellow-500 font-bold">【CURSO | BASE INICIAL】</span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-yellow-500 transition-transform ${expandedModules["modulo2"] ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedModules["modulo2"] && (
                  <div className="p-6 bg-gradient-to-b from-black/40 to-black/20 border-t border-yellow-500/10 max-h-[400px] overflow-y-auto custom-scrollbar">
                    <ul className="grid gap-3">
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          01
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | Criando conta no PAYPAL.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          02
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | APRENDENDO UTILIZAR O PAYPAL.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          03
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | MODIFICANDO A SENHA E
                            ACESSANDO SUA CONTA PAYPAL.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          04
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | BINANCE - APRESENTAÇÃO E
                            CADASTRO.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          05
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | BINANCE - DEPÓSITO DE RECURSOS
                            - VALIDAÇÃO EM 2 FATORES, PC E SMARTPHONE.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          06
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | BINANCE - ADICIONAR FUNDOS COM
                            CARTÃO DE CRÉDITO VIA PAYMONADE.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          07
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | DEPÓSITO NA BINANCE, COMPRA NO
                            UP, ATIVAÇÃO DA UNLOCK TOOL.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          08
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | ACESSO, PAGAMENTO, VALIDAÇÃO,
                            CONFIRMAÇÃO DE ENVIO, BINANCE E SERVIDORES
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          09
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | Adicionando recursos ao SITE
                            IFRRICLOUD via BINANCE.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          10
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | CONFIRMAÇÃO DE ENVIO DE
                            RECURSO DA BINANCE PARA TERCEIROS.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          11
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | TRANSFERÊNCIA DA BINANCE PARA
                            OUTRAS CARTEIRAS ( SAQUE PARA TERCEIROS ).
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          12
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | PRECIFICAÇÃO, OSCILAÇÃO NOS
                            SERVIDORES, INSTABILIDADES E EFICIÊNCIA.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          13
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | ADICIONANDO FUNDOS NO SERVIDOR
                            GS.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          14
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | COMPRANDO CRÉDITOS PARA GT NO
                            SERVIDOR UP.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          15
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | ADICIONANDO RECURSOS NO
                            SERVIDOR FKS UTILIZANDO O APLICATIVO DA BINANCE NO CELULAR.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          16
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | ADICIONANDO RECURSOS AO SHT
                            ATRAVÉS DA BINANCE
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          17
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | ADICIONANDO CRÉDITOS NA PST
                            ATRAVÉS DO SERVIDOR UP.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          18
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | PAGAMENTO UTILIZANDO USUÁRIO
                            BINANCE E NÃO ENDEREÇO BINANCE, DIFERENÇAS E VANTAGENS.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          19
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | ADICIONANDO RECURSOS NA
                            BINANCE, E NO SERVIDOR SOFTUNLOCKER.COM
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Módulo 3 */}
              <div className="mb-4 border border-yellow-500/20 rounded-lg overflow-hidden">
                <button
                  id="modulo3"
                  className="w-full flex items-center justify-between bg-black/50 p-4 text-left border-l-4 border-yellow-500"
                  onClick={() => toggleModule("modulo3")}
                >
                  <span className="text-yellow-500 font-bold">03 【CURSO | SERVIDORES】</span>
                  <ChevronDown
                    className={`h-5 w-5 text-yellow-500 transition-transform ${expandedModules["modulo3"] ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedModules["modulo3"] && (
                  <div className="p-6 bg-gradient-to-b from-black/40 to-black/20 border-t border-yellow-500/10 max-h-[400px] overflow-y-auto custom-scrollbar">
                    <ul className="grid gap-3">
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          01
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | GSM.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          02
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | SK.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          03
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | Desbloqueio de
                            operadora de fora do país, SAMSUNG utilizando SK.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          04
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | Atualização do
                            cadastro no servidor.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          05
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | TMT & MARTECH
                            CURSOS.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          06
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | Identificando
                            bloqueio de MDM nos MOTOROLA.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          07
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | (TMT) leitura do
                            código NCK ( MOTOROLA ).
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          08
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | (TMT) READ INFO E
                            FIX IMEI.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          09
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | (TMT) FRP.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          10
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | (TMT) Sem fazer
                            HARD RESET, antes do procedimento! solução para MDM.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          11
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | (TMT) UNLOCK
                            NETWORK FACTORY ENABLE.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          12
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | (TMT) Desbloqueio
                            de MDM.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          13
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | (TMT) Reparo de
                            IMEI & ENABLE FACTORY MODE.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          14
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | Remoção de conta MI
                            DEFINITIVA.(1° PARTE).
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          15
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | Remoção de conta MI
                            DEFINITIVO (2° PARTE).
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          16
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | Remoção de conta MI
                            DEFINITIVA (3° PARTE).
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          17
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | Renovação anual UMT.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          18
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | Servidor (AU).
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          19
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | Desbloqueio de
                            XIAOMI na prática.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          20
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | Aprendendo com a
                            experiência.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          21
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | Importância dos
                            grupos dos servidores, BOT´S ( WHATSAPP - TELEGRAM ).
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          22
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | (UP).
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          23
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | (UP 2.0).
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          24
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | (UP 3.0).
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          25
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | (AU).
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          26
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | Apresentação e
                            cadastro do servidor (AU).
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          27
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | Apresentação e
                            cadastro do servidor (GS).
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          28
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | Apresentação e
                            cadastro do servidor (FKS).
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          29
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | Apresentação e
                            cadastro do servidor (SHT).
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          30
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | Apresentação e
                            cadastro do servidor (H.U).
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          31
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | Apresentação e
                            cadastro do servidor (R.U).
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          32
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | Apresentação e
                            cadastro do servidor (UPK).
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          33
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | Apresentação e
                            cadastro do servidor (APU).
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          34
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | Apresentação e
                            cadastro (SOFTUNLOCKER.COM).
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          35
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | Brasileiro |
                            Introdução ao Servidor M.T.U.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          36
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | Brasileiro |
                            Criando conta no servidor M.T.U.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          37
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | Brasileiro |
                            Adicionando recursos aos servidores.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          38
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | SERVIDOR | Brasileiro |
                            Preview Completo.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Módulos adicionais - mostrar apenas alguns e adicionar botão "Ver todos os módulos" */}
              <div className="mb-4 border border-yellow-500/20 rounded-lg overflow-hidden">
                <button
                  id="modulo4"
                  className="w-full flex items-center justify-between bg-black/50 p-4 text-left"
                  onClick={() => toggleModule("modulo4")}
                >
                  <div className="flex items-center">
                    <span className="text-yellow-500 font-bold">04 【USB REDIRECTOR | ACESSO REMOTO】</span>
                    <span className="ml-2 px-2 py-0.5 text-xs bg-yellow-500 text-black rounded-full">BÔNUS</span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-yellow-500 transition-transform ${expandedModules["modulo4"] ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedModules["modulo4"] && (
                  <div className="p-6 bg-gradient-to-b from-black/40 to-black/20 border-t border-yellow-500/10 max-h-[400px] overflow-y-auto custom-scrollbar">
                    <ul className="grid gap-3">
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          01
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | Compartilhamento de porta USB
                            - FLEXIHUB - USB NETWORK GATE.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          02
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | Adquirindo a licença do USB
                            REDIRECTOR.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          03
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | Instalando REDIRECTOR USB
                            VERSÃO 1.9.7 ( CRACK ).
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          04
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | Trabalhando com USB
                            REDIRECTOR.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          05
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | Trabalhando com USB REDIRECTOR
                            conexão remota, aula direcionada para alunos que prestam serviços remotos para outros
                            profissionais.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          06
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | Trabalhando com acesso remoto,
                            remoção FRP, com conexão remota utilizando a UNLOCK TOOL.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          07
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | Como resetar o tempo de espera
                            e informação de acesso bloqueado no ANYDESK ( 1° método )
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          08
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | Como resetar o tempo de espera
                            e informação de acesso bloqueado do ANYDESK ( 2° método ).
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="mb-4 border border-yellow-500/20 rounded-lg overflow-hidden">
                <button
                  id="modulo5"
                  className="w-full flex items-center justify-between bg-gradient-to-r from-black/70 to-black/50 p-4 text-left"
                  onClick={() => toggleModule("modulo5")}
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center mr-3 border border-yellow-500/30">
                      <span className="text-yellow-500 text-sm">05</span>
                    </div>
                    <span className="text-yellow-500 font-bold">【CURSO | FRP ANDROID】【FERRAMENTAS】</span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-yellow-500 transition-transform ${expandedModules["modulo5"] ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedModules["modulo5"] && (
                  <div className="p-6 bg-gradient-to-b from-black/40 to-black/20 border-t border-yellow-500/10 max-h-[400px] overflow-y-auto custom-scrollbar">
                    <ul className="grid gap-3">
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          01
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | FRP ANDROID |UNLOCKTOOL &
                            GUERRATOOL | FRP XIAOMI REDMI NOTE 12
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          02
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | FRP ANDROID |UNLOCK TOOL | FRP
                            MOTOROLA, MOTO G04
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          03
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | FRP ANDROID | PHOENIX TOOL|
                            FRP XIAOMI NOTE 13
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          04
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | FRP ANDROID |PHOENIX TOOL &
                            UNLOCKTOOL | Remoção da conta MI no XIAOMI NOTE 8
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          05
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | FRP ANDROID| PHOENIX TOOL|
                            Remoção da conta GOOGLE ( FRP ) do SAMSUNG A057M ( A05s )
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          06
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | FRP ANDROID| CHIMERA | Remoção
                            de conta Google Samsung A30s, explicando como identificar as versões e suas variáveis e a
                            taxa de sucesso junto ao site da CHIMERA TOOL
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          07
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | FRP ANDROID| CHIMERA| Anexando
                            um novo computador a CHIMERA TOOL, processo completo
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          08
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | FRP ANDROID| SAM FW | Remoção
                            Conta Google aparelhos Samsung no vídeo o aparelho é o S8, programa funciona para diversos
                            modelos até o Android 11
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          09
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | FRP ANDROID| PHOENIX TOOL|
                            Remoção Conta Google Xiaomi Redmi A3
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          10
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | FRP ANDROID| PHOENIX TOOL|
                            Remoção Conta Google em modo MIASSISTANT no Xiaomi POCO X4 PRO
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                          11
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                          <p className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-semibold text-yellow-500">Aula</span> | FRP ANDROID| SOFTWARE FIX|
                            Atualizando Software Fix da Motorola
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Substituir por um separador visual */}
              <div className="flex items-center justify-center mt-8 mb-2">
                <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
