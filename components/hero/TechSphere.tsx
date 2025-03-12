import type React from "react"
import Image from "next/image"

export default function TechSphere() {
  return (
    <div className="tech-sphere">
      {/* Orbiting circles with smoother animation and reduced size */}
      <div className="tech-sphere-orbit tech-sphere-orbit-1">
        <div className="tech-sphere-circle tech-sphere-circle-1 sm:w-[85%] sm:h-[85%] w-[75%] h-[75%]"></div>
      </div>
      <div className="tech-sphere-orbit tech-sphere-orbit-2">
        <div className="tech-sphere-circle tech-sphere-circle-2 sm:w-[75%] sm:h-[75%] w-[65%] h-[65%]"></div>
      </div>
      <div className="tech-sphere-orbit tech-sphere-orbit-3">
        <div className="tech-sphere-circle tech-sphere-circle-3 sm:w-[90%] sm:h-[90%] w-[80%] h-[80%]"></div>
      </div>

      {/* Orbiting dots with smoother animation and trails */}
      <div
        className="orbit-dot"
        style={
          {
            "--dot-size": "10px",
            "--dot-color": "#00A0E9",
            "--orbit-size": "0.9",
            "--orbit-duration": "20s",
            "--min-opacity": "0.7",
            "--max-opacity": "1",
            "--trail-width": "15px",
          } as React.CSSProperties
        }
      ></div>

      <div
        className="orbit-dot"
        style={
          {
            "--dot-size": "8px",
            "--dot-color": "#FF7F00",
            "--orbit-size": "0.75",
            "--orbit-duration": "15s",
            "--orbit-direction": "reverse",
            "--min-opacity": "0.6",
            "--max-opacity": "0.9",
            "--trail-width": "12px",
          } as React.CSSProperties
        }
      ></div>

      <div
        className="orbit-dot"
        style={
          {
            "--dot-size": "12px",
            "--dot-color": "#FFFF00",
            "--orbit-size": "1.05",
            "--orbit-duration": "25s",
            "--min-opacity": "0.5",
            "--max-opacity": "0.8",
            "--trail-width": "18px",
          } as React.CSSProperties
        }
      ></div>

      {/* Adicionar pequenas estrelas/partículas no fundo */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
              animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite ${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Center content */}
      <div className="tech-sphere-center">
        <div className="relative">
          {/* Multiple orbital circles */}
          <div
            className="absolute inset-0 rounded-full border border-martech-blue/30"
            style={{ animation: "spin 25s linear infinite" }}
          ></div>
          <div
            className="absolute inset-1 rounded-full border border-martech-orange/30"
            style={{ animation: "spin 20s linear infinite reverse" }}
          ></div>
          <div
            className="absolute inset-2 rounded-full border border-martech-yellow/30"
            style={{ animation: "spin 30s linear infinite" }}
          ></div>
          <div
            className="absolute inset-3 rounded-full border border-martech-blue/20"
            style={{ animation: "spin 15s linear infinite reverse" }}
          ></div>
          <div
            className="absolute inset-4 rounded-full border border-purple-500/20"
            style={{ animation: "spin 35s linear infinite" }}
          ></div>
          <div
            className="absolute inset-5 rounded-full border border-green-500/20"
            style={{ animation: "spin 22s linear infinite reverse" }}
          ></div>
          <div
            className="absolute inset-6 rounded-full border border-red-500/20"
            style={{ animation: "spin 28s linear infinite" }}
          ></div>

          {/* Pulsing glow with smoother animation */}
          <div
            className="absolute inset-8 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(0,160,233,0.7) 0%, rgba(255,127,0,0.7) 50%, rgba(255,255,0,0.7) 100%)",
              filter: "blur(15px)",
              opacity: 0.7,
              animation: "pulseGlow 4s ease-in-out infinite",
            }}
          ></div>

          {/* Martech Logo */}
          <div className="tech-sphere-logo-container">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2025-02-15_at_15.49.15__1_-removebg-preview-WF6yeWqtspwBEg8lsQY3UcCDpxNjAE.png"
              alt="Martech Logo"
              width={80}
              height={80}
              className="h-16 w-auto"
            />
          </div>

          {/* Additional decorative dots */}
          <div
            className="absolute w-2 h-2 rounded-full bg-martech-blue top-0 left-1/2 -translate-x-1/2"
            style={{ animation: "orbitDot 15s linear infinite" }}
          ></div>
          <div
            className="absolute w-2 h-2 rounded-full bg-martech-orange bottom-0 left-1/2 -translate-x-1/2"
            style={{ animation: "orbitDot 15s linear infinite reverse" }}
          ></div>
          <div
            className="absolute w-2 h-2 rounded-full bg-martech-yellow left-0 top-1/2 -translate-y-1/2"
            style={{ animation: "orbitDot 15s linear infinite", animationDelay: "5s" }}
          ></div>
          <div
            className="absolute w-2 h-2 rounded-full bg-purple-500 right-0 top-1/2 -translate-y-1/2"
            style={{ animation: "orbitDot 15s linear infinite reverse", animationDelay: "5s" }}
          ></div>
        </div>
      </div>

      {/* Circular layout for tech icons with more spacing */}
      <div className="tech-sphere-icon tech-sphere-icon-1">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-martech-orange mr-1.5"></div>
          <div className="text-martech-orange font-bold">MDM</div>
        </div>
      </div>

      <div className="tech-sphere-icon tech-sphere-icon-2">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-purple-500 mr-1.5"></div>
          <div className="text-purple-400 font-bold">ICLOUD</div>
        </div>
      </div>

      <div className="tech-sphere-icon tech-sphere-icon-3" style={{ bottom: "20%", left: "-5.5rem" }}>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-500 mr-1.5"></div>
          <div className="text-green-400 font-bold">SCREEN LOCK</div>
        </div>
      </div>

      <div className="tech-sphere-icon tech-sphere-icon-4">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-1.5"></div>
          <div className="text-red-400 font-bold">SERVIDORES</div>
        </div>
      </div>

      <div className="tech-sphere-icon tech-sphere-icon-5">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-blue-500 mr-1.5"></div>
          <div className="text-blue-400 font-bold">JTAG/EMMC</div>
        </div>
      </div>

      <div className="tech-sphere-icon tech-sphere-icon-6">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-pink-500 mr-1.5"></div>
          <div className="text-pink-400 font-bold">FRP</div>
        </div>
      </div>
    </div>
  )
}

