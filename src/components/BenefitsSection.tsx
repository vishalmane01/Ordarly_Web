import { CheckCircle, Users, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    title: "Seamless Kitchen Coordination",
    description: "Error-free communication with integrated KOT & KDS systems.",
  },
  {
    icon: Users,
    title: "Enhanced Guest Experiences",
    description: "Efficient table management, quick orders, accurate billing, mobile ordering.",
  },
  {
    icon: BarChart3,
    title: "Real-time Performance Insights",
    description: "Live sales tracking, analytics, top-selling insights, peak-hour monitoring.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="heading-sans text-4xl lg:text-5xl mb-6 text-foreground">
            Why Choose Ordarly
          </h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            Experience the difference with our comprehensive POS solution designed 
            specifically for modern restaurants.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gradient-card rounded-2xl p-8 shadow-[var(--shadow-soft)] hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="heading-sans text-xl mb-4 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-body leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;