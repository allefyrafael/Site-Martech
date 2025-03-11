"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

// Animação para elementos que aparecem na tela
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function SocialConnectSection() {
  return (
    <div className="w-full py-24 bg-martech-black bg-martech-gradient relative">
      {/* Transição suave superior */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="bg-gradient-to-r from-martech-blue/10 to-martech-orange/10 rounded-3xl shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="p-8 md:p-12">
            <h3 className="text-4xl md:text-5xl font-bold text-center mb-12 relative">
              <span className="relative z-10 text-martech-blue">
                Conecte-se <span className="text-martech-orange">Conosco</span>
              </span>
              <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-martech-blue via-martech-yellow to-martech-orange"></span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <SocialCard
                platform="WhatsApp"
                description="Atendimento Rápido"
                url="https://wa.link/iz362r"
                icon={<WhatsAppIcon />}
              />
              <SocialCard
                platform="Instagram"
                description="Siga nossas atualizações"
                url="https://www.instagram.com/martech.cursos.software/"
                icon={<InstagramIcon />}
              />
            </div>
            <div className="mt-12 text-center">
              <p className="text-gray-300 mb-6">
                Junte-se à nossa comunidade e fique por dentro das últimas novidades!
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Transição suave inferior */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  )
}

type SocialCardProps = {
  platform: string
  description: string
  url: string
  icon: React.ReactNode
}

function SocialCard({ platform, description, url, icon }: SocialCardProps) {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer" className="group">
      <div className="bg-martech-darkgray/50 backdrop-blur-sm border border-martech-blue/20 rounded-xl p-8 h-full shadow-lg transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(0,160,233,0.4)] group-hover:-translate-y-1 flex flex-col items-center justify-between">
        <div className="mb-6">{icon}</div>
        <div className="text-center">
          <span className="block text-martech-blue text-2xl font-bold mb-2">{platform}</span>
          <span className="text-gray-300 text-sm">{description}</span>
        </div>
        <Button className="mt-6 bg-martech-blue/10 text-martech-blue hover:bg-martech-blue hover:text-white transition-all duration-300">
          Conectar
        </Button>
      </div>
    </Link>
  )
}

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#25D366">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#E1306C">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

