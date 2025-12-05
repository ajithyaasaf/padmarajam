import logo from "@assets/generated_images/logo_for_prim_institute.png";
import { Phone, MapPin, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-purple text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-white/10 rounded-lg p-1">
                <img src={logo} alt="PRIM Logo" className="h-full w-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-none text-white">
                  PRIM
                </span>
                <span className="text-xs tracking-widest uppercase text-white/60 font-medium">
                  Institute of Management
                </span>
              </div>
            </div>
            <p className="text-white/70 text-sm max-w-xs leading-relaxed">
              Run by Padmarajam Trust. Shaping financial leaders with academic discipline and professional mastery since 1995.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-white">Programs</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-white/70 hover:text-brand-orange transition-colors flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-brand-orange"></span>
                  Chartered Accountancy (CA)
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-brand-orange transition-colors flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-brand-orange"></span>
                  Cost & Management Accounting (CMA)
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-brand-orange transition-colors flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-brand-orange"></span>
                  ACCA (Global)
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-brand-orange transition-colors flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-brand-orange"></span>
                  Company Secretary (CS)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="h-5 w-5 text-brand-orange shrink-0 mt-1" />
                <span>
                  No.10, Kalpalam Road,<br />
                  Goripalayam,<br />
                  Madurai - 625002.
                </span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="h-5 w-5 text-brand-orange shrink-0" />
                <a href="tel:+919344108771" className="hover:text-white transition-colors">+91 93441 08771</a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="h-5 w-5 text-brand-orange shrink-0" />
                <a href="mailto:admissions@prim.edu.in" className="hover:text-white transition-colors">admissions@prim.edu.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>&copy; 2025 Padmarajam Institute of Management. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
