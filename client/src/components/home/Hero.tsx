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
    desktop: "/images/hero-slide-new-desktop.jpg",
    mobile: "/images/hero-slide-1-mobile.jpg",
    alt: "ACCA - The Passport to Global Career Success",
  },
  {
    id: 2,
    desktop: "/images/hero-slide-2-desktop.jpg",
    mobile: "/images/hero-slide-1-mobile.jpg",
    alt: "Join the Premier Finance Education Institution",
  },
];

export function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="relative w-full bg-brand-purple">
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
              {/* 
                  Using exact aspect ratio of the provided images:
                  Desktop: 1920x800 (2.4:1)
                  Mobile: 1080x1920 (9:16)
              */}
              <div className="relative w-full aspect-[9/16] md:aspect-[1920/800]">
                <picture>
                  <source media="(max-width: 767px)" srcSet={slide.mobile} />
                  <source media="(min-width: 768px)" srcSet={slide.desktop} />
                  <img
                    src={slide.desktop}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <CarouselPrevious className="left-4 md:left-8 h-12 w-12 bg-white/20 hover:bg-white/40 border-none text-white backdrop-blur-sm" />
        <CarouselNext className="right-4 md:right-8 h-12 w-12 bg-white/20 hover:bg-white/40 border-none text-white backdrop-blur-sm" />
      </Carousel>
    </section>
  );
}
