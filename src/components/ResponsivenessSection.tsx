const ResponsivenessSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
            <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-strong)] hover-glow">
            <img 
              src="/lovable-uploads/responsive.png" 
              alt="Ordarly POS System - Multi-device responsiveness showing admin dashboard, mobile ordering interface, and kitchen display" 
              className="w-full h-auto object-cover"
            />
          </div>

        <div className="text-center mb-16">
          <h2 className="heading-sans text-3xl sm:text-4xl lg:text-5xl mb-6 text-foreground">
            Works Seamlessly Across All Devices
          </h2>
          <p className="text-body text-lg max-w-3xl mx-auto">
            Our POS system adapts perfectly to any device - from desktop admin panels to mobile ordering apps and tablet kitchen displays. Experience consistent performance everywhere.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">

          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-card rounded-xl shadow-soft border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="heading-sans text-lg font-semibold mb-2">Desktop Admin</h3>
              <p className="text-body text-sm">Comprehensive analytics and management dashboard</p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-xl shadow-soft border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="heading-sans text-lg font-semibold mb-2">Mobile Ordering</h3>
              <p className="text-body text-sm">Staff can take orders anywhere in the restaurant</p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-xl shadow-soft border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 4v10a2 2 0 002 2h8a2 2 0 002-2V8M9 8h6" />
                </svg>
              </div>
              <h3 className="heading-sans text-lg font-semibold mb-2">Kitchen Display</h3>
              <p className="text-body text-sm">Real-time order updates for efficient kitchen operations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsivenessSection;