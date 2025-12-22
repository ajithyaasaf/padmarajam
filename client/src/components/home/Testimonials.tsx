import { Quote, Star, Award, CheckCircle } from "lucide-react";

const reviews = [
  {
    name: "Samraj M",
    course: "CA",
    image: "/images/testimonials/SAMRAJ M.jpg",
    text: "Padmarajam Institute offers excellent CA coaching. The faculty is knowledgeable, providing clear explanations and practical examples.",
    rating: 5,
    achievement: "First Attempt"
  },
  {
    name: "Harini S",
    course: "CA Intermediate",
    image: "/images/testimonials/HARINI CA.jpg",
    text: "I passed CA Intermediate in my first attempt and am now starting my Articleship training with confidence.",
    rating: 5,
    achievement: "Articleship Started"
  },
  {
    name: "Yamini",
    course: "CMA Inter",
    image: "/images/testimonials/yamini.jpeg",
    text: "Faculty teaches with clarity, study methods are well-planned, and the infrastructure is top-notch.",
    rating: 5,
    achievement: "Top Infrastructure"
  },
  {
    name: "Vaishnavi",
    course: "CA Intermediate",
    image: "/images/testimonials/vaishnavi.jpg",
    text: "Clearing CA Intermediate in my first attempt is a proud moment. The guidance and motivation kept me focused.",
    rating: 5,
    achievement: "First Attempt"
  },
  {
    name: "Harsheni Sharma",
    course: "CA Intermediate",
    image: "/images/testimonials/HARSHENI SHARMA CA.jpg",
    text: "I cleared my CA Intermediate in my first attempt. The faculty and support helped me reach this milestone.",
    rating: 5,
    achievement: "First Attempt"
  },
  {
    name: "Priyanka M",
    course: "CA Foundation",
    image: "/images/testimonials/PRIYANKA M.jpg",
    text: "I passed CA Foundation on my first attempt, and my journey has been smooth because of excellent coaching.",
    rating: 5,
    achievement: "Foundation Cleared"
  },
  {
    name: "Ashika Gladwin A M",
    course: "ACCA",
    image: "/images/testimonials/ASHIKA GLADWIN ACCA.jpg",
    text: "ACCA Skill Level journey has been smooth. Faculty is supportive, course is structured, and learning is effective.",
    rating: 5,
    achievement: "ACCA Cleared"
  },
];

// Duplicate reviews for seamless infinite scroll
const allReviews = [...reviews, ...reviews];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/20 to-white relative overflow-hidden" id="success">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-6">
            <Award className="h-4 w-4 text-brand-orange" />
            <span className="text-sm font-bold text-brand-orange uppercase tracking-wider">
              Student Testimonials
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-brand-purple mb-4">
            Student <span className="text-brand-orange">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Hear from our successful students who achieved their dreams
          </p>

          {/* Google Rating */}
          <div className="inline-flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-md border border-border">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-foreground">4.8/5</span>
            <span className="text-sm text-muted-foreground">on Google</span>
          </div>
        </div>

        {/* Continuous Scrolling Container */}
        <div className="relative">
          {/* Gradient Overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling wrapper - pauses on hover */}
          <div className="overflow-hidden group">
            <div className="flex gap-6 animate-scroll group-hover:[animation-play-state:paused]">
              {allReviews.map((review, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[350px] md:w-[400px]"
                >
                  <div className="group/card relative bg-white rounded-2xl p-6 border border-border hover:border-brand-purple/30 hover:shadow-xl transition-all duration-300 h-full">
                    {/* Decorative corner gradient */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-purple/5 to-transparent rounded-2xl pointer-events-none" />

                    <div className="relative z-10">
                      {/* Header with Image and Badge */}
                      <div className="flex items-start gap-4 mb-4">
                        {/* Small circular image */}
                        <div className="relative flex-shrink-0">
                          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-purple/20 ring-4 ring-brand-purple/5">
                            <img
                              src={review.image}
                              alt={review.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* Check badge */}
                          <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                            <CheckCircle className="h-3 w-3 text-white" />
                          </div>
                        </div>

                        {/* Name and Achievement */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-brand-purple text-base mb-0.5 truncate">
                            {review.name}
                          </h4>
                          <p className="text-xs text-brand-orange font-semibold mb-1">
                            {review.course}
                          </p>
                          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-50 border border-green-200">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                            <span className="text-xs text-green-700 font-medium">
                              {review.achievement}
                            </span>
                          </div>
                        </div>

                        {/* Quote Icon */}
                        <Quote className="h-6 w-6 text-brand-orange/20 flex-shrink-0" />
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-sm text-foreground/70 leading-relaxed mb-4 line-clamp-3">
                        "{review.text}"
                      </p>

                      {/* Star Rating */}
                      <div className="flex items-center gap-1 pt-3 border-t border-border">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="ml-2 text-xs text-muted-foreground font-medium">
                          Excellent
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-350px * 7 - 1.5rem * 7));
          }
        }
        
        @media (min-width: 768px) {
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(calc(-400px * 7 - 1.5rem * 7));
            }
          }
        }
        
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}} />
    </section>
  );
}
