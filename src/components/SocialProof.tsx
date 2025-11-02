const SocialProof = () => {
  const clients = [
    "Jequiti",
    "Gummy Original",
    "Beauty Fair",
    "NutriStore",
    "Fashion Plus"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <p className="text-center text-[hsl(var(--appmax-purple-medium))] font-medium mb-8">
          A performance que grandes marcas já confiam
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
          {clients.map((client) => (
            <div 
              key={client}
              className="text-2xl font-bold text-gray-400 hover:text-[hsl(var(--appmax-purple))] transition-colors"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
