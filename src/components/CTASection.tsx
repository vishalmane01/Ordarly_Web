import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 via-primary-glow/5 to-primary/10">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h2 className="heading-sans text-4xl lg:text-5xl mb-6 text-foreground">
            Ready to Upgrade Your Restaurant?
          </h2>
          <p className="text-body text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of restaurants already using Ordarly to transform their dining experience. 
            Get started today with our free trial.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#BookDemo">
              <Button variant="primary" size="lg" className="text-base px-12 py-4">
                Book a Demo Today
              </Button>
            </a>
            <div className="text-sm text-muted-foreground">
              No credit card required • Free 7-day trial
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;