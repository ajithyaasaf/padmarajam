import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, ArrowRight, CheckCircle2, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const courses = [
  {
    id: 1,
    title: "Distance Education",
    subtitle: "UG & PG Degrees",
    description: "Recognized degrees from Manonmaniam Sundaranar University with flexible learning.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2000&auto=format&fit=crop",
    features: ["UGC Recognized", "Weekend Classes", "Digital Library Access"],
    icon: GraduationCap,
    color: "from-purple-600 to-purple-800"
  },
  {
    id: 2,
    title: "Vocational Diploma",
    subtitle: "Skill Based Training",
    description: "Job-ready vocational programs designed for immediate industry placement.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop",
    features: ["Practical Workshops", "Industry Certification", "100% Placement Support"],
    icon: Award,
    color: "from-blue-600 to-blue-800"
  },
  {
    id: 3,
    title: "Open Schooling",
    subtitle: "BOSSE Board",
    description: "Complete your secondary or senior secondary education at your own pace.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2000&auto=format&fit=crop",
    features: ["Flexible Schedule", "Credit Transfer", "Skill Subjects"],
    icon: BookOpen,
    color: "from-orange-500 to-orange-700"
  }
];

export function DistanceEducation() {
  const [activeId, setActiveId] = useState(2);

  return (
    <section className="py-24 bg-zinc-950 text-white overflow-hidden relative" id="distance">
      {/* Abstract Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4 text-brand-orange"
            >
              <Globe className="h-5 w-5 animate-spin-slow" />
              <span className="font-bold tracking-widest uppercase text-sm">Global Learning</span>
            </motion.div>

            <h2 className="font-sans text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Education Beyond <br /> Boundaries
            </h2>
            <p className="text-xl text-white font-light max-w-xl">
              Break the barriers of traditional classroom learning. Access world-class education from anywhere in the world.
            </p>
          </div>

          <Button className="hidden md:flex bg-white text-black hover:bg-white/90 rounded-full h-14 px-8 font-bold text-lg">
            Explore All Programs
          </Button>
        </div>

        {/* Expandable Cards Layout */}
        <div className="flex flex-col lg:flex-row gap-4 min-h-[600px] lg:h-[500px]">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              layout
              onClick={() => setActiveId(course.id)}
              className={cn(
                "relative rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-500 ease-in-out group",
                activeId === course.id ? "flex-[3] lg:flex-[3]" : "flex-[1] lg:flex-[1] hover:flex-[1.2]"
              )}
            >
              {/* Background Image & Overlay */}
              <div className="absolute inset-0">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-b opacity-80 transition-opacity duration-500",
                  course.color,
                  activeId === course.id ? "opacity-90" : "opacity-60 group-hover:opacity-80"
                )} />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {/* Collapsed State Icon (Only visible when not active on desktop) */}
                {activeId !== course.id && (
                  <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-md p-3 rounded-xl text-white opacity-0 lg:opacity-100 transition-opacity">
                    <course.icon className="h-6 w-6" />
                  </div>
                )}

                <motion.div layout="position">
                  <div className="bg-white/20 backdrop-blur-md w-fit px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
                    {course.subtitle}
                  </div>

                  <h3 className={cn(
                    "font-sans font-bold mb-2 transition-all duration-300 text-white",
                    activeId === course.id ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
                  )}>
                    {course.title}
                  </h3>
                </motion.div>

                <div className={cn(
                  "overflow-hidden transition-all duration-500 ease-in-out",
                  activeId === course.id ? "max-h-[300px] opacity-100 mt-4" : "max-h-0 opacity-0 lg:max-h-0"
                )}>
                  <p className="text-white/80 text-lg mb-6 max-w-lg">
                    {course.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {course.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm font-medium text-white/90">
                        <CheckCircle2 className="h-4 w-4 text-white/60" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button className="bg-white text-black hover:bg-white/90 rounded-xl font-bold">
                    View Course Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 md:hidden">
          <Button className="w-full bg-white text-black hover:bg-white/90 h-12 font-bold rounded-xl">
            Explore All Programs
          </Button>
        </div>

      </div>
    </section>
  );
}
