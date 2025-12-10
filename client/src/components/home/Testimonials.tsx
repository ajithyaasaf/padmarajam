import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, CheckCircle } from "lucide-react";
import student1 from "@assets/generated_images/portrait_of_a_female_ca_student.png";
import student2 from "@assets/generated_images/portrait_of_a_male_cma_student.png";
import student3 from "@assets/generated_images/portrait_of_a_female_acca_student.png";

const reviews = [
  {
    name: "Priya Sundaram",
    course: "Chartered Accountant",
    image: student1,
    text: "The library environment at PRIM was crucial for my CA Final preparation. The mentors didn't just teach; they guided me through the toughest phases.",
    rating: 5,
    year: "2023 Batch"
  },
  {
    name: "Arjun Mehta",
    course: "CMA US",
    image: student2,
    text: "Passing CMA in my first attempt seemed impossible until I joined PRIM. The structured approach and mock exams gave me the confidence I needed.",
    rating: 5,
    year: "2024 Batch"
  },
  {
    name: "Lakshmi Narayan",
    course: "ACCA",
    image: student3,
    text: "PRIM provided the perfect balance of academic rigor and practical insights. The faculty's industry experience made all the difference.",
    rating: 5,
    year: "2023 Batch"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-brand-purple/5 overflow-hidden" id="success">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-brand-purple mb-4">
              We Let Our Results Speak.
            </h2>
            <p className="text-lg text-muted-foreground">
              Join hundreds of successful professionals who started their journey at PRIM.
            </p>
          </div>
          
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-border/50">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">4.8/5 on Google Reviews</span>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="border-none shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                    <CardContent className="p-0">
                      <div className="relative h-64 overflow-hidden">
                         <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/80 to-transparent z-10" />
                        <img 
                          src={review.image} 
                          alt={review.name} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        
                        {/* Pass Certificate Badge Simulation */}
                        <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-xs font-bold text-brand-purple uppercase tracking-wide">Exam Passed</span>
                        </div>
                      </div>
                      
                      <div className="p-6 bg-white relative">
                        <Quote className="absolute top-6 right-6 h-8 w-8 text-brand-purple/10" />
                        
                        <div className="mb-4">
                          <h3 className="font-sans text-xl font-bold text-brand-purple">{review.name}</h3>
                          <p className="text-sm text-brand-orange font-medium">{review.course}</p>
                          <p className="text-xs text-muted-foreground mt-1">{review.year}</p>
                        </div>
                        
                        <p className="text-muted-foreground text-sm leading-relaxed italic">
                          "{review.text}"
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-8 pr-4">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
