import { motion } from "framer-motion";

export function CareerOpportunities() {
    const companies = [
        { name: "Google", logo: "/images/Career Opportunities/Google.webp" },
        { name: "Microsoft", logo: "/images/Career Opportunities/Microsoft.webp" },
        { name: "Amazon", logo: "/images/Career Opportunities/Amazon.webp" },
        { name: "Apple", logo: "/images/Career Opportunities/Apple.webp" },
        { name: "Accenture", logo: "/images/Career Opportunities/Accecenture.webp" },
        { name: "Audi", logo: "/images/Career Opportunities/Audi.webp" },
        { name: "Mercedes-Benz", logo: "/images/Career Opportunities/Benz.webp" },
        { name: "Tata", logo: "/images/Career Opportunities/Tata.webp" },
        { name: "Aditya Birla", logo: "/images/Career Opportunities/Aditya Birla.webp" },
        { name: "Axis Bank", logo: "/images/Career Opportunities/Axis Bank.webp" },
        { name: "HP", logo: "/images/Career Opportunities/hp.webp" },
        { name: "Nivea", logo: "/images/Career Opportunities/Nivea.webp" },
    ];

    return (
        <section id="careers" className="py-16 md:py-24 bg-secondary/10">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-purple mb-3">
                        Career Opportunities
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Our students work at world's leading organizations
                    </p>
                </div>

                {/* Company Logos Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {companies.map((company, index) => (
                        <motion.div
                            key={company.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="bg-white border border-border rounded-lg p-6 flex items-center justify-center hover:shadow-md transition-shadow duration-300 group"
                        >
                            <img
                                src={company.logo}
                                alt={company.name}
                                className="max-w-full h-12 object-contain transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:scale-105"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Text */}
                <div className="text-center mt-12">
                    <p className="text-sm text-muted-foreground">
                        And many more 100+ companies across the globe
                    </p>
                </div>
            </div>
        </section>
    );
}
