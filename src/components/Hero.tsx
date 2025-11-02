import { Button } from "@/components/ui/button";
import { Download, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary-hover/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 rounded-full bg-primary-light border-4 border-accent mx-auto flex items-center justify-center shadow-xl">
              <span className="text-4xl font-bold text-primary">RG</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Crafting Seamless SAP Business Solutions
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-medium">
            Raj Gupta
          </p>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            Platinum Consultant · SAP B1 · Integrations · WMS · .NET & HANA
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent-hover shadow-lg text-base font-semibold px-8"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 backdrop-blur-sm shadow-lg text-base font-semibold px-8"
              onClick={() => window.open('https://www.linkedin.com/in/raj-gupta-a0ba6025/', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              Connect on LinkedIn
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 backdrop-blur-sm shadow-lg text-base font-semibold px-8"
              onClick={() => window.location.href = 'mailto:raj4uachiever@gmail.com'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Me
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
