import { Badge } from "@/components/ui/badge"

export default function MDMSection() {
  return (
    <section className="bg-gradient-to-b from-martech-darkgray to-martech-black relative overflow-hidden">
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
        <div className="relative overflow-hidden bg-gradient-to-r from-martech-black via-martech-darkgray to-martech-black p-8 md:p-10 shadow-[0_0_35px_rgba(0,160,233,0.3)] border-y border-martech-blue/30 transform transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,160,233,0.5)]">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-martech-blue via-martech-yellow to-martech-orange"></div>
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-martech-blue/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-martech-orange/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="h-1 w-16 bg-martech-blue rounded-full"></div>
              <h3 className="mx-4 text-3xl font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-r from-martech-blue via-white to-martech-yellow">
                NO CURSO MDM NÍVEL I
              </h3>
              <div className="h-1 w-16 bg-martech-yellow rounded-full"></div>
            </div>

            <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-4xl mx-auto text-center">
              Você vai aprender tudo sobre as remoções de MDM que{" "}
              <span className="relative inline-block">
                <span className="text-martech-yellow font-bold">NÃO</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-martech-yellow/40"></span>
              </span>{" "}
              envolvam intervenção física, como procedimentos de JTAG/EMMC ou reprogramação.
            </p>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <Badge className="bg-gradient-to-r from-martech-orange to-red-600 text-white px-4 py-2 text-base shadow-lg transform transition-transform hover:scale-105">
                <span className="flex items-center">
                  <span className="mr-1">🔒</span> MDM
                </span>
              </Badge>
              <Badge className="bg-gradient-to-r from-martech-yellow to-amber-500 text-black px-4 py-2 text-base shadow-lg transform transition-transform hover:scale-105">
                <span className="flex items-center">
                  <span className="mr-1">💰</span> PAYJOY
                </span>
              </Badge>
              <Badge className="bg-gradient-to-r from-martech-blue to-blue-700 text-white px-4 py-2 text-base shadow-lg transform transition-transform hover:scale-105">
                <span className="flex items-center">
                  <span className="mr-1">🛒</span> VIA VAREJO
                </span>
              </Badge>
            </div>

            {/* Adicionando seção de módulos do curso */}
            <div className="mt-10 bg-black/30 rounded-xl p-6 border border-martech-blue/20">
              <h4 className="text-xl font-bold text-white text-center mb-4">Conteúdo Completo do Curso</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-black/50 p-4 rounded-lg border border-martech-blue/20">
                  <h5 className="text-martech-blue font-bold mb-2">Fundamentos MDM</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• O que é bloqueio de MDM</li>
                    <li>• Tipos de bloqueio e ramificações</li>
                    <li>• Riscos e soluções</li>
                    <li>• Identificação de dispositivos compatíveis</li>
                  </ul>
                </div>

                <div className="bg-black/50 p-4 rounded-lg border border-martech-orange/20">
                  <h5 className="text-martech-orange font-bold mb-2">Ferramentas Avançadas</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Unlock Tool para MDM</li>
                    <li>• Octoplus para Samsung</li>
                    <li>• AMT (Android Multi Tool)</li>
                    <li>• Moto King Pro Tool</li>
                  </ul>
                </div>

                <div className="bg-black/50 p-4 rounded-lg border border-yellow-500/20">
                  <h5 className="text-yellow-400 font-bold mb-2">Múltiplos Dispositivos</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Samsung (Exynos, Qualcomm)</li>
                    <li>• Motorola (diversos modelos)</li>
                    <li>• Xiaomi e Redmi</li>
                    <li>• Realme e outros fabricantes</li>
                  </ul>
                </div>

                <div className="bg-black/50 p-4 rounded-lg border border-purple-500/20">
                  <h5 className="text-purple-400 font-bold mb-2">Servidores Premium</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Acesso a mais de 15 servidores</li>
                    <li>• UP, GS, FKS, SHT, GT, TMT</li>
                    <li>• Servidores brasileiros</li>
                    <li>• Pagamentos e transferências</li>
                  </ul>
                </div>

                <div className="bg-black/50 p-4 rounded-lg border border-green-500/20">
                  <h5 className="text-green-400 font-bold mb-2">Suporte e Comunidade</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Suporte até dezembro de 2025</li>
                    <li>• Lives semanais exclusivas</li>
                    <li>• Grupo VIP no Telegram</li>
                    <li>• Atualizações gratuitas</li>
                  </ul>
                </div>

                <div className="bg-black/50 p-4 rounded-lg border border-gray-500/20">
                  <h5 className="text-gray-300 font-bold mb-2">Bônus Exclusivos</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• USB Redirector para acesso remoto</li>
                    <li>• Curso completo Unlock Tool</li>
                    <li>• Acervo Octoplus, Chimera, UMT, Z3X</li>
                    <li>• MDM para iPhone e MacBook</li>
                  </ul>
                </div>
              </div>

              <p className="text-center text-gray-400 text-sm mt-4">
                Mais de 200 aulas detalhadas + lives semanais + atualizações constantes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

