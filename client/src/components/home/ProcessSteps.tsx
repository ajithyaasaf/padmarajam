import { motion } from "framer-motion";
import {
  FileText,
  BookOpen,
  GraduationCap,
  Trophy,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: 1,
    title: "Apply Online",
    description:
      "Submit your application through our streamlined digital portal. It takes less than 5 minutes.",
    icon: FileText,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "group-hover:border-blue-200",
    shadowColor: "group-hover:shadow-blue-100",
  },
  {
    id: 2,
    title: "Course Selection",
    description:
      "Consult with our academic advisors to choose the perfect program aligned with your career goals.",
    icon: BookOpen,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "group-hover:border-orange-200",
    shadowColor: "group-hover:shadow-orange-100",
  },
  {
    id: 3,
    title: "Begin Learning",
    description:
      "Access our world-class LMS and attend live sessions with industry experts immediately.",
    icon: GraduationCap,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "group-hover:border-purple-200",
    shadowColor: "group-hover:shadow-purple-100",
  },
  {
    id: 4,
    title: "Get Certified",
    description:
      "Complete your assessments and earn a globally recognized qualification to boost your career.",
    icon: Trophy,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "group-hover:border-green-200",
    shadowColor: "group-hover:shadow-green-100",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export function ProcessSteps() {
  return (
    <section className="py-24 bg-gray-50/50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-brand-purple text-xs font-bold uppercase tracking-widest shadow-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            Simple Process
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Your Roadmap to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-600">
              Professional Success
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Four simple steps stand between you and your new career.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className={cn(
                "group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl",
                step.borderColor,
                step.shadowColor,
              )}
            >
              {/* Connector Line (Desktop Only) */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-[2px] bg-gradient-to-r from-gray-200 to-transparent -ml-8 z-0" />
              )}

              {/* Step Number Watermark */}
              <div className="absolute top-4 right-6 text-9xl font-sans font-bold opacity-[0.03] select-none pointer-events-none transition-opacity group-hover:opacity-[0.06]">
                {step.id}
              </div>

              {/* Icon */}
              <div
                className={cn(
                  "relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-8 transition-transform group-hover:scale-110 duration-300",
                  step.bgColor,
                  step.color,
                )}
              >
                <step.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-purple transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Learn More / Arrow */}
                <div
                  className={cn(
                    "flex items-center gap-2 text-sm font-semibold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300",
                    step.color,
                  )}
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
