import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Essencial",
      description: "Para e-commerces em fase inicial",
      price: "297",
      features: [
        "Até 2.000 notificações/mês",
        "Rastreio automático via WhatsApp",
        "Confirmação de pedido instantânea",
        "Atualização de status em tempo real",
        "Suporte via chat"
      ]
    },
    {
      name: "Performance",
      description: "Para operações em crescimento",
      price: "697",
      popular: true,
      features: [
        "Até 10.000 notificações/mês",
        "Tudo do plano Essencial",
        "Personalização de mensagens",
        "Relatórios de engajamento",
        "Suporte prioritário",
        "Integração com múltiplas transportadoras"
      ]
    },
    {
      name: "Escala",
      description: "Para grandes operações",
      price: "1.497",
      features: [
        "Até 50.000 notificações/mês",
        "Tudo do plano Performance",
        "API dedicada para integrações",
        "Gerente de conta dedicado",
        "SLA garantido",
        "Customizações avançadas"
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--appmax-purple-max))]">
            Planos flexíveis que acompanham o seu volume
          </h2>
          <p className="text-xl text-[hsl(var(--appmax-purple-dark))] max-w-3xl mx-auto">
            Escolha o plano ideal para sua operação e comece a automatizar hoje mesmo. 
            Sem complicação, sem surpresas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`p-8 rounded-3xl border-2 transition-all hover:scale-105 ${
                plan.popular 
                  ? 'border-[hsl(var(--appmax-purple))] shadow-2xl relative' 
                  : 'border-[hsl(var(--appmax-purple-min))]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[hsl(var(--appmax-purple))] text-white px-6 py-2 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </span>
                </div>
              )}
              
              <div className="space-y-4 mb-8">
                <h3 className="text-3xl font-bold text-[hsl(var(--appmax-purple-max))]">
                  {plan.name}
                </h3>
                <p className="text-[hsl(var(--appmax-purple-medium))]">
                  {plan.description}
                </p>
                
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl text-[hsl(var(--appmax-purple-dark))]">R$</span>
                  <span className="text-5xl font-bold text-[hsl(var(--appmax-purple))]">
                    {plan.price}
                  </span>
                  <span className="text-xl text-[hsl(var(--appmax-purple-dark))]">/mês</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[hsl(var(--appmax-purple-medium))] flex-shrink-0 mt-0.5" />
                    <span className="text-[hsl(var(--appmax-purple-dark))]">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full py-6 text-lg rounded-xl transition-all ${
                  plan.popular
                    ? 'gradient-appmax text-white hover:opacity-90'
                    : 'bg-[hsl(var(--appmax-purple))] text-white hover:bg-[hsl(var(--appmax-purple-medium))]'
                }`}
              >
                CONTRATAR AGORA
              </Button>
            </div>
          ))}
        </div>
        
        {/* Enterprise Plan */}
        <div className="max-w-6xl mx-auto p-12 rounded-3xl gradient-appmax-dark text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4">Enterprise</h3>
              <p className="text-xl text-[hsl(var(--appmax-purple-min))] mb-2">
                Para operações com volume customizado
              </p>
              <p className="text-[hsl(var(--appmax-purple-min))]">
                Soluções sob medida, integração dedicada, e todo o poder da Appmax para escalar sem limites.
              </p>
            </div>
            
            <div>
              <Button 
                size="lg"
                className="bg-white text-[hsl(var(--appmax-purple))] hover:bg-[hsl(var(--appmax-purple-ultra-light))] px-12 py-6 text-lg rounded-xl"
              >
                FALAR COM ESPECIALISTA
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
