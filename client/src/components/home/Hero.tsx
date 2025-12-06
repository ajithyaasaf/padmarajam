import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    <section className="relative w-full bg-background overflow-hidden md:py-8">
      <div className="md:container md:mx-auto">
        {/* Main Slider */}
        <Carousel
          plugins={[plugin.current]}
          className="w-full md:rounded-3xl md:overflow-hidden md:shadow-2xl"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="-ml-0">
            {slides.map((slide) => (
              <CarouselItem key={slide.id} className="pl-0">
                <div className="relative w-full aspect-[9/16] md:aspect-[16/9]">
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
      </div>
    </section>
  );
}
