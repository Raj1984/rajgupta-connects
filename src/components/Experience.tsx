import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "NTT DATA Business Solutions",
    role: "Platinum Consultant",
    period: "2012 - Present (12+ years)",
    impact: "Led enterprise-scale SAP B1 implementations and integrations for Fortune 500 clients, reducing operational overhead by 40% through automated workflows.",
  },
  {
    company: "AG Technologies",
    role: "Senior SAP Consultant",
    period: "2010 - 2012",
    impact: "Architected Shopify-SAP integration reducing order reconciliation time by 75% and improving inventory accuracy.",
  },
  {
    company: "BrainTreasure InfoTech",
    role: "SAP Developer & Consultant",
    period: "2008 - 2010",
    impact: "Developed custom WMS modules integrated with SAP B1, streamlining warehouse operations for manufacturing clients.",
  },
  {
    company: "Global Link Solutions",
    role: "Software Developer",
    period: "2007 - 2008",
    impact: "Built foundational skills in .NET and SQL, contributing to early-stage enterprise applications.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Experience Timeline
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="relative flex flex-col md:flex-row gap-8 items-start animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg z-10" />

                  {/* Content */}
                  <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                    <div className="bg-card rounded-xl shadow-card p-6 transition-smooth hover:shadow-card-hover">
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium text-primary">{exp.period}</span>
                      </div>
                      <h3 className="text-xl font-bold text-card-foreground mb-1">{exp.role}</h3>
                      <p className="text-muted-foreground font-medium mb-3">{exp.company}</p>
                      <p className="text-card-foreground">{exp.impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
