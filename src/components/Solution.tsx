import whatsappMockup from "@/assets/whatsapp-tracking-mockup.jpg";

const Solution = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--appmax-purple-max))]">
              A mesma{" "}
              <span className="relative inline-block">
                inteligência
                <span className="absolute bottom-0 left-0 w-full h-1 gradient-appmax rounded-full"></span>
              </span>
              {" "}que aprova a venda, agora acompanha a entrega
            </h2>
            
            <p className="text-lg text-[hsl(var(--appmax-purple-dark))] leading-relaxed">
              Com o Rastreio Automático da Appmax, você para de reagir e começa a antecipar. 
              Assim que a transportadora atualiza o status, a IA da Appmax envia uma notificação 
              via WhatsApp direto para o cliente — sem você mover um dedo.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Benefit Card 1 */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[hsl(var(--appmax-purple-ultra-light))] to-[hsl(var(--appmax-purple-light))] border-2 border-[hsl(var(--appmax-purple-min))] hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-4xl text-[hsl(var(--appmax-purple))] mb-4">
                  support_agent
                </span>
                <h3 className="text-xl font-semibold text-[hsl(var(--appmax-purple-medium))] mb-2">
                  Reduza custos operacionais
                </h3>
                <p className="text-[hsl(var(--appmax-purple-dark))]">
                  Elimine até 70% dos tickets repetitivos sobre rastreio e libere sua equipe para o que importa.
                </p>
              </div>
              
              {/* Benefit Card 2 */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[hsl(var(--appmax-purple-ultra-light))] to-[hsl(var(--appmax-purple-light))] border-2 border-[hsl(var(--appmax-purple-min))] hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-4xl text-[hsl(var(--appmax-purple))] mb-4">
                  verified_user
                </span>
                <h3 className="text-xl font-semibold text-[hsl(var(--appmax-purple-medium))] mb-2">
                  Aumente a confiança
                </h3>
                <p className="text-[hsl(var(--appmax-purple-dark))]">
                  Cliente informado é cliente tranquilo. Transparência proativa gera fidelização e recompra.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Visual */}
          <div className="relative flex justify-center">
            <div className="relative max-w-sm hover:scale-105 transition-transform duration-500">
              <img 
                src={whatsappMockup} 
                alt="WhatsApp mostrando notificações de rastreio automático"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
