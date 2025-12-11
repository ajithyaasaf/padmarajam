import { 
  GraduationCap, 
  Users, 
  Clock, 
  Cpu, 
  Calendar, 
  BookOpen, 
  FileCheck, 
  UsersRound, 
  Heart, 
  Lightbulb 
} from "lucide-react";

const benefits = [
  {
    title: "30 Years in Finance Education",
    proof: "Trusted by 50,000+ successful graduates",
    icon: GraduationCap,
    theme: "legacy"
  },
  {
    title: "Professional Faculties",
    proof: "Industry experts with real-world experience",
    icon: Users,
    theme: "expertise"
  },
  {
    title: "Flexible Learning Schedule",
    proof: "Study without disrupting your academics",
    icon: Clock,
    theme: "convenience"
  },
  {
    title: "AI Smart Class",
    proof: "Next-gen tech-powered learning environment",
    icon: Cpu,
    theme: "innovation"
  },
  {
    title: "Daily & Weekend Classes",
    proof: "Choose timings that work for you",
    icon: Calendar,
    theme: "flexibility"
  },
  {
    title: "Top-Quality Study Materials",
    proof: "Curated content aligned with latest syllabus",
    icon: BookOpen,
    theme: "resources"
  },
  {
    title: "Regular Mock Tests",
    proof: "Track progress & build exam confidence",
    icon: FileCheck,
    theme: "preparation"
  },
  {
    title: "Separate Batches",
    proof: "Small groups for personalized attention",
    icon: UsersRound,
    theme: "focus"
  },
  {
    title: "Friendly Environment",
    proof: "Supportive community that motivates success",
    icon: Heart,
    theme: "culture"
  },
  {
    title: "Concept-Based Smart Study",
    proof: "Master fundamentals, not just memorize",
    icon: Lightbulb,
    theme: "methodology"
  }
];

export function CourseBenefits() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-brand-orange/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block bg-gradient-to-r from-primary to-accent text-white text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full shadow-lg mb-6">
            The PRIM Advantage
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Your Journey to Success
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Every step is designed to transform you into a finance professional
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2">
            <div className="h-full w-full bg-gradient-to-b from-primary via-brand-orange to-primary rounded-full animate-pulse" />
          </div>

          <div className="space-y-8 md:space-y-0">
            {benefits.map((benefit, index) => {
              const isLeft = index % 2 === 0;
              const Icon = benefit.icon;
              
              return (
                <div
                  key={index}
                  className="relative md:grid md:grid-cols-[1fr_80px_1fr] md:gap-4 items-center"
                  data-testid={`benefit-timeline-${index}`}
                >
                  <div className={`${isLeft ? 'md:col-start-1' : 'md:col-start-3'} ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    <div 
                      className={`
                        group relative p-6 rounded-md bg-card border-2 border-transparent
                        hover:border-brand-orange/40 hover:shadow-xl
                        transition-all duration-500 hover-elevate overflow-visible
                        ${isLeft ? 'md:mr-4' : 'md:ml-4'}
                      `}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-brand-orange/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className={`relative flex items-start gap-4 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className={`flex-1 ${isLeft ? 'md:text-right' : ''}`}>
                          <h3 className="font-bold text-foreground text-lg mb-1 group-hover:text-primary transition-colors">
                            {benefit.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {benefit.proof}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:flex md:col-start-2 justify-center items-center">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange to-primary flex items-center justify-center text-white font-bold text-lg shadow-xl z-10 relative">
                        {index + 1}
                      </div>
                      <div className="absolute inset-0 w-12 h-12 rounded-full bg-brand-orange/30 animate-ping" />
                    </div>
                  </div>

                  {isLeft ? (
                    <div className="hidden md:block md:col-start-3" />
                  ) : (
                    <div className="hidden md:block md:col-start-1" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-brand-orange rounded-md opacity-90" />
          <div className="relative px-8 py-10 text-center">
            <p className="text-white/90 text-sm uppercase tracking-widest mb-3 font-medium">
              Start Your Transformation Today
            </p>
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-6">
              Admissions Now Open for 2025 Batch
            </h3>
            <button
              className="bg-white text-primary font-bold text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              data-testid="button-enroll-now"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
