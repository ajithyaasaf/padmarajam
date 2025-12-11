import { Check } from "lucide-react";

const leftBenefits = [
  "30 Years in Finance Education",
  "Professional Faculties",
  "Flexible Learning Schedule",
  "AI Smart Class",
  "Daily & Weekend Classes"
];

const rightBenefits = [
  "Top-Quality Study Materials",
  "Regular Mock Tests",
  "Separate Batches",
  "Friendly Environment",
  "Concept-Based Smart Study"
];

export function CourseBenefits() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-accent">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-orange/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block bg-brand-orange text-white text-sm font-bold uppercase tracking-wider px-8 py-3 rounded-full shadow-xl mb-8">
            Course Benefits
          </span>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-md p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
            <div className="space-y-5">
              {leftBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 group"
                  data-testid={`benefit-left-${index}`}
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-sm bg-brand-orange flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-5 h-5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-white text-base md:text-lg font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-5">
              {rightBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 group"
                  data-testid={`benefit-right-${index}`}
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-sm bg-brand-orange flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-5 h-5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-white text-base md:text-lg font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <span className="inline-block bg-brand-orange text-white text-lg font-bold uppercase tracking-wider px-10 py-4 rounded-full shadow-xl">
            Admissions Open
          </span>
        </div>
      </div>
    </section>
  );
}
