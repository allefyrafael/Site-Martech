"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface InstructorSectionProps {
  variant?: "default" | "about"
  showTitle?: boolean
  className?: string
}

// Animação para elementos que aparecem na tela
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

export default function InstructorSection({
  variant = "default",
  showTitle = true,
  className = "",
}: InstructorSectionProps) {
  return (
    <section
      id="sobre"
      className={`py-16 md:py-24 bg-gradient-to-b ${
        variant === "about" ? "from-martech-darkgray via-black to-black" : "from-black via-black to-martech-darkgray/90"
      } relative overflow-hidden`}
    >
      {/* Elementos de fundo para melhorar a estética */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradiente sutil no topo para transição suave */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-martech-darkgray/30 to-transparent opacity-70"></div>

        {/* Círculos decorativos */}
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full border border-martech-blue/10 opacity-20"></div>
        <div className="absolute top-40 right-20 w-32 h-32 rounded-full border border-martech-blue/10 opacity-20"></div>

        {/* Linhas de código estilizadas */}
        <div className="absolute bottom-40 left-10 w-1/4 h-1/4 opacity-10">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-martech-blue to-transparent mb-3"></div>
          <div className="h-px w-3/4 bg-gradient-to-r from-transparent via-martech-blue to-transparent mb-3"></div>
          <div className="h-px w-1/2 bg-gradient-to-r from-transparent via-martech-blue to-transparent mb-3"></div>
        </div>

        {/* Orbes de luz com animação suave */}
        <div
          className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full blur-[100px] animate-pulse-slow"
          style={{ background: "rgba(0,160,233,0.05)" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full blur-[80px] animate-pulse-slow"
          style={{ background: "rgba(255,127,0,0.04)", animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className={`container relative z-10 px-4 sm:px-6 ${className}`}>
        {showTitle && (
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Badge className="bg-martech-blue text-white hover:bg-blue-700 mb-4">NOSSO PROFESSOR</Badge>
            <h2 className="text-3xl font-bold text-white mb-4">
              Conheça o <span className="text-martech-orange">Especialista</span> por trás dos cursos
            </h2>
            <p className="text-gray-300">
              Aprenda com quem tem mais de 25 anos de experiência no mercado de software para celulares
            </p>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            className="relative flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            {/* Reduced glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-martech-blue via-martech-orange to-martech-yellow rounded-xl blur-sm opacity-40 max-w-md mx-auto w-full"></div>

            <div className="relative bg-gradient-to-b from-martech-darkgray to-black rounded-xl overflow-hidden border border-martech-blue/30 max-w-md mx-auto w-full">
              {/* Top accent bar */}
              <div className="h-2 w-full bg-gradient-to-r from-martech-blue via-martech-orange to-martech-yellow"></div>

              {/* Image container with improved styling and constrained width */}
              <div className="p-5 flex flex-col items-center">
                <div className="relative mb-5 group max-w-[250px] mx-auto">
                  {/* Rectangular background with animation */}
                  <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-martech-blue to-martech-orange opacity-40 blur-sm group-hover:opacity-60 transition-opacity duration-300"></div>

                  {/* Image with border - now with constrained width */}
                  <div className="relative rounded-lg border-4 border-martech-orange overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZSBgXFRdHjYJsL6EQyEAxnPlSGUTda.png"
                      alt="Professor Marcos Roberto"
                      width={250}
                      height={250}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Instructor info with improved styling */}
                <h3 className="text-2xl font-bold text-white mb-2">MARCOS ROBERTO</h3>
                <p className="text-martech-blue mb-3">Especialista em Software de Celulares</p>

                {/* Stats with more subtle styling */}
                <div className="flex items-center justify-center gap-6 mt-1">
                  <div className="flex flex-col items-center">
                    <span className="text-martech-orange text-xl font-bold">+2.000</span>
                    <span className="text-gray-400 text-xs">Alunos</span>
                  </div>
                  <div className="h-8 w-px bg-martech-blue/30"></div>
                  <div className="flex flex-col items-center">
                    <span className="text-martech-orange text-xl font-bold">+25</span>
                    <span className="text-gray-400 text-xs">Anos de experiência</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <Badge className="bg-martech-blue text-white hover:bg-blue-700">CONHEÇA O PROFESSOR</Badge>
            <h2 className="text-3xl font-bold text-white">
              Olá, me chamo <span className="text-martech-orange">MARCOS ROBERTO S. RODRIGUES</span>
            </h2>
            <p className="text-gray-300">
              Sou Especialista em software de celulares, com ampla experiência em sistemas Android e iOS. Como podem ver
              pela minha camisa, trabalho com as duas principais plataformas do mercado, garantindo soluções completas
              para qualquer dispositivo.
            </p>
            <p className="text-gray-300 mb-4">
              Sou idealizador e criador da MARTECH CURSOS DE SOFTWARE EAD, sou formado em eletrotécnica, com
              especialização em eletrônica, eletrônica digital e matemática pela escola técnica de Brasília.
            </p>

            <div className="bg-martech-darkgray/30 rounded-lg p-4 border border-martech-blue/20 relative">
              <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-16 bg-martech-blue rounded-r-md"></div>

              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="w-20 h-20 rounded-full bg-martech-darkgray border-2 border-martech-blue flex items-center justify-center overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/muhon_kumar_sarkar-LwnIBglMEp0vyxUpDshnDUTMkeQVkL.webp"
                    alt="Muhon Kumar Sarkar"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <p className="text-gray-300 italic mb-2">
                    "Marcos Roberto é um professor excepcional com uma profunda paixão por compartilhar conhecimento e
                    ajudar seus alunos a terem sucesso no mundo dos desbloqueios."
                  </p>
                  <div className="flex items-center">
                    <p className="text-martech-yellow font-medium">Muhon Kumar Sarkar</p>
                    <span className="mx-2 text-gray-500">|</span>
                    <p className="text-martech-blue text-sm">Proprietário & Desenvolvedor do Servidor "Unlock Price"</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Transição suave inferior com efeito melhorado */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-martech-darkgray/90 to-transparent opacity-80"></div>

      {/* Partículas flutuantes para adicionar movimento sutil */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: i % 3 === 0 ? "#00A0E9" : i % 3 === 1 ? "#FF7F00" : "#FFFF00",
              opacity: Math.random() * 0.5 + 0.2,
              animation: `float-particle ${Math.random() * 10 + 20}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float-particle {
          0% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(0) translateX(20px); }
          75% { transform: translateY(20px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
      `}</style>
    </section>
  )
}
