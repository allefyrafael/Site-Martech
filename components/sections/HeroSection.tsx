"use client"

import { useState, useEffect } from "react"
import { CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

// Import CSS
import "../../styles/hero-section.css"

// Import components
import BackgroundAnimation from "../hero/BackgroundAnimation"
import TechSphere from "../hero/TechSphere"
import CourseVideo from "../hero/CourseVideo"
import CTAButtons from "../hero/CTAButtons"

// Types
interface HeroSectionProps {
  title: string
  description: string
  badge: string
  features: string[]
  videoUrl?: string
  videoTitle?: string
  page: "home" | "mdm" | "course"
  // Background properties
  backgroundVariant?: "default" | "course" | "minimal"
  primaryColor?: string
  secondaryColor?: string
  tertiaryColor?: string
  enableParticles?: boolean
  // Course specific properties
  courseImage?: string
  courseFeatures?: string[]
  courseInstructor?: {
    name: string
    role: string
    image: string
  }
  showTechSphere?: boolean
}

// Course Hero Background Component
export function CourseHeroBackground({
  title,
  description,
  videoUrl,
  videoTitle,
  primaryColor = "rgba(147,51,234,0.15)", // Purple default
  secondaryColor = "rgba(79,70,229,0.12)",
  tertiaryColor = "rgba(255,255,0,0.1)",
  badgeText = "CURSO PREMIUM",
  features = [],
  ctaText = "Quero me inscrever",
  ctaLink = "#",
}: {
  title: string
  description: string
  videoUrl?: string
  videoTitle?: string
  primaryColor?: string
  secondaryColor?: string
  tertiaryColor?: string
  badgeText?: string
  features?: string[]
  ctaText?: string
  ctaLink?: string
}) {
  const [countdown, setCountdown] = useState({
    days: 2,
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  // Effect for countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return { days: 2, hours: 23, minutes: 59, seconds: 59 } // Reset when reaches zero
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Extract base color for styling
  const baseColor = primaryColor.replace(/rgba?$$([^)]+)$$/, "$1").split(",")[0]
  const colorClass = Number.parseInt(baseColor) > 100 ? "purple" : "martech-blue"

  return (
    <section className="hero-section">
      {/* Background with custom effects */}
      <div className="absolute inset-0 z-0">
        {/* Base static layer */}
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(ellipse at center, ${primaryColor} 0%, transparent 70%)` }}
        ></div>

        {/* Texture layer with custom gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 50%, rgba(0,0,0,0) 100%)`,
            backgroundSize: "cover",
            opacity: 0.15,
            transform: "translateZ(0)",
          }}
        >
          {/* Subtle dot pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(${primaryColor.replace("0.15", "0.4")} 1px, transparent 1px)`,
              backgroundSize: `30px 30px`,
              opacity: 0.2,
            }}
          ></div>

          {/* Subtle grid lines */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, ${primaryColor.replace("0.15", "0.1")} 1px, transparent 1px), 
                           linear-gradient(to bottom, ${primaryColor.replace("0.15", "0.1")} 1px, transparent 1px)`,
              backgroundSize: `120px 120px`,
              opacity: 0.2,
            }}
          ></div>
        </div>

        {/* Light orbs with smooth animation */}
        <div
          className="hero-bg-orb-1"
          style={{
            background: `radial-gradient(circle, ${primaryColor} 0%, transparent 70%)`,
          }}
        ></div>

        <div
          className="hero-bg-orb-2"
          style={{
            background: `radial-gradient(circle, ${secondaryColor} 0%, transparent 70%)`,
          }}
        ></div>

        <div
          className="hero-bg-orb-3"
          style={{
            background: `radial-gradient(circle, ${tertiaryColor} 0%, transparent 70%)`,
          }}
        ></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left content column */}
          <div className="lg:col-span-6 space-y-6 content-fade-in" style={{ animationDelay: "0.1s" }}>
            {/* Badge with animation */}
            <div className="relative inline-block">
              <Badge
                className={`bg-gradient-to-r from-${colorClass} to-${
                  colorClass === "purple" ? "indigo-600" : `${colorClass}/80`
                } text-white hover:from-${colorClass === "purple" ? "indigo-600" : `${colorClass}/80`} hover:to-${colorClass} px-4 py-1.5 text-sm uppercase tracking-wider`}
              >
                {badgeText}
              </Badge>
              <span
                className={`absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-${colorClass} to-transparent`}
              ></span>
            </div>

            {/* Title with gradient text */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h1>

            {/* Description with animation */}
            <p className="text-lg text-gray-300 max-w-xl">{description}</p>

            {/* Features list */}
            {features.length > 0 && (
              <div className="space-y-2 mt-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className={`h-5 w-5 text-${colorClass} mr-2 mt-0.5 flex-shrink-0`} />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 content-fade-in" style={{ animationDelay: "0.5s" }}>
              <button
                className={`relative overflow-hidden bg-gradient-to-r from-${colorClass} to-${
                  colorClass === "purple" ? "indigo-600" : `${colorClass}/80`
                } hover:from-${colorClass === "purple" ? "indigo-600" : `${colorClass}/80`} hover:to-${colorClass} text-${
                  colorClass === "purple" || colorClass === "martech-blue" ? "white" : "black"
                } font-bold px-6 py-3 rounded-full text-base transition-all duration-300 group`}
                onClick={() => {
                  window.location.href = ctaLink
                }}
              >
                <span className="relative z-10 flex items-center">
                  {ctaText}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </span>
                <span className="btn-shine-effect">
                  <span className="btn-shine group-hover:btn-shine-active"></span>
                </span>
              </button>
              <button
                className={`border border-${colorClass} bg-black/40 text-${colorClass} hover:bg-${colorClass} hover:text-${
                  colorClass === "purple" || colorClass === "martech-blue" ? "white" : "black"
                } hover:border-transparent transition-all duration-300 px-6 py-3 rounded-full text-base w-full sm:w-auto`}
                onClick={() => {
                  // Check if we're on the FRP page
                  const isOnFrpPage = window.location.pathname.includes("/frp")

                  if (isOnFrpPage) {
                    // For FRP page, look for the "Conteúdo Completo do curso" section
                    const contentSection =
                      document.getElementById("conteudo-completo-do-curso") ||
                      document.getElementById("conteudo-completo") ||
                      Array.from(document.querySelectorAll("h2, h3, h4")).find((el) =>
                        el.textContent?.toLowerCase().includes("conteúdo completo do curso"),
                      ) ||
                      Array.from(document.querySelectorAll("section, div")).find((el) =>
                        el.textContent?.toLowerCase().includes("conteúdo completo do curso"),
                      )

                    if (contentSection) {
                      contentSection.scrollIntoView({ behavior: "smooth" })
                    } else {
                      // Fallback: try common section IDs
                      const fallbackSection =
                        document.getElementById("features") ||
                        document.getElementById("curriculum") ||
                        document.getElementById("content") ||
                        document.getElementById("grade") ||
                        document.getElementById("conteudo")

                      if (fallbackSection) {
                        fallbackSection.scrollIntoView({ behavior: "smooth" })
                      }
                    }
                  } else {
                    // For other pages, use the existing behavior
                    const gradeSection =
                      document.getElementById("grade") ||
                      document.getElementById("curriculum") ||
                      document.getElementById("cursos") ||
                      document.getElementById("features")

                    if (gradeSection) {
                      gradeSection.scrollIntoView({ behavior: "smooth" })
                    }
                  }
                }}
              >
                Ver grade completa
              </button>
            </div>
          </div>

          {/* Right content column */}
          <div className="lg:col-span-6 content-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r from-${colorClass} to-martech-orange rounded-lg blur opacity-75 transition-opacity duration-1000`}
              ></div>
              <div className="relative bg-martech-black bg-martech-gradient rounded-lg overflow-hidden border border-martech-blue transition-all duration-700 flex flex-col">
                {/* Top bar with countdown */}
                <div
                  className={`bg-gradient-to-r from-${colorClass}/20 to-martech-orange/20 border-b border-white/10 p-3 flex items-center`}
                >
                  <div className="flex items-center">
                    <span className="animate-pulse text-red-500 mr-2">●</span>
                    <span className="text-white font-medium text-sm">Oferta por tempo limitado</span>
                  </div>
                </div>

                {/* Main content */}
                <div className="p-4">
                  {/* Video */}
                  {videoUrl ? (
                    <CourseVideo videoUrl={videoUrl} videoTitle={videoTitle} />
                  ) : (
                    <div className="course-video-container">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div
                            className={`w-16 h-16 rounded-full bg-${colorClass}/30 flex items-center justify-center mx-auto mb-3`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8 text-white ml-1"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                          </div>
                          <p className="text-white font-medium">Vídeo de apresentação do curso</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom transition */}
      <div className="hero-transition-bottom"></div>
    </section>
  )
}

// Main HeroSection component
export default function HeroSection({
  title,
  description,
  badge,
  features,
  videoUrl,
  videoTitle,
  page,
  backgroundVariant = "default",
  primaryColor = "rgba(0,160,233,0.15)",
  secondaryColor = "rgba(255,127,0,0.12)",
  tertiaryColor = "rgba(255,255,0,0.1)",
  enableParticles = true,
  courseImage,
  courseFeatures = [],
  courseInstructor,
  showTechSphere = true,
}: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  // Effects
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const renderRightColumn = () => {
    if (page === "mdm") {
      return (
        <div className="lg:col-span-6 content-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-martech-blue to-martech-orange rounded-lg blur opacity-75 transition-opacity duration-1000"></div>
            <div className="relative bg-martech-black bg-martech-gradient rounded-lg overflow-hidden border border-martech-blue transition-all duration-700 flex flex-col">
              {/* Top bar with countdown */}
              <div className="bg-gradient-to-r from-martech-blue/20 to-martech-orange/20 border-b border-white/10 p-3 flex items-center">
                <div className="flex items-center">
                  <span className="animate-pulse text-red-500 mr-2">●</span>
                  <span className="text-white font-medium text-sm">Oferta por tempo limitado</span>
                </div>
              </div>

              {/* Main content */}
              <div className="p-4">
                {/* Video */}
                {videoUrl ? (
                  <CourseVideo videoUrl={videoUrl} videoTitle={videoTitle} />
                ) : (
                  <div className="course-video-container">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-martech-blue/30 flex items-center justify-center mx-auto mb-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-white ml-1"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          </svg>
                        </div>
                        <p className="text-white font-medium">Vídeo de apresentação do curso</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )
    } else if (page === "course") {
      return (
        <div className="lg:col-span-6 content-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-martech-blue to-martech-orange rounded-lg blur opacity-75 transition-opacity duration-1000"></div>
            <div className="relative bg-martech-black bg-martech-gradient rounded-lg py-8 px-6 border border-martech-blue transition-all duration-700 min-h-[420px] flex flex-col justify-center">
              {/* Course video */}
              {videoUrl && <CourseVideo videoUrl={videoUrl} videoTitle={videoTitle} />}

              {/* Course features */}
              {courseFeatures.length > 0 && (
                <div className="space-y-3 mt-4">
                  <h3 className="text-lg font-semibold text-white">O que você vai aprender:</h3>
                  <ul className="space-y-2">
                    {courseFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-martech-blue mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Course instructor */}
              {courseInstructor && (
                <div className="flex items-center mt-6 bg-black/30 p-3 rounded-lg border border-white/10">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-martech-blue">
                    <Image
                      src={courseInstructor.image || "/placeholder.svg"}
                      alt={courseInstructor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-white">{courseInstructor.name}</h4>
                    <p className="text-sm text-gray-400">{courseInstructor.role}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="lg:col-span-6 content-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-martech-blue to-martech-orange rounded-lg blur opacity-75 transition-opacity duration-1000"></div>
            <div className="relative bg-martech-black bg-martech-gradient rounded-lg py-12 px-8 border border-martech-blue transition-all duration-700 min-h-[450px] flex flex-col justify-center">
              <div className="flex flex-col items-center justify-center h-full">
                {/* Title above animation */}
                <h3 className="text-center mb-5 text-2xl font-extrabold tracking-wide text-white uppercase relative">
                  Martech Um Planeta de Soluções
                  <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-martech-blue"></span>
                </h3>

                {/* Tech Sphere Animation */}
                <div className="scale-90">{showTechSphere && <TechSphere />}</div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <section className="hero-section">
      {/* Background */}
      <BackgroundAnimation
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        tertiaryColor={tertiaryColor}
        enableParticles={enableParticles}
        variant={backgroundVariant}
      />

      <div className="container relative z-10 overflow-hidden">
        {/* Subtle animated gradient overlay for content */}
        <div className="hero-bg-gradient"></div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left content column */}
          <div className="lg:col-span-6 space-y-6 content-fade-in" style={{ animationDelay: "0.1s" }}>
            {/* Badge with animation */}
            <div className="relative inline-block">
              <Badge
                className={`bg-gradient-to-r ${
                  page === "mdm"
                    ? "from-martech-orange to-martech-yellow text-black"
                    : "from-martech-blue to-martech-blue/80 text-white"
                } hover:from-martech-blue hover:to-martech-blue px-4 py-1.5 text-sm uppercase tracking-wider`}
              >
                {badge}
              </Badge>
              <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-martech-blue to-transparent"></span>
            </div>

            {/* Title with gradient text */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h1>

            {/* Description with subtle animation */}
            <p className="text-lg text-gray-300 max-w-xl">{description}</p>

            {/* Features list for MDM page */}
            {features.length > 0 && page === "mdm" && (
              <div className="space-y-2 mt-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-martech-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            )}

            {/* CTA buttons with enhanced styling */}
            <CTAButtons page={page} />
          </div>

          {/* Right content column - conditionally rendered */}
          {renderRightColumn()}
        </div>
      </div>

      {/* Bottom transition */}
      <div className="hero-transition-bottom"></div>
    </section>
  )
}
