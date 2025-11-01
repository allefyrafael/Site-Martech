import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ChevronRight, Users, Clock, Award, Laptop } from "lucide-react"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section className="py-16 bg-martech-black bg-martech-gradient relative">
      {/* Transição suave superior */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-martech-darkgray to-transparent"></div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative group">
            {/* Enhanced glow effect */}
            <div className="absolute -inset-3 bg-gradient-to-r from-martech-blue via-martech-orange to-martech-yellow rounded-xl blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>

            {/* Animated particles */}
            <div className="absolute -inset-8 z-0 opacity-30">
              <div className="particle particle-1 absolute top-10 left-10"></div>
              <div className="particle particle-2 absolute bottom-20 right-10"></div>
              <div className="particle particle-3 absolute top-1/2 right-5"></div>
            </div>

            <div className="relative bg-gradient-to-br from-martech-darkgray via-black/90 to-martech-darkgray rounded-xl overflow-hidden border border-martech-blue/50 shadow-[0_0_30px_rgba(0,160,233,0.2)] group-hover:shadow-[0_0_40px_rgba(0,160,233,0.4)] transition-all duration-500">
              {/* Top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-martech-blue via-martech-orange to-martech-yellow"></div>

              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5 bg-carbon"></div>

              <div className="p-5 space-y-5 relative z-10">
                {/* Enhanced logo and title */}
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center gap-3 mb-2 bg-black/40 px-4 py-2 rounded-full border border-martech-blue/30 shadow-[0_0_15px_rgba(0,160,233,0.2)]">
                    <div className="relative h-8 w-8 rounded-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-martech-blue to-martech-orange opacity-60 animate-pulse-slow"></div>
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2025-02-15_at_15.49.15__1_-removebg-preview-WF6yeWqtspwBEg8lsQY3UcCDpxNjAE.png"
                        alt="Martech Logo"
                        width={32}
                        height={32}
                        className="h-full w-full object-contain relative z-10"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white">MARTECH CURSOS</h3>
                  </div>
                  <div className="w-36 h-0.5 bg-gradient-to-r from-transparent via-martech-blue to-transparent mb-4"></div>
                </div>

                <p className="text-gray-300 text-sm">
                  A MARTECH CURSOS DE SOFTWARE EAD nasceu da paixão por tecnologia e da vontade de compartilhar
                  conhecimento especializado na área de reparo de software para celulares.
                </p>

                <p className="text-gray-300 text-sm">
                  Nossa missão é capacitar profissionais com as técnicas mais avançadas do mercado, permitindo que
                  ofereçam serviços de alta qualidade e aumentem sua rentabilidade.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gradient-to-br from-martech-blue/10 to-martech-blue/5 p-3 rounded-lg border border-martech-blue/30 group/card hover:bg-martech-blue/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,160,233,0.3)] relative overflow-hidden">
                    <div className="absolute -right-6 -bottom-6 opacity-10 group-hover/card:opacity-20 transition-opacity">
                      <Users className="w-16 h-16 text-martech-blue" />
                    </div>
                    <div className="flex flex-col items-center text-center relative z-10">
                      <div className="text-martech-yellow text-2xl font-bold mb-0.5 group-hover/card:scale-110 transition-transform">
                        +2.000
                      </div>
                      <div className="text-gray-300 text-xs">Alunos formados</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-martech-orange/10 to-martech-orange/5 p-3 rounded-lg border border-martech-orange/30 group/card hover:bg-martech-orange/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,127,0,0.3)] relative overflow-hidden">
                    <div className="absolute -right-6 -bottom-6 opacity-10 group-hover/card:opacity-20 transition-opacity">
                      <Award className="w-16 h-16 text-martech-orange" />
                    </div>
                    <div className="flex flex-col items-center text-center relative z-10">
                      <div className="text-martech-orange text-2xl font-bold mb-0.5 group-hover/card:scale-110 transition-transform">
                        +25
                      </div>
                      <div className="text-gray-300 text-xs">Anos de experiência</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-martech-yellow/10 to-martech-yellow/5 p-3 rounded-lg border border-martech-yellow/30 group/card hover:bg-martech-yellow/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,0,0.2)] relative overflow-hidden">
                    <div className="absolute -right-6 -bottom-6 opacity-10 group-hover/card:opacity-20 transition-opacity">
                      <Laptop className="w-16 h-16 text-martech-yellow" />
                    </div>
                    <div className="flex flex-col items-center text-center relative z-10">
                      <div className="text-martech-yellow text-2xl font-bold mb-0.5 group-hover/card:scale-110 transition-transform">
                        100%
                      </div>
                      <div className="text-gray-300 text-xs">Online</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/5 p-3 rounded-lg border border-blue-500/30 group/card hover:bg-blue-500/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] relative overflow-hidden">
                    <div className="absolute -right-6 -bottom-6 opacity-10 group-hover/card:opacity-20 transition-opacity">
                      <Clock className="w-16 h-16 text-blue-400" />
                    </div>
                    <div className="flex flex-col items-center text-center relative z-10">
                      <div className="text-blue-400 text-2xl font-bold mb-0.5 group-hover/card:scale-110 transition-transform">
                        5 anos
                      </div>
                      <div className="text-gray-300 text-xs">De acesso</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-martech-yellow via-martech-orange to-martech-blue"></div>
            </div>
          </div>

          <div className="space-y-5">
            <Badge className="bg-martech-blue text-white hover:bg-blue-700">SOBRE NÓS</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              TRANSFORMANDO TÉCNICOS EM <span className="text-martech-yellow">ESPECIALISTAS</span>
            </h2>
            <p className="text-gray-300 text-sm">
              Fundada por Marcos Roberto, especialista com mais de 25 anos de experiência em software de celulares, a
              MARTECH se destaca pela qualidade do ensino e pelo suporte contínuo aos alunos.
            </p>
            <p className="text-gray-300 text-sm">
              Nossos cursos são desenvolvidos com foco prático, permitindo que você aplique o conhecimento imediatamente
              em seu trabalho. Além disso, oferecemos suporte estendido e acesso a uma comunidade exclusiva de
              profissionais.
            </p>

            <div className="bg-martech-darkgray/30 rounded-lg p-4 border border-martech-blue/20">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-white border border-martech-blue flex items-center justify-center overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZSBgXFRdHjYJsL6EQyEAxnPlSGUTda.png"
                    alt="Professor Marcos Roberto"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                    style={{ objectPosition: "center 30%" }}
                  />
                </div>
                <div>
                  <p className="font-bold text-white">Marcos Roberto</p>
                  <p className="text-martech-blue text-xs">Instrutor</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Link href="/sobre-nos">
                <Button className="bg-gradient-to-r from-martech-orange to-martech-yellow hover:from-martech-yellow hover:to-martech-orange text-black font-bold text-sm py-2 px-6 shadow-lg hover:shadow-[0_0_15px_rgba(255,127,0,0.3)] transition-all duration-300 transform hover:-translate-y-0.5">
                  Conheça mais sobre nós
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Transição suave inferior */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-martech-black to-transparent"></div>
    </section>
  )
}
