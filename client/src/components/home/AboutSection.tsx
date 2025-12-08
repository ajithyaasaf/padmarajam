import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import founderImage from "@/assets/founder.png";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="py-24 bg-white overflow-hidden" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Column */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative Background */}
            <div className="absolute top-10 left-10 w-full h-full bg-brand-orange/10 rounded-[2rem] -z-10 transform rotate-3" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-purple/5 rounded-full blur-2xl" />
            
            <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-b from-brand-purple/5 to-transparent p-1">
                <div className="bg-white rounded-[1.9rem] overflow-hidden">
                    <img 
                        src={founderImage} 
                        alt="Mr. PA. Balan - Founder" 
                        className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 right-8 bg-white p-4 rounded-xl shadow-xl border border-border/50 max-w-[200px] hidden md:block">
                    <div className="flex items-center gap-2 mb-1">
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Founder's Vision</span>
                    </div>
                    <p className="text-sm font-serif font-bold text-brand-purple">
                        "Education unlocks potential for everyone."
                    </p>
                </div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 text-brand-orange font-bold tracking-widest uppercase text-sm mb-4">
               <span className="h-[2px] w-8 bg-brand-orange" />
               About Us
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-purple mb-8 leading-tight">
              Great History Of Our Campus
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground font-serif">Mr. PA. BALAN</strong>, Founder, Chairman and Managing Director of Padmarajam Institute of Management, believes that education can unlock potential and create a possibility for everyone.
              </p>
              
              <p>
                Padmarajam Institute of Management (PRIM) – a Professional Coaching Institute, founded with the vision of Creating Quality professionals, has been a stepping stone to the success of Aspiring Students.
              </p>

              <p>
                With an efficient team of Eminent Faculty Members, Best Infrastructure, Conducive Learning Atmosphere and Highest levels of Concern for the Students, PRIM is most cherished by its students and has created a Mark in Tamil Nadu as "one of the Leading Coaching Institutes for all professional courses in accountancy and management".
              </p>
              
              <p>
                  Padmarajam Institute of Management is the first institution in India to be recognized by the International Accreditation and Recognition Council forum (IAF), Australia.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button className="bg-brand-purple text-white hover:bg-brand-purple/90 px-8 py-6 rounded-full text-lg shadow-lg shadow-brand-purple/20 group">
                Read More <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
