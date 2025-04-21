"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Lightbulb, Target, ChevronRight, CheckCircle, Award } from "lucide-react"
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

const fadeInRight = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
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

// Componentes auxiliares
interface ValueCardProps {
  icon: React.ReactNode
  title: string
  description: string
  color: string
  delay: number
}

const ValueCard = ({ icon, title, description, color, delay }: ValueCardProps) => (
  <motion.div
    className={`bg-black/50 backdrop-blur-sm border border-${color}/30 rounded-xl p-6 h-full shadow-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,160,233,0.4)] hover:-translate-y-1 relative overflow-hidden group`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeInUp}
    transition={{ delay: delay * 0.1 }}
  >
    {/* Background glow */}
    <div
      className={`absolute -right-10 -bottom-10 w-32 h-32 rounded-full bg-${color}/5 blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500`}
    ></div>

    <div className="relative z-10">
      <div
        className={`w-14 h-14 rounded-full bg-${color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        {icon}
      </div>

      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </motion.div>
)

interface MilestoneProps {
  year: string
  title: string
  description: string
  isLeft?: boolean
  delay: number
}

const Milestone = ({ year, title, description, isLeft = false, delay }: MilestoneProps) => (
  <motion.div
    className={`flex ${isLeft ? "flex-row-reverse" : "flex-row"} items-start gap-4 relative`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={isLeft ? fadeInLeft : fadeInRight}
    transition={{ delay: delay * 0.1 }}
  >
    {/* Linha vertical */}
    <div className="absolute left-[19px] top-10 bottom-0 w-0.5 h-full bg-martech-blue/30"></div>

    {/* Círculo do ano */}
    <div className="relative z-10 flex-shrink-0">
      <div className="w-10 h-10 rounded-full bg-martech-blue flex items-center justify-center text-black font-bold text-sm">
        {year}
      </div>
    </div>

    {/* Conteúdo */}
    <div
      className={`bg-black/30 backdrop-blur-sm border border-martech-blue/20 rounded-lg p-4 ${isLeft ? "text-right" : "text-left"}`}
    >
      <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  </motion.div>
)

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Dados
  const values = [
    {
      icon: <Heart className="h-6 w-6 text-red-400" />,
      title: "Paixão pela Tecnologia",
      description:
        "Somos movidos pela paixão em compartilhar conhecimento e transformar a vida de técnicos em todo o Brasil.",
      color: "red-400",
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-martech-yellow" />,
      title: "Inovação Constante",
      description: "Buscamos constantemente as técnicas mais avançadas e atualizadas para nossos alunos.",
      color: "martech-yellow",
    },
    {
      icon: <Target className="h-6 w-6 text-martech-blue" />,
      title: "Excelência no Ensino",
      description: "Comprometidos com a qualidade do ensino e o sucesso profissional de cada aluno.",
      color: "martech-blue",
    },
  ]

  const milestones = [
    {
      year: "2015",
      title: "Fundação da Martech",
      description: "Início da jornada com cursos presenciais de reparo de software para celulares.",
    },
    {
      year: "2018",
      title: "Expansão Digital",
      description: "Transformação para o formato EAD, alcançando técnicos em todo o Brasil.",
    },
    {
      year: "2022",
      title: "Comunidade VIP",
      description: "Criação da comunidade exclusiva de alunos para troca de experiências e suporte contínuo.",
    },
    {
      year: "2023",
      title: "Marcos 2.000+ Alunos",
      description: "Ultrapassamos a marca de 2.000 alunos formados em todo o Brasil.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black text-white py-12 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Tech grid pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(#00A0E9 0.8px, transparent 0.8px)`,
              backgroundSize: `25px 25px`,
              opacity: 0.15,
            }}
          ></div>

          {/* Animated gradient orbs - melhorados com cores mais vibrantes */}
          <div
            className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] animate-pulse-slow"
            style={{ background: "linear-gradient(135deg, rgba(0,160,233,0.15) 0%, rgba(0,160,233,0.06) 100%)" }}
          ></div>

          <div
            className="absolute top-1/4 right-0 w-[450px] h-[450px] rounded-full blur-[110px] animate-pulse-slow"
            style={{
              background: "linear-gradient(135deg, rgba(255,127,0,0.12) 0%, rgba(255,127,0,0.05) 100%)",
              animationDelay: "1.5s",
            }}
          ></div>

          <div
            className="absolute bottom-10 left-1/4 w-[350px] h-[350px] rounded-full blur-[90px] animate-pulse-slow"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,0,0.1) 0%, rgba(255,255,0,0.04) 100%)",
              animationDelay: "2.5s",
            }}
          ></div>

          {/* Adicionar um efeito de partículas sutis */}
          <div className="absolute inset-x-0 top-0 opacity-30" style={{ bottom: "auto" }}>
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${Math.random() * 2 + 1}px`,
                  height: `${Math.random() * 2 + 1}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.3 + 0.1,
                  animation: `float-particle ${Math.random() * 10 + 20}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              ></div>
            ))}
          </div>
        </div>
        <div className="container relative z-10">
          {/* Hero Header */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-martech-blue/20 shadow-lg"
            >
              <Badge className="bg-gradient-to-r from-martech-blue to-martech-blue/80 text-white hover:bg-blue-700 mb-4 shadow-lg">
                NOSSA HISTÓRIA
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Conheça a{" "}
                <span className="bg-gradient-to-r from-martech-yellow to-martech-orange bg-clip-text text-transparent">
                  MARTECH
                </span>
              </h1>
              <p className="text-gray-300 text-lg">
                Transformando técnicos em especialistas através da educação de qualidade e suporte contínuo.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Missão Section */}
      <section className="py-16 bg-black relative">
        {/* Transição superior melhorada */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent"></div>

        {/* Adicionar elementos de fundo para melhorar a estética */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Círculos decorativos */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full border border-martech-blue/5 opacity-20"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full border border-martech-orange/5 opacity-20"></div>

          {/* Gradientes sutis */}
          <div
            className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full blur-[120px]"
            style={{ background: "linear-gradient(135deg, rgba(0,160,233,0.08) 0%, rgba(0,0,0,0) 70%)" }}
          ></div>
          <div
            className="absolute bottom-1/3 right-0 w-[350px] h-[350px] rounded-full blur-[100px]"
            style={{ background: "linear-gradient(135deg, rgba(255,127,0,0.06) 0%, rgba(0,0,0,0) 70%)" }}
          ></div>
        </div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-martech-blue via-martech-orange to-martech-yellow rounded-xl blur opacity-30"></div>
              <div className="relative bg-black/80 backdrop-blur-sm rounded-xl overflow-hidden border border-martech-blue/30 p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-martech-blue shadow-[0_0_15px_rgba(0,160,233,0.3)]">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZSBgXFRdHjYJsL6EQyEAxnPlSGUTda.png"
                      alt="Marcos Roberto - Fundador"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Marcos Roberto</h3>
                    <p className="text-martech-blue">Fundador & Instrutor</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-300">
                    A <span className="text-martech-blue font-semibold">MARTECH CURSOS DE SOFTWARE EAD</span> nasceu da
                    minha paixão por tecnologia e da vontade de compartilhar conhecimento especializado na área de
                    reparo de software para celulares.
                  </p>
                  <p className="text-gray-300">
                    Com mais de 25 anos de experiência no mercado, percebi a necessidade de uma formação de qualidade
                    que realmente preparasse os técnicos para os desafios do dia a dia.
                  </p>
                  <p className="text-gray-300">
                    Nossa missão é capacitar profissionais com as técnicas mais avançadas do mercado, permitindo que
                    ofereçam serviços de alta qualidade e aumentem significativamente sua rentabilidade.
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-martech-blue/30 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-martech-yellow text-2xl font-bold">2.000+</p>
                    <p className="text-gray-400 text-sm">Alunos</p>
                  </div>
                  <div className="text-center">
                    <p className="text-martech-orange text-2xl font-bold">25+</p>
                    <p className="text-gray-400 text-sm">Anos de experiência</p>
                  </div>
                  <div className="text-center">
                    <p className="text-martech-blue text-2xl font-bold">100%</p>
                    <p className="text-gray-400 text-sm">Online</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <h2 className="text-3xl font-bold text-white">
                Nossa{" "}
                <span className="bg-gradient-to-r from-martech-orange to-martech-yellow bg-clip-text text-transparent">
                  Missão
                </span>
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-martech-blue flex-shrink-0 mt-1" />
                  <p className="text-gray-300">
                    Democratizar o acesso ao conhecimento técnico avançado em reparo de software para celulares.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-martech-blue flex-shrink-0 mt-1" />
                  <p className="text-gray-300">
                    Formar especialistas capazes de solucionar os problemas mais complexos do mercado.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-martech-blue flex-shrink-0 mt-1" />
                  <p className="text-gray-300">
                    Proporcionar suporte contínuo através de nossa comunidade exclusiva de alunos e professores.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-martech-blue flex-shrink-0 mt-1" />
                  <p className="text-gray-300">
                    Manter nossos cursos sempre atualizados com as técnicas mais recentes e eficazes do mercado.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link href="/#featured-courses">
                  <Button className="bg-gradient-to-r from-martech-orange to-martech-yellow hover:from-martech-yellow hover:to-martech-orange text-black font-bold shadow-lg transform transition-transform hover:scale-105">
                    Conheça nossos cursos
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Transição inferior melhorada */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Valores Section */}
      <section id="nossos-valores" className="py-16 bg-black relative">
        {/* Transição superior melhorada */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent"></div>

        {/* Adicionar elementos de fundo para melhorar a estética */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Padrão de grade sutil */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(#FFFF00 0.5px, transparent 0.5px)`,
              backgroundSize: `30px 30px`,
              opacity: 0.05,
            }}
          ></div>

          {/* Gradientes sutis */}
          <div
            className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full blur-[80px]"
            style={{ background: "linear-gradient(135deg, rgba(255,255,0,0.05) 0%, rgba(0,0,0,0) 70%)" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] rounded-full blur-[70px]"
            style={{ background: "linear-gradient(135deg, rgba(255,127,0,0.05) 0%, rgba(0,0,0,0) 70%)" }}
          ></div>
        </div>

        <div className="container relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Nossos{" "}
              <span className="bg-gradient-to-r from-martech-blue to-martech-yellow bg-clip-text text-transparent">
                Valores
              </span>
            </h2>
            <p className="text-gray-300">
              Princípios que guiam nossa jornada e definem quem somos como instituição de ensino.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <ValueCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                color={value.color}
                delay={index + 1}
              />
            ))}
          </div>
        </div>

        {/* Transição inferior melhorada */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Professor Section */}
      <section className="py-16 md:py-24 bg-black relative overflow-hidden">
        {/* Transição superior melhorada */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent"></div>

        {/* Adicionar elementos de fundo para melhorar a estética */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Padrão de linhas sutis */}
          <div className="absolute inset-0 opacity-5">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-martech-blue/30"
                style={{
                  width: "100%",
                  top: `${i * 10}%`,
                  left: 0,
                  transform: `rotate(${i % 2 === 0 ? 0.5 : -0.5}deg)`,
                }}
              ></div>
            ))}
          </div>

          {/* Gradientes melhorados */}
          <div
            className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full blur-[150px]"
            style={{ background: "linear-gradient(135deg, rgba(0,160,233,0.1) 0%, rgba(0,0,0,0) 70%)" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full blur-[120px]"
            style={{
              background: "linear-gradient(135deg, rgba(255,127,0,0.08) 0%, rgba(0,0,0,0) 70%)",
            }}
          ></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Badge className="bg-gradient-to-r from-martech-blue to-martech-blue/80 text-white hover:bg-blue-700 mb-4 shadow-lg">
              NOSSO PROFESSOR
            </Badge>
            <h2 className="text-3xl font-bold text-white mb-4">
              Conheça o{" "}
              <span className="bg-gradient-to-r from-martech-orange to-martech-yellow bg-clip-text text-transparent">
                Especialista
              </span>{" "}
              por trás dos cursos
            </h2>
            <p className="text-gray-300">
              Aprenda com quem tem mais de 25 anos de experiência no mercado de software para celulares
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              className="relative flex flex-col justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              {/* Efeito de brilho melhorado */}
              <div className="absolute inset-0 bg-gradient-to-r from-martech-blue via-martech-orange to-martech-yellow rounded-xl blur-md opacity-40 max-w-md mx-auto w-full"></div>

              <div className="relative bg-black/90 rounded-xl overflow-hidden border border-martech-blue/30 max-w-md mx-auto w-full shadow-lg">
                {/* Barra de acento superior */}
                <div className="h-2 w-full bg-gradient-to-r from-martech-blue via-martech-orange to-martech-yellow"></div>

                {/* Container de imagem com estilo melhorado */}
                <div className="p-5 flex flex-col items-center">
                  <div className="relative mb-5 group max-w-[250px] mx-auto">
                    {/* Fundo retangular com animação */}
                    <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-martech-blue to-martech-orange opacity-40 blur-md group-hover:opacity-60 transition-opacity duration-300"></div>

                    {/* Imagem com borda */}
                    <div className="relative rounded-lg border-4 border-martech-orange overflow-hidden shadow-lg">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZSBgXFRdHjYJsL6EQyEAxnPlSGUTda.png"
                        alt="Professor Marcos Roberto"
                        width={250}
                        height={250}
                        className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Informações do instrutor com estilo melhorado */}
                  <h3 className="text-2xl font-bold text-white mb-2">MARCOS ROBERTO</h3>
                  <p className="text-martech-blue mb-3">Especialista em Software de Celulares</p>

                  {/* Estatísticas com estilo mais sutil */}
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
              <Badge className="bg-gradient-to-r from-martech-blue to-martech-blue/80 text-white hover:bg-blue-700 shadow-lg">
                CONHEÇA O PROFESSOR
              </Badge>
              <h2 className="text-3xl font-bold text-white">
                Olá, me chamo{" "}
                <span className="bg-gradient-to-r from-martech-orange to-martech-yellow bg-clip-text text-transparent">
                  MARCOS ROBERTO S. RODRIGUES
                </span>
              </h2>
              <p className="text-gray-300">
                Sou Especialista em software de celulares, com ampla experiência em sistemas Android e iOS. Como podem
                ver pela minha camisa, trabalho com as duas principais plataformas do mercado, garantindo soluções
                completas para qualquer dispositivo.
              </p>
              <p className="text-gray-300 mb-4">
                Sou idealizador e criador da MARTECH CURSOS DE SOFTWARE EAD, sou formado em eletrotécnica, com
                especialização em eletrônica, eletrônica digital e matemática pela escola técnica de Brasília.
              </p>

              <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 border border-martech-blue/20 relative shadow-lg">
                <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-16 bg-gradient-to-b from-martech-blue via-martech-blue/80 to-martech-blue/60 rounded-r-md"></div>

                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="w-20 h-20 rounded-full bg-black border-2 border-martech-blue flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(0,160,233,0.3)]">
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
                      <p className="text-martech-blue text-sm">
                        Proprietário & Desenvolvedor do Servidor "Unlock Price"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Transição inferior melhorada */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Jornada Section */}
      <section className="py-16 bg-black relative">
        {/* Transição superior melhorada */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent"></div>

        {/* Adicionar elementos de fundo para melhorar a estética */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Padrão de pontos sutis */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(#00A0E9 0.5px, transparent 0.5px)`,
              backgroundSize: `40px 40px`,
              opacity: 0.05,
            }}
          ></div>

          {/* Gradientes sutis */}
          <div
            className="absolute top-1/3 right-1/4 w-[350px] h-[350px] rounded-full blur-[100px]"
            style={{ background: "linear-gradient(135deg, rgba(0,160,233,0.07) 0%, rgba(0,0,0,0) 70%)" }}
          ></div>
          <div
            className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] rounded-full blur-[90px]"
            style={{ background: "linear-gradient(135deg, rgba(255,127,0,0.06) 0%, rgba(0,0,0,0) 70%)" }}
          ></div>
        </div>

        <motion.div
          className="text-center max-w-3xl mx-auto mb-10 container relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Nossa{" "}
            <span className="bg-gradient-to-r from-martech-orange to-martech-yellow bg-clip-text text-transparent">
              Jornada
            </span>
          </h2>
          <p className="text-gray-300">
            Conheça os principais marcos da história da Martech e nossa evolução ao longo dos anos.
          </p>

          <div className="max-w-3xl mx-auto space-y-10 relative mt-10">
            {milestones.map((milestone, index) => (
              <Milestone
                key={index}
                year={milestone.year}
                title={milestone.title}
                description={milestone.description}
                isLeft={index % 2 !== 0}
                delay={index + 1}
              />
            ))}
          </div>
        </motion.div>

        {/* Transição inferior melhorada */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Parcerias Acadêmicas Section */}
      <section id="parcerias-academicas" className="py-16 bg-black relative">
        {/* Transição superior melhorada */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent"></div>

        {/* Adicionar elementos de fundo para melhorar a estética */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Padrão de pontos sutis */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(#00A0E9 0.5px, transparent 0.5px)`,
              backgroundSize: `40px 40px`,
              opacity: 0.05,
            }}
          ></div>

          {/* Gradientes sutis */}
          <div
            className="absolute top-1/3 right-1/4 w-[350px] h-[350px] rounded-full blur-[100px]"
            style={{ background: "linear-gradient(135deg, rgba(0,160,233,0.07) 0%, rgba(0,0,0,0) 70%)" }}
          ></div>
          <div
            className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] rounded-full blur-[90px]"
            style={{ background: "linear-gradient(135deg, rgba(255,127,0,0.06) 0%, rgba(0,0,0,0) 70%)" }}
          ></div>
        </div>

        <motion.div
          className="container relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">
              Nossas{" "}
              <span className="bg-gradient-to-r from-martech-blue to-martech-yellow bg-clip-text text-transparent">
                Parcerias Acadêmicas
              </span>
            </h2>
            <p className="text-gray-300">
              Compromisso com a excelência educacional através de parcerias com instituições de ensino superior
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Cards de parceria com estrutura padronizada */}
            {[
              {
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_icsh_alta-0ZoNCfcvT6QbEU69YsI7PZkew4St6X.png",
                alt: "Logo ICSH - Instituto de Ciências Sociais e Humanas",
                title: "Centro Educacional Superior Tecnológico",
                description: [
                  "Em março de 2025, a Martech estabeleceu uma parceria oficial com o Centro Educacional Superior Tecnológico (CESUT), uma instituição de ensino superior comprometida com a excelência acadêmica.",
                  "Esta parceria permite que todos os certificados emitidos pela Martech recebam a chancela oficial do CESUT, agregando valor acadêmico e reconhecimento profissional à formação de nossos alunos.",
                ],
                benefitsTitle: "Benefícios da Parceria",
                benefits: [
                  "Certificados com chancela de instituição de ensino superior",
                  "Maior reconhecimento no mercado de trabalho",
                  "Garantia de qualidade acadêmica dos cursos",
                ],
                animation: fadeInRight,
                delay: 0.2,
              },
              {
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20ficepe-gHaRKC4wEzApwq1WX0iO15gwDKAdu5.png",
                alt: "Logo Faculdade FICEPE",
                title: "Centro de Ensino Superior da Cidade",
                description: [
                  "Também em março de 2025, firmamos uma parceria estratégica com o Centro de Ensino Superior da Cidade (CESC), através da Faculdade FICEPE, ampliando ainda mais o reconhecimento acadêmico de nossos cursos.",
                  "Esta parceria complementar reforça nosso compromisso com a qualidade educacional e proporciona aos nossos alunos certificados com dupla chancela de instituições de ensino superior.",
                ],
                benefitsTitle: "Diferenciais da Parceria",
                benefits: [
                  "Contrato oficial de chancela por 5 anos",
                  "Avaliação e aprovação dos cursos pela instituição",
                  "Diferencial competitivo para nossos alunos no mercado",
                ],
                animation: fadeInLeft,
                delay: 0.4,
              },
            ].map((partner, index) => (
              <motion.div
                key={index}
                className="flex flex-col bg-black/60 backdrop-blur-sm rounded-xl border border-martech-blue/30 overflow-hidden h-full shadow-lg hover:shadow-[0_0_25px_rgba(0,160,233,0.2)] transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={partner.animation}
                transition={{ delay: partner.delay }}
              >
                {/* Cabeçalho com logo */}
                <div className="bg-gradient-to-r from-martech-blue/10 to-black/80 p-4 border-b border-martech-blue/20">
                  <div className="flex justify-center h-20 relative">
                    <div className="relative h-full w-full max-w-[240px] bg-white rounded-md p-2 shadow-md">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.alt}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Conteúdo principal */}
                <div className="p-6 flex-grow flex flex-col">
                  {/* Título centralizado com linha decorativa */}
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-white inline-block relative">
                      {partner.title}
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-martech-blue to-transparent"></span>
                    </h3>
                  </div>

                  {/* Descrição com altura mínima fixa */}
                  <div className="space-y-3 mb-4 min-h-[120px]">
                    {partner.description.map((paragraph, i) => (
                      <p key={i} className="text-gray-300 text-sm">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Benefícios em card com altura fixa */}
                  <div className="bg-martech-blue/10 rounded-lg p-4 border border-martech-blue/20 mt-auto">
                    <h4 className="text-white font-bold mb-3 flex items-center">
                      <Award className="h-5 w-5 text-martech-blue mr-2 flex-shrink-0" />
                      <span>{partner.benefitsTitle}</span>
                    </h4>
                    <ul className="space-y-2">
                      {partner.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-martech-blue flex-shrink-0 mt-1 mr-2" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-300 max-w-3xl mx-auto">
              Estas parcerias acadêmicas representam um marco importante na história da Martech, elevando o padrão de
              qualidade de nossos cursos e proporcionando aos nossos alunos certificados com reconhecimento oficial de
              instituições de ensino superior.
            </p>
          </div>
        </motion.div>

        {/* Transição inferior melhorada */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      <style jsx>{`
        @keyframes float-particle {
          0% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(0) translateX(20px); }
          75% { transform: translateY(20px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
      `}</style>
    </>
  )
}
