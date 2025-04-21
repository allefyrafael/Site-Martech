"use client"

import Image from "next/image"
import { brandsData } from "@/lib/data/brands"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export default function BrandsSection() {
  return (
    <section className="py-20 bg-martech-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#0A0A0A] opacity-80"></div>
      <div className="absolute inset-0 bg-carbon opacity-5"></div>

      {/* Subtle gradient accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-martech-blue to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-martech-orange to-transparent"></div>

      {/* Animated background elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-martech-blue/5 blur-3xl animate-pulse-slow"></div>
      <div
        className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-martech-orange/5 blur-3xl animate-pulse-slow"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="bg-gradient-to-r from-martech-blue to-blue-700 text-white hover:bg-blue-700 mb-4 px-4 py-1.5">
            COMPATIBILIDADE
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            PRINCIPAIS <span className="text-martech-yellow">MARCAS</span> SUPORTADAS
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-8">
            Acesso direto aos melhores servidores para as principais marcas do mercado
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
          {brandsData.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 h-full border border-white/10 transition-all duration-300 hover:border-martech-blue/30 hover:shadow-[0_0_25px_rgba(0,160,233,0.2)] hover:-translate-y-1 flex flex-col items-center">
                <div className="relative w-full h-24 mb-4 flex items-center justify-center">
                  <Image
                    src={brand.logo || "/placeholder.svg"}
                    alt={`${brand.name} logo`}
                    width={120}
                    height={120}
                    className="object-contain max-h-24 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                  />
                </div>
                <div className="text-center mt-auto flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2 h-8 flex items-center justify-center">
                    {brand.name}
                  </h3>
                  <p className="text-gray-400 text-sm h-12 flex items-center justify-center">{brand.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professores Section - Redesigned */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <Badge className="bg-gradient-to-r from-martech-orange to-martech-yellow text-black hover:bg-martech-orange mb-4 px-4 py-1.5">
              ESPECIALISTAS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              NOSSOS <span className="text-martech-blue">PROFESSORES</span>
            </h2>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
              Aprenda com especialistas reconhecidos no mercado de software para celulares
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Professor Marcos */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-martech-blue/30 hover:shadow-[0_0_25px_rgba(0,160,233,0.2)] group">
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-martech-blue to-transparent"></div>
              <div className="p-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="w-32 h-32 relative rounded-lg overflow-hidden border-2 border-martech-blue/30 flex-shrink-0">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Marcos.jpg-RNPAcCElQQZeyxTOY2I8fbEhhqibVm.jpeg"
                      alt="Professor Marcos"
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-bold text-white mb-2">Professor Marcos</h3>
                    <p className="text-martech-blue mb-3">Especialista em Software iOS e Android</p>
                    <p className="text-gray-400 text-sm">
                      Mais de 25 anos de experiência em sistemas Android e iOS, com foco em soluções avançadas de
                      desbloqueio.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Professor Richard */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-green-500/30 hover:shadow-[0_0_25px_rgba(34,197,94,0.2)] group">
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
              <div className="p-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="w-32 h-32 relative rounded-lg overflow-hidden border-2 border-green-500/30 flex-shrink-0">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Richard.jpg-kEDxhtAc01TNX9ll4ZKoSS0OPZpMGn.jpeg"
                      alt="Professor Richard - MetacelMaster"
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-bold text-white mb-2">Professor Richard</h3>
                    <p className="text-green-400 mb-3">MetacelMaster - Especialista em Desbloqueios</p>
                    <p className="text-gray-400 text-sm">
                      Desenvolvedor de soluções avançadas para desbloqueio e software, com expertise em FRP e iCloud.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
