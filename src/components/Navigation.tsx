import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    // <nav
    //   className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    //     isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
    //   }`}
    // >
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-md shadow-soft}`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 group"
          >
            <img
              src="/assets/img/Primary-Logo_new.png"
              alt="Dr. Zrinka"
              className="h-12 w-12 transition-transform group-hover:scale-105"
            />
            <div className="text-left">
              <div className="font-serif text-xl font-semibold text-foreground uppercase">Dr. Zrinka</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Academy</div>
            </div>
            {/* <img fetchpriority="high" width="80" height="80" src="https://dr-zrinka.com/wp-content/uploads/2024/10/Primary-Logo_new.png" class="custom-logo" alt="Dr.Zrinka Academy Logo" decoding="async" srcset="https://dr-zrinka.com/wp-content/uploads/2024/10/Primary-Logo_new.png 500w, https://dr-zrinka.com/wp-content/uploads/2024/10/Primary-Logo_new-300x215.png 300w, https://dr-zrinka.com/wp-content/uploads/2024/10/Primary-Logo_new-150x108.png 150w" sizes="(max-width: 500px) 100vw, 500px"></img> */}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              // onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Dr. Zrinka
            </button>
            <button
              // onClick={() => scrollToSection("network")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Academy – Schulungen, Workshops
            </button>
            <button
              // onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Produkte
            </button>
            <button
              // onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Blog
            </button>
            <button
              // onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Events
            </button>
            <button
              // onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Über
            </button>
            <Button
              // onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Kontakt
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("network")}
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Network
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Services
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground w-full"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
