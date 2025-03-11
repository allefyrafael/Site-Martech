import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      text: "Boa tarde amigos colegas de bancada. Eu quero dizer que você aí iniciante ou aquele que já está na estrada um certo tempo relacionando a software INCLUINDO frp MDM etc ... Você pode ter certeza com uns esquemas de suporte de confiança qualidade e muita experiência. Não fique na dúvida no investimento na Martech cursos. Muito obrigado ao Marcos Richard e o Torres, vocês são nota 100.",
      name: "Xande Celular Espinheiros",
      role: "Aluno",
      initial: "X",
    },
    {
      id: 2,
      text: "REALME C55 DONE ✅😊 Obrigado @metacelmaster pela ajuda, não teria conseguido sem a ajuda dele ✅ suporte muito bom 💯👏",
      name: "HARDWORK ASSISTÊNCIA",
      role: "Técnico",
      initial: "H",
    },
    {
      id: 3,
      text: "Venho agradecer aqui ao professor Richard pelas ajudas que me deu pelos aparelhos Tecno Redmi 13C e Redmi Note 13. Todos os MDM conseguimos fazer. Valeu, professor!",
      name: "Geancarlos",
      role: "Aluno",
      initial: "G",
    },
  ];

  return (
    <section id="depoimentos" className="py-16 bg-martech-black bg-martech-gradient relative">
      {/* Transição suave superior */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent"></div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="bg-martech-blue text-white hover:bg-blue-700 mb-4">DEPOIMENTOS</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">O QUE DIZEM NOSSOS ALUNOS</h2>
          <p className="text-gray-300">Mais de 2.000 alunos capacitados em reparos de software de celulares</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-martech-card border-martech-blue text-white min-h-[400px] flex flex-col">
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-martech-yellow text-martech-yellow" />
                  ))}
                </div>
                <p className="text-gray-300 italic max-w-prose text-center mx-auto my-4 flex-1 overflow-hidden">
                  {testimonial.text}
                </p>
                <div className="flex items-center justify-center gap-3 mt-auto">
                  <div className="h-12 w-12 rounded-full bg-martech-darkgray border border-martech-blue flex items-center justify-center">
                    <span className="text-white font-bold">{testimonial.initial}</span>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Transição suave inferior */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-martech-darkgray to-transparent"></div>
    </section>
  );
}

