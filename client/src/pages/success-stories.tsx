import { motion } from "framer-motion";
import { Play, Award, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SuccessStories() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-purple via-brand-blue to-brand-purple text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Success <span className="text-brand-orange">Stories</span>
            </h1>
            <p className="text-xl text-white/80 mb-4">
              Real students, real achievements, real transformations
            </p>
            <p className="text-base text-white/60">
              Inspiring journeys of PRIM students who've achieved excellence and shaped their careers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Story - Girl from Sivaganga */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-border/50"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Video Side */}
              <div className="relative bg-gradient-to-br from-brand-purple to-brand-blue p-8 md:p-12 flex items-center justify-center" style={{ minHeight: '500px' }}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                </div>
                <div className="relative z-10 w-full max-w-2xl rounded-2xl overflow-hidden border-4 border-white/20" style={{ paddingBottom: '56.25%', position: 'relative', height: 0 }}>
                  <iframe
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 'none',
                      borderRadius: '1rem'
                    }}
                    src="https://www.youtube.com/embed/kSeJtMnec0c?start=1&modestbranding=1"
                    title="Success Story from Sivaganga"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Story Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/30 w-fit">
                    <Award className="h-4 w-4 text-brand-orange" />
                    <span className="text-sm font-bold text-brand-orange uppercase tracking-wider">Featured Success Story</span>
                  </div>

                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-purple mb-2 leading-tight">
                      From Sivaganga to Success
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      A remarkable journey of determination and excellence
                    </p>
                  </div>

                  <p className="text-lg text-foreground/80 leading-relaxed">
                    Watch how a young woman from Sivaganga transformed her dreams into reality through PRIM's rigorous professional education. Her story is a testament to the power of quality coaching and personal determination.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-brand-purple/5 rounded-xl p-4 border border-brand-purple/10">
                      <div className="text-3xl font-bold text-brand-orange mb-1">100%</div>
                      <p className="text-sm text-muted-foreground">Exam Success</p>
                    </div>
                    <div className="bg-brand-purple/5 rounded-xl p-4 border border-brand-purple/10">
                      <div className="text-3xl font-bold text-brand-orange mb-1">180+</div>
                      <p className="text-sm text-muted-foreground">Countries Ready</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-xl font-bold text-base h-12"
                      onClick={() => {
                        const element = document.getElementById('more-stories');
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Explore More Stories
                    </Button>
                    <Button 
                      variant="outline" 
                      className="rounded-xl font-bold text-base h-12 border-brand-purple/30"
                    >
                      Get Admission Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* More Success Stories Grid */}
      <section className="py-20 bg-white" id="more-stories">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-purple mb-4">
              More Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of PRIM alumni who've achieved excellence in their professional careers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-secondary/20 rounded-2xl p-8 hover:shadow-xl hover:shadow-brand-purple/10 transition-all group cursor-pointer"
              >
                <div className="h-32 w-32 rounded-full bg-gradient-to-br from-brand-purple to-brand-blue mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-white group-hover:scale-110 transition-transform">
                  CA
                </div>
                <h3 className="text-2xl font-bold text-brand-purple text-center mb-2">
                  Excellence in Finance
                </h3>
                <p className="text-muted-foreground text-center mb-4">
                  PRIM students consistently achieve top rankings and secure prestigious positions
                </p>
                <div className="flex items-center justify-center gap-2 text-brand-orange font-semibold">
                  <TrendingUp className="h-5 w-5" />
                  <span>Success Rate: 95%+</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-brand-purple text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "3500+", label: "Successful Students" },
              { number: "95%", label: "Success Rate" },
              { number: "180", label: "Countries Reached" },
              { number: "30+", label: "Years of Excellence" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-brand-orange mb-3">
                  {stat.number}
                </div>
                <p className="text-white/80 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-brand-purple to-brand-blue text-white rounded-[2rem] p-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join PRIM and become part of our legacy of excellence. Get the professional training that transforms careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-brand-purple hover:bg-white/90 rounded-xl font-bold text-base h-12 px-8">
                Schedule a Counseling Session
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 rounded-xl font-bold text-base h-12 px-8"
              >
                View All Programs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
