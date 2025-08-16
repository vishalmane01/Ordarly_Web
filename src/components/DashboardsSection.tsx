import { Shield, Users, ChefHat, QrCode } from "lucide-react";

const dashboards = [
  {
    icon: Shield,
    title: "Admin Dashboard",
    description: "Analytics & control.",
    color: "from-blue-500/10 to-blue-600/10",
    iconColor: "text-blue-600",
  },
  {
    icon: Users,
    title: "Staff/Captain Dashboard",
    description: "Simplified order-taking.",
    color: "from-primary/10 to-primary-glow/10",
    iconColor: "text-primary",
  },
  {
    icon: ChefHat,
    title: "Kitchen Dashboard",
    description: "Instant order updates.",
    color: "from-orange-500/10 to-orange-600/10",
    iconColor: "text-orange-600",
  },
  {
    icon: QrCode,
    title: "QR Dashboard",
    description: "Customers order & pay via QR.",
    color: "from-purple-500/10 to-purple-600/10",
    iconColor: "text-purple-600",
  },
];

const DashboardsSection = () => {
  return (
    <section id="dashboards" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="heading-sans text-4xl lg:text-5xl mb-6 text-foreground">
            4 Dashboards. One Ecosystem.
          </h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            Seamlessly integrated dashboards designed for every role in your restaurant operation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dashboards.map((dashboard, index) => (
            <div 
              key={index}
              className="bg-gradient-card rounded-2xl p-6 shadow-[var(--shadow-soft)] hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`bg-gradient-to-br ${dashboard.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}>
                <dashboard.icon className={`w-8 h-8 ${dashboard.iconColor}`} />
              </div>
              <h3 className="heading-sans text-lg mb-2 text-foreground">
                {dashboard.title}
              </h3>
              <p className="text-body text-sm">
                {dashboard.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardsSection;