import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden gradient-appmax-light py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--appmax-purple-max))] leading-tight">
              TRANSFORME SEU PÓS-VENDA EM UM MOTOR DE{" "}
              <span className="relative inline-block">
                PERFORMANCE
                <span className="absolute bottom-0 left-0 w-full h-1 gradient-appmax rounded-full"></span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-[hsl(var(--appmax-purple-dark))] leading-relaxed max-w-2xl">
              Reduza em até 70% os tickets de suporte sobre rastreio com a nova automação da Appmax. 
              Nossa IA envia atualizações proativas de entrega direto no WhatsApp do seu cliente, 
              transformando um custo operacional em uma experiência de fidelização.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="gradient-appmax text-white text-lg px-12 py-6 rounded-xl hover:opacity-90 transition-all hover:scale-105 shadow-lg group"
              >
                CRIAR MINHA CONTA
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative transform lg:scale-110 hover:scale-115 transition-transform duration-500">
              <img 
                src={heroMockup} 
                alt="Dashboard Appmax mostrando redução de tickets de suporte"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
