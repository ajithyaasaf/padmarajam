import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@assets/generated_images/logo_for_prim_institute.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Courses", href: "#courses" },
    { name: "Faculty", href: "#faculty" },
    { name: "Success Stories", href: "#success" },
    { name: "Campus", href: "#campus" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-3 group">
            <div className="h-12 w-12 overflow-hidden rounded-lg">
                <img src={logo} alt="PRIM Logo" className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-lg leading-none ${isScrolled ? "text-brand-purple" : "text-brand-purple"}`}>
                PRIM
              </span>
              <span className="text-[10px] tracking-widest uppercase text-brand-blue font-medium">
                Institute of Management
              </span>
            </div>
          </a>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-brand-orange transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-brand-orange after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" className="btn-outline border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white">
            Student Login
          </Button>
          <Button className="btn-primary-action bg-brand-orange hover:bg-brand-orange/90 text-white border-none shadow-brand-orange/20 shadow-lg">
            Admissions Open
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-brand-purple" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-8 mt-8">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-xl font-serif font-medium text-foreground hover:text-brand-orange transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
                <div className="flex flex-col gap-4 mt-auto">
                  <Button variant="outline" className="w-full border-brand-purple text-brand-purple">
                    Student Login
                  </Button>
                  <Button className="w-full bg-brand-orange text-white hover:bg-brand-orange/90">
                    Admissions Open
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
