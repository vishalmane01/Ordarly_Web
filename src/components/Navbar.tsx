import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#bento-grid" },
    { name: "Benefits", href: "#benefits" },
    { name: "Services", href: "#services" },
    { name: "Dashboards", href: "#dashboards" },
    { name: "Pricing", href: "#pricing" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* ---------------- MOBILE NAVBAR (sm only) ---------------- */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <span className="heading-display text-2xl font-bold text-primary">
              Ordarly
            </span>

            {/* Right Side */}
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="flex items-center justify-center pb-2 space-y-2 px-3 pt-2">
                  <Button variant="primary" size="lg" className="w-full">
                    Book Demo
                  </Button>
                  
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ---------------- DESKTOP NAVBAR (md and above only) ---------------- */}
      <div className="hidden md:flex items-center justify-between w-full max-w-5xl mx-auto px-6 py-3 mt-6 rounded-2xl 
        backdrop-blur-xl bg-background/70 border border-border shadow-lg">
        {/* Logo */}
        <span className="heading-display text-xl font-bold text-primary">
          Ordarly
        </span>

        {/* Nav Items */}
        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <a href="#BookDemo">
            <Button variant="primary" size="sm">
              Book Demo
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
