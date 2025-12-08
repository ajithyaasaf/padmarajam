import { motion, useScroll, useTransform } from "framer-motion";
import { Library, Users, GraduationCap, ArrowRight } from "lucide-react";
import { useRef } from "react";

export function ValueStack() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const features = [
    {
      id: "01",
      icon: Library,
      title: "30+ Years of Experience",
      description: "PRIM is a leading coaching institute in Tamil Nadu for accountancy and management courses, with a rich history of creating quality professionals.",
      color: "text-brand-blue",
      bg: "bg-brand-blue/5",
      border: "border-brand-blue/20"
    },
    {
      id: "02",
      icon: Users,
      title: "ISO Certified Institution",
      description: "Padmarajam Institute of Management is the first institution in India to be recognized by the International Accreditation and Recognition Council forum (IAF), Australia.",
      color: "text-brand-purple",
      bg: "bg-brand-purple/5",
      border: "border-brand-purple/20"
    },
    {
      id: "03",
      icon: GraduationCap,
      title: "100% Placements",
      description: "In today's dynamic business world, CAs, Cost Auditors, and CS professionals are key business solution providers. We empower students to achieve success.",
      color: "text-brand-orange",
      bg: "bg-brand-orange/5",
      border: "border-brand-orange/20"
    }
  ];

  return (
    <section className="py-32 bg-white overflow-hidden" id="faculty" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sticky Header */}
          <div className="lg:w-1/3">
             <div className="lg:sticky lg:top-32">
                <span className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4 block">Why Choose PRIM</span>
                <h2 className="font-serif text-5xl md:text-6xl font-bold text-brand-purple mb-8 leading-tight">
                  More Than <br/> Just A <br/> Classroom.
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We believe environment shapes excellence. Our infrastructure and pedagogy are designed to create financial leaders, not just exam passers.
                </p>
                <div className="h-1 w-24 bg-brand-purple mb-8"></div>
             </div>
          </div>

          {/* Scrolling Cards */}
          <div className="lg:w-2/3 flex flex-col gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className={`group relative p-10 rounded-[2rem] bg-white border ${feature.border} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
              >
                 {/* Background highlight */}
                 <div className={`absolute inset-0 ${feature.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]`} />
                 
                 <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                    <div className="shrink-0">
                       <span className="text-6xl font-serif font-bold text-black/5 group-hover:text-black/10 transition-colors block mb-4 md:mb-0">
                         {feature.id}
                       </span>
                    </div>
                    
                    <div>
                        <div className={`h-14 w-14 rounded-xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6`}>
                          <feature.icon className="h-7 w-7" />
                        </div>
                        
                        <h3 className="font-serif text-3xl font-bold text-brand-purple mb-4 group-hover:text-black transition-colors">
                          {feature.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                          {feature.description}
                        </p>
                        
                        <div className="flex items-center gap-2 font-medium text-sm uppercase tracking-wide opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                           <span className={feature.color}>Learn More</span>
                           <ArrowRight className={`h-4 w-4 ${feature.color}`} />
                        </div>
                    </div>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
