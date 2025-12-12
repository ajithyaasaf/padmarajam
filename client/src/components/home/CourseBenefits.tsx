import { motion } from "framer-motion";
import {
  Calendar,
  GraduationCap,
  Clock,
  Cpu,
  CalendarDays,
  BookOpen,
  ClipboardCheck,
  Users,
  Heart,
  Lightbulb,
  LucideIcon,
} from "lucide-react";

// --- Types ---
interface BenefitItemProps {
  icon: LucideIcon;
  text: string;
  index: number;
  testIdPrefix: string;
}

// --- Data ---
const leftBenefits = [
  { text: "30 Years in Finance Education", icon: Calendar },
  { text: "Professional Faculties", icon: GraduationCap },
  { text: "Flexible Learning Schedule", icon: Clock },
  { text: "AI Smart Class", icon: Cpu },
  { text: "Daily & Weekend Classes", icon: CalendarDays },
];

const rightBenefits = [
  { text: "Top-Quality Study Materials", icon: BookOpen },
  { text: "Regular Mock Tests", icon: ClipboardCheck },
  { text: "Separate Batches", icon: Users },
  { text: "Friendly Environment", icon: Heart },
  { text: "Concept-Based Smart Study", icon: Lightbulb },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// --- Reusable Sub-Component ---
const BenefitItem = ({
  icon: Icon,
  text,
  index,
  testIdPrefix,
}: BenefitItemProps) => (
  <motion.div
    variants={itemVariants}
    className="flex items-center gap-6 group cursor-default"
    data-testid={`${testIdPrefix}-${index}`}
    whileHover={{ x: 8 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    {/* Icon Container */}
    <motion.div
      className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/20"
      whileHover={{
        scale: 1.1,
        rotate: 5,
        backgroundColor: "rgba(255, 255, 255, 0.25)",
      }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <Icon className="w-7 h-7 text-white" strokeWidth={2} aria-hidden="true" />
    </motion.div>

    {/* Text Content */}
    <span className="text-white text-lg md:text-xl font-medium group-hover:text-brand-orange transition-colors duration-300">
      {text}
    </span>
  </motion.div>
);

// --- Main Component ---
export function CourseBenefits() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-accent">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-orange/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="inline-block bg-brand-orange text-white text-sm md:text-base font-bold uppercase tracking-wider px-8 py-3 rounded-full shadow-xl mb-8">
            Course Benefits
          </h2>
        </motion.div>

        {/* Glassmorphism Card */}
        <motion.div
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-14"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {/* Left Column */}
            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {leftBenefits.map((benefit, index) => (
                <BenefitItem
                  key={`left-${index}`}
                  {...benefit}
                  index={index}
                  testIdPrefix="benefit-left"
                />
              ))}
            </motion.div>

            {/* Right Column */}
            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {rightBenefits.map((benefit, index) => (
                <BenefitItem
                  key={`right-${index}`}
                  {...benefit}
                  index={index}
                  testIdPrefix="benefit-right"
                />
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            className="inline-block bg-brand-orange text-white text-lg md:text-xl font-bold uppercase tracking-wider px-12 py-5 rounded-full shadow-xl cursor-pointer hover:bg-brand-orange/90 focus:outline-none focus:ring-4 focus:ring-brand-orange/30 active:bg-brand-orange/80"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400 }}
            onClick={() => console.log("Admissions clicked")}
          >
            Admissions Open
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
