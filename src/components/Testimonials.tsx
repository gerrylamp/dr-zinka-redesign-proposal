import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Nach dem zweimonatigen Empowerment Coaching fühle ich mich wesentlich klarer, entspannter und meine Arbeit macht mir noch mehr Spaß als vorher.",
      author: "Bianca S.",
      role: "Unternehmensberaterin, Revenue Management Hotellerie"
    },
    {
      quote: "Dr. Zrinkas Training macht den Unterschied bei uns seit 2014! Fachlich auf dem höchsten Niveau, kreativ, schnell, flexibel – sie empowert und begeistert unsere Mitarbeiter.",
      author: "Bernhard Schad",
      role: "Regionalleiter HR-Partner, Betriebsleiter, Deutsche Bahn Regio AG, Frankfurt"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Clients Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg shadow-soft hover:shadow-elegant transition-shadow duration-300"
              >
                <Quote className="w-10 h-10 text-primary mb-4 opacity-50" />
                <p className="text-foreground/90 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
