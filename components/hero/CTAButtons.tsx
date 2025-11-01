"use client"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface CTAButtonsProps {
  page: "home" | "mdm" | "course"
}

export default function CTAButtons({ page }: CTAButtonsProps) {
  // Function to handle scrolling to a section
  const scrollToSection = (sectionId: string) => {
    // First try to find the element
    const element = document.getElementById(sectionId)

    if (element) {
      // If element exists on current page, scroll to it
      element.scrollIntoView({ behavior: "smooth" })

      // Force another scroll after a delay to ensure it works
      setTimeout(() => {
        window.scrollTo({
          top: element.offsetTop - 100, // Offset to account for fixed headers
          behavior: "smooth",
        })
      }, 100)
    } else {
      // If element doesn't exist on current page, try to navigate to the page with the section
      const currentPath = window.location.pathname
      if (!currentPath.includes("curso-vip") && (sectionId === "conteudo-do-curso" || sectionId === "precos")) {
        window.location.href = `/curso-vip?section=${sectionId}`
      }
    }
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 py-4 content-fade-in" style={{ animationDelay: "0.5s" }}>
      {page === "course" ? (
        <>
          <Button
            className="bg-gradient-to-r from-martech-orange to-martech-yellow hover:from-martech-yellow hover:to-martech-orange text-black font-bold px-6 py-3 rounded-xl text-base transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,127,0,0.4)]"
            onClick={() => scrollToSection("precos")}
          >
            <span className="relative z-10 flex items-center">
              Quero me inscrever agora
              <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Button>
          <Button
            variant="outline"
            className="border-martech-orange text-martech-orange hover:bg-martech-orange hover:text-black transition-all duration-300 px-6 py-3 rounded-xl text-base w-full sm:w-auto"
            onClick={() => {
              scrollToSection("conteudo-do-curso")
            }}
          >
            Ver grade completa
          </Button>
        </>
      ) : page === "mdm" ? (
        <>
          <Button
            className="bg-gradient-to-r from-martech-blue to-blue-700 hover:from-blue-700 hover:to-martech-blue text-white font-bold px-6 py-3 rounded-xl text-base transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,160,233,0.4)]"
            onClick={() => scrollToSection("pricing")}
          >
            <span className="relative z-10 flex items-center">
              Quero me inscrever agora
              <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Button>
          <Button
            variant="outline"
            className="border-martech-blue text-martech-blue hover:bg-martech-blue hover:text-white transition-all duration-300 px-6 py-3 rounded-xl text-base w-full sm:w-auto"
            onClick={() => scrollToSection("cursos")}
          >
            Ver grade completa
          </Button>
        </>
      ) : (
        <>
          {/* Wrapper do botão com badge compacto */}
          <div className="btn-wrapper-compact">
            <Button
              className="btn-primary-compact bg-gradient-to-r from-martech-blue to-blue-700 hover:from-blue-700 hover:to-martech-blue text-white font-bold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,160,233,0.4)]"
              onClick={() => scrollToSection("nossos-cursos")}
            >
              <span className="relative z-10 flex items-center">
                Ver nossos cursos
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
            <span className="btn-badge-compact">-70%</span>
          </div>
          <Link href="/sobre-nos">
            <Button
              variant="outline"
              className="btn-secondary-compact border-martech-blue text-martech-blue hover:bg-martech-blue hover:text-white transition-all duration-300 w-full sm:w-auto"
            >
              Sobre nós
            </Button>
          </Link>
        </>
      )}
    </div>
  )
}
