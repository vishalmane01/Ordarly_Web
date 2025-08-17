import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC40Ij48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="text-center lg:text-left animate-fade-up">
          <h1 className="heading-display text-6xl sm:text-7xl lg:text-8xl mb-6 text-foreground">
            Ordarly
          </h1>
          <h2 className="heading-sans text-2xl sm:text-3xl lg:text-4xl mb-6 text-primary">
            The Future Of Dine-In
          </h2>
          <p className="text-body text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed">
            From smart ordering to real-time kitchen sync, deliver faster, smoother dining 
            experiences powered by a system built for today's restaurants.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="hero" size="lg" className="text-base px-8 py-4">
              Get Started
            </Button>
            <a href="#BookDemo">
              <Button variant="heroSecondary" size="lg" className="text-base px-8 py-4">
                Book a Demo
              </Button>
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative rounded-2xl overflow-hidden ">
            <img 
              src={heroImage} 
              alt="Ordarly POS System Interface" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-glow/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;