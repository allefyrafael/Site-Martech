'use client'

import { useState, useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { Flame, Clock, Zap } from 'lucide-react'

export default function UrgencyBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Mostrar banner após 3 segundos
    const timer = setTimeout(() => setIsVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm animate-bounce">
      <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-4 shadow-2xl border border-red-500/50 relative overflow-hidden">
        {/* Efeito de brilho */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <Flame className="h-5 w-5 text-yellow-300 animate-pulse" />
            <Badge className="bg-yellow-400 text-black font-bold text-xs px-2 py-1">
              OFERTA LIMITADA
            </Badge>
          </div>
          
          <h3 className="text-white font-bold text-sm mb-1">
            🔥 Últimas horas!
          </h3>
          
          <p className="text-red-100 text-xs mb-3">
            Mais de 70% OFF nos cursos. Não perca essa oportunidade única!
          </p>
          
          <div className="flex items-center gap-2 text-yellow-300">
            <Clock className="h-4 w-4" />
            <span className="text-xs font-medium">Válido até 31/12</span>
          </div>
        </div>
        
        {/* Botão de fechar */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-red-200 hover:text-white transition-colors"
          aria-label="Fechar"
        >
          ×
        </button>
      </div>
    </div>
  )
}
