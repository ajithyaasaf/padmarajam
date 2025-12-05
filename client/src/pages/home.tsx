import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { CourseGrid } from "@/components/home/CourseGrid";
import { ValueStack } from "@/components/home/ValueStack";
import { Testimonials } from "@/components/home/Testimonials";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-brand-orange/20 selection:text-brand-orange">
      <Navbar />
      <main>
        <Hero />
        <CourseGrid />
        <ValueStack />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
