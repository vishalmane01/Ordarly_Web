import { Smartphone, CreditCard, QrCode } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Captain Ordering System",
    description: "Streamlined order taking with intuitive mobile interface for waitstaff.",
  },
  {
    icon: CreditCard,
    title: "Billing System",
    description: "Fast, accurate billing with multiple payment options and receipt management.",
  },
  {
    icon: QrCode,
    title: "QR Based Ordering System",
    description: "Contactless ordering experience allowing customers to order and pay independently.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="heading-sans text-4xl lg:text-5xl mb-6 text-foreground">
            Our Solutions
          </h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            Comprehensive POS solutions tailored to meet every aspect of your restaurant operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gradient-card border border-border rounded-2xl p-8 shadow-[var(--shadow-soft)] hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="heading-sans text-2xl mb-4 text-foreground">
                {service.title}
              </h3>
              <p className="text-body leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;