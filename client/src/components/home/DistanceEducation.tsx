import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, ArrowRight, Laptop, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const distanceCourses = [
  {
    id: 1,
    title: "Vocational Diploma Programmes",
    description: "Skill-based training with practical learning to get you job-ready immediately.",
    icon: Award,
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a782?q=80&w=1000&auto=format&fit=crop",
    features: ["Practical Training", "Industry Skills", "Job Oriented"],
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: 2,
    title: "UG & PG Courses",
    subtitle: "Manonmaniam Sundaranar University",
    description: "Flexible online learning bridging knowledge and innovation in Tamil Nadu.",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop",
    features: ["University Degree", "Flexible Schedule", "Recognized"],
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    id: 3,
    title: "Board of Open Schooling",
    subtitle: "BOSSE & Skill Education",
    description: "Open education providing secondary, senior secondary, and skill-based courses.",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop",
    features: ["Skill Enhancement", "Open Learning", "Accessible"],
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
];

export function DistanceEducation() {
  return (
    <section className="py-24 bg-brand-purple/5 relative overflow-hidden" id="distance-education">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#6d28d9 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest">
                Flexible Learning
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-purple mb-4">
              Distance Education
            </h2>
            <p className="text-xl text-muted-foreground">
              Learn anytime, anywhere with our expert guidance and recognized distance education programs.
            </p>
          </div>
          
          <Button variant="outline" className="hidden md:flex gap-2 border-brand-purple/20 text-brand-purple hover:bg-brand-purple hover:text-white">
            View All Programs <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {distanceCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-[2rem] overflow-hidden border border-border/50 hover:border-brand-purple/30 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold ${course.color}`}>
                    <course.icon className="h-3 w-3" />
                    Distance Learning
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-4">
                  {course.subtitle && (
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                      {course.subtitle}
                    </span>
                  )}
                  <h3 className="font-serif text-2xl font-bold text-brand-purple group-hover:text-brand-orange transition-colors">
                    {course.title}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-6 line-clamp-3 flex-1">
                  {course.description}
                </p>

                {/* Features Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {course.features.map((feature) => (
                    <span key={feature} className={`text-[10px] font-bold px-2 py-1 rounded-md ${course.bgColor} ${course.color} uppercase tracking-wide`}>
                      {feature}
                    </span>
                  ))}
                </div>

                <Button className="w-full bg-white border-2 border-brand-purple/10 text-brand-purple hover:bg-brand-purple hover:text-white group-hover:border-brand-purple transition-all font-bold">
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="w-full gap-2 border-brand-purple/20 text-brand-purple">
            View All Programs <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
