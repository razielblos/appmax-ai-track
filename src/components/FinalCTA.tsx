import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 lg:py-32 gradient-appmax-dark text-white text-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-4xl space-y-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Pare de deixar o custo de suporte consumir seu lucro
        </h2>
        
        <p className="text-xl md:text-2xl text-[hsl(var(--appmax-purple-min))] leading-relaxed">
          Ative o Rastreio Automático e transforme sua operação de pós-venda no seu novo motor de 
          fidelização e performance. Cadastro sem nenhuma cobrança de taxa inicial.
        </p>
        
        <div className="pt-4">
          <Button 
            size="lg"
            className="bg-white text-[hsl(var(--appmax-purple))] hover:bg-[hsl(var(--appmax-purple-ultra-light))] px-16 py-8 text-xl rounded-2xl hover:scale-105 transition-all shadow-2xl group"
          >
            CRIAR MINHA CONTA
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
