"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"

export default function Header() {
  const [coursesOpen, setCoursesOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileCourseOpen, setMobileCourseOpen] = useState(false)

  // Close mobile menu when clicking outside
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const coursesDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Don't close if clicking the toggle button itself
      if (
        (event.target as Element).closest('button[aria-label="Close menu"]') ||
        (event.target as Element).closest('button[aria-label="Open menu"]')
      ) {
        return
      }

      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }

      // Only close courses dropdown if click is outside both the button and the dropdown
      if (
        coursesDropdownRef.current &&
        !coursesDropdownRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest(".courses-button")
      ) {
        setCoursesOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        // md breakpoint
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-martech-blue bg-black">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2025-02-15_at_15.49.15__1_-removebg-preview-WF6yeWqtspwBEg8lsQY3UcCDpxNjAE.png"
            alt="Martech Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold text-white">MARTECH</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray-300 hover:text-white transition-colors">
            Home
          </Link>

          {/* Cursos Dropdown */}
          <div className="relative group">
            <button
              className="courses-button flex items-center gap-1 text-gray-300 hover:text-white transition-colors focus:outline-none"
              onClick={() => setCoursesOpen(!coursesOpen)}
            >
              Cursos
              <ChevronDown
                className="h-4 w-4 transition-transform duration-200"
                style={{ transform: coursesOpen ? "rotate(180deg)" : "rotate(0)" }}
              />
            </button>

            {/* Dropdown Menu */}
            <div
              ref={coursesDropdownRef}
              className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-martech-darkgray border border-martech-blue/30 overflow-hidden transition-all duration-200 origin-top-right ${
                coursesOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <div className="py-1">
                <Link
                  href="/mdm"
                  className="flex items-center justify-between px-4 py-2 text-sm text-gray-300 hover:bg-martech-blue/10 hover:text-white"
                >
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-martech-blue mr-2"></div>
                    Curso MDM Nível I
                  </div>
                  <ChevronRight className="h-4 w-4 text-martech-blue" />
                </Link>
                <Link
                  href="/frp"
                  className="flex items-center justify-between px-4 py-2 text-sm text-gray-300 hover:bg-martech-blue/10 hover:text-white"
                >
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    REMOÇÃO DE ICLOUD E FRP ANDROID
                  </div>
                  <ChevronRight className="h-4 w-4 text-green-500" />
                </Link>
                <Link
                  href="/mdm-avancado"
                  className="flex items-center justify-between px-4 py-2 text-sm text-gray-300 hover:bg-martech-blue/10 hover:text-white"
                >
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                    MDM do básico ao avançado
                  </div>
                  <ChevronRight className="h-4 w-4 text-purple-500" />
                </Link>
              </div>
            </div>
          </div>

          <Link href="/sobre-nos" className="text-gray-300 hover:text-white transition-colors">
            Sobre nós
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden transition-colors duration-300 hover:bg-martech-blue/20 hover:text-martech-blue focus:bg-martech-blue/10 focus:text-martech-blue"
          onClick={(e) => {
            e.stopPropagation() // Prevent event bubbling
            setMobileMenuOpen((prevState) => !prevState) // Toggle using function form
          }}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </Button>

        {/* CTA Button - Desktop Only */}
        <Link
          href="https://sso.hotmart.com/login?service=https%3A%2F%2Fsso.hotmart.com%2Foauth2.0%2FcallbackAuthorize%3Fclient_id%3Db432cdd3-eb60-46bd-892b-5b450a65153e%26redirect_uri%3Dhttps%253A%252F%252Fhotmart.com%252Fen%252Fclub%252Fmartech-cursos-de-software-ead%252Fauth%252Flogin%26response_type%3Dcode%26response_mode%3Dquery%26client_name%3DCasOAuthClient"
          className="hidden md:block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-martech-blue hover:bg-blue-700">Acessar Cursos</Button>
        </Link>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden absolute top-16 left-0 right-0 bg-black border-b border-martech-blue/30 shadow-lg z-50"
        >
          <div className="container py-4 space-y-4">
            <Link
              href="/"
              className="block px-4 py-2 text-gray-300 hover:text-white transition-colors hover:bg-martech-darkgray rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Cursos Dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full px-4 py-2 text-gray-300 hover:text-white transition-colors hover:bg-martech-darkgray rounded-md"
                onClick={() => setMobileCourseOpen(!mobileCourseOpen)}
              >
                <span>Cursos</span>
                <ChevronDown
                  className="h-4 w-4 transition-transform duration-200"
                  style={{ transform: mobileCourseOpen ? "rotate(180deg)" : "rotate(0)" }}
                />
              </button>

              {/* Mobile Dropdown Content */}
              <div
                className={`mt-1 ml-4 pl-4 border-l border-martech-blue/30 space-y-2 ${mobileCourseOpen ? "block" : "hidden"}`}
              >
                <Link
                  href="/mdm"
                  className="flex items-center justify-between px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-martech-darkgray rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-martech-blue mr-2"></div>
                    Curso MDM Nível I
                  </div>
                  <ChevronRight className="h-4 w-4 text-martech-blue" />
                </Link>
                <Link
                  href="/frp"
                  className="flex items-center justify-between px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-martech-darkgray rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    REMOÇÃO DE ICLOUD E FRP ANDROID
                  </div>
                  <ChevronRight className="h-4 w-4 text-green-500" />
                </Link>
                <Link
                  href="/mdm-avancado"
                  className="flex items-center justify-between px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-martech-darkgray rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                    MDM do básico ao avançado
                  </div>
                  <ChevronRight className="h-4 w-4 text-purple-500" />
                </Link>
              </div>
            </div>

            <Link
              href="/sobre-nos"
              className="block px-4 py-2 text-gray-300 hover:text-white transition-colors hover:bg-martech-darkgray rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre nós
            </Link>

            {/* Mobile CTA Button */}
            <div className="pt-2 px-4">
              <Link href="/mdm" className="block w-full" onClick={() => setMobileMenuOpen(false)}>
                <Button className="bg-martech-blue hover:bg-blue-700 w-full">Acessar Cursos</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
