interface BackgroundAnimationProps {
  primaryColor?: string
  secondaryColor?: string
  tertiaryColor?: string
  patternOpacity?: number
  patternSize?: number
  textureOpacity?: number
  enableParticles?: boolean
  variant?: "default" | "course" | "minimal"
}

export default function BackgroundAnimation({
  primaryColor = "rgba(0,160,233,0.15)",
  secondaryColor = "rgba(255,127,0,0.12)",
  tertiaryColor = "rgba(255,255,0,0.1)",
  patternOpacity = 0.2,
  patternSize = 30,
  textureOpacity = 0.05,
  enableParticles = true,
  variant = "default",
}: BackgroundAnimationProps) {
  return (
    <div className="absolute inset-0 z-0">
      {/* Tech grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(#00A0E9 1px, transparent 1px)`,
          backgroundSize: `${patternSize}px ${patternSize}px`,
          opacity: patternOpacity,
        }}
      ></div>

      {/* Animated gradient orbs */}
      {variant !== "minimal" && (
        <>
          <div
            className="absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-[100px] animate-pulse-slow"
            style={{ background: primaryColor }}
          ></div>
          <div
            className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-[100px] animate-pulse-slow"
            style={{ background: secondaryColor, animationDelay: "1.5s" }}
          ></div>
        </>
      )}

      {/* Animated particles - improved for smoother animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Novo fundo com animação suave */}
        <div className="absolute inset-0 bg-black">
          {/* Camada base estática */}
          <div
            className="absolute inset-0"
            style={{ background: `radial-gradient(ellipse at center, ${primaryColor} 0%, transparent 70%)` }}
          ></div>

          {/* Camada de textura sutil com gradiente roxo */}
          {enableParticles && (
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(147,51,234,0.08) 0%, rgba(79,70,229,0.05) 50%, rgba(0,0,0,0) 100%)",
                backgroundSize: "cover",
                opacity: 0.15,
                transform: "translateZ(0)",
              }}
            >
              {/* Padrão de pontos sutis */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(rgba(147,51,234,0.4) 1px, transparent 1px)`,
                  backgroundSize: `${patternSize}px ${patternSize}px`,
                  opacity: patternOpacity * 0.7,
                }}
              ></div>

              {/* Linhas de grade sutis */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(to right, ${primaryColor.replace("0.15", "0.1")} 1px, transparent 1px), 
                                 linear-gradient(to bottom, ${primaryColor.replace("0.15", "0.1")} 1px, transparent 1px)`,
                  backgroundSize: `${patternSize * 4}px ${patternSize * 4}px`,
                  opacity: patternOpacity * 0.5,
                }}
              ></div>
            </div>
          )}

          {/* Orbes de luz com animação suave */}
          {variant !== "minimal" && (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  )
}
