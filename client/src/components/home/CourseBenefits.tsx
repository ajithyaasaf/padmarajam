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
  Lightbulb
} from "lucide-react";

const leftBenefits = [
  { text: "30 Years in Finance Education", icon: Calendar },
  { text: "Professional Faculties", icon: GraduationCap },
  { text: "Flexible Learning Schedule", icon: Clock },
  { text: "AI Smart Class", icon: Cpu },
  { text: "Daily & Weekend Classes", icon: CalendarDays }
];

const rightBenefits = [
  { text: "Top-Quality Study Materials", icon: BookOpen },
  { text: "Regular Mock Tests", icon: ClipboardCheck },
  { text: "Separate Batches", icon: Users },
  { text: "Friendly Environment", icon: Heart },
  { text: "Concept-Based Smart Study", icon: Lightbulb }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
};

export function CourseBenefits() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-accent">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-orange/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-brand-orange text-white text-sm font-bold uppercase tracking-wider px-8 py-3 rounded-full shadow-xl mb-8">
            Course Benefits
          </span>
        </motion.div>

        <motion.div 
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {leftBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-5 group cursor-pointer"
                    data-testid={`benefit-left-${index}`}
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/20"
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        backgroundColor: "rgba(255, 255, 255, 0.25)"
                      }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <IconComponent className="w-6 h-6 text-brand-orange" strokeWidth={2} />
                    </motion.div>
                    <span className="text-white text-base md:text-lg font-medium group-hover:text-brand-orange transition-colors duration-300">
                      {benefit.text}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {rightBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-5 group cursor-pointer"
                    data-testid={`benefit-right-${index}`}
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/20"
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        backgroundColor: "rgba(255, 255, 255, 0.25)"
                      }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <IconComponent className="w-6 h-6 text-brand-orange" strokeWidth={2} />
                    </motion.div>
                    <span className="text-white text-base md:text-lg font-medium group-hover:text-brand-orange transition-colors duration-300">
                      {benefit.text}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.span 
            className="inline-block bg-brand-orange text-white text-lg font-bold uppercase tracking-wider px-10 py-4 rounded-full shadow-xl cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Admissions Open
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
