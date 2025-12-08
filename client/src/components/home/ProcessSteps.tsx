import { motion } from "framer-motion";
import { FileText, BookOpen, GraduationCap, Trophy, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: 1,
    title: "Apply Online",
    description: "Submit your application through our streamlined digital portal. It takes less than 5 minutes.",
    icon: FileText,
    color: "bg-blue-500",
    lightColor: "bg-blue-50 text-blue-600",
  },
  {
    id: 2,
    title: "Course Selection",
    description: "Consult with our academic advisors to choose the perfect program aligned with your career goals.",
    icon: BookOpen,
    color: "bg-orange-500",
    lightColor: "bg-orange-50 text-orange-600",
  },
  {
    id: 3,
    title: "Begin Learning",
    description: "Access our world-class LMS and attend live sessions with industry experts immediately.",
    icon: GraduationCap,
    color: "bg-purple-500",
    lightColor: "bg-purple-50 text-purple-600",
  },
  {
    id: 4,
    title: "Get Certified",
    description: "Complete your assessments and earn a globally recognized qualification to boost your career.",
    icon: Trophy,
    color: "bg-green-500",
    lightColor: "bg-green-50 text-green-600",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 text-brand-purple text-sm font-bold uppercase tracking-wider mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            Simple Process
          </motion.div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-brand-purple mb-6">
            Your Roadmap to <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-500">
              Professional Success
            </span>
          </h2>
        </div>

        {/* Desktop Journey Line */}
        <div className="hidden lg:block relative max-w-6xl mx-auto min-h-[600px]">
          {/* Main Horizontal Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-100 via-purple-100 to-green-100 -translate-y-1/2 rounded-full" />
          
          <div className="grid grid-cols-4 gap-8 h-full">
            {steps.map((step, index) => (
              <div key={step.id} className="relative h-full flex flex-col">
                {/* Center Node (Absolute) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.2, type: "spring" }}
                    className={cn(
                      "w-12 h-12 rounded-full border-4 border-white shadow-xl flex items-center justify-center text-white font-bold text-lg transition-transform hover:scale-110 duration-300",
                      step.color
                    )}
                  >
                    {step.id}
                  </motion.div>
                </div>

                {/* Top Half */}
                <div className="flex-1 flex flex-col justify-end items-center pb-16">
                  {index % 2 !== 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="flex flex-col items-center w-full"
                    >
                      {/* Card */}
                      <div className={cn(
                        "relative group w-full bg-white p-8 rounded-3xl border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                      )}>
                        {/* Blob */}
                        <div className={cn("absolute top-0 right-0 w-24 h-24 rounded-bl-[4rem] opacity-10 transition-opacity group-hover:opacity-20", step.color)} />
                        
                        <div className={cn(
                          "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl",
                          step.lightColor
                        )}>
                          <step.icon className="w-7 h-7" />
                        </div>

                        <h3 className="font-serif text-2xl font-bold text-brand-purple mb-3 group-hover:text-brand-orange transition-colors">
                          {step.title}
                        </h3>
                        
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {step.description}
                        </p>
                      </div>
                      
                      {/* Connector */}
                      <div className="w-0.5 bg-border/60 h-16 mt-0" />
                    </motion.div>
                  )}
                </div>

                {/* Bottom Half */}
                <div className="flex-1 flex flex-col justify-start items-center pt-16">
                  {index % 2 === 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="flex flex-col items-center w-full"
                    >
                      {/* Connector */}
                      <div className="w-0.5 bg-border/60 h-16 mb-0" />

                      {/* Card */}
                      <div className={cn(
                        "relative group w-full bg-white p-8 rounded-3xl border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                      )}>
                        {/* Blob */}
                        <div className={cn("absolute top-0 right-0 w-24 h-24 rounded-bl-[4rem] opacity-10 transition-opacity group-hover:opacity-20", step.color)} />
                        
                        <div className={cn(
                          "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl",
                          step.lightColor
                        )}>
                          <step.icon className="w-7 h-7" />
                        </div>

                        <h3 className="font-serif text-2xl font-bold text-brand-purple mb-3 group-hover:text-brand-orange transition-colors">
                          {step.title}
                        </h3>
                        
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline View */}
        <div className="lg:hidden space-y-8 relative pl-8 border-l-2 border-brand-purple/10 ml-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className={cn(
                "absolute -left-[41px] top-8 w-10 h-10 rounded-full border-4 border-white shadow-md flex items-center justify-center text-white font-bold text-sm",
                step.color
              )}>
                {step.id}
              </div>

              <div className="bg-white p-6 rounded-2xl border border-border/50 shadow-md">
                <div className="flex items-start gap-4 mb-4">
                   <div className={cn(
                    "w-12 h-12 shrink-0 rounded-xl flex items-center justify-center",
                    step.lightColor
                  )}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-brand-purple">
                      {step.title}
                    </h3>
                    <p className="text-xs font-bold text-brand-orange uppercase tracking-wider mt-1">
                      Step {index + 1}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
