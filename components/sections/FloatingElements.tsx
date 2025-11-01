'use client'

import { useEffect, useState } from 'react'

interface FloatingElement {
  id: number
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  color: string
}

export default function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([])

  useEffect(() => {
    // Criar elementos flutuantes
    const newElements: FloatingElement[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.1,
      color: ['red', 'orange', 'yellow'][Math.floor(Math.random() * 3)]
    }))
    setElements(newElements)

    // Animar elementos
    const interval = setInterval(() => {
      setElements(prev => prev.map(element => ({
        ...element,
        y: element.y <= -10 ? 110 : element.y - element.speed * 0.1,
        x: element.x + Math.sin(Date.now() * 0.001 + element.id) * 0.1
      })))
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className={`absolute rounded-full animate-pulse`}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            opacity: element.opacity,
            backgroundColor: element.color === 'red' ? '#ef4444' : 
                           element.color === 'orange' ? '#f97316' : '#eab308',
            boxShadow: `0 0 ${element.size * 2}px ${element.color === 'red' ? '#ef4444' : 
                       element.color === 'orange' ? '#f97316' : '#eab308'}`,
            transition: 'all 0.1s linear'
          }}
        />
      ))}
      
      {/* Efeitos de luz */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  )
}
