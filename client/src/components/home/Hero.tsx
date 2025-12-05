import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, CheckCircle2, ShieldCheck } from "lucide-react";
import heroImage from "@assets/generated_images/student_studying_in_a_classical_library.png";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-secondary/30 to-background">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 blur-[120px] -z-10 rounded-full translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-brand-purple/5 blur-[100px] -z-10 rounded-full -translate-x-1/4" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/5 border border-brand-purple/10 text-brand-purple text-xs font-semibold tracking-wide uppercase mb-6">
              <Award className="h-3 w-3" />
              <span>Established 1995</span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight text-brand-purple mb-6">
              Forging <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue">Financial Leaders</span> Since 1995.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Madurai’s premier destination for CA, CMA, and ACCA. Join the institute that blends academic discipline with professional mastery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="btn-primary-action bg-brand-orange hover:bg-brand-orange/90 text-lg px-8 h-14">
                Get Free Career Counselling
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-brand-purple/20 text-brand-purple hover:bg-brand-purple/5">
                View Courses
              </Button>
            </div>
            
            {/* Trust Ticker */}
            <div className="flex flex-wrap gap-y-4 gap-x-8 py-6 border-t border-border/60">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground/70">
                <ShieldCheck className="h-5 w-5 text-brand-blue" />
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-foreground/70">
                <CheckCircle2 className="h-5 w-5 text-brand-blue" />
                <span>Recognized by TNOU</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-foreground/70">
                <Award className="h-5 w-5 text-brand-blue" />
                <span>3 Decades of Excellence</span>
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] lg:aspect-square mx-auto max-w-lg lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
              <img 
                src={heroImage} 
                alt="Student studying in PRIM library" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Card 1 */}
              <div className="absolute bottom-8 left-8 right-8 z-20 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange font-bold text-xl font-serif">
                    95%
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Pass Rate</p>
                    <p className="font-serif font-bold text-brand-purple">Consistently above national average</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative pattern dots */}
            <div className="absolute -top-6 -right-6 -z-10">
              <div className="grid grid-cols-6 gap-2">
                {[...Array(36)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-purple/20" />
                ))}
              </div>
            </div>
            
             <div className="absolute -bottom-6 -left-6 -z-10">
              <div className="grid grid-cols-6 gap-2">
                {[...Array(36)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-orange/20" />
                ))}
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
