import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, LineChart, Globe, Scale, ArrowRight, TrendingUp, Calculator, Megaphone, Briefcase, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  title: string;
  subtitle?: string;
  description: string;
  icon: React.ElementType;
  className?: string;
  delay?: number;
  variant?: "default" | "featured" | "dark";
}

function CourseCard({ title, subtitle, description, icon: Icon, className, delay = 0, variant = "default" }: CourseCardProps) {
  const isFeatured = variant === "featured";
  const isDark = variant === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        "group relative overflow-hidden rounded-[2rem] p-8 md:p-10 flex flex-col justify-between transition-all duration-500",
        isFeatured ? "bg-brand-purple text-white" : "bg-white border border-border/50 hover:border-brand-orange/30",
        isDark ? "bg-brand-blue text-white" : "",
        "hover:shadow-2xl hover:shadow-brand-purple/10",
        className
      )}
    >
      {/* Background Pattern for Featured Cards */}
      {(isFeatured || isDark) && (
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      )}

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-8">
          <div className={cn(
            "h-16 w-16 rounded-2xl flex items-center justify-center text-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
            isFeatured || isDark ? "bg-white/10 text-white backdrop-blur-sm" : "bg-brand-purple/5 text-brand-purple"
          )}>
            <Icon className="h-8 w-8" />
          </div>
          
          <div className={cn(
            "h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0",
            isFeatured || isDark ? "bg-white/20 text-white" : "bg-brand-orange text-white"
          )}>
            <ArrowUpRight className="h-5 w-5" />
          </div>
        </div>

        {subtitle && (
          <span className={cn(
            "text-xs font-bold tracking-widest uppercase mb-2 block",
            isFeatured || isDark ? "text-white/60" : "text-brand-orange"
          )}>
            {subtitle}
          </span>
        )}

        <h3 className={cn(
          "font-serif font-bold mb-4 leading-tight",
          isFeatured ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl",
          isFeatured || isDark ? "text-white" : "text-brand-purple"
        )}>
          {title}
        </h3>
        
        <p className={cn(
          "leading-relaxed text-lg max-w-md",
          isFeatured || isDark ? "text-white/80" : "text-muted-foreground"
        )}>
          {description}
        </p>
      </div>

      <div className="mt-8 relative z-10">
         <div className={cn(
             "h-[1px] w-full transition-all duration-500 origin-left scale-x-0 group-hover:scale-x-100",
             isFeatured || isDark ? "bg-white/30" : "bg-brand-orange"
         )} />
      </div>
    </motion.div>
  );
}

export function CourseGrid() {
  return (
    <section className="py-24 bg-secondary/20" id="courses">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
                <h2 className="font-serif text-5xl md:text-6xl font-bold text-brand-purple mb-6 leading-[0.9]">
                    Academic <br/> Programs
                </h2>
                <p className="text-xl text-muted-foreground max-w-lg">
                    Rigorous professional qualifications designed for ambitious students who aim for the C-Suite.
                </p>
            </div>
            <div className="hidden md:block pb-2">
                <a href="#" className="group flex items-center gap-2 text-brand-purple font-medium hover:text-brand-orange transition-colors">
                    View Full Syllabus <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
            </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* CA - The Anchor Card */}
          <CourseCard
            title="Chartered Accountancy"
            subtitle="The Gold Standard"
            description="Comprehensive coaching from Foundation to Final. Integrated curriculum for exam success."
            icon={BookOpen}
            className="md:col-span-2 min-h-[400px]"
            variant="featured"
            delay={0.1}
          />

          {/* CIMA (UK) */}
          <CourseCard
            title="CIMA (UK)"
            subtitle="Management Accounting"
            description="Global body for management accountants, offering the CGMA designation."
            icon={TrendingUp}
            className="md:col-span-1 min-h-[300px]"
            delay={0.2}
          />

          {/* ACCA - Side Card */}
          <CourseCard
            title="ACCA Global"
            subtitle="International Career"
            description="Your passport to working in over 180 countries worldwide."
            icon={Globe}
            className="md:col-span-1 min-h-[300px]"
            variant="dark"
            delay={0.3}
          />

          {/* CPA (US) */}
          <CourseCard
            title="CPA (US)"
            subtitle="USA Certification"
            description="Top accounting certification for auditing, taxation, and financial reporting."
            icon={Calculator}
            className="md:col-span-1 min-h-[300px]"
            delay={0.3}
          />

           {/* CFA (USA) */}
           <CourseCard
            title="CFA (USA)"
            subtitle="Investment Finance"
            description="Top finance certification for investment banking and portfolio management."
            icon={Briefcase}
            className="md:col-span-1 min-h-[300px]"
            delay={0.3}
          />

           {/* MBA Business Analytics */}
           <CourseCard
            title="MBA (Business Analytics)"
            subtitle="Data Driven"
            description="Equips you with predictive analytics, AI, and strategic insights for business growth."
            icon={LineChart}
            className="md:col-span-1"
            delay={0.4}
          />

           {/* CMA (India/US) */}
           <CourseCard
            title="CMA (India/US)"
            subtitle="Strategic Finance"
            description="Master strategic financial management for global enterprises."
            icon={Award}
            className="md:col-span-1"
            delay={0.4}
          />

           {/* AAT (UK) */}
           <CourseCard
            title="AAT (UK)"
            subtitle="Accounting Skills"
            description="Globally recognized qualification in bookkeeping and financial reporting."
            icon={Scale}
            className="md:col-span-1"
            delay={0.4}
          />

          {/* MBA Digital Marketing */}
          <CourseCard
             title="MBA (Digital Marketing)"
             subtitle="Modern Commerce"
             description="Skills in online branding, SEO, social media, and e-commerce strategies."
             icon={Megaphone}
             className="md:col-span-1"
             delay={0.5}
         />

        <div className="md:col-span-2 bg-white rounded-[2rem] p-10 border border-border/50 flex flex-col md:flex-row items-center justify-between gap-8 hover:shadow-xl transition-shadow duration-300 group">
            <div className="max-w-md">
                <h3 className="font-serif text-3xl font-bold text-brand-purple mb-2">Company Secretary</h3>
                <p className="text-muted-foreground">Become the compliance backbone of major corporations with expert legal guidance.</p>
            </div>
            <button className="shrink-0 bg-brand-orange text-white px-8 py-4 rounded-full font-bold hover:bg-brand-orange/90 transition-all shadow-lg hover:shadow-brand-orange/20 flex items-center gap-2 group-hover:scale-105">
                Course Details <ArrowRight className="h-5 w-5" />
            </button>
        </div>

        </div>

      </div>
    </section>
  );
}
