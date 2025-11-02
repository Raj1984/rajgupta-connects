import { MapPin, Languages, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center animate-slide-up">
            About Me
          </h2>
          
          <div className="bg-card rounded-2xl shadow-card p-8 md:p-12 mb-8 animate-scale-in">
            <p className="text-lg text-card-foreground leading-relaxed mb-6">
              With over <span className="font-semibold text-primary">15 years of experience</span> in SAP Business One and enterprise integrations, 
              I've dedicated my career to building robust, scalable solutions that bridge the gap between business processes and technology. 
              My journey has taken me from hands-on development to strategic consulting, always with a passion for creating systems that 
              simply work.
            </p>
            
            <p className="text-lg text-card-foreground leading-relaxed mb-6">
              I specialize in complex integrations—connecting SAP B1 with e-commerce platforms like Shopify and Magento, CRM systems 
              like Salesforce, and custom WMS/MRP solutions. Every integration challenge is an opportunity to architect elegant 
              solutions that drive real business value.
            </p>
            
            <p className="text-lg text-card-foreground leading-relaxed">
              When I'm not solving integration puzzles, I enjoy mentoring junior developers and exploring the latest in automation 
              and AI-driven business solutions. I believe technology should empower people, not complicate their lives.
            </p>
          </div>

          {/* Quick Facts */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl shadow-card p-6 text-center transition-smooth hover:shadow-card-hover">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-card-foreground mb-2">Location</h3>
              <p className="text-muted-foreground">Mumbai, India</p>
            </div>
            
            <div className="bg-card rounded-xl shadow-card p-6 text-center transition-smooth hover:shadow-card-hover">
              <Languages className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-card-foreground mb-2">Languages</h3>
              <p className="text-muted-foreground">Hindi, Marathi, English</p>
            </div>
            
            <div className="bg-card rounded-xl shadow-card p-6 text-center transition-smooth hover:shadow-card-hover">
              <GraduationCap className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-card-foreground mb-2">Education</h3>
              <p className="text-muted-foreground">MCA (Master of Computer Applications)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
