const Footer = () => {
  const links = {
    produtos: ["App Checkout", "Link de Pagamentos", "Recuperação de Vendas", "Rastreio Automático"],
    recursos: ["Central de Ajuda", "Blog", "Taxas", "API"],
    empresa: ["Quem Somos", "Por que Appmax", "Carreiras", "Reseller"],
    suporte: ["Contato", "WhatsApp", "Email", "Chat"]
  };

  return (
    <footer className="bg-[hsl(var(--appmax-purple-deep))] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Logo Column */}
          <div>
            <h3 className="text-2xl font-bold text-[hsl(var(--appmax-purple))] mb-4">
              Appmax
            </h3>
            <p className="text-[hsl(var(--appmax-purple-min))] text-sm">
              Tecnologia de pagamento e automação para e-commerce
            </p>
          </div>
          
          {/* Links Columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold text-[hsl(var(--appmax-purple-min))] mb-4 capitalize">
                {category}
              </h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-sm text-[hsl(var(--appmax-purple-min))] hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-[hsl(var(--appmax-purple-dark))] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[hsl(var(--appmax-gray-medium))]">
            © 2025 Appmax. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-6">
            {['Instagram', 'LinkedIn', 'YouTube', 'Facebook'].map((social) => (
              <a 
                key={social}
                href="#" 
                className="text-[hsl(var(--appmax-purple-min))] hover:text-white transition-colors text-sm"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
