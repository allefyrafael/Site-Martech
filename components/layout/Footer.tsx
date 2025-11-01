"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-martech-darkgray border-t border-martech-blue py-10 bg-martech-gradient relative">
      {/* Transição suave superior */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-martech-black to-transparent"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo e informações da empresa */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2025-02-15_at_15.49.15__1_-removebg-preview-WF6yeWqtspwBEg8lsQY3UcCDpxNjAE.png"
                alt="Martech Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <div>
                <span className="text-xl font-bold text-white">MARTECH</span>
                <p className="text-sm text-gray-400">CURSOS DE SOFTWARE EAD</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Transformando técnicos em especialistas através da educação de qualidade e suporte contínuo.
            </p>
            <div className="flex gap-3">
              <Link
                href="https://instagram.com/martech.cursos.software"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-martech-blue/20 flex items-center justify-center text-martech-blue hover:bg-martech-blue hover:text-white transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.facebook.com/share/15zgty4Len/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-martech-blue/20 flex items-center justify-center text-martech-blue hover:bg-martech-blue hover:text-white transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Links Rápidos</h3>
            <div className="grid gap-3">
              <Link href="/" className="text-gray-300 hover:text-martech-yellow text-sm transition-colors">
                Home
              </Link>
              <Link href="/mdm-avancado" className="text-gray-300 hover:text-martech-yellow text-sm transition-colors">
                MDM do básico ao avançado
              </Link>
              <Link href="/curso-vip" className="text-gray-300 hover:text-martech-yellow text-sm transition-colors">
                Curso VIP JTAG & EMMC
              </Link>
              <Link href="/sobre-nos" className="text-gray-300 hover:text-martech-yellow text-sm transition-colors">
                Sobre Nós
              </Link>
            </div>
          </div>

          {/* Informações de Contato */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contato</h3>
            <div className="grid gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-martech-blue/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4 text-martech-blue" />
                </div>
                <div>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText("6198574902")
                      const toast = document.createElement("div")
                      toast.className =
                        "fixed bottom-4 right-4 bg-martech-blue text-white px-4 py-2 rounded-md shadow-lg z-50 flex items-center transform transition-all duration-300 translate-y-0 opacity-100"
                      toast.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Número copiado para a área de transferência!
                      `
                      document.body.appendChild(toast)

                      // Animate in
                      setTimeout(() => {
                        toast.style.opacity = "1"
                        toast.style.transform = "translateY(0)"
                      }, 10)

                      // Remove after 3 seconds
                      setTimeout(() => {
                        toast.style.opacity = "0"
                        toast.style.transform = "translateY(10px)"
                        setTimeout(() => {
                          document.body.removeChild(toast)
                        }, 300)
                      }, 3000)
                    }}
                    className="text-gray-300 hover:text-martech-yellow text-sm transition-colors cursor-pointer"
                  >
                    (61) 9857-4902
                  </button>
                  <p className="text-gray-400 text-xs">Seg-Sex, 9h-18h</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-martech-blue/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 text-martech-blue" />
                </div>
                <div>
                  <a
                    href="mailto:suporte@martechteam.com?subject=Contato%20via%20Site%20Martech"
                    className="text-gray-300 hover:text-martech-yellow text-sm transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    suporte@martechteam.com
                  </a>
                  <p className="text-gray-400 text-xs">Suporte 24/7</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-martech-blue/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="h-4 w-4 text-martech-blue" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Brasília - DF, Brasil</p>
                  <p className="text-gray-400 text-xs">Atendimento online em todo o Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-martech-blue/20 pt-6">
          <div className="flex justify-center">
            <p className="text-gray-400 text-sm text-center">
              © {new Date().getFullYear()} Martech Cursos de Software EAD. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
