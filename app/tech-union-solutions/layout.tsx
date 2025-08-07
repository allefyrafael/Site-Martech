import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tech Union Solutions - Ferramenta Revolucionária para Assistência Técnica",
  description: "Aumente o faturamento da sua empresa com +1.700 soluções de defeitos crônicos. Remoção instantânea de vírus, diagnóstico inteligente e sistema de ordens de serviço. Licença de 1 ano com acesso completo.",
  keywords: [
    "assistência técnica",
    "reparo de celular",
    "remoção de vírus",
    "diagnóstico de smartphone",
    "ferramenta técnica",
    "soluções de defeitos",
    "iPhone",
    "Android",
    "tecnologia móvel",
    "reparo eletrônico"
  ],
  openGraph: {
    title: "Tech Union Solutions - Ferramenta Revolucionária para Assistência Técnica",
    description: "Aumente o faturamento da sua empresa com +1.700 soluções de defeitos crônicos. Remoção instantânea de vírus, diagnóstico inteligente e sistema de ordens de serviço.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Union Solutions - Ferramenta Revolucionária para Assistência Técnica",
    description: "Aumente o faturamento da sua empresa com +1.700 soluções de defeitos crônicos.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TechUnionSolutionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 