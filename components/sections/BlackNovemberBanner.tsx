'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { X, Zap, Gift } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function BlackNovemberBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Animação de entrada
    const timer = setTimeout(() => setIsAnimating(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Ajustar posição do header quando banner é fechado
    const header = document.querySelector('header')
    if (header) {
      if (isVisible) {
        // Mobile: banner menor (44px), Desktop: banner maior (48px)
        const isMobile = window.innerWidth < 640
        header.style.top = isMobile ? '44px' : '48px'
      } else {
        header.style.top = '0px'
      }
    }
    
    // Ajustar quando a janela é redimensionada
    const handleResize = () => {
      const header = document.querySelector('header')
      if (header && isVisible) {
        const isMobile = window.innerWidth < 640
        header.style.top = isMobile ? '44px' : '48px'
      }
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isVisible])

  if (!isVisible) return null

  const scrollToCourses = () => {
    // Se estiver na homepage, fazer scroll para a seção "nossos-cursos"
    if (pathname === '/') {
      const coursesSection = document.getElementById('nossos-cursos')
      if (coursesSection) {
        coursesSection.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    
    // Se estiver em uma página de curso, fazer scroll para a seção de preços
    const precosSection = document.getElementById('precos')
    if (precosSection) {
      precosSection.scrollIntoView({ behavior: 'smooth' })
      return
    }
    
    // Fallback: tentar fazer scroll para "nossos-cursos" mesmo em outras páginas
    const fallbackSection = document.getElementById('nossos-cursos')
    if (fallbackSection) {
      fallbackSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={`fixed top-0 left-0 right-0 z-[45] black-november-banner-red-gold text-white shadow-lg border-b border-yellow-600/30 transform transition-transform duration-500 ${isAnimating ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4 py-2.5 sm:py-3 flex items-center justify-between gap-2 min-h-[40px] sm:min-h-[48px]">
        <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 animate-pulse" />
            <Gift className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 animate-bounce" />
          </div>
          
          <div className="flex-1 min-w-0">
            <span className="font-bold text-xs sm:text-sm md:text-base whitespace-nowrap">
              BLACK NOVEMBER:
            </span>
            <span className="text-xs sm:text-sm md:text-base ml-1 sm:ml-2 break-words">
              Mais de 70% OFF nos cursos! Válido até 01/12/2025
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <Button
            onClick={scrollToCourses}
            size="sm"
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:from-yellow-400 hover:to-yellow-500 font-bold text-xs sm:text-sm px-2 sm:px-3 py-1 h-7 sm:h-8 shadow-lg whitespace-nowrap"
          >
            Ver Ofertas
          </Button>
          
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-gray-200 transition-colors flex-shrink-0"
            aria-label="Fechar banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      {/* Efeito de brilho animado com cores vermelho, preto e dourado */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent animate-pulse pointer-events-none"></div>
    </div>
  )
}
