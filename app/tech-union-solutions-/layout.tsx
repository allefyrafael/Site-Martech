import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tech Union Solutions - Teste A/B | Ferramenta Revolucionária para Assistência Técnica",
  description: "Teste A/B da ferramenta revolucionária para assistência técnica com +1.700 soluções de defeitos crônicos, remoção instantânea de vírus e diagnóstico inteligente. Aumente seu faturamento hoje mesmo!",
  keywords: [
    "Tech Union Solutions",
    "assistência técnica",
    "remoção de vírus",
    "diagnóstico inteligente",
    "soluções de defeitos",
    "iPhone",
    "Android",
    "ferramenta técnica",
    "teste A/B",
    "conversão"
  ],
  openGraph: {
    title: "Tech Union Solutions - Teste A/B | Ferramenta Revolucionária",
    description: "Teste A/B da ferramenta revolucionária para assistência técnica com +1.700 soluções de defeitos crônicos.",
    url: "https://seusite.com/tech-union-solutions-",
    siteName: "Tech Union Solutions",
    images: [
      {
        url: "/images/LogoTechSolution.webp",
        width: 1200,
        height: 630,
        alt: "Tech Union Solutions - Teste A/B",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Union Solutions - Teste A/B | Ferramenta Revolucionária",
    description: "Teste A/B da ferramenta revolucionária para assistência técnica com +1.700 soluções de defeitos crônicos.",
    images: ["/images/LogoTechSolution.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "seu-google-verification-code",
  },
}

export default function TechUnionSolutionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Tech Union Solutions - Teste A/B",
            "description": "Teste A/B da ferramenta revolucionária para assistência técnica com +1.700 soluções de defeitos crônicos, remoção instantânea de vírus e diagnóstico inteligente.",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Windows",
            "offers": {
              "@type": "Offer",
              "price": "147.00",
              "priceCurrency": "BRL",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "500"
            },
            "featureList": [
              "Remoção instantânea de vírus e aplicativos maliciosos",
              "Diagnóstico inteligente com análise automática",
              "Limpeza avançada que melhora o desempenho",
              "Sistema de ordem de serviços incluso",
              "+1.700 soluções de defeitos documentadas",
              "Atualizações frequentes com novos recursos"
            ]
          })
        }}
      />
    </>
  )
} 