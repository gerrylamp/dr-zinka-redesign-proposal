import { Phone, Calendar, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Bereit für den nächsten Schritt? Lassen Sie uns über Ihre 
            Herausforderungen und Ziele sprechen.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="tel:+496967727688"
              className="flex items-center gap-4 p-6 bg-card rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all">
                <Phone className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div className="text-left">
                <div className="text-sm text-muted-foreground mb-1">Rufen Sie an</div>
                <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  +49 69 677 27 688
                </div>
              </div>
            </a>

            <a
              href="https://calendly.com/dr-zrinka-empowerment-academy/20min_information_and_strategy_call"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-card rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all">
                <Calendar className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div className="text-left">
                <div className="text-sm text-muted-foreground mb-1">Termin buchen</div>
                <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  20-Min Strategy Call
                </div>
              </div>
            </a>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-soft">
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Email</div>
                  <a 
                    href="mailto:info@dr-zrinka.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    info@dr-zrinka.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Location</div>
                  <div className="text-foreground">
                    Frankfurt, Germany
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Button
              size="lg"
              onClick={() => window.open("https://calendly.com/dr-zrinka-empowerment-academy/20min_information_and_strategy_call", "_blank")}
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity text-base"
            >
              Jetzt Gespräch vereinbaren
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
