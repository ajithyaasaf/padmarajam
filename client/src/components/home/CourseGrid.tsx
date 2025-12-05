import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, LineChart, Globe, Scale } from "lucide-react";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  className?: string;
  delay?: number;
}

function CourseCard({ title, description, icon: Icon, className, delay = 0 }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(74, 21, 75, 0.15)" }}
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm border border-border transition-all duration-300",
        className
      )}
    >
      <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-brand-orange rounded-full p-2 text-white">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>
      
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-purple/5 text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors duration-300">
        <Icon className="h-7 w-7" />
      </div>
      
      <h3 className="font-serif text-2xl font-bold text-brand-purple mb-3 group-hover:text-brand-orange transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

export function CourseGrid() {
  return (
    <section className="py-20 bg-secondary/30" id="courses">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-purple mb-4">
            The Core 4 Programs
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive professional courses designed to shape the next generation of financial experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          {/* Card 1: CA - Large Focus */}
          <CourseCard
            title="Chartered Accountancy (CA)"
            description="Foundation to Final. The gold standard of finance. Our integrated curriculum ensures deep understanding and exam success at every level."
            icon={BookOpen}
            className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-brand-purple/5 border-brand-purple/10"
            delay={0.1}
          />

          {/* Card 2: CMA */}
          <CourseCard
            title="CMA (India/US)"
            description="Master Cost & Management Accounting. Strategic financial management skills for global enterprises."
            icon={LineChart}
            delay={0.2}
          />

          {/* Card 3: ACCA */}
          <CourseCard
            title="ACCA (Global)"
            description="Your passport to an international career. Recognized in over 180 countries worldwide."
            icon={Globe}
            delay={0.3}
          />

          {/* Card 4: CS */}
          <CourseCard
            title="Company Secretary (CS)"
            description="Corporate Law & Governance excellence. Become the compliance backbone of major corporations."
            icon={Scale}
            className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-brand-blue/5 border-brand-blue/10 lg:col-start-2"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}
