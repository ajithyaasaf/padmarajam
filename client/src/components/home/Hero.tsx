import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, CheckCircle2 } from "lucide-react";
import heroImage from "@assets/generated_images/student_studying_in_a_classical_library.png";
import student1 from "@assets/generated_images/portrait_of_a_female_ca_student.png";
import student2 from "@assets/generated_images/portrait_of_a_male_cma_student.png";
import student3 from "@assets/generated_images/portrait_of_a_female_acca_student.png";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-36 lg:pb-32 overflow-hidden bg-background min-h-[90vh] flex flex-col justify-center">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.0] text-brand-purple mb-8 tracking-tight">
              Crafting <br />
              Stories <br />
              Through <span className="text-brand-blue">Success</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg font-light">
              Inspiring the next generation of financial leaders with the tools,
              techniques, and taste to bring global excellence to every career —
              one lesson at a time.
            </p>

            <div className="flex flex-wrap gap-5 items-center">
              <Button
                size="lg"
                className="btn-primary-action bg-brand-purple hover:bg-brand-purple/90 text-white text-lg px-8 h-14 rounded-full shadow-lg transition-all duration-300"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg border-border text-foreground hover:bg-secondary/50 rounded-full flex items-center gap-2"
              >
                <Play className="h-4 w-4 fill-current" /> Success Story
              </Button>
            </div>
          </motion.div>

          {/* Image Grid Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="grid grid-cols-2 gap-4 h-[600px]">
              {/* Column 1 */}
              <div className="flex flex-col gap-4 pt-12">
                <div className="h-64 w-full rounded-[2rem] overflow-hidden shadow-lg border-2 border-white relative group">
                  <img
                    src={student1}
                    alt="Student"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="h-48 w-full rounded-[2rem] overflow-hidden shadow-lg border-2 border-white relative group">
                  <img
                    src={heroImage}
                    alt="Library"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="h-24 w-24 rounded-full bg-brand-purple/10 backdrop-blur-md absolute -left-8 bottom-32 -z-10 animate-pulse" />
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-4">
                <div className="h-80 w-full rounded-[2rem] overflow-hidden shadow-lg border-2 border-white relative group">
                  <img
                    src={student3}
                    alt="Student"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="h-56 w-full rounded-[2rem] overflow-hidden shadow-lg border-2 border-white relative group bg-brand-orange/10 flex items-center justify-center">
                  <img
                    src={student2}
                    alt="Student"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Floating Stats Section - RESTRUCTURED */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-30 mt-12 lg:mt-20">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto drop-shadow-2xl">
          {/* 1. LEFT PANEL */}
          <div className="bg-white/90 backdrop-blur-md border border-white/50 p-6 md:p-8 rounded-[2rem] md:rounded-r-none flex-1 w-full md:w-auto text-center md:text-right md:pr-16 shadow-sm">
            <h3 className="font-serif font-bold text-xl md:text-2xl text-brand-purple mb-1">
              Because behind every line,
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              every number, and every success story.
            </p>
          </div>

          {/* 2. CENTER HUB (Floating Bridge) */}
          <div className="z-10 -my-6 md:my-0 md:-mx-12 shrink-0">
            <div className="bg-white p-2 md:p-3 rounded-full shadow-xl flex items-center gap-1 border-4 border-white/50">
              <div className="flex -space-x-4">
                <img
                  src={student1}
                  className="w-14 h-14 rounded-full border-4 border-white object-cover shadow-sm"
                  alt="Avatar"
                />
                <img
                  src={student2}
                  className="w-14 h-14 rounded-full border-4 border-white object-cover shadow-sm"
                  alt="Avatar"
                />
                <img
                  src={student3}
                  className="w-14 h-14 rounded-full border-4 border-white object-cover shadow-sm"
                  alt="Avatar"
                />
              </div>
              {/* The big gradient circle like the '8k' in your image */}
              <div className="w-16 h-16 rounded-full border-4 border-white bg-gradient-to-br from-brand-orange to-red-500 text-white flex items-center justify-center font-bold text-lg shadow-md relative z-10">
                10k+
              </div>
            </div>
          </div>

          {/* 3. RIGHT PANEL */}
          <div className="bg-white/90 backdrop-blur-md border border-white/50 p-6 md:p-8 rounded-[2rem] md:rounded-l-none flex-1 w-full md:w-auto text-center md:text-left md:pl-16 shadow-sm">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex gap-2 items-center text-yellow-500 mb-1">
                <CheckCircle2 className="h-5 w-5 fill-current" />
                <span className="font-bold text-brand-purple text-lg">
                  Verified Excellence
                </span>
              </div>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                Join the community
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
