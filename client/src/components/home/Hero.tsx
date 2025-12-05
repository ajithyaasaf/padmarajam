import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, CheckCircle2, ShieldCheck } from "lucide-react";
import heroImage from "@assets/generated_images/student_studying_in_a_classical_library.png";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-background min-h-[90vh] flex items-center">
      {/* Background decorative elements - More subtle and premium */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/5 blur-[150px] -z-10 rounded-full translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-purple/5 blur-[120px] -z-10 rounded-full -translate-x-1/4 translate-y-1/4" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          
          {/* Text Content - More Magazine Style Typography */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[55%] z-10"
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-[1px] w-12 bg-brand-purple/30"></div>
              <span className="text-brand-purple font-semibold tracking-[0.2em] text-xs uppercase">Established 1995</span>
            </div>
            
            <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.9] text-brand-purple mb-8 tracking-tight">
              Forging <br/>
              <span className="italic font-light text-brand-blue">Financial</span> <br/>
              Leaders.
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg font-light border-l-2 border-brand-orange/30 pl-6">
              Madurai’s premier destination for CA, CMA, and ACCA. Where academic discipline meets professional mastery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 items-start">
              <Button size="lg" className="btn-primary-action bg-brand-orange hover:bg-brand-orange/90 text-white text-lg px-10 h-16 rounded-full shadow-xl shadow-brand-orange/20 hover:shadow-2xl hover:shadow-brand-orange/30 transition-all duration-300">
                Get Free Counselling
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="ghost" className="h-16 px-8 text-lg text-brand-purple hover:bg-brand-purple/5 rounded-full underline-offset-4 hover:underline">
                Explore Courses
              </Button>
            </div>

             {/* Stats floating below text */}
             <div className="mt-16 grid grid-cols-3 gap-8 border-t border-brand-purple/10 pt-8 max-w-md">
                <div>
                  <h4 className="text-3xl font-bold text-brand-purple font-serif">30+</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Years</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-brand-purple font-serif">95%</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Pass Rate</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-brand-purple font-serif">10k+</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Alumni</p>
                </div>
             </div>
          </motion.div>

          {/* Image Content - Asymmetric & Overlapping */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-[45%] relative h-[600px] hidden lg:block"
          >
            {/* Main tall image */}
            <div className="absolute right-0 top-0 w-[85%] h-full rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-purple/20">
               <div className="absolute inset-0 bg-brand-purple/10 mix-blend-multiply z-10"></div>
               <img 
                src={heroImage} 
                alt="Student studying" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating overlap card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute bottom-12 left-0 bg-white p-8 rounded-2xl shadow-xl max-w-xs border border-brand-purple/5 z-20"
            >
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="h-8 w-8 text-brand-blue" />
                <span className="font-serif font-bold text-lg text-brand-purple leading-tight">ISO Certified<br/>Excellence</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Recognized by TNOU and backed by 3 decades of proven academic results.
              </p>
            </motion.div>
            
            {/* Decorative Circle */}
            <div className="absolute -top-12 right-12 w-24 h-24 rounded-full border border-brand-orange/30 flex items-center justify-center animate-spin-slow duration-[20s]">
               <div className="w-2 h-2 bg-brand-orange rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </div>

          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
