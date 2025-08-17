"use client";
import { Button } from "@/components/ui/button";
import demoIllustration from "@/assets/demo.png"; // replace with your image

const BookDemoPage = () => {
  return (
    <section id="BookDemo" className="relative min-h-screen flex items-center justify-center bg-gradient-hero pt-24 pb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC40Ij48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Form Section */}
          <div className="bg-card rounded-2xl shadow-[var(--shadow-strong)] hover-glow p-10">
            <h1 className="heading-display text-4xl sm:text-5xl mb-4 text-foreground">
              Schedule a Free Demo
            </h1>
            <p className="text-body text-lg mb-8">
              Get in touch with our team to clarify your queries and explore how Ordarly can help your restaurant.
            </p>

            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-foreground mb-2">Name*</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                />
              </div>

              {/* Email */}
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-foreground mb-2">Email*</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                />
              </div>

              {/* Phone */}
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-foreground mb-2">Phone*</label>
                <input
                  type="tel"
                  placeholder="Your mobile number"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                />
              </div>

              {/* City */}
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-foreground mb-2">City*</label>
                <input
                  type="text"
                  placeholder="Your city"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                />
              </div>

              {/* Restaurant Name */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">Restaurant Name*</label>
                <input
                  type="text"
                  placeholder="Your restaurant name"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                />
              </div>

              {/* Submit */}
              <div className="sm:col-span-2 flex justify-center mt-6">
                <Button variant="hero" size="lg" className="text-base px-10 py-4">
                  Submit Request
                </Button>
              </div>
            </form>
          </div>

          {/* Illustration Section */}
            <div className="hidden lg:flex justify-center">
            <img 
                src={demoIllustration} 
                alt="Demo Illustration" 
                className="w-full max-w-2xl h-auto object-contain"
            />
            </div>

        </div>
      </div>
    </section>
  );
};

export default BookDemoPage;
