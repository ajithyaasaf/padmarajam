import { motion } from "framer-motion";
import { Library, Users, GraduationCap } from "lucide-react";

export function ValueStack() {
  const features = [
    {
      icon: Library,
      title: "The Goripalayam Advantage",
      description: "Located centrally on Kalpalam Road. Access our exclusive library and computer labs designed for distraction-free deep work.",
      color: "text-brand-blue",
      bg: "bg-brand-blue/10"
    },
    {
      icon: Users,
      title: "Mentorship, Not Just Teaching",
      description: "Learn from practicing CAs and industry veterans who guide you beyond the textbook with real-world insights.",
      color: "text-brand-purple",
      bg: "bg-brand-purple/10"
    },
    {
      icon: GraduationCap,
      title: "Integrated Success",
      description: "Save time with our Dual-Path Strategy: Earn your B.Com degree while preparing for your Professional exams.",
      color: "text-brand-orange",
      bg: "bg-brand-orange/10"
    }
  ];

  return (
    <section className="py-20 bg-white" id="faculty">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className={`h-20 w-20 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 transform transition-transform duration-500 hover:scale-110 hover:rotate-3 shadow-sm`}>
                <feature.icon className="h-10 w-10" />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-purple mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
