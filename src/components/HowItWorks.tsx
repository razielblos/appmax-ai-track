import { ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: "check_circle",
      title: "Confirmação Imediata",
      description: "Assim que o pedido é aprovado, o cliente recebe automaticamente a confirmação da compra e o código de rastreio via WhatsApp."
    },
    {
      number: 2,
      icon: "local_shipping",
      title: "Código de Rastreio Automático",
      description: "O sistema se conecta com a transportadora, puxa o código de rastreio e dispara para o cliente — sem intervenção manual."
    },
    {
      number: 3,
      icon: "notifications_active",
      title: "Atualizações de Status Proativas",
      description: "Cada mudança de status (em trânsito, saiu para entrega, entregue) é enviada automaticamente. O cliente está sempre informado."
    }
  ];

  return (
    <section className="py-20 lg:py-32 gradient-appmax-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--appmax-purple-min)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Automação e inteligência em cada etapa,{" "}
            <span className="relative inline-block">
              24/7
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[hsl(var(--appmax-purple))] to-[hsl(var(--appmax-purple-bright))] rounded-full"></span>
            </span>
          </h2>
          
          <p className="text-xl text-[hsl(var(--appmax-purple-min))] max-w-3xl mx-auto">
            O sistema se conecta aos dados da transportadora e cuida de todo o fluxo de comunicação por você. 
            Simples, eficiente e escalável.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-[hsla(var(--appmax-purple-min),0.2)] hover:bg-white/10 transition-all hover:scale-105">
                {/* Step Number Circle */}
                <div className="w-16 h-16 rounded-full gradient-appmax flex items-center justify-center text-3xl font-bold mb-6">
                  {step.number}
                </div>
                
                {/* Icon */}
                <span className="material-symbols-outlined text-5xl mb-4 block">
                  {step.icon}
                </span>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-[hsl(var(--appmax-purple-min))] leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Arrow Connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <ArrowRight className="h-8 w-8 text-[hsl(var(--appmax-purple))]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
