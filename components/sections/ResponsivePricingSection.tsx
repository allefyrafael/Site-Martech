"use client"

import { CheckCircle, ArrowRight, Crown, Star, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface PricingPlan {
  id: string
  title: string
  subtitle: string
  price: string
  originalPrice: string
  savings: string
  isPremium: boolean
  features: string[]
  disabledFeatures?: string[]
  buttonText: string
  buttonUrl: string
  accentColor: string
  gradientFrom: string
  gradientTo: string
}

interface ResponsivePricingSectionProps {
  courseType: "mdm" | "frp" | "mdm-avancado" | "curso-vip"
  plans: PricingPlan[]
}

export default function ResponsivePricingSection({ courseType, plans }: ResponsivePricingSectionProps) {
  // Classes de cores predefinidas para evitar problemas com purging do Tailwind
  const colorConfig = {
    mdm: {
      bg: "bg-blue-500/5",
      gradient: "from-blue-600 via-blue-500 to-blue-400",
      badge: "from-blue-500 to-blue-400",
      cardFrom: "from-blue-900/40",
      border: "border-blue-500/40",
      shadow: "shadow-[0_0_30px_rgba(59,130,246,0.2)]",
      text: "text-blue-400",
      iconBg: "bg-blue-500/20",
      iconText: "text-blue-500",
      guaranteeBg: "from-blue-900/20 via-black/50 to-blue-900/20",
      guaranteeBorder: "border-blue-500/30"
    },
    frp: {
      bg: "bg-green-500/5",
      gradient: "from-green-600 via-green-500 to-green-400",
      badge: "from-green-500 to-green-400",
      cardFrom: "from-green-900/40",
      border: "border-green-500/40",
      shadow: "shadow-[0_0_30px_rgba(34,197,94,0.2)]",
      text: "text-green-400",
      iconBg: "bg-green-500/20",
      iconText: "text-green-500",
      guaranteeBg: "from-green-900/20 via-black/50 to-green-900/20",
      guaranteeBorder: "border-green-500/30"
    },
    "mdm-avancado": {
      bg: "bg-purple-500/5",
      gradient: "from-purple-600 via-purple-500 to-purple-400",
      badge: "from-purple-500 to-purple-400",
      cardFrom: "from-purple-900/40",
      border: "border-purple-500/40",
      shadow: "shadow-[0_0_30px_rgba(147,51,234,0.2)]",
      text: "text-purple-400",
      iconBg: "bg-purple-500/20",
      iconText: "text-purple-500",
      guaranteeBg: "from-purple-900/20 via-black/50 to-purple-900/20",
      guaranteeBorder: "border-purple-500/30"
    },
    "curso-vip": {
      bg: "bg-yellow-500/5",
      gradient: "from-yellow-600 via-yellow-500 to-yellow-400",
      badge: "from-yellow-500 to-yellow-400",
      cardFrom: "from-yellow-900/40",
      border: "border-yellow-500/40",
      shadow: "shadow-[0_0_30px_rgba(234,179,8,0.2)]",
      text: "text-yellow-400",
      iconBg: "bg-yellow-500/20",
      iconText: "text-yellow-500",
      guaranteeBg: "from-yellow-900/20 via-black/50 to-yellow-900/20",
      guaranteeBorder: "border-yellow-500/30"
    }
  }

  const colors = colorConfig[courseType]

  return (
    <section className="py-12 md:py-20 bg-black relative overflow-hidden" id="precos">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-martech-darkgray to-transparent"></div>
      <div className={`absolute -top-10 right-1/4 w-64 h-64 ${colors.bg} rounded-full blur-3xl`}></div>
      <div className={`absolute -bottom-10 left-1/3 w-72 h-72 ${colors.bg} rounded-full blur-3xl`}></div>
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors.gradient}`}></div>

      <div className="container relative z-10 px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className={`bg-gradient-to-r ${colors.badge} ${courseType === 'curso-vip' ? 'text-black' : 'text-white'} font-bold mb-4 px-4 py-2 text-sm md:text-base`}>
            INVESTIMENTO
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">
            ESCOLHA SEU PLANO DE ACESSO
          </h2>
          <p className="text-gray-300 text-base md:text-lg px-4">
            Invista em seu conhecimento e multiplique seus ganhos
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-6xl mx-auto">
          {/* Mobile: Stack vertically, Premium first */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className={`
                  relative group transform transition-all duration-500 hover:-translate-y-2
                  ${plan.isPremium ? 'order-first lg:order-none' : ''}
                `}
              >
                {/* Premium Badge */}
                {plan.isPremium && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`bg-gradient-to-r ${plan.gradientFrom} ${plan.gradientTo} text-white px-6 py-2 rounded-full shadow-lg flex items-center gap-2`}>
                      <Crown className="h-4 w-4" />
                      <span className="font-bold text-xs md:text-sm">MAIS POPULAR</span>
                      <Star className="h-4 w-4" />
                    </div>
                  </div>
                )}

                {/* Card */}
                <div
                  className={`
                    relative bg-gradient-to-b ${plan.isPremium ? colors.cardFrom : 'from-gray-900/30'} to-black 
                    border ${plan.isPremium ? colors.border : 'border-gray-500/30'}
                    rounded-2xl overflow-hidden backdrop-blur-sm
                    ${plan.isPremium ? colors.shadow : 'shadow-lg'}
                    hover:shadow-2xl transition-all duration-500
                    ${plan.isPremium ? 'lg:scale-105' : ''}
                  `}
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${plan.gradientFrom} ${plan.gradientTo} py-4 px-6 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10">
                      <h3 className={`${plan.isPremium && courseType !== 'curso-vip' ? 'text-white' : 'text-black'} font-bold text-center text-lg md:text-xl`}>
                        {plan.title}
                      </h3>
                      <p className={`text-center text-sm opacity-80 mt-1 ${plan.isPremium && courseType !== 'curso-vip' ? 'text-white' : 'text-black'}`}>
                        {plan.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    {/* Pricing */}
                    <div className="text-center mb-8">
                      <p className="text-gray-400 text-sm md:text-base mb-2">
                        De <span className="line-through">{plan.originalPrice}</span> por apenas:
                      </p>
                      <div className={`text-3xl md:text-4xl lg:text-5xl font-bold ${plan.isPremium ? colors.text : 'text-gray-300'} mb-3`}>
                        {plan.price}
                      </div>
                      <Badge 
                        className={`
                          ${plan.isPremium ? `${colors.iconBg} ${colors.text} ${colors.border}` : 'bg-gray-500/20 text-gray-400 border-gray-500/30'}
                          text-xs md:text-sm px-3 py-1
                        `}
                      >
                        {plan.savings}
                      </Badge>
                    </div>

                    {/* Features */}
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle 
                            className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                              plan.isPremium ? colors.iconText : 'text-gray-500'
                            }`} 
                          />
                          <span className="text-gray-300 text-sm md:text-base leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                      
                      {/* Disabled Features */}
                      {plan.disabledFeatures?.map((feature, featureIndex) => (
                        <div key={`disabled-${featureIndex}`} className="flex items-start gap-3 opacity-50">
                          <CheckCircle className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-400 text-sm md:text-base leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <a
                      href={plan.buttonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full group/btn"
                    >
                      <div className="relative">
                        {plan.isPremium && (
                          <div className={`absolute -inset-1 bg-gradient-to-r ${plan.gradientFrom} ${plan.gradientTo} rounded-xl opacity-50 blur-sm group-hover/btn:opacity-100 transition-all duration-300`}></div>
                        )}
                        <Button 
                          className={`
                            relative w-full bg-gradient-to-r ${plan.gradientFrom} ${plan.gradientTo}
                            ${plan.isPremium && courseType !== 'curso-vip' ? 'text-white' : courseType === 'curso-vip' ? 'text-black' : 'text-white'}
                            font-bold py-4 md:py-6 text-sm md:text-lg
                            transform transition-all duration-300 group-hover/btn:scale-105
                            shadow-lg hover:shadow-xl
                          `}
                        >
                          {plan.buttonText}
                          <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </a>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className={`w-full h-full bg-gradient-to-br ${colors.text.replace('text-', 'from-')} to-transparent rounded-bl-full`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className={`bg-gradient-to-r ${colors.guaranteeBg} border ${colors.guaranteeBorder} rounded-2xl p-6 md:p-8`}>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full ${colors.iconBg} flex items-center justify-center flex-shrink-0`}>
                <CheckCircle className={`h-10 w-10 md:h-12 md:w-12 ${colors.iconText}`} />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Garantia de 7 dias
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Se você não ficar satisfeito com o conteúdo nos primeiros 7 dias, devolvemos 100% do seu investimento,
                  sem perguntas. Nossa confiança na qualidade do material é total.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 md:gap-8 text-gray-400 text-xs md:text-sm">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>Pagamento 100% Seguro</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            <span>Acesso Imediato</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4" />
            <span>+2.000 Alunos Satisfeitos</span>
          </div>
        </div>
      </div>
    </section>
  )
} 