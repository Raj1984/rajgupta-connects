import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "E-Commerce Integration Suite",
    challenge: "A major retail client needed real-time synchronization between Shopify, WooCommerce, and SAP B1 for inventory, orders, and customer data.",
    approach: "Designed a microservices-based integration layer using REST APIs and Azure Functions with automated error handling and retry logic.",
    result: "Reduced order processing time by 75%, eliminated manual data entry, and achieved 99.8% inventory accuracy across all platforms.",
  },
  {
    title: "Warehouse Management System (WMS) Transformation",
    challenge: "Manufacturing client's legacy WMS couldn't scale with growing order volumes and lacked real-time visibility into warehouse operations.",
    approach: "Built a custom SAP B1-integrated WMS module with barcode scanning, automated picking routes, and real-time dashboard analytics.",
    result: "Increased warehouse efficiency by 60%, reduced picking errors by 85%, and cut fulfillment time from 48 to 12 hours.",
  },
  {
    title: "Salesforce-SAP B1 CRM Integration",
    challenge: "Sales teams worked in Salesforce while financial data lived in SAP B1, creating duplicate data entry and reporting inconsistencies.",
    approach: "Implemented bi-directional sync between Salesforce and SAP B1 using SAP SDK and Salesforce APIs with custom field mapping.",
    result: "Eliminated duplicate data entry, improved sales forecasting accuracy by 40%, and reduced quote-to-order time by 50%.",
  },
  {
    title: "Multi-Currency Financial Automation",
    challenge: "Global enterprise struggled with manual currency conversions and reconciliation across 15+ countries using SAP B1.",
    approach: "Developed automated currency conversion workflows with real-time exchange rate updates and multi-currency reporting dashboards.",
    result: "Saved 200+ hours monthly in manual reconciliation, reduced currency-related errors by 95%, and enabled real-time global financial visibility.",
  },
  {
    title: "SAP HANA Migration & Optimization",
    challenge: "Client's on-premise SAP B1 system faced performance bottlenecks and couldn't handle growing data volumes.",
    approach: "Led migration to SAP HANA cloud with database optimization, query tuning, and implementation of in-memory computing strategies.",
    result: "Improved query performance by 10x, reduced report generation time from hours to seconds, and enabled advanced analytics capabilities.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Real integration challenges solved with measurable business impact
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="shadow-card hover:shadow-card-hover transition-smooth border-border hover:border-primary/30 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl text-card-foreground">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-start gap-2 mb-2">
                      <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Challenge</span>
                    </div>
                    <p className="text-sm text-card-foreground">{project.challenge}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-start gap-2 mb-2">
                      <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-semibold text-primary uppercase tracking-wide">Approach</span>
                    </div>
                    <p className="text-sm text-card-foreground">{project.approach}</p>
                  </div>
                  
                  <div className="pt-2 border-t border-accent/20">
                    <div className="flex items-start gap-2 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-semibold text-accent uppercase tracking-wide">Result</span>
                    </div>
                    <p className="text-sm text-card-foreground font-medium">{project.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
