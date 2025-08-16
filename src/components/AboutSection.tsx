const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <h2 className="heading-sans text-4xl lg:text-5xl mb-8 text-foreground">
              Who We Are
            </h2>
            <p className="text-body text-lg leading-relaxed mb-8">
              Ordarly is on a mission to transform restaurants and cafés with efficient POS 
              solutions that enhance guest experiences, streamline operations, and provide 
              real-time insights.
            </p>
            <p className="text-body text-lg leading-relaxed">
              We believe that technology should empower restaurant owners and staff to focus 
              on what they do best - creating exceptional dining experiences for their guests.
            </p>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-card rounded-2xl p-8 shadow-[var(--shadow-medium)] hover-lift">
              <div className="grid grid-cols-2 gap-6">
                {/* Stats */}
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Restaurants Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;