const Benefits = () => {
  const benefits = [
    {
      icon: "trending_up",
      title: "Transforme Custo em Lucratividade",
      description: "Cada ticket que você não precisa abrir é dinheiro que volta pro seu bolso. Reduza o custo por atendimento e escale sem contratar mais gente."
    },
    {
      icon: "speed",
      title: "Performance Máxima em Picos de Vendas",
      description: "Black Friday, Natal, lançamentos: são os momentos que mais sobrecarregam o suporte. Com o rastreio automático, você escala tranquilo, sem stress operacional."
    },
    {
      icon: "favorite",
      title: "Aumente a Fidelização e o LTV",
      description: "Cliente bem informado confia mais, recompra mais. Transforme a entrega em um momento de conexão com a marca, não de ansiedade."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--appmax-purple-max))] mb-4">
            Feito para quem foca em escala, não em operação
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="p-8 rounded-3xl bg-gradient-to-br from-[hsl(var(--appmax-purple-ultra-light))] to-[hsl(var(--appmax-purple-light))] border-2 border-[hsl(var(--appmax-purple-min))] hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <span className="material-symbols-outlined text-5xl text-[hsl(var(--appmax-purple))] mb-6 block">
                {benefit.icon}
              </span>
              
              <h3 className="text-2xl font-bold text-[hsl(var(--appmax-purple-max))] mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-lg text-[hsl(var(--appmax-purple-dark))] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
