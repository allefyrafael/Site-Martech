"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface CTAButtonsProps {
  page: "home" | "mdm" | "course"
}

export default function CTAButtons({ page }: CTAButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 pt-2 content-fade-in" style={{ animationDelay: "0.5s" }}>
      {page === "course" ? (
        <>
          <Button
            size="lg"
            className="relative overflow-hidden bg-gradient-to-r from-martech-blue to-martech-blue/80 hover:from-martech-blue/80 hover:to-martech-blue text-white font-bold group transition-all duration-300"
            onClick={() => {
              // Find the payment section by common IDs
              const paymentSection =
                document.getElementById("pricing") ||
                document.getElementById("precos") ||
                document.getElementById("payment")

              if (paymentSection) {
                paymentSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            <span className="relative z-10 flex items-center">
              Inscrever-se no curso
              <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="btn-shine-effect">
              <span className="btn-shine group-hover:btn-shine-active"></span>
            </span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-martech-blue bg-black/40 text-martech-blue hover:bg-martech-blue hover:text-white hover:border-transparent transition-all duration-300 w-full sm:w-auto"
            onClick={() => {
              // Try to find the course grade section by common IDs
              const gradeSection =
                document.getElementById("grade") ||
                document.getElementById("curriculum") ||
                document.getElementById("cursos") ||
                document.getElementById("features")

              if (gradeSection) {
                gradeSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Ver grade completa
          </Button>
        </>
      ) : page === "mdm" ? (
        <>
          <Button
            size="lg"
            className="relative overflow-hidden bg-gradient-to-r from-martech-orange to-martech-yellow hover:from-martech-yellow hover:to-martech-orange text-black font-bold group transition-all duration-300"
            onClick={() => {
              // Find the payment section by common IDs
              const paymentSection =
                document.getElementById("pricing") ||
                document.getElementById("precos") ||
                document.getElementById("payment")

              if (paymentSection) {
                paymentSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            <span className="relative z-10 flex items-center">
              Quero me inscrever
              <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="btn-shine-effect">
              <span className="btn-shine group-hover:btn-shine-active"></span>
            </span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-martech-blue bg-black/40 text-martech-blue hover:bg-martech-blue hover:text-white hover:border-transparent transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,160,233,0.4)]"
            onClick={() => {
              // Try to find the course grade section by common IDs
              const gradeSection =
                document.getElementById("grade") ||
                document.getElementById("curriculum") ||
                document.getElementById("cursos") ||
                document.getElementById("features")

              if (gradeSection) {
                gradeSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Ver grade completa
          </Button>
        </>
      ) : (
        <>
          <Button
            size="lg"
            className="relative overflow-hidden bg-gradient-to-r from-martech-orange to-martech-yellow hover:from-martech-yellow hover:to-martech-orange text-black font-bold w-full sm:w-auto group transition-all duration-300"
            onClick={() => {
              const element = document.getElementById("nossos-cursos")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            <span className="relative z-10 flex items-center">
              Ver nossos cursos
              <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="btn-shine-effect">
              <span className="btn-shine group-hover:btn-shine-active"></span>
            </span>
          </Button>
          <Link href="/sobre-nos">
            <Button
              size="lg"
              variant="outline"
              className="border-martech-blue bg-black/40 text-martech-blue hover:bg-martech-blue hover:text-white hover:border-transparent transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,160,233,0.4)] w-full sm:w-auto"
            >
              Sobre nós
            </Button>
          </Link>
        </>
      )}
    </div>
  )
}

