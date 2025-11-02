const Problem = () => {
  return (
    <section className="py-20 lg:py-32 gradient-appmax-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--appmax-purple-max))]">
            Seu time de suporte está{" "}
            <span className="relative inline-block">
              afogado em tickets
              <span className="absolute bottom-0 left-0 w-full h-1 gradient-appmax rounded-full"></span>
            </span>
            {" "}de "Onde está meu pedido?"
          </h2>
          
          <div className="space-y-4 text-lg text-[hsl(var(--appmax-purple-dark))] leading-relaxed">
            <p>
              Você sabe que o pós-venda pode ser estratégico. Mas quando{" "}
              <strong className="text-[hsl(var(--appmax-purple-medium))]">7 a cada 10 chamados</strong>
              {" "}do seu time são sobre "Cadê meu produto?", você não está fazendo atendimento humanizado — 
              você está apagando incêndio. E isso tem um preço alto: custo operacional, cliente insatisfeito, 
              e zero espaço para o seu time focar em tarefas que realmente geram valor.
            </p>
            
            <p>
              Enquanto isso, o cliente já esperou demais, sua marca perde credibilidade e a experiência 
              que deveria gerar recompra está gerando frustração.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
