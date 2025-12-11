import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  "30 Years in Finance Education",
  "Professional Faculties",
  "Flexible Learning Schedule",
  "AI Smart Class",
  "Daily & Weekend Classes",
  "Top-Quality Study Materials",
  "Regular Mock Tests",
  "Separate Batches",
  "Friendly Environment",
  "Concept-Based Smart Study"
];

export function CourseBenefits() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-brand-orange text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
              COURSE BENEFITS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Choose Our Program?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience excellence in finance education with our comprehensive benefits designed for your success
          </p>
        </div>

        <Card className="p-8 md:p-12 shadow-xl border-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-md hover-elevate transition-all duration-300"
                data-testid={`benefit-item-${index}`}
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 
                    className="w-6 h-6 text-primary" 
                    strokeWidth={2.5}
                    data-testid={`icon-check-${index}`}
                  />
                </div>
                <div className="flex-1">
                  <p className="text-base md:text-lg font-semibold text-foreground leading-relaxed">
                    {benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="text-center mt-12">
          <button
            className="bg-brand-orange text-white font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-brand-orange/90 transition-all duration-300"
            data-testid="button-admissions"
          >
            ADMISSIONS OPEN
          </button>
        </div>
      </div>
    </section>
  );
}
