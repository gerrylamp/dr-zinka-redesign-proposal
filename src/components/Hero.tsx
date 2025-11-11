import { Book, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{`
        #hero{
          background-image: url("https://dr-zrinka.com/wp-content/uploads/2025/01/Zrinka-Mega-Success-Warrior-scaled.jpg");
          background-position: top center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        `}
      </style>
      <section id="hero" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        <div className="container mx-auto px-6 lg:px-12 py-20 z-20">
          <div className="max-w-4xl">
            {/* Book Announcement */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-primary/20 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Book className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                New Book: "The Hat and the Hill" - Coming Soon
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              Starke Frauen.
              <br />
              <span className="text-primary">Starke Unternehmen.</span>
            </h1>

            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              Leadership, Learning & Development für eine neue Ära.
            </p>

            <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              Globale Expertise, außergewöhnliche Persönlichkeiten & ein klarer Fokus: 
              Bringen Sie Ihr Business auf das nächste Level.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity text-base group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("tel:+496967727688", "_self")}
                className="border-2 border-foreground/20 hover:border-primary hover:bg-primary/5 text-base"
              >
                +49 69 677 27 688
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-foreground/30 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
