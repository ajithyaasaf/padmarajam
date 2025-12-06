import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
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

            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg font-light border-l-2 border-brand-orange/30 pl-6">
              Madurai’s premier destination for CA, CMA, and ACCA. Where academic
              discipline meets professional mastery.
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
                {/* Floating circular accent */}
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

      {/* Bottom Floating Stats Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none" />

      {/* 1. Adjusted Spacing: Changed to `mt-8 lg:mt-12`. Closer than before, but no overlap.
       */}
      <div className="container mx-auto px-4 md:px-6 relative z-30 mt-8 lg:mt-12">
        {/* 2. Brand Colors: Changed bg to a gradient ending in purple tint, added purple border.
         */}
        <div className="bg-gradient-to-r from-white via-white to-brand-purple/10 backdrop-blur-xl border border-brand-purple/20 shadow-2xl rounded-[2.5rem] p-8 md:p-10 flex flex-col md:flex-row justify-between items-center gap-8 max-w-5xl mx-auto">
          <div className="max-w-md">
            <h3 className="font-serif font-bold text-2xl text-brand-purple mb-2">
              Because behind every line,
            </h3>
            <p className="text-muted-foreground text-lg">
              every number, and every success story.
            </p>
          </div>

          <div className="flex items-center gap-6">
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
              <div className="w-14 h-14 rounded-full border-4 border-white bg-brand-orange text-white flex items-center justify-center font-bold text-sm shadow-sm">
                10k+
              </div>
            </div>
            <div>
              <div className="flex gap-1 text-yellow-500 mb-1">
                <CheckCircle2 className="h-5 w-5 fill-current" />
                <span className="font-bold text-brand-purple">
                  Verified Excellence
                </span>
              </div>
              <p className="text-xs text-brand-purple/60 font-medium uppercase tracking-wider">
                Join the community
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
