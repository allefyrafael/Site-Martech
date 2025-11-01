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
  const [bannerVisible, setBannerVisible] = useState(true)

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

  // Detectar se o banner está visível
  useEffect(() => {
    const checkBannerVisibility = () => {
      const banner = document.querySelector('.black-november-banner-red-gold')
      setBannerVisible(!!banner)
    }

    // Verificar inicialmente
    checkBannerVisibility()

    // Observar mudanças no DOM
    const observer = new MutationObserver(checkBannerVisibility)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
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
    <header className="sticky top-[44px] sm:top-[48px] z-[50] w-full border-b border-martech-blue bg-black">
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
              onClick={(e) => {
                e.stopPropagation()
                setCoursesOpen(!coursesOpen)
              }}
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
                  href="/mdm-avancado"
                  className="flex items-center justify-between px-4 py-2 text-sm text-gray-300 hover:bg-martech-blue/10 hover:text-white"
                  onClick={(e) => {
                    e.stopPropagation()
                    setCoursesOpen(false)
                  }}
                >
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                    MDM do básico ao avançado
                  </div>
                  <ChevronRight className="h-4 w-4 text-purple-500" />
                </Link>
                <Link
                  href="/curso-vip"
                  className="flex items-center justify-between px-4 py-2 text-sm text-gray-300 hover:bg-martech-blue/10 hover:text-white"
                  onClick={(e) => {
                    e.stopPropagation()
                    setCoursesOpen(false)
                  }}
                >
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                    CURSO VIP DO BÁSICO AO AVANÇADO (JTAG & EMMC)
                  </div>
                  <ChevronRight className="h-4 w-4 text-yellow-500" />
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

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className={`md:hidden fixed left-0 right-0 bg-black border-b border-martech-blue/30 shadow-lg z-[60] overflow-y-auto ${
            bannerVisible 
              ? 'top-[104px] sm:top-[112px] max-h-[calc(100vh-104px)] sm:max-h-[calc(100vh-112px)]'
              : 'top-[60px] sm:top-[64px] max-h-[calc(100vh-60px)] sm:max-h-[calc(100vh-64px)]'
          }`}
        >
          <div className="w-full py-4 space-y-4 px-4 max-w-full box-border overflow-x-hidden">
            <Link
              href="/"
              className="block py-2 text-gray-300 hover:text-white transition-colors hover:bg-martech-darkgray rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Cursos Dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full py-2 text-gray-300 hover:text-white transition-colors hover:bg-martech-darkgray rounded-md"
                onClick={() => setMobileCourseOpen(!mobileCourseOpen)}
              >
                <span>Cursos</span>
                <ChevronDown
                  className="h-4 w-4 transition-transform duration-200 flex-shrink-0"
                  style={{ transform: mobileCourseOpen ? "rotate(180deg)" : "rotate(0)" }}
                />
              </button>

              {/* Mobile Dropdown Content */}
              <div
                className={`mt-1 ml-2 pl-3 border-l border-martech-blue/30 space-y-2 ${mobileCourseOpen ? "block" : "hidden"}`}
              >
                <Link
                  href="/mdm-avancado"
                  className="flex items-center justify-between py-2 text-sm text-gray-300 hover:text-white hover:bg-martech-darkgray rounded-md pr-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex items-center flex-1 min-w-0">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mr-2 flex-shrink-0"></div>
                    <span className="truncate">MDM do básico ao avançado</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-purple-500 flex-shrink-0 ml-1" />
                </Link>
                <Link
                  href="/curso-vip"
                  className="flex items-start justify-between py-2 text-sm text-gray-300 hover:text-white hover:bg-martech-darkgray rounded-md pr-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex items-start flex-1 min-w-0">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2 mt-1.5 flex-shrink-0"></div>
                    <span className="break-words leading-tight">
                      <span className="hidden sm:inline">CURSO VIP DO BÁSICO AO AVANÇADO (JTAG & EMMC)</span>
                      <span className="sm:hidden">CURSO VIP<br />JTAG & EMMC</span>
                    </span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5 ml-1" />
                </Link>
              </div>
            </div>

            <Link
              href="/sobre-nos"
              className="block py-2 text-gray-300 hover:text-white transition-colors hover:bg-martech-darkgray rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre nós
            </Link>

          </div>
        </div>
      )}
    </header>
  )
}
