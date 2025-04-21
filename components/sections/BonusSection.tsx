import { CheckCircle, Unlock, PenToolIcon as Tool, Usb } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { bonuses } from "@/lib/data/bonuses"
import { bonusesFRP } from "@/lib/data/bonuses-frp"

interface BonusSectionProps {
  courseType?: "mdm" | "frp"
}

export default function BonusSection({ courseType = "mdm" }: BonusSectionProps) {
  // Selecionar os dados corretos com base no tipo de curso
  const bonusesData = courseType === "frp" ? bonusesFRP : bonuses

  // Custom icons and colors for each bonus card
  const bonusStyles =
    courseType === "frp"
      ? [
          {
            icon: <Tool className="h-8 w-8 text-green-400" />,
            title: "TREINAMENTO IREMOVAL PRO",
            gradient: "from-green-600/20 to-green-900/30",
            border: "border-green-500/30",
            iconBg: "bg-green-500/20",
            checkColor: "text-green-400",
          },
          {
            icon: <Unlock className="h-8 w-8 text-gray-400" />,
            title: "TREINAMENTO 3UTOOLS",
            gradient: "from-gray-600/20 to-gray-900/30",
            border: "border-gray-500/30",
            iconBg: "bg-gray-500/20",
            checkColor: "text-gray-400",
          },
          {
            icon: <Usb className="h-8 w-8 text-blue-400" />,
            title: "AULAS EXCLUSIVAS | ITUNES",
            gradient: "from-blue-600/20 to-blue-900/30",
            border: "border-blue-500/30",
            iconBg: "bg-blue-500/20",
            checkColor: "text-blue-400",
          },
        ]
      : [
          {
            icon: <Tool className="h-8 w-8 text-blue-400" />,
            title: "TREINAMENTO OCTOPLUS",
            gradient: "from-blue-600/20 to-blue-900/30",
            border: "border-blue-500/30",
            iconBg: "bg-blue-500/20",
            checkColor: "text-blue-400",
          },
          {
            icon: <Unlock className="h-8 w-8 text-purple-400" />,
            title: "TREINAMENTO UNLOCK TOOL",
            gradient: "from-purple-600/20 to-purple-900/30",
            border: "border-purple-500/30",
            iconBg: "bg-purple-500/20",
            checkColor: "text-purple-400",
          },
          {
            icon: <Usb className="h-8 w-8 text-green-400" />,
            title: "AULAS EXCLUSIVAS | USB REDIRECTOR",
            gradient: "from-green-600/20 to-green-900/30",
            border: "border-green-500/30",
            iconBg: "bg-green-500/20",
            checkColor: "text-green-400",
          },
        ]

  return (
    <section className="py-16 bg-martech-darkgray bg-martech-gradient relative">
      {/* Transição suave superior */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-martech-darkgray to-transparent"></div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="bg-gradient-to-r from-martech-orange to-martech-yellow text-black font-bold hover:from-martech-yellow hover:to-martech-orange mb-4">
            TEMPO LIMITADO
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">AO INVESTIR AGORA VOCÊ RECEBE 03 BÔNUS</h2>
          <p className="text-gray-300">Não perca essa oportunidade de aprimorar ainda mais seus conhecimentos</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {bonusesData.map((bonus, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-b from-martech-darkgray to-black border ${bonusStyles[index].border} text-white overflow-hidden h-full flex flex-col`}
            >
              <div className="text-white overflow-hidden flex-1 flex flex-col">
                {/* Title section with fixed height */}
                <div
                  className={`bg-gradient-to-br ${bonusStyles[index].gradient} p-4 border-b ${bonusStyles[index].border} h-[80px] flex items-center`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`rounded-full ${bonusStyles[index].iconBg} p-2 flex-shrink-0`}>
                      {bonusStyles[index].icon}
                    </div>
                    <h3 className="text-lg font-bold">{bonus.title}</h3>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  {/* List with fixed height items */}
                  <ul className="space-y-0 flex-1">
                    {bonus.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 py-3 border-b border-gray-800/30 last:border-b-0">
                        <CheckCircle className={`${bonusStyles[index].checkColor} h-5 w-5 flex-shrink-0 mt-0.5`} />
                        <span className="text-gray-200">{item}</span>
                      </li>
                    ))}

                    {/* Add empty items if needed to maintain symmetry */}
                    {bonus.items.length === 1 && (
                      <li className="invisible flex items-start gap-3 py-3 border-b border-gray-800/30">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5 opacity-0" />
                        <span className="text-gray-200 opacity-0">Placeholder</span>
                      </li>
                    )}
                  </ul>

                  <div className="mt-4 pt-4 border-t border-gray-800 text-center">
                    <Badge className={`${bonusStyles[index].iconBg} hover:${bonusStyles[index].iconBg} text-white`}>
                      BÔNUS {index + 1}
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Transição suave inferior */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}
