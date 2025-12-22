import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SuccessStoryFeature() {
    return (
        <section id="success-stories" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-purple mb-3">
                        Success Stories
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Real students, real achievements
                    </p>
                </div>

                {/* Main Content Card */}
                <div className="bg-white border border-border rounded-lg overflow-hidden shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                        {/* Video Container - Takes 3 columns */}
                        <div className="lg:col-span-3 bg-gray-50 p-6 md:p-8">
                            {/* Responsive aspect ratio container (16:9) */}
                            <div className="relative w-full bg-black rounded" style={{ paddingBottom: '56.25%' }}>
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src="https://www.youtube.com/embed/kSeJtMnec0c?rel=0"
                                    title="PRIM Success Story - From Sivaganga to Success"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </div>
                        </div>

                        {/* Content Side - Takes 2 columns */}
                        <div className="lg:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                            <div className="space-y-5">
                                {/* Title */}
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-brand-purple mb-2">
                                        From Sivaganga to Success
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        A journey of determination and excellence
                                    </p>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-foreground/70 leading-relaxed">
                                    Watch how dedication and quality education transformed dreams into reality through PRIM's professional training programs.
                                </p>

                                {/* Stats - Horizontal Layout */}
                                <div className="flex gap-6 py-4 border-y border-border">
                                    <div>
                                        <div className="text-2xl font-bold text-brand-orange mb-1">30+</div>
                                        <p className="text-xs text-muted-foreground">Years Experience</p>
                                    </div>
                                    <div className="border-l border-border"></div>
                                    <div>
                                        <div className="text-2xl font-bold text-brand-purple mb-1">3.5K+</div>
                                        <p className="text-xs text-muted-foreground">Successful Students</p>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <Button
                                    className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold h-11 group"
                                >
                                    Get Admission Details
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
