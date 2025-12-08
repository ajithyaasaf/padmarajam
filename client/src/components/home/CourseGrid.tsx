import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, LineChart, Globe, Scale, ArrowRight, TrendingUp, Calculator, Megaphone, Briefcase, Award, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay }}
          className={cn(
            "group relative overflow-hidden rounded-[2rem] p-8 md:p-10 flex flex-col justify-between transition-all duration-500 cursor-pointer",
            isFeatured ? "bg-brand-purple text-white" : "bg-white border border-border/50 hover:border-brand-orange/30",
            isDark ? "bg-brand-blue text-white" : "",
            "hover:shadow-2xl hover:shadow-brand-purple/10 hover:scale-[1.02]",
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

          <div className="mt-8 relative z-10 flex items-center justify-between">
             <div className={cn(
                 "h-[1px] w-full transition-all duration-500 origin-left scale-x-0 group-hover:scale-x-100 absolute top-0",
                 isFeatured || isDark ? "bg-white/30" : "bg-brand-orange"
             )} />
             
             <div className={cn(
               "flex items-center gap-2 text-sm font-bold uppercase tracking-wider mt-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300",
               isFeatured || isDark ? "text-white" : "text-brand-purple"
             )}>
                View Details & Apply <ArrowRight className="h-4 w-4" />
             </div>
          </div>
        </motion.div>
      </DialogTrigger>
      
      <DialogContent className="w-[95vw] sm:max-w-[800px] max-h-[90vh] overflow-y-auto bg-white p-0 gap-0 border-none rounded-2xl md:rounded-[2rem] shadow-2xl [&>button]:text-white md:[&>button]:text-zinc-500 [&>button]:top-4 [&>button]:right-4 [&>button]:z-50 [&>button]:bg-black/20 md:[&>button]:bg-transparent [&>button]:p-1 [&>button]:rounded-full">
         <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Left: Video & Info */}
            <div className="bg-brand-purple p-6 md:p-8 text-white flex flex-col justify-between relative overflow-hidden">
               {/* Background Accents */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
               
               <div>
                  <div className="flex items-center gap-2 mb-6 text-brand-orange font-bold uppercase tracking-widest text-xs">
                     <BookOpen className="h-4 w-4" />
                     Course Overview
                  </div>
                  
                  <h2 className="font-serif text-3xl font-bold mb-4">{title}</h2>
                  <p className="text-white/80 leading-relaxed mb-8">{description}</p>
                  
                  {/* Video Placeholder */}
                  <div className="aspect-video bg-black/40 rounded-xl flex items-center justify-center border border-white/20 backdrop-blur-sm group cursor-pointer hover:bg-black/50 transition-colors relative overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" 
                        alt="Course Preview" 
                        className="absolute inset-0 w-full h-full object-cover opacity-50"
                      />
                      <div className="h-16 w-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform z-10">
                          <Play className="h-6 w-6 text-white fill-current ml-1" />
                      </div>
                      <span className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-wider z-10">Watch Course Intro</span>
                  </div>
               </div>
               
               <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="flex items-center justify-between text-sm">
                     <div>
                        <span className="block text-white/60 text-xs uppercase tracking-wider mb-1">Duration</span>
                        <span className="font-bold">3 - 4 Years</span>
                     </div>
                     <div>
                        <span className="block text-white/60 text-xs uppercase tracking-wider mb-1">Level</span>
                        <span className="font-bold">Professional</span>
                     </div>
                     <div>
                        <span className="block text-white/60 text-xs uppercase tracking-wider mb-1">Mode</span>
                        <span className="font-bold">Offline / Online</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Right: Application Form */}
            <div className="p-6 md:p-8 bg-white">
               <DialogHeader className="mb-6 text-left">
                 <DialogTitle className="text-2xl font-serif font-bold text-brand-purple">Apply Now</DialogTitle>
                 <DialogDescription>
                   Fill out the form below to register your interest for {title}.
                 </DialogDescription>
               </DialogHeader>

               <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                     <Label htmlFor="name">Full Name</Label>
                     <Input id="name" placeholder="John Doe" className="w-full rounded-xl border-border/50 bg-secondary/10 focus:bg-white transition-colors h-11 md:h-10" />
                  </div>
                  
                  <div className="space-y-2">
                     <Label htmlFor="email">Email Address</Label>
                     <Input id="email" type="email" placeholder="john@example.com" className="w-full rounded-xl border-border/50 bg-secondary/10 focus:bg-white transition-colors h-11 md:h-10" />
                  </div>

                  <div className="space-y-2">
                     <Label htmlFor="phone">Phone Number</Label>
                     <Input id="phone" type="tel" placeholder="+91 98765 43210" className="w-full rounded-xl border-border/50 bg-secondary/10 focus:bg-white transition-colors h-11 md:h-10" />
                  </div>

                  <div className="space-y-2">
                     <Label htmlFor="message">Why do you want to join?</Label>
                     <Textarea id="message" placeholder="Tell us briefly about your educational background..." className="w-full rounded-xl border-border/50 bg-secondary/10 focus:bg-white transition-colors min-h-[100px]" />
                  </div>

                  <Button type="submit" className="w-full bg-brand-orange text-white hover:bg-brand-orange/90 rounded-xl h-12 md:h-11 font-bold text-lg md:text-base shadow-lg shadow-brand-orange/20 mt-4">
                     Submit Application
                  </Button>
               </form>
            </div>

         </div>
      </DialogContent>
    </Dialog>
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
