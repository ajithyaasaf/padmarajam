import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import { AboutSection } from "@/components/home/AboutSection";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { CourseGrid } from "@/components/home/CourseGrid";
import { CourseBenefits } from "@/components/home/CourseBenefits";
import { ValueStack } from "@/components/home/ValueStack";
import { DistanceEducation } from "@/components/home/DistanceEducation";
import { Testimonials } from "@/components/home/Testimonials";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-brand-orange/20 selection:text-brand-orange">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <AboutSection />
        <ProcessSteps />
        <CourseGrid />
        <CourseBenefits />
        <ValueStack />
        <DistanceEducation />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
