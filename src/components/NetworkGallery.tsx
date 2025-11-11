import { useState } from "react";

interface NetworkItem {
  name: string;
  title: string;
  image: string;
  category: string;
}

const NetworkGallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const networkItems: NetworkItem[] = [
    {
      name: "Kevin Costner",
      title: "Schauspieler, Regisseur, Oscar Preisträger",
      image: "https://dr-zrinka.com/wp-content/uploads/2025/01/Kevin-bearb-713x1024.jpeg",
      category: "hollywood"
    },
    {
      name: "Kiefer Sutherland",
      title: "Schauspieler",
      image: "https://dr-zrinka.com/wp-content/uploads/2025/01/15_Kiefer-Sutherland-1-1024x683.jpg",
      category: "hollywood"
    },
    {
      name: "Rick Hoffman",
      title: "Schauspieler (Louis Litt aus 'Suits')",
      image: "https://dr-zrinka.com/wp-content/uploads/2025/01/2025_Rick-Hoffmann_aka-Litt-1024x683.jpg",
      category: "hollywood"
    },
    {
      name: "Cole Hauser",
      title: "Schauspieler (RIP aus 'Yellowstone')",
      image: "https://dr-zrinka.com/wp-content/uploads/2025/01/13_Cole_aka-RIP_RMH_6504-1024x683.jpg",
      category: "hollywood"
    },
    {
      name: "JT Foxx",
      title: "Nr. 1 Wealth Coach, Speaker, Entrepreneur",
      image: "https://dr-zrinka.com/wp-content/uploads/2025/01/JT-Foxx_Zrinka-Dallas-978x1024.jpg",
      category: "business"
    },
    {
      name: "Brian Smith",
      title: "UGG Inhaber",
      image: "https://dr-zrinka.com/wp-content/uploads/2025/01/2024_Brian-Smith_UGG-2-1-1024x683.jpg",
      category: "business"
    },
    {
      name: "Adam Coffey",
      title: "M&A Champion, über 9 Mrd. in Exits",
      image: "https://dr-zrinka.com/wp-content/uploads/2025/01/2024_Adam-Coffey-2-scaled-e1737541266551-1024x790.jpg",
      category: "business"
    },
    {
      name: "Stedman Graham",
      title: "Entrepreneur, Educator, Oprah Winfrey's Partner",
      image: "https://dr-zrinka.com/wp-content/uploads/2025/01/4_Mega-Success_Stedman-Graham-1024x683.jpeg",
      category: "business"
    },
    {
      name: "Phil Jackson",
      title: "NBA Coach (Chicago Bulls)",
      image: "https://dr-zrinka.com/wp-content/uploads/2025/01/10_Phil-Jackson_RMH_3170_Zrinka-klein-1024x683.jpeg",
      category: "athletes"
    },
    {
      name: "Jillian Michaels",
      title: "Fitness Icon",
      image: "https://dr-zrinka.com/wp-content/uploads/2025/01/21_Jillian-Michaels-Mega-Success-2021-1024x683.jpg",
      category: "athletes"
    }
  ];

  const categories = [
    { id: "all", label: "All" },
    { id: "hollywood", label: "Hollywood A-Listers" },
    { id: "business", label: "Business Veterans" },
    { id: "athletes", label: "Athletes & Coaches" }
  ];

  const filteredItems = activeCategory === "all" 
    ? networkItems 
    : networkItems.filter(item => item.category === activeCategory);

  return (
    <section id="network" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Global Network of Excellence
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Weltweit in L.A. und West Palm Beach unterwegs, um mit inspirierenden 
            Persönlichkeiten neue Impulse zu setzen – über 1500 Unternehmern, aus 67 
            Ländern mit 1 Botschaft: <strong className="text-foreground">Finde Menschen, die dich und 
            dein Unternehmen schneller verändern und ans Ziel bringen!</strong>
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-soft"
                  : "bg-card text-foreground hover:bg-muted"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-card shadow-soft hover:shadow-elegant transition-all duration-300"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="font-semibold text-white text-lg mb-1">
                  {item.name}
                </h3>
                <p className="text-white/90 text-sm">
                  {item.title}
                </p>
              </div>
              <div className="p-4 bg-card">
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-xs line-clamp-2">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworkGallery;
