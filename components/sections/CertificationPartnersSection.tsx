"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight, Award, CheckCircle, GraduationCap, BookOpen } from "lucide-react"
import Link from "next/link"

// Animações
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const fadeInLeft = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const fadeInRight = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function CertificationPartnersSection() {
  const [activeTab, setActiveTab] = useState("cesut")

  return (
    <section className="py-16 bg-martech-black bg-martech-gradient relative overflow-hidden">
      {/* Transição suave superior */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-martech-darkgray to-transparent"></div>

      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-martech-blue/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-martech-orange/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Badge className="bg-gradient-to-r from-martech-blue to-blue-700 text-white hover:bg-blue-700 mb-4">
            CERTIFICAÇÃO RECONHECIDA
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            PARCERIA COM <span className="text-martech-yellow">INSTITUIÇÕES DE ENSINO SUPERIOR</span>
          </h2>
          <p className="text-gray-300">
            Nossos certificados são chancelados por renomadas instituições de ensino superior, agregando ainda mais
            valor à sua formação profissional
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Coluna esquerda - Informações */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-martech-blue/20 space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Certificados com <span className="text-martech-yellow">Chancela Oficial</span>
              </h3>

              <p className="text-gray-300">
                A Martech estabeleceu parcerias estratégicas com o Centro Educacional Superior Tecnológico (CESUT) e o
                Centro de Ensino Superior da Cidade (CESC), garantindo que todos os nossos certificados tenham chancela
                oficial de instituições de ensino superior.
              </p>

              <div className="pt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-martech-blue flex-shrink-0 mt-1" />
                  <p className="text-gray-300">
                    <span className="text-white font-semibold">Reconhecimento Profissional:</span> Certificados com
                    maior credibilidade no mercado de trabalho
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-martech-blue flex-shrink-0 mt-1" />
                  <p className="text-gray-300">
                    <span className="text-white font-semibold">Qualidade Garantida:</span> Cursos avaliados e aprovados
                    por instituições de ensino superior
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-martech-blue flex-shrink-0 mt-1" />
                  <p className="text-gray-300">
                    <span className="text-white font-semibold">Diferencial Competitivo:</span> Destaque-se no mercado
                    com uma certificação de maior valor
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/sobre-nos#parcerias-academicas"
                  onClick={(e) => {
                    // If we're already on the about page, handle the scroll manually
                    if (window.location.pathname === "/sobre-nos") {
                      e.preventDefault()
                      const element = document.getElementById("parcerias-academicas")
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }
                  }}
                >
                  <Button className="bg-gradient-to-r from-martech-blue to-blue-700 hover:from-blue-700 hover:to-martech-blue text-white">
                    Saiba mais sobre nossas parcerias
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Coluna direita - Logos e tabs */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-martech-blue via-martech-orange to-martech-yellow rounded-xl blur opacity-30"></div>
            <div className="relative bg-black/80 backdrop-blur-sm rounded-xl overflow-hidden border border-martech-blue/30 p-6">
              {/* Tabs para alternar entre as instituições */}
              <div className="flex border-b border-gray-700 mb-6">
                <button
                  className={`flex-1 py-3 text-center font-medium transition-colors ${
                    activeTab === "cesut"
                      ? "text-martech-yellow border-b-2 border-martech-yellow"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                  onClick={() => setActiveTab("cesut")}
                >
                  CESUT
                </button>
                <button
                  className={`flex-1 py-3 text-center font-medium transition-colors ${
                    activeTab === "cesc"
                      ? "text-martech-yellow border-b-2 border-martech-yellow"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                  onClick={() => setActiveTab("cesc")}
                >
                  FICEPE
                </button>
              </div>

              {/* Conteúdo da tab CESUT */}
              {activeTab === "cesut" && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="flex justify-center mb-6">
                    <div className="relative h-24 w-full max-w-md bg-white rounded-lg p-2">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_icsh_alta-0ZoNCfcvT6QbEU69YsI7PZkew4St6X.png"
                        alt="Logo ICSH - Instituto de Ciências Sociais e Humanas"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-white flex items-center">
                      <GraduationCap className="mr-2 h-5 w-5 text-martech-blue" />
                      Centro Educacional Superior Tecnológico
                    </h4>

                    <p className="text-gray-300 text-sm">
                      O CESUT é uma instituição de ensino superior comprometida com a excelência acadêmica e a formação
                      de profissionais qualificados para o mercado de trabalho. Nossa parceria garante a chancela
                      oficial em todos os certificados emitidos pela Martech.
                    </p>

                    <div className="bg-martech-blue/10 rounded-lg p-3 border border-martech-blue/30">
                      <div className="flex items-center">
                        <Award className="h-5 w-5 text-martech-blue mr-2" />
                        <p className="text-white text-sm">
                          Contrato de Chancela e Parceria Educacional com vigência de 5 anos
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Conteúdo da tab CESC/FICEPE */}
              {activeTab === "cesc" && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="flex justify-center mb-6">
                    <div className="relative h-24 w-full max-w-md bg-white rounded-lg p-2">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20ficepe-gHaRKC4wEzApwq1WX0iO15gwDKAdu5.png"
                        alt="Logo Faculdade FICEPE"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-white flex items-center">
                      <GraduationCap className="mr-2 h-5 w-5 text-martech-blue" />
                      Centro de Ensino Superior da Cidade
                    </h4>

                    <p className="text-gray-300 text-sm">
                      O CESC, através da Faculdade FICEPE, é uma instituição reconhecida por sua qualidade de ensino e
                      compromisso com a formação profissional. Nossa parceria assegura que os certificados da Martech
                      tenham reconhecimento acadêmico oficial.
                    </p>

                    <div className="bg-martech-blue/10 rounded-lg p-3 border border-martech-blue/30">
                      <div className="flex items-center">
                        <Award className="h-5 w-5 text-martech-blue mr-2" />
                        <p className="text-white text-sm">
                          Contrato de Chancela e Parceria Educacional com vigência de 5 anos
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Rodapé com CTA */}
              <div className="mt-6 pt-6 border-t border-gray-700 text-center">
                <div className="flex items-center justify-center gap-2 text-gray-300 mb-4">
                  <BookOpen className="h-5 w-5 text-martech-yellow" />
                  <span>Diferencie-se no mercado com certificados reconhecidos</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Transição suave inferior */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </section>
  )
}
