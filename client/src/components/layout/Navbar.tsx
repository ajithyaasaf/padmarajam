import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@assets/image_1764934886645.png";

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
    { name: "Success Stories", href: "/success-stories" },
    { name: "Campus", href: "#campus" },
  ];

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm py-4`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-3 group h-16 cursor-pointer">
             <img src={logo} alt="PRIM Logo" className="h-full w-auto object-contain" />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => 
            link.href.startsWith("#") ? (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-brand-orange transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-brand-orange after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ) : (
              <Link key={link.name} href={link.href}>
                <span className="text-sm font-medium text-foreground/80 hover:text-brand-orange transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-brand-orange after:transition-all hover:after:w-full cursor-pointer">
                  {link.name}
                </span>
              </Link>
            )
          )}
        </div>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-4">
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
                  {navLinks.map((link) => 
                    link.href.startsWith("#") ? (
                      <a
                        key={link.name}
                        href={link.href}
                        className="text-xl font-sans font-medium text-foreground hover:text-brand-orange transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link key={link.name} href={link.href}>
                        <span className="text-xl font-sans font-medium text-foreground hover:text-brand-orange transition-colors cursor-pointer">
                          {link.name}
                        </span>
                      </Link>
                    )
                  )}
                </div>
                <div className="flex flex-col gap-4 mt-auto">
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
