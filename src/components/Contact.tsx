import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Download } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Build Something Transformative
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Whether you need integration expertise, SAP consulting, or a strategic partner 
            for your next enterprise project—I'd love to connect.
          </p>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a 
              href="mailto:raj4uachiever@gmail.com"
              className="bg-card rounded-xl shadow-card p-8 transition-smooth hover:shadow-card-hover hover:scale-105 group"
            >
              <Mail className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-smooth" />
              <h3 className="font-semibold text-card-foreground mb-2">Email</h3>
              <p className="text-sm text-muted-foreground break-all">raj4uachiever@gmail.com</p>
            </a>
            
            <a 
              href="tel:+919987012347"
              className="bg-card rounded-xl shadow-card p-8 transition-smooth hover:shadow-card-hover hover:scale-105 group"
            >
              <Phone className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-smooth" />
              <h3 className="font-semibold text-card-foreground mb-2">Phone</h3>
              <p className="text-sm text-muted-foreground">+91 99870 12347</p>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/raj-gupta-a0ba6025/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-xl shadow-card p-8 transition-smooth hover:shadow-card-hover hover:scale-105 group"
            >
              <Linkedin className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-smooth" />
              <h3 className="font-semibold text-card-foreground mb-2">LinkedIn</h3>
              <p className="text-sm text-muted-foreground">Connect with me</p>
            </a>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary-hover shadow-lg text-base font-semibold px-12"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Full Resume
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Platinum SAP B1 Consultant with 15+ years of experience in enterprise integrations, 
              WMS, and cloud solutions. Based in Mumbai, India.
            </p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Raj Gupta. All rights reserved. | Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
