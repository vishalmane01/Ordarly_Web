"use client";
import logo from "@/assets/logo.png"
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">Who We Are</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Ordarly is on a mission to transform restaurants and cafés with efficient POS 
              solutions that enhance guest experiences, streamline operations, and provide 
              real-time insights.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that technology should empower restaurant owners and staff to focus 
              on what they do best — creating exceptional dining experiences for their guests.
            </p>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-up lg:flex lg:justify-center" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card border border-border rounded-2xl shadow-lg p-8 flex flex-col items-center text-center max-w-md mx-auto">
              <img
                src={logo}// replace with your image
                alt="About Ordarly"
                className="w-64 h-64 object-contain mb-6"
              />
              <h3 className="text-2xl font-semibold mb-3">The Future of Dine-in</h3>
              <p className="text-muted-foreground text-base">
                Ordarly helps restaurants serve faster, manage smarter, and delight guests effortlessly.
                With real-time updates and customization, it feels like it’s built just for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
