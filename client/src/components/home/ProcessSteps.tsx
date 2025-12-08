import { motion } from "framer-motion";
import { FileText, BookOpen, GraduationCap, Trophy, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: 1,
    title: "Apply Now",
    description: "Start your journey with us by applying for the program today!",
    icon: FileText,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Select Course",
    description: "Choose from a variety of courses tailored to your career goals",
    icon: BookOpen,
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: 3,
    title: "Start Learning",
    description: "Begin your journey to success with expert-led courses and resources",
    icon: GraduationCap,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 4,
    title: "Get Certificates",
    description: "Earn a recognized certificate and enhance your career prospects.",
    icon: Trophy,
    color: "bg-green-100 text-green-600",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4 block">
            Your Journey to Success
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-purple mb-4">
            How It Works?
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover our structured approach that empowers you to learn, grow, and achieve your career goals with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-100 via-purple-100 to-green-100 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white rounded-3xl p-8 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center group-hover:-translate-y-2">
                {/* Step Number Badge */}
                <div className="absolute -top-4 bg-brand-purple text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-md">
                  {step.id}
                </div>

                {/* Icon */}
                <div className={cn("w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3", step.color)}>
                  <step.icon className="w-10 h-10" />
                </div>

                <h3 className="font-serif text-xl font-bold text-brand-purple mb-3">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Arrow only visible on hover */}
                <div className="mt-auto opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-brand-orange">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
