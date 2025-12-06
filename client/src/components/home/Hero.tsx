import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CheckCircle2 } from "lucide-react";
import student1 from "@assets/generated_images/portrait_of_a_female_ca_student.png";
import student2 from "@assets/generated_images/portrait_of_a_male_cma_student.png";
import student3 from "@assets/generated_images/portrait_of_a_female_acca_student.png";

// Slide Data
const slides = [
  {
    id: 1,
    desktop: "/images/hero-slide-1-desktop.jpg",
    mobile: "/images/hero-slide-1-mobile.jpg",
    alt: "ACCA - The Passport to Global Career Success",
  },
  // Placeholder for second slide as requested (using same image for now to demonstrate slider)
  {
    id: 2,
    desktop: "/images/hero-slide-1-desktop.jpg",
    mobile: "/images/hero-slide-1-mobile.jpg",
    alt: "Join the Premier Finance Education Institution",
  },
];

export function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="relative w-full bg-background overflow-hidden">
      {/* Main Slider */}
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="-ml-0">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="pl-0">
              <div className="relative w-full aspect-[16/9]">
                <picture>
                  <source media="(max-width: 767px)" srcSet={slide.mobile} />
                  <source media="(min-width: 768px)" srcSet={slide.desktop} />
                  <img
                    src={slide.desktop}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                </picture>
                {/* Gradient overlay for text legibility at the bottom if needed, 
                    though these images have text embedded. keeping it subtle. */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation Arrows */}
        <CarouselPrevious className="left-4 md:left-8 h-12 w-12 bg-white/20 hover:bg-white/40 border-none text-white backdrop-blur-sm" />
        <CarouselNext className="right-4 md:right-8 h-12 w-12 bg-white/20 hover:bg-white/40 border-none text-white backdrop-blur-sm" />
      </Carousel>

      {/* Bottom Floating Stats Section - Overlaying the bottom of the hero */}
      <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1/3 md:translate-y-0 md:bottom-8 lg:bottom-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto drop-shadow-2xl">
            {/* 1. LEFT PANEL */}
            <div className="hidden md:flex bg-white/90 backdrop-blur-md border border-white/50 p-6 md:p-6 rounded-l-[2rem] flex-1 w-full md:w-auto text-right pr-12 shadow-sm items-center justify-end">
              <div>
                <h3 className="font-serif font-bold text-xl text-brand-purple mb-0.5">
                  Shaping Finance Leaders
                </h3>
                <p className="text-muted-foreground text-sm">
                  Global recognition, local excellence
                </p>
              </div>
            </div>

            {/* 2. CENTER HUB (Floating Bridge) */}
            <div className="z-30 -my-6 md:my-0 md:-mx-8 shrink-0 relative">
              <div className="bg-white p-2 rounded-full shadow-xl flex items-center gap-1 border-4 border-white/50">
                <div className="flex -space-x-4">
                  <img
                    src={student1}
                    className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-sm"
                    alt="Avatar"
                  />
                  <img
                    src={student2}
                    className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-sm"
                    alt="Avatar"
                  />
                  <img
                    src={student3}
                    className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-sm"
                    alt="Avatar"
                  />
                </div>
                {/* Badge */}
                <div className="w-14 h-14 rounded-full border-4 border-white bg-gradient-to-br from-brand-orange to-red-500 text-white flex items-center justify-center font-bold text-md shadow-md relative z-10">
                  10k+
                </div>
              </div>
            </div>

            {/* 3. RIGHT PANEL */}
            <div className="hidden md:flex bg-white/90 backdrop-blur-md border border-white/50 p-6 md:p-6 rounded-r-[2rem] flex-1 w-full md:w-auto text-left pl-12 shadow-sm items-center">
              <div className="flex flex-col items-start">
                <div className="flex gap-2 items-center text-yellow-500 mb-0.5">
                  <CheckCircle2 className="h-5 w-5 fill-current" />
                  <span className="font-bold text-brand-purple text-lg">
                    Verified Excellence
                  </span>
                </div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  Join the community
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
