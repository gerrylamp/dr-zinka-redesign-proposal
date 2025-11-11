import { Check } from "lucide-react";

const About = () => {
  const features = [
    {
      title: "Learning & Development für eine neue Arbeitswelt",
      description: "zukunftsfit durch analytisches Denken, Resilienz & Kreativität"
    },
    {
      title: "BGM & Female Health",
      description: "weil gesunde Teams produktiver sind (und Frauen in Unternehmen andere Werte und Bedürfnisse haben!)"
    },
    {
      title: "KI trifft Leadership",
      description: "moderne Weiterbildung für agile Führungskräfte"
    },
    {
      title: "Internationale Zusammenarbeit",
      description: "meine Methoden basieren auf bewährten Leadership-Prinzipien aus den USA und Europa, entwickelt mit führenden Wissenschaftlern und Top-Coaches weltweit."
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ganzheitliche Leadership-Programme für Unternehmen
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Viele sprechen von Führung, Resilienz und Leistungsfähigkeit – doch kaum jemand 
              betrachtet das große Ganze. Ich schon. Ich entwickle <strong className="text-foreground">ganzheitliche 
              Leadership-Programme für Unternehmen</strong>, die strategische Exzellenz mit{" "}
              <strong className="text-foreground">neurobiologischen und hormonellen Erkenntnissen</strong> verbinden.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Mein USP? <strong className="text-foreground">Female Empowerment trifft auf KI-gestütztes 
              Learning & Development.</strong> Ich trainiere Führungskräfte – besonders Frauen – auf eine 
              Weise, die nachhaltig wirkt. Denn Führung ist mehr als Hard Skills: Es geht um{" "}
              <strong className="text-foreground">Mindset, Gesundheit und energetische Kapazität.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-lg bg-card hover:shadow-elegant transition-shadow duration-300"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <p className="text-xl font-semibold text-foreground mb-6">
              Wollen Sie wissen, wie Ihr Unternehmen davon profitieren kann?
            </p>
            <p className="text-lg text-muted-foreground">
              Lassen Sie uns sprechen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
