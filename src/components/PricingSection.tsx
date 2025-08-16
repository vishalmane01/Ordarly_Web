import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Locally Based POS",
    oneTime: "₹25,000",
    monthly: "₹499",
    features: [
      "Basic POS functionality",
      "Inventory management",
      "Sales reporting",
      "Local support",
      "Basic analytics",
    ],
    recommended: false,
  },
  {
    name: "Captain Ordering POS",
    oneTime: "₹30,000",
    monthly: "₹699",
    features: [
      "Everything in Locally Based",
      "Captain ordering system",
      "Table management",
      "Kitchen display integration",
      "Advanced reporting",
      "Staff management",
    ],
    recommended: true,
  },
  {
    name: "QR Based Ordering POS",
    oneTime: "₹40,000",
    monthly: "₹999",
    features: [
      "Everything in Captain Ordering",
      "QR code ordering",
      "Customer app integration",
      "Online payments",
      "Customer analytics",
      "Marketing tools",
      "Multi-location support",
    ],
    recommended: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="heading-sans text-4xl lg:text-5xl mb-6 text-foreground">
            Flexible Pricing That Fits Your Business
          </h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your restaurant with transparent pricing and no hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index}
              className={`relative bg-gradient-card rounded-2xl p-8 shadow-[var(--shadow-medium)] hover-lift animate-fade-up ${
                tier.recommended ? 'ring-2 ring-primary shadow-[var(--shadow-glow)] scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tier.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="heading-sans text-2xl mb-4 text-foreground">
                  {tier.name}
                </h3>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {tier.oneTime}
                  </div>
                  <div className="text-sm text-muted-foreground">One-time payment</div>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {tier.monthly}
                  </div>
                  <div className="text-sm text-muted-foreground">per month</div>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-body text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <Button 
                  variant={tier.recommended ? "hero" : "default"} 
                  className="w-full"
                  size="lg"
                >
                  Start Free Trial
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  Book Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;