import React from 'react';
import { Badge } from "@/components/ui/badge";

export default function MDMAdvancedSection() {
  return (
    <section className="bg-gradient-to-b from-martech-darkgray to-martech-black relative overflow-hidden">
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
        <div className="relative overflow-hidden bg-gradient-to-r from-martech-black via-martech-darkgray to-martech-black p-8 md:p-10 shadow-[0_0_35px_rgba(147,51,234,0.3)] border-y border-purple-500/30 transform transition-all duration-300 hover:shadow-[0_0_50px_rgba(147,51,234,0.5)]">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-martech-yellow to-martech-orange"></div>
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-martech-orange/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="h-1 w-16 bg-purple-500 rounded-full"></div>
              <h3 className="mx-4 text-3xl font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-white to-martech-yellow">
                MDM DO BÁSICO AO AVANÇADO
              </h3>
              <div className="h-1 w-16 bg-martech-yellow rounded-full"></div>
            </div>

            <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-4xl mx-auto text-center">
              Você vai aprender ABSOLUTAMENTE TUDO sobre as remoções MDM, desde conceitos básicos até técnicas avançadas
              de EMMC, UFS e microsoldagem. Curso 100% ATUALIZADO com as melhores ferramentas físicas/digitais e
              servidores do mercado mundial.
            </p>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <Badge className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-2 text-base shadow-lg transform transition-transform hover:scale-105">
                <span className="flex items-center">
                  <span className="mr-1">💎</span> PREMIUM
                </span>
              </Badge>
              <Badge className="bg-gradient-to-r from-martech-yellow to-amber-500 text-black px-4 py-2 text-base shadow-lg transform transition-transform hover:scale-105">
                <span className="flex items-center">
                  <span className="mr-1">🔧</span> EMMC & UFS
                </span>
              </Badge>
              <Badge className="bg-gradient-to-r from-martech-blue to-blue-700 text-white px-4 py-2 text-base shadow-lg transform transition-transform hover:scale-105">
                <span className="flex items-center">
                  <span className="mr-1">🔬</span> MICROSOLDAGEM
                </span>
              </Badge>
            </div>

            {/* Grade do curso */}
            <div className="mt-10 bg-black/30 rounded-xl p-6 border border-purple-500/20">
              <h4 className="text-xl font-bold text-white text-center mb-4">Grade Completa do Curso</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-black/50 p-4 rounded-lg border border-purple-500/20">
                  <h5 className="text-purple-400 font-bold mb-2">Conceitos Fundamentais</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Conceitos sobre EMMC & UFS</li>
                    <li>• Conceitos sobre Flash Memory</li>
                    <li>• Conceitos elétricos sobre Flash Memory</li>
                    <li>• Estimativa de vida útil da memória NAND</li>
                  </ul>
                </div>

                <div className="bg-black/50 p-4 rounded-lg border border-blue-500/20">
                  <h5 className="text-blue-400 font-bold mb-2">Ferramentas Avançadas</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Medusa Pro & Medusa Pro II</li>
                    <li>• EMMC Tool Suite</li>
                    <li>• UFI Box</li>
                    <li>• Octoplus Pro</li>
                  </ul>
                </div>

                <div className="bg-black/50 p-4 rounded-lg border border-green-500/20">
                  <h5 className="text-green-400 font-bold mb-2">Técnicas de Reprogramação</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Criando arquivos SRF</li>
                    <li>• Gerenciador de partições</li>
                    <li>• Flash particionado com arquivo PIT</li>
                    <li>• Configurações EMMC Classic</li>
                  </ul>
                </div>

                <div className="bg-black/50 p-4 rounded-lg border border-yellow-500/20">
                  <h5 className="text-yellow-400 font-bold mb-2">Servidores Premium</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Acesso a mais de 15 servidores</li>
                    <li>• UP, GS, FKS, SHT, GT, TMT</li>
                    <li>• Servidores brasileiros</li>
                    <li>• Pagamentos e transferências</li>
                  </ul>
                </div>

                <div className="bg-black/50 p-4 rounded-lg border border-orange-500/20">
                  <h5 className="text-orange-400 font-bold mb-2">Ferramentas Específicas</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Unlock Tool para MDM</li>
                    <li>• AMT (Android Multi Tool)</li>
                    <li>• Moto King Pro Tool</li>
                    <li>• USB Redirector para acesso remoto</li>
                  </ul>
                </div>

                <div className="bg-black/50 p-4 rounded-lg border border-red-500/20">
                  <h5 className="text-red-400 font-bold mb-2">Suporte Especializado</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Lives semanais exclusivas</li>
                    <li>• Grupo VIP no Telegram</li>
                    <li>• Suporte até dezembro de 2025</li>
                    <li>• Atualizações gratuitas</li>
                  </ul>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-purple-500/30 relative">
                {/* Efeito de brilho de fundo */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-blue-600/10 to-purple-600/20 rounded-xl blur-md"></div>

                {/* Título com design melhorado */}
                <div className="relative z-10 flex flex-col items-center mb-8">
                  <div className="bg-gradient-to-r from-purple-800 to-purple-600 px-6 py-2 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <h5 className="text-xl font-bold text-white flex items-center">
                      <span className="mr-2">✨</span>
                      Vantagens Exclusivas
                      <span className="ml-2">✨</span>
                    </h5>
                  </div>
                  <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-3"></div>
                </div>

                {/* Grid com cards melhorados */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                  <div className="bg-gradient-to-br from-black/80 to-purple-950/20 p-5 rounded-xl border border-purple-500/40 shadow-lg transform transition-all duration-300 hover:shadow-[0_0_25px_rgba(147,51,234,0.3)] hover:-translate-y-1 group">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-purple-600/30 flex items-center justify-center mr-3 group-hover:bg-purple-600/50 transition-all duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-purple-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h6 className="font-bold text-white text-lg group-hover:text-purple-300 transition-colors duration-300">
                        Autonomia Profissional
                      </h6>
                    </div>
                    <ul className="text-gray-300 text-sm space-y-2 pl-2 border-l-2 border-purple-500/30">
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">✔️</span>
                        <span className="group-hover:text-white transition-colors duration-300">
                          Parar de terceirizar remoções de MDM
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">✔️</span>
                        <span className="group-hover:text-white transition-colors duration-300">
                          Certificado Digital de Conclusão do Curso
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">✔️</span>
                        <span className="group-hover:text-white transition-colors duration-300">
                          Fazer você mesmo as remoções na sua bancada
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-black/80 to-blue-950/20 p-5 rounded-xl border border-blue-500/40 shadow-lg transform transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:-translate-y-1 group">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-blue-600/30 flex items-center justify-center mr-3 group-hover:bg-blue-600/50 transition-all duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h6 className="font-bold text-white text-lg group-hover:text-blue-300 transition-colors duration-300">
                        Acesso Premium
                      </h6>
                    </div>
                    <ul className="text-gray-300 text-sm space-y-2 pl-2 border-l-2 border-blue-500/30">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">✔️</span>
                        <span className="group-hover:text-white transition-colors duration-300">
                          Acesso aos melhores servidores do mundo
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">✔️</span>
                        <span className="group-hover:text-white transition-colors duration-300">
                          Aprender a utilizar as ferramentas adequadas
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">✔️</span>
                        <span className="group-hover:text-white transition-colors duration-300">
                          Aumentar consideravelmente o lucro da sua empresa
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-black/80 to-indigo-950/20 p-5 rounded-xl border border-indigo-500/40 shadow-lg transform transition-all duration-300 hover:shadow-[0_0_25px_rgba(99,102,241,0.3)] hover:-translate-y-1 group">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-600/30 flex items-center justify-center mr-3 group-hover:bg-indigo-600/50 transition-all duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-indigo-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                      <h6 className="font-bold text-white text-lg group-hover:text-indigo-300 transition-colors duration-300">
                        Suporte Exclusivo
                      </h6>
                    </div>
                    <ul className="text-gray-300 text-sm space-y-2 pl-2 border-l-2 border-indigo-500/30">
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2">✔️</span>
                        <span className="group-hover:text-white transition-colors duration-300">
                          Pagar serviços diretamente na fonte
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2">✔️</span>
                        <span className="group-hover:text-white transition-colors duration-300">
                          Suporte em grupo VIP até Dezembro 2025
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2">✔️</span>
                        <span className="group-hover:text-white transition-colors duration-300">
                          Acesso à Comunidade MDM exclusiva
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Rodapé com CTA e credenciais */}
                <div className="mt-8 text-center relative z-10">
                  <div className="flex flex-wrap justify-center gap-6 mb-6">
                    <div className="bg-black/40 px-4 py-2 rounded-lg border border-purple-500/30">
                      <span className="text-yellow-400 font-bold">🏆 25 anos</span>
                      <span className="text-gray-300 text-sm ml-1">de experiência</span>
                    </div>
                    <div className="bg-black/40 px-4 py-2 rounded-lg border border-purple-500/30">
                      <span className="text-yellow-400 font-bold">🎓 +2.000</span>
                      <span className="text-gray-300 text-sm ml-1">alunos formados</span>
                    </div>
                    <div className="bg-black/40 px-4 py-2 rounded-lg border border-purple-500/30">
                      <span className="text-yellow-400 font-bold">🥇 Pioneiro</span>
                      <span className="text-gray-300 text-sm ml-1">em cursos de software</span>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Plano 5 anos */}
                    <div className="bg-gradient-to-br from-black/80 to-purple-950/10 rounded-xl border border-purple-500/40 overflow-hidden transform transition-all duration-300 hover:shadow-[0_0_25px_rgba(147,51,234,0.4)] hover:-translate-y-1 group">
                      {/* Header do plano */}
                      <div className="bg-gradient-to-r from-purple-800/40 to-purple-600/20 p-4 border-b border-purple-500/30">
                        <div className="flex justify-between items-center">
                          <h6 className="text-white font-bold text-lg">Acesso Completo</h6>
                          <div className="bg-purple-600 text-white font-bold px-2 py-1 rounded-lg flex items-center justify-center transform rotate-3 shadow-lg">
                            <span className="text-sm">-20%</span>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm mt-1">Recomendado para profissionais</p>
                      </div>

                      {/* Conteúdo do plano */}
                      <div className="p-5">
                        {/* Preço */}
                        <div className="flex items-end gap-2 mb-4">
                          <div className="text-3xl font-bold text-purple-400">R$ 800,00</div>
                          <div className="text-gray-400 text-sm line-through mb-1">R$ 1.000,00</div>
                        </div>

                        {/* Características */}
                        <ul className="space-y-3 mb-6">
                          <li className="flex items-start gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-300">
                              Acesso por <span className="text-white font-semibold">5 anos completos</span>
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-300">
                              Suporte VIP até <span className="text-white font-semibold">Dezembro 2025</span>
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-300">
                              Acesso a <span className="text-white font-semibold">todos os módulos</span> do curso
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-300">
                              Atualizações <span className="text-white font-semibold">gratuitas</span> durante o período
                            </span>
                          </li>
                        </ul>

                        {/* Botão */}
                        <div className="relative group/btn">
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg opacity-70 blur-sm group-hover/btn:opacity-100 transition-all duration-300"></div>
                          <a
                            href="https://pay.hotmart.com/F87621340K?sck=HOTMART_MEM_CA&off=swo1f3w6&offDiscount=cna-20.00-ue1ok6dn&hotfeature=32&_gl=1*16p4nre*_gcl_au*MTM2ODQwNjQ2Ny4xNzQ1MjczNTg4*_ga*Njg4NzkyNjQwLjE3NDI3Mjk5NTE.*_ga_GQH2V1F11Q*MTc0NTI3MzU3My4zLjEuMTc0NTI3MzYzNi42MC4wLjA.&bid=1745273639953"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative w-full bg-black py-3 rounded-lg text-white font-bold border border-purple-500/50 group-hover/btn:border-purple-500 transition-all duration-300 inline-block text-center"
                          >
                            Quero este plano
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Plano 1 ano */}
                    <div className="bg-gradient-to-br from-black/80 to-indigo-950/10 rounded-xl border border-indigo-500/40 overflow-hidden transform transition-all duration-300 hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:-translate-y-1 group">
                      {/* Header do plano */}
                      <div className="bg-gradient-to-r from-indigo-800/40 to-indigo-600/20 p-4 border-b border-indigo-500/30">
                        <div className="flex justify-between items-center">
                          <h6 className="text-white font-bold text-lg">Acesso Básico</h6>
                          <div className="bg-indigo-600 text-white font-bold px-2 py-1 rounded-lg flex items-center justify-center transform rotate-3 shadow-lg">
                            <span className="text-sm">-50%</span>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm mt-1">Ideal para iniciantes</p>
                      </div>

                      {/* Conteúdo do plano */}
                      <div className="p-5">
                        {/* Preço */}
                        <div className="flex items-end gap-2 mb-4">
                          <div className="text-3xl font-bold text-indigo-400">R$ 500,00</div>
                          <div className="text-gray-400 text-sm line-through mb-1">R$ 1.000,00</div>
                        </div>

                        {/* Características */}
                        <ul className="space-y-3 mb-6">
                          <li className="flex items-start gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-300">
                              Acesso por <span className="text-white font-semibold">1 ano completo</span>
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-300">
                              Suporte por <span className="text-white font-semibold">2 meses</span>
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-300">
                              Acesso a <span className="text-white font-semibold">todos os módulos</span> do curso
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-300">
                              Atualizações durante o <span className="text-white font-semibold">período de acesso</span>
                            </span>
                          </li>
                        </ul>

                        {/* Botão */}
                        <div className="relative group/btn">
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg opacity-70 blur-sm group-hover/btn:opacity-100 transition-all duration-300"></div>
                          <a
                            href="https://pay.hotmart.com/S99204912U?sck=HOTMART_MEM_CA&off=yrsnj2bb&offDiscount=cna-50.00-rxcs6mfc&hotfeature=32&_gl=1*8n3x6z*_ga*Njg4NzkyNjQwLjE3NDI3Mjk5NTE.*_ga_GQH2V1F11Q*MTc0NTI3MzU3My4zLjAuMTc0NTI3MzU3My42MC4wLjA.&bid=1745273588333"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative w-full bg-black py-3 rounded-lg text-white font-bold border border-indigo-500/50 group-hover/btn:border-indigo-500 transition-all duration-300 inline-block text-center"
                          >
                            Quero este plano
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-center text-gray-400 text-sm mt-4">
                    Mais de 30 módulos detalhados + lives semanais + atualizações constantes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}