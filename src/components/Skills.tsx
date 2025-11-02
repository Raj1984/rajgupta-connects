import { Award, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skills = [
  "SAP B1", "SAP Fiori", "SAP BTP", "SAP SDK", "SAP HANA",
  ".NET Core", "C#", "MS SQL Server", "WMS", "MRP",
  "Shopify Integration", "Magento Integration", "Salesforce Integration",
  "REST APIs", "Azure", "Microservices"
];

const certifications = [
  {
    title: "SAP Certified Development Associate",
    issuer: "SAP",
    year: "2019",
  },
  {
    title: "GenAI Academy Yellow Belt",
    issuer: "Professional Training",
    year: "2024",
  },
  {
    title: "Microsoft Certified: Azure Developer",
    issuer: "Microsoft",
    year: "2020",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Skills & Certifications
          </h2>

          {/* Skills Section */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <Code2 className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">Technical Expertise</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium bg-card shadow-card hover:shadow-card-hover transition-smooth cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-semibold text-foreground">Certifications</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl shadow-card p-6 border-2 border-accent/20 transition-smooth hover:shadow-card-hover hover:border-accent/40"
                >
                  <Award className="w-10 h-10 text-accent mb-4" />
                  <h4 className="font-semibold text-card-foreground mb-2">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
