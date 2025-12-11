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
import { Card } from "@/components/ui/card";

const benefits = [
  {
    title: "30 Years in Finance Education",
    icon: GraduationCap,
    description: "Decades of proven excellence"
  },
  {
    title: "Professional Faculties",
    icon: Users,
    description: "Expert industry mentors"
  },
  {
    title: "Flexible Learning Schedule",
    icon: Clock,
    description: "Learn at your own pace"
  },
  {
    title: "AI Smart Class",
    icon: Cpu,
    description: "Technology-driven education"
  },
  {
    title: "Daily & Weekend Classes",
    icon: Calendar,
    description: "Multiple batch timings"
  },
  {
    title: "Top-Quality Study Materials",
    icon: BookOpen,
    description: "Comprehensive resources"
  },
  {
    title: "Regular Mock Tests",
    icon: FileCheck,
    description: "Exam-ready preparation"
  },
  {
    title: "Separate Batches",
    icon: UsersRound,
    description: "Personalized attention"
  },
  {
    title: "Friendly Environment",
    icon: Heart,
    description: "Supportive learning space"
  },
  {
    title: "Concept-Based Smart Study",
    icon: Lightbulb,
    description: "Deep understanding approach"
  }
];

export function CourseBenefits() {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-primary/3 to-background overflow-visible">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-orange text-white text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-full shadow-lg mb-6">
            Course Benefits
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Why Students Choose Us
          </h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover the advantages that make our institute the preferred choice for aspiring finance professionals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {benefits.slice(0, 5).map((benefit, index) => (
            <Card
              key={index}
              className="group p-6 text-center hover-elevate transition-all duration-300 border-2 hover:border-brand-orange/30 overflow-visible"
              data-testid={`benefit-card-${index}`}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-primary group-hover:text-brand-orange transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-foreground text-sm leading-tight mb-2">
                {benefit.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {benefits.slice(5, 10).map((benefit, index) => (
            <Card
              key={index + 5}
              className="group p-6 text-center hover-elevate transition-all duration-300 border-2 hover:border-brand-orange/30 overflow-visible"
              data-testid={`benefit-card-${index + 5}`}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-primary group-hover:text-brand-orange transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-foreground text-sm leading-tight mb-2">
                {benefit.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-14">
          <div className="inline-flex flex-col items-center gap-3">
            <span className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
              Limited Seats Available
            </span>
            <button
              className="bg-brand-orange text-white font-bold text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl hover:bg-brand-orange/90 transition-all duration-300 animate-pulse hover:animate-none"
              data-testid="button-admissions-open"
            >
              ADMISSIONS OPEN
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
