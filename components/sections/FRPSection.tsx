import { Badge } from "@/components/ui/badge"

export default function FRPSection() {
  return (
    <section className="bg-gradient-to-b from-martech-darkgray to-martech-black relative overflow-hidden">
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
        <div className="relative overflow-hidden bg-gradient-to-r from-martech-black via-martech-darkgray to-martech-black p-8 md:p-10 shadow-[0_0_35px_rgba(34,197,94,0.3)] border-y border-green-500/30 transform transition-all duration-300 hover:shadow-[0_0_50px_rgba(34,197,94,0.5)]">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-martech-yellow to-martech-orange"></div>
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-green-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-martech-orange/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="h-1 w-16 bg-green-500 rounded-full"></div>
              <h3 className="mx-4 text-3xl font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-white to-martech-yellow">
                NO CURSO FRP E ICLOUD
              </h3>
              <div className="h-1 w-16 bg-martech-yellow rounded-full"></div>
            </div>

            <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-4xl mx-auto text-center">
              Você vai aprender tudo sobre as remoções de FRP Android e desbloqueios de iCloud, utilizando as
              ferramentas mais eficientes do mercado.
            </p>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 text-base shadow-lg transform transition-transform hover:scale-105">
                <span className="flex items-center">
                  <span className="mr-1">🤖</span> FRP ANDROID
                </span>
              </Badge>
              <Badge className="bg-gradient-to-r from-gray-200 to-gray-300 text-black px-4 py-2 text-base shadow-lg transform transition-transform hover:scale-105">
                <span className="flex items-center">
                  <span className="mr-1">🍎</span> ICLOUD iOS
                </span>
              </Badge>
              <Badge className="bg-gradient-to-r from-martech-blue to-blue-700 text-white px-4 py-2 text-base shadow-lg transform transition-transform hover:scale-105">
                <span className="flex items-center">
                  <span className="mr-1">🔓</span> SCREEN LOCK
                </span>
              </Badge>
            </div>

            {/* Adicionando seção de módulos do curso */}
            <div className="mt-10 bg-black/30 rounded-xl p-6 border border-green-500/20">
              <h4 className="text-xl font-bold text-white text-center mb-4">Conteúdo Completo do Curso</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-black/50 p-4 rounded-lg border border-green-500/20">
                  <h5 className="text-green-400 font-bold mb-2">FRP Android</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Ferramentas avançadas (UnlockTool, Phoenix)</li>
                    <li>• Remoção via servidores premium</li>
                    <li>• Bypass de contas Google em Samsung, Xiaomi, Motorola</li>
                    <li>• Técnicas para Android 9, 10, 11, 12 e 13</li>
                  </ul>
                </div>

                <div className="bg-black/50 p-4 rounded-lg border border-gray-500/20">
                  <h5 className="text-gray-300 font-bold mb-2">iCloud iOS</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Ferramentas iRemoval, SMD, LPRO, HFZ</li>
                    <li>• Desbloqueio de ativação definitivo</li>
                    <li>• Bypass para iPhone 7 até iPhone 13</li>
                    <li>• Soluções para modo LOST e problemas de baseband</li>
                  </ul>
                </div>

                <div className="bg-black/50 p-4 rounded-lg border border-blue-500/20">
                  <h5 className="text-blue-400 font-bold mb-2">Screen Lock</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Remoção de senhas sem perder dados</li>
                    <li>• Extração de dados via Test Point</li>
                    <li>• Técnicas para Samsung, Xiaomi, iPhone</li>
                    <li>• Ferramentas MD-NEXT, UFED, OXYGEN</li>
                  </ul>
                </div>

                <div className="bg-black/50 p-4 rounded-lg border border-purple-500/20">
                  <h5 className="text-purple-400 font-bold mb-2">Bônus Exclusivos</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Treinamento completo Unlock Tool</li>
                    <li>• USB Redirector para acesso remoto</li>
                    <li>• Octoplus e Chimera Tool</li>
                    <li>• Acesso a servidores premium</li>
                  </ul>
                </div>

                <div className="bg-black/50 p-4 rounded-lg border border-yellow-500/20">
                  <h5 className="text-yellow-400 font-bold mb-2">Suporte e Comunidade</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Suporte até dezembro de 2025</li>
                    <li>• Lives semanais com professores</li>
                    <li>• Grupo VIP exclusivo no Telegram</li>
                    <li>• Atualizações gratuitas</li>
                  </ul>
                </div>

                <div className="bg-black/50 p-4 rounded-lg border border-orange-500/20">
                  <h5 className="text-orange-400 font-bold mb-2">Ferramentas Avançadas</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• UMT, Z3X, Medusa, UFI</li>
                    <li>• Easy JTAG para reparos avançados</li>
                    <li>• Técnicas de EMMC/ISP</li>
                    <li>• Acesso a mais de 20 servidores</li>
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
