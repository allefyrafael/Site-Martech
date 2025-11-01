'use client'

import { useEffect, useState } from 'react'
import TechElements from './TechElements'

export default function BlackNovemberEffects() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    // Criar partículas flutuantes
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Tech Elements */}
      <TechElements />
      
      {/* Gradiente de fundo animado com cores Martech */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-martech-blue/3 to-red-800/5 animate-pulse"></div>
      
      {/* Partículas flutuantes */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute w-1 h-1 rounded-full animate-bounce opacity-30 ${
            particle.id % 3 === 0 ? 'bg-red-400' : 
            particle.id % 3 === 1 ? 'bg-martech-orange' : 'bg-martech-blue'
          }`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: '3s'
          }}
        />
      ))}
      
      {/* Efeitos de brilho nos cantos com cores Martech */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-radial from-red-500/20 to-transparent animate-pulse"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-martech-blue/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-radial from-martech-orange/20 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-radial from-red-500/20 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      
      {/* Linhas de energia com cores Martech */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent animate-pulse"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-martech-blue/30 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-martech-orange/20 to-transparent animate-pulse" style={{ animationDelay: '0.8s' }}></div>
      </div>
    </div>
  )
}
