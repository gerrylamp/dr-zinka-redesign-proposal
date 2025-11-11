const ClientLogos = () => {
  const logos = [
    {
      name: "Cushman & Wakefield",
      src: "https://dr-zrinka.com/wp-content/uploads/2023/07/Cushman-Wakefield.svg"
    },
    {
      name: "CommerzReal",
      src: "https://dr-zrinka.com/wp-content/uploads/2023/07/Commerz-Real.svg"
    },
    {
      name: "Frankfurt School",
      src: "https://dr-zrinka.com/wp-content/uploads/2023/07/Frankfurt-School.svg"
    },
    {
      name: "Deutsche Bahn",
      src: "https://dr-zrinka.com/wp-content/uploads/2023/07/Deutsche-Bahn.svg"
    },
    {
      name: "ING DiBa",
      src: "https://dr-zrinka.com/wp-content/uploads/2023/07/IngDiba.svg"
    },
    {
      name: "EZB",
      src: "https://dr-zrinka.com/wp-content/uploads/2023/07/EZB.svg"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Der Expertise von Dr. Zrinka vertrauen
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-12 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
