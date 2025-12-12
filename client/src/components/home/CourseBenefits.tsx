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
  LucideIcon 
} from "lucide-react";

// --- Types ---
interface BenefitItemProps {
  icon: LucideIcon;
  text: string;
  index: number;
}

// --- Data ---
const allBenefits = [
  { text: "30 Years in Finance Education", icon: Calendar },
  { text: "Professional Faculties", icon: GraduationCap },
  { text: "Flexible Learning Schedule", icon: Clock },
  { text: "AI Smart Class", icon: Cpu },
  { text: "Daily & Weekend Classes", icon: CalendarDays },
  { text: "Top-Quality Study Materials", icon: BookOpen },
  { text: "Regular Mock Tests", icon: ClipboardCheck },
  { text: "Separate Batches", icon: Users },
  { text: "Friendly Environment", icon: Heart },
  { text: "Concept-Based Smart Study", icon: Lightbulb }
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// --- Reusable Sub-Component ---
const BenefitItem = ({ icon: Icon, text, index }: BenefitItemProps) => (
  <motion.div
    variants={itemVariants}
    className="flex flex-col items-center text-center gap-4 group cursor-default"
    whileHover={{ y: -10 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    {/* Icon Container: The border-2 class creates the thicker stroke/border */}
    <motion.div 
      className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg border-2 border-white/30 relative overflow-hidden"
      whileHover={{ 
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        scale: 1.1,
      }}
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-brand-orange/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Lucide Icon: strokeWidth set to 2 */}
      <Icon className="w-8 h-8 text-white relative z-10" strokeWidth={2} aria-hidden="true" />
    </motion.div>

    {/* Text Content */}
    <span className="
      text-white font-medium group-hover:text-brand-orange transition-colors duration-300
      text-lg leading-tight max-w-[160px]
      lg:max-w-none lg:whitespace-nowrap lg:text-base 
      xl:text-lg
    ">
      {text}
    </span>
  </motion.div>
);

// --- Main Component ---
export function CourseBenefits() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-accent">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-orange/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-white/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 max-w-[1400px] relative z-10">

        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="inline-block bg-brand-orange text-white text-sm md:text-base font-bold uppercase tracking-wider px-8 py-3 rounded-full shadow-xl">
            Why Choose Us?
          </h2>
          <p className="mt-6 text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Experience world-class finance education with our comprehensive features designed for your success.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {allBenefits.map((benefit, index) => (
            <BenefitItem 
              key={index} 
              {...benefit} 
              index={index} 
            />
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button 
            className="bg-brand-orange text-white text-xl font-bold uppercase tracking-wider px-12 py-5 rounded-full shadow-2xl hover:bg-white hover:text-brand-orange transition-all duration-300 transform outline-none focus:ring-4 focus:ring-brand-orange/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => console.log("Admissions clicked")}
          >
            Admissions Open
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}