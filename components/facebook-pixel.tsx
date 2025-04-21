"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

declare global {
  interface Window {
    fbq: any
  }
}

export default function FacebookPixel() {
  const pathname = usePathname()

  // Inicialização do Facebook Pixel
  useEffect(() => {
    if (typeof window === "undefined") return

    // Inicializar o Facebook Pixel apenas uma vez
    if (!window.fbq) {
      window.fbq = () => {
        // @ts-ignore
        window.fbq.callMethod ? window.fbq.callMethod.apply(window.fbq, arguments) : window.fbq.queue.push(arguments)
      }

      if (!window._fbq) window._fbq = window.fbq
      window.fbq.push = window.fbq
      window.fbq.loaded = true
      window.fbq.version = "2.0"
      window.fbq.queue = []
    }

    // Carregar o script do Facebook Pixel
    const script = document.createElement("script")
    script.async = true
    script.src = "https://connect.facebook.net/en_US/fbevents.js"
    document.head.appendChild(script)

    // Inicializar o Pixel com o ID
    window.fbq("init", "750997919442336")

    // Rastrear visualização de página inicial
    window.fbq("track", "PageView")

    // Limpar ao desmontar
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  // Rastrear mudanças de página
  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "PageView")
    }
  }, [pathname])

  return null
}
