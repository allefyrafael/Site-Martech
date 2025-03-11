import Image from "next/image"
import { brandsData } from "@/lib/data/brands"

export default function BrandsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-martech-darkgray relative">
      {/* Transição suave superior */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/80 to-transparent"></div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">PRINCIPAIS MARCAS</h2>
          <p className="text-gray-300 text-lg mb-8">
            Acesso direto aos melhores servidores para as principais marcas do mercado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch justify-center max-w-6xl mx-auto">
          {brandsData.map((brand, index) => (
            <div key={brand.name} className="group h-full">
              <div
                className={`relative overflow-hidden ${brand.bgColor} rounded-xl p-6 transition-all duration-300 ${brand.hoverColor} h-full flex flex-col justify-between border-2 ${brand.borderColor}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${brand.color}`}
                ></div>
                <div className="relative z-10">
                  <Image
                    src={brand.logo || "/placeholder.svg"}
                    alt={`${brand.name} logo`}
                    width={120}
                    height={120}
                    className="w-full h-24 object-contain filter drop-shadow-lg mb-4 transition-transform duration-300 group-hover:scale-110"
                  />
                  <h3 className="text-xl font-bold text-gray-800 text-center mb-2">{brand.name}</h3>
                  <p className="text-gray-600 text-center text-sm">{brand.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professores Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">NOSSOS PROFESSORES</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Professor Marcos */}
            <div className="bg-martech-darkgray border-2 border-martech-blue rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,160,233,0.4)] group">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Marcos.jpg-RNPAcCElQQZeyxTOY2I8fbEhhqibVm.jpeg"
                  alt="Professor Marcos"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Professor Marcos</h3>
              <p className="text-martech-blue mb-3">Especialista em Software iOS e Android</p>
              <p className="text-gray-400 text-sm">
                Especialista em software de celulares, com ampla experiência em sistemas Android e iOS.
              </p>
            </div>

            {/* Professor Richard */}
            <div className="bg-martech-darkgray border-2 border-[#00FF00] rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,0,0.4)] group">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-xl overflow-hidden bg-black">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Richard.jpg-kEDxhtAc01TNX9ll4ZKoSS0OPZpMGn.jpeg"
                  alt="Professor Richard - MetacelMaster"
                  width={192}
                  height={192}
                  className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Professor Richard</h3>
              <p className="text-[#00FF00] mb-3">MetacelMaster - Especialista em Desbloqueios</p>
              <p className="text-gray-400 text-sm">Desenvolvedor de soluções avançadas para desbloqueio e software.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Transição suave inferior */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-martech-black to-transparent"></div>
    </section>
  )
}

