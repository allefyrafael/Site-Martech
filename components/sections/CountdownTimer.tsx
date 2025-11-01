'use client'

import { useState, useEffect } from 'react'

export default function CountdownTimer() {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Data final: 1º de dezembro de 2025 às 23:59:59 (horário de Brasília)
    const endDate = new Date('2025-12-01T23:59:59-03:00').getTime()
    
    const calculateTimeRemaining = () => {
      const now = new Date().getTime()
      const distance = endDate - now
      
      if (distance < 0) {
        // Promoção encerrada
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        })
        return
      }
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
      
      setTimeRemaining({ days, hours, minutes, seconds })
    }
    
    // Calcular imediatamente
    calculateTimeRemaining()
    
    // Atualizar a cada segundo
    const interval = setInterval(calculateTimeRemaining, 1000)
    
    // Limpar intervalo quando o componente desmontar
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="countdown-banner-pro">
      {/* Badge com ícone SVG ao invés de emoji */}
      <div className="countdown-header">
        <span className="limited-badge">
          <svg className="badge-icon" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M8.5 19H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.5 2v4c0 1.1.45 2 2 2h4M13.56 18.97l.93.93c.39.39 1.02.39 1.41 0l3.12-3.12" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          OFERTA LIMITADA
        </span>
      </div>
      
      {/* Título */}
      <h2 className="countdown-title-pro">BLACK NOVEMBER termina em:</h2>
      
      {/* Timer */}
      <div className="countdown-grid">
        <div className="time-box">
          <span className="time-value">{timeRemaining.days}</span>
          <span className="time-label">DIAS</span>
        </div>
        <div className="time-box">
          <span className="time-value">{timeRemaining.hours}</span>
          <span className="time-label">HORAS</span>
        </div>
        <div className="time-box">
          <span className="time-value">{timeRemaining.minutes}</span>
          <span className="time-label">MIN</span>
        </div>
        <div className="time-box">
          <span className="time-value">{timeRemaining.seconds}</span>
          <span className="time-label">SEG</span>
        </div>
      </div>
      
      {/* Texto final com ícone SVG e palavras-chave destacadas */}
      <div className="countdown-footer">
        <svg className="footer-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9.32 14.33L10.66 15.67L14.66 11.67" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>
          Mais de <span className="highlight-red">70% OFF</span> -{' '}
          <span className="highlight-blue">Tecnologia</span> avançada ao seu alcance!
        </span>
      </div>
    </section>
  )
}
