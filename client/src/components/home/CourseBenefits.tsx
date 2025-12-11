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
  Lightbulb,
  Sparkles,
  Trophy,
  Target
} from "lucide-react";

const benefits = [
  { title: "30 Years in Finance Education", icon: GraduationCap, stat: "30+", label: "Years" },
  { title: "Professional Faculties", icon: Users, stat: "50+", label: "Experts" },
  { title: "Flexible Learning Schedule", icon: Clock, stat: "24/7", label: "Access" },
  { title: "AI Smart Class", icon: Cpu, stat: "100%", label: "Tech-Driven" },
  { title: "Daily & Weekend Classes", icon: Calendar, stat: "7", label: "Days/Week" },
  { title: "Top-Quality Study Materials", icon: BookOpen, stat: "500+", label: "Resources" },
  { title: "Regular Mock Tests", icon: FileCheck, stat: "100+", label: "Tests/Year" },
  { title: "Separate Batches", icon: UsersRound, stat: "20", label: "Max Students" },
  { title: "Friendly Environment", icon: Heart, stat: "98%", label: "Satisfaction" },
  { title: "Concept-Based Smart Study", icon: Lightbulb, stat: "5x", label: "Faster Learning" }
];

export function CourseBenefits() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-accent">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-orange/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-5 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Why Choose PRIM</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            The PRIM Advantage
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-lg">
            Everything you need to become a successful finance professional
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          <div 
            className="col-span-2 row-span-2 group relative overflow-hidden rounded-md bg-gradient-to-br from-brand-orange to-brand-orange/80 p-6 md:p-8"
            data-testid="benefit-hero-card"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <Trophy className="w-12 h-12 text-white/90 mb-4" />
            <div className="text-6xl md:text-7xl font-black text-white mb-2">30+</div>
            <div className="text-white/90 text-xl font-semibold mb-2">Years of Excellence</div>
            <p className="text-white/70 text-sm">India's most trusted finance education institute since 1994</p>
          </div>

          {benefits.slice(1, 5).map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="col-span-1 group relative overflow-hidden rounded-md bg-white/10 backdrop-blur-sm border border-white/10 p-4 md:p-5 hover:bg-white/20 transition-all duration-300"
                data-testid={`benefit-card-${index + 1}`}
              >
                <Icon className="w-8 h-8 text-brand-orange mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl font-bold text-white mb-1">{benefit.stat}</div>
                <div className="text-white/60 text-xs uppercase tracking-wide mb-2">{benefit.label}</div>
                <div className="text-white/90 text-sm font-medium leading-tight">{benefit.title}</div>
              </div>
            );
          })}

          <div 
            className="col-span-2 group relative overflow-hidden rounded-md bg-white p-6"
            data-testid="benefit-ai-card"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-3xl font-black text-primary">AI-Powered</div>
                <div className="text-muted-foreground">Smart Learning Technology</div>
              </div>
            </div>
          </div>

          {benefits.slice(5, 8).map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index + 5}
                className="col-span-1 group relative overflow-hidden rounded-md bg-white/10 backdrop-blur-sm border border-white/10 p-4 md:p-5 hover:bg-white/20 transition-all duration-300"
                data-testid={`benefit-card-${index + 5}`}
              >
                <Icon className="w-8 h-8 text-brand-orange mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl font-bold text-white mb-1">{benefit.stat}</div>
                <div className="text-white/60 text-xs uppercase tracking-wide mb-2">{benefit.label}</div>
                <div className="text-white/90 text-sm font-medium leading-tight">{benefit.title}</div>
              </div>
            );
          })}

          <div 
            className="col-span-2 md:col-span-3 group relative overflow-hidden rounded-md bg-gradient-to-r from-white/20 to-white/5 backdrop-blur-sm border border-white/20 p-6"
            data-testid="benefit-satisfaction-card"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex items-center gap-4">
                <Heart className="w-10 h-10 text-brand-orange" />
                <div>
                  <div className="text-4xl font-black text-white">98%</div>
                  <div className="text-white/70">Student Satisfaction</div>
                </div>
              </div>
              <div className="hidden md:block w-px h-12 bg-white/20" />
              <div className="flex items-center gap-4">
                <Target className="w-10 h-10 text-brand-orange" />
                <div>
                  <div className="text-4xl font-black text-white">50K+</div>
                  <div className="text-white/70">Successful Alumni</div>
                </div>
              </div>
            </div>
          </div>

          {benefits.slice(8, 10).map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index + 8}
                className="col-span-1 group relative overflow-hidden rounded-md bg-white/10 backdrop-blur-sm border border-white/10 p-4 md:p-5 hover:bg-white/20 transition-all duration-300"
                data-testid={`benefit-card-${index + 8}`}
              >
                <Icon className="w-8 h-8 text-brand-orange mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl font-bold text-white mb-1">{benefit.stat}</div>
                <div className="text-white/60 text-xs uppercase tracking-wide mb-2">{benefit.label}</div>
                <div className="text-white/90 text-sm font-medium leading-tight">{benefit.title}</div>
              </div>
            );
          })}

          <div 
            className="col-span-2 md:col-span-2 group relative overflow-hidden rounded-md bg-brand-orange p-6 flex flex-col justify-center items-center text-center"
            data-testid="benefit-cta-card"
          >
            <Sparkles className="w-8 h-8 text-white/80 mb-3" />
            <div className="text-white text-xl font-bold mb-3">Ready to Start?</div>
            <button
              className="bg-white text-brand-orange font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
              data-testid="button-apply-now"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
