import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ResponsivenessSection from "@/components/ResponsivenessSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import ServicesSection from "@/components/ServicesSection";
import DashboardsSection from "@/components/DashboardsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import BookDemoPage from "@/components/BookDemo";
import WhyCustomersLoveUs from "@/components/BentoGrid";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ResponsivenessSection />
      <WhyCustomersLoveUs />
      <AboutSection />
      <BenefitsSection />
      <ServicesSection />
      <DashboardsSection />
      <PricingSection />
      <CTASection />
      <BookDemoPage />
      <Footer />
      
    </div>
  );
};

export default Index;
