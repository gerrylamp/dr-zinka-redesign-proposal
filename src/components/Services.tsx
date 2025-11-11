import { GraduationCap, Users, Sparkles, BookOpen, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Learning & Development in Unternehmen inkl. Gesundheit (BGM)",
      description: "Ganzheitliche Weiterbildungsprogramme für zukunftsfitte Teams",
      link: "https://dr-zrinka.com/learning-development-in-unternehmen/"
    },
    {
      icon: Briefcase,
      title: "Empowerment in Outplacement Prozessen",
      description: "Erschaffen Sie ein neues Lebenskonzept durch strukturierte Begleitung",
      link: "https://dr-zrinka.com/empowerment-in-outplacement-prozessen-erschaffen-sie-neues-lebenskonzept/"
    },
    {
      icon: Sparkles,
      title: "Empowerment für Frauen 45-60",
      description: "Spezialisierte Programme für Führungsfrauen in der zweiten Lebenshälfte",
      link: "https://dr-zrinka.com/empowerment-fuer-frauen-45-60/"
    },
    {
      icon: Users,
      title: "Business Ausbildung für Yogalehrer",
      description: "Verbinden Sie spirituelle Praxis mit unternehmerischem Erfolg",
      link: "https://dr-zrinka.com/yogalehrer-business-ausbildung/"
    },
    {
      icon: BookOpen,
      title: "Bildungsurlaub",
      description: "Intensivprogramme für persönliche und berufliche Entwicklung",
      link: "https://dr-zrinka.com/bildungsurlaub-fuer-frauen-40-60/"
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Wir verbinden Menschen & Unternehmen
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mit meinen internationalen Erfahrungen unterstütze ich Führungskräfte, 
            HR-Teams und Personalentwickler – insbesondere Frauen zwischen 40 und 60 – 
            dabei, ihre Kompetenzen zu erweitern, Leadership und Self-Leadership zu 
            meistern und Change Management erfolgreich zu gestalten.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-card p-8 rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 flex flex-col"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all">
                  <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>
                
                <Button
                  variant="outline"
                  onClick={() => window.open(service.link, "_blank")}
                  className="w-full border-foreground/20 hover:border-primary hover:bg-primary group-hover:border-primary"
                >
                  Mehr erfahren
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
