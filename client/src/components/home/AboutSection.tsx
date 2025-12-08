import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Quote, Award, Sparkles } from "lucide-react";
import founderImage from "@/assets/founder.png";
import { useRef } from "react";

export function AboutSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section className="py-32 bg-secondary/10 overflow-hidden relative" id="about" ref={containerRef}>
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Creative Image Composition (5 Cols) */}
          <div className="lg:col-span-5 relative order-last lg:order-first">
             <motion.div style={{ y: y1 }} className="relative z-10">
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                   <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/40 to-transparent mix-blend-multiply z-10" />
                   <img 
                      src={founderImage} 
                      alt="Mr. PA. Balan" 
                      className="w-full h-auto object-cover scale-110"
                   />
                </div>
                
                {/* Floating Elements */}
                <motion.div 
                   style={{ y: y2, rotate: rotate }}
                   className="absolute -bottom-10 -right-10 bg-brand-orange text-white p-8 rounded-[2rem] shadow-xl z-20 max-w-[200px]"
                >
                   <div className="text-4xl font-serif font-bold mb-2">30+</div>
                   <div className="text-sm font-medium opacity-90 leading-tight">Years of Educational Excellence</div>
                </motion.div>

                <div className="absolute -top-10 -left-10 -z-10">
                    <svg width="200" height="200" viewBox="0 0 200 200" className="animate-[spin_20s_linear_infinite]">
                        <path id="curve" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" fill="transparent" />
                        <text className="text-xs font-bold tracking-[0.2em] fill-brand-purple/20 uppercase">
                            <textPath href="#curve">
                                Padmarajam Institute of Management • Est. 1990 •
                            </textPath>
                        </text>
                    </svg>
                </div>
             </motion.div>
          </div>

          {/* Right Side: Typography & Content (7 Cols) */}
          <div className="lg:col-span-7 relative z-20">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-purple/10 shadow-sm mb-8">
                 <Sparkles className="h-4 w-4 text-brand-orange" />
                 <span className="text-xs font-bold tracking-widest uppercase text-brand-purple">Since 1990</span>
              </div>

              <h2 className="font-serif text-5xl md:text-7xl font-bold text-brand-purple mb-8 leading-[0.9] tracking-tight">
                Architecting <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-500">
                  Global Careers
                </span>
              </h2>

              <div className="relative pl-8 border-l-2 border-brand-orange/30 mb-10">
                 <Quote className="absolute -top-2 -left-3 h-6 w-6 text-brand-orange bg-secondary/10 fill-current" />
                 <p className="text-2xl md:text-3xl font-serif text-foreground/80 italic leading-relaxed">
                   "Education unlocks potential and creates a possibility for everyone."
                 </p>
                 <footer className="mt-4 text-sm font-bold text-brand-purple uppercase tracking-wider">
                   — Mr. PA. Balan, Founder
                 </footer>
              </div>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
                 <p>
                    Padmarajam Institute of Management (PRIM) isn't just a coaching center; it's a launchpad. Founded with a vision to create quality professionals, we've become the gold standard for commerce education in Tamil Nadu.
                 </p>
                 <p>
                    We blend rigorous academic training with holistic personality development. Our students don't just pass exams; they lead industries.
                 </p>
              </div>

              {/* Stats / Badges */}
              <div className="flex flex-wrap gap-4 mt-10">
                 <div className="bg-white p-4 rounded-xl shadow-lg border border-border/50 flex items-center gap-4">
                    <div className="bg-green-100 p-2 rounded-full text-green-700">
                        <Award className="h-6 w-6" />
                    </div>
                    <div>
                        <div className="font-bold text-brand-purple text-lg">ISO Certified</div>
                        <div className="text-xs text-muted-foreground font-medium uppercase">First in India (IAF Rec.)</div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
