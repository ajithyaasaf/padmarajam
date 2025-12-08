import { CheckCircle2 } from "lucide-react";
import student1 from "@assets/generated_images/portrait_of_a_female_ca_student.png";
import student2 from "@assets/generated_images/portrait_of_a_male_cma_student.png";
import student3 from "@assets/generated_images/portrait_of_a_female_acca_student.png";

export function StatsBar() {
  return (
    <section className="w-full bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto">
          {/* 1. LEFT PANEL */}
          <div className="hidden md:flex bg-white border border-border p-6 md:p-6 rounded-l-[2rem] flex-1 w-full md:w-auto text-right pr-12 shadow-sm items-center justify-end">
            <div>
              <h3 className="font-serif font-bold text-xl text-brand-purple mb-0.5">
                30+ Years of Excellence
              </h3>
              <p className="text-muted-foreground text-sm">
                Leading coaching institute in TN
              </p>
            </div>
          </div>

          {/* 2. CENTER HUB (Floating Bridge) */}
          <div className="z-10 -my-6 md:my-0 md:-mx-8 shrink-0 relative">
            <div className="bg-white p-2 rounded-full shadow-xl flex items-center gap-1 border-4 border-white">
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
                3.5k+
              </div>
            </div>
          </div>

          {/* 3. RIGHT PANEL */}
          <div className="hidden md:flex bg-white border border-border p-6 md:p-6 rounded-r-[2rem] flex-1 w-full md:w-auto text-left pl-12 shadow-sm items-center">
            <div className="flex flex-col items-start">
              <div className="flex gap-2 items-center text-yellow-500 mb-0.5">
                <CheckCircle2 className="h-5 w-5 fill-current" />
                <span className="font-bold text-brand-purple text-lg">
                  ISO Certified
                </span>
              </div>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                Recognized by IAF Australia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
