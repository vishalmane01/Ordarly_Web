import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="heading-display text-3xl mb-4 text-background">
              Ordarly
            </h3>
            <p className="text-background/70 max-w-md mb-6 leading-relaxed">
              Transform your restaurant with efficient POS solutions that enhance guest experiences, 
              streamline operations, and provide real-time insights.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="heading-sans text-lg mb-6 text-background">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-background/70 hover:text-background transition-colors duration-300">About</a></li>
              <li><a href="#services" className="text-background/70 hover:text-background transition-colors duration-300">Services</a></li>
              <li><a href="#pricing" className="text-background/70 hover:text-background transition-colors duration-300">Pricing</a></li>
              <li><a href="#contact" className="text-background/70 hover:text-background transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="heading-sans text-lg mb-6 text-background">Contact</h4>
            <ul className="space-y-3 text-background/70">
              <li>ordarly@gmail.com</li>
              <li>+91 9876543210</li>
              <li>Kolhapur, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60">
            © 2025 Ordarly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;