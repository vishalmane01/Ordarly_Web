import { Lightbulb, DollarSign, Zap, Headphones } from "lucide-react";

const bentoItems = [
  {
    title: "Continuous Innovation",
    description: "Stay ahead with regular updates and cutting-edge features",
    icon: Lightbulb,
    className: "md:col-span-2 md:row-span-2",
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Pricing",
    description: "Transparent, flexible pricing that grows with your business",
    icon: DollarSign,
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    title: "Simplicity",
    description: "Intuitive design that your team will love using",
    icon: Zap,
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-yellow-500/10 to-orange-500/10",
    iconColor: "text-orange-600 dark:text-orange-400",
  },
  {
    title: "24x7 Support",
    description: "Round-the-clock assistance whenever you need it",
    icon: Headphones,
    className: "md:col-span-2 md:row-span-1",
    gradient: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
];

const BentoSection = () => {
  return (
    <section id="features" className="py-20 bg-secondary/30 dark:bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="heading-sans text-4xl lg:text-5xl mb-6 text-foreground">
            Why Leading Restaurants Choose Us
          </h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            Experience the perfect blend of innovation, affordability, and reliability 
            that makes Ordarly the preferred choice for modern restaurants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 max-w-6xl mx-auto">
          {bentoItems.map((item, index) => (
            <div
              key={index}
              className={`${item.className} bg-gradient-card rounded-2xl p-8 shadow-[var(--shadow-soft)] hover-lift animate-fade-up group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`bg-gradient-to-br ${item.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-8 h-8 ${item.iconColor}`} />
              </div>
              
              <h3 className="heading-sans text-2xl mb-4 text-foreground">
                {item.title}
              </h3>
              
              <p className="text-body leading-relaxed">
                {item.description}
              </p>

              {/* Special content for larger cards */}
              {item.title === "Continuous Innovation" && (
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-background/50 dark:bg-background/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary mb-1">50+</div>
                    <div className="text-sm text-muted-foreground">New Features/Year</div>
                  </div>
                  <div className="bg-background/50 dark:bg-background/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary mb-1">99%</div>
                    <div className="text-sm text-muted-foreground">Feature Adoption</div>
                  </div>
                </div>
              )}

              {item.title === "24x7 Support" && (
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-primary rounded-full border-2 border-background"></div>
                    <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-background"></div>
                    <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-background"></div>
                  </div>
                  <span className="text-sm text-muted-foreground">Expert support team ready to help</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoSection;