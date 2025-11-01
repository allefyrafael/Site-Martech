'use client'

import { useEffect, useState } from 'react'
import { Cpu, Smartphone, Zap, Code, Database, Shield, Wifi, HardDrive } from 'lucide-react'

interface TechIcon {
  id: number
  Icon: any
  x: number
  y: number
  size: number
  color: string
  animationDelay: number
}

export default function TechElements() {
  const [techIcons, setTechIcons] = useState<TechIcon[]>([])

  useEffect(() => {
    const icons = [Cpu, Smartphone, Zap, Code, Database, Shield, Wifi, HardDrive]
    const colors = ['text-martech-blue', 'text-martech-orange', 'text-martech-yellow', 'text-red-400']
    
    const newTechIcons: TechIcon[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      Icon: icons[Math.floor(Math.random() * icons.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 16,
      color: colors[Math.floor(Math.random() * colors.length)],
      animationDelay: Math.random() * 3
    }))
    
    setTechIcons(newTechIcons)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Ícones tecnológicos flutuantes */}
      {techIcons.map((tech) => {
        const IconComponent = tech.Icon
        return (
          <div
            key={tech.id}
            className={`absolute ${tech.color} opacity-20 animate-float`}
            style={{
              left: `${tech.x}%`,
              top: `${tech.y}%`,
              animationDelay: `${tech.animationDelay}s`,
              fontSize: `${tech.size}px`
            }}
          >
            <IconComponent size={tech.size} />
          </div>
        )
      })}
      
      {/* Linhas de conexão tecnológicas */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-10">
          <defs>
            <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00A0E9" />
              <stop offset="50%" stopColor="#FF7F00" />
              <stop offset="100%" stopColor="#FFFF00" />
            </linearGradient>
          </defs>
          
          {/* Linhas de circuito */}
          <path
            d="M0,50 Q25,25 50,50 T100,50"
            stroke="url(#techGradient)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M50,0 Q75,25 50,50 T50,100"
            stroke="url(#techGradient)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          
          {/* Pontos de conexão */}
          <circle cx="25%" cy="25%" r="2" fill="#00A0E9" className="animate-pulse" />
          <circle cx="75%" cy="25%" r="2" fill="#FF7F00" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <circle cx="25%" cy="75%" r="2" fill="#FFFF00" className="animate-pulse" style={{ animationDelay: '1s' }} />
          <circle cx="75%" cy="75%" r="2" fill="#ef4444" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
        </svg>
      </div>
      
      {/* Efeitos de partículas de dados */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-martech-blue rounded-full animate-ping"></div>
      <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-martech-orange rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-martech-yellow rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      
      {/* Hexágonos tecnológicos */}
      <div className="absolute top-10 right-10 w-8 h-8 border border-martech-blue/30 transform rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-10 left-10 w-6 h-6 border border-martech-orange/30 transform rotate-12 animate-pulse"></div>
    </div>
  )
}
