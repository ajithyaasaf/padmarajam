import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@assets/image_1764934886645.png";

type NavLink = {
  name: string;
  href: string;
  submenu?: { name: string; href: string }[];
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { name: "About Us", href: "#about" },
    {
      name: "Courses",
      href: "#courses",
      submenu: [
        { name: "Job Portal", href: "#" }
      ]
    },
    { name: "Distance Education", href: "#distance-education" },
    { name: "Gallery", href: "#" },
    { name: "Blogs", href: "#" },
    { name: "Contact Us", href: "#" },
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
            link.submenu ? (
              <div key={link.name} className="relative group/submenu">
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-brand-orange transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-brand-orange after:transition-all hover:after:w-full"
                >
                  {link.name}
                  <ChevronDown className="h-4 w-4" />
                </a>
                <div className="absolute top-full left-0 mt-2 min-w-[200px] bg-white border border-border rounded-md shadow-lg opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-200 z-50">
                  <a
                    href={link.href}
                    className="block px-4 py-2 text-sm text-foreground/80 hover:bg-brand-orange/10 hover:text-brand-orange transition-colors"
                  >
                    View All {link.name}
                  </a>
                  {link.submenu.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-foreground/80 hover:bg-brand-orange/10 hover:text-brand-orange transition-colors"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              </div>
            ) : link.href.startsWith("#") ? (
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
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      {link.href.startsWith("#") ? (
                        <a
                          href={link.href}
                          className="text-xl font-sans font-medium text-foreground hover:text-brand-orange transition-colors"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link href={link.href}>
                          <span className="text-xl font-sans font-medium text-foreground hover:text-brand-orange transition-colors cursor-pointer">
                            {link.name}
                          </span>
                        </Link>
                      )}
                      {link.submenu && (
                        <div className="ml-4 mt-2 flex flex-col gap-2">
                          {link.submenu.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="text-base font-sans font-normal text-foreground/70 hover:text-brand-orange transition-colors"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
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
