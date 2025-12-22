import logo from "@assets/image_1764934886645.png";
import { Phone, MapPin, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-purple text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <div className="h-24 w-auto inline-block bg-white rounded-xl p-3 shadow-lg">
               <img src={logo} alt="PRIM Logo" className="h-full w-auto object-contain" />
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
            <h3 className="font-sans text-lg font-semibold mb-6 text-white">Programs</h3>
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
            <h3 className="font-sans text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="h-5 w-5 text-brand-orange shrink-0 mt-1" />
                <span>
                  No.10, Kalpalam Road,<br />
                  Goripalayam,<br />
                  Madurai - 625002.
                </span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Phone className="h-5 w-5 text-brand-orange shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+917373708771" className="hover:text-white transition-colors">+91 7373708771</a>
                  <a href="tel:+919344108771" className="hover:text-white transition-colors">+91 9344108771</a>
                  <a href="tel:+918144408771" className="hover:text-white transition-colors">+91 8144408771</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Mail className="h-5 w-5 text-brand-orange shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:padmarajam@gmail.com" className="hover:text-white transition-colors">padmarajam@gmail.com</a>
                  <a href="mailto:primpadmarajam@gmail.com" className="hover:text-white transition-colors">primpadmarajam@gmail.com</a>
                  <a href="mailto:padmarajam.balan@yahoo.com" className="hover:text-white transition-colors">padmarajam.balan@yahoo.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-lg border border-white/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.3547920869876!2d78.1245786!3d9.9357824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5c3a8b8b8b1%3A0x8b8b8b8b8b8b8b8b!2sNo.10%2C%20Kalpalam%20Road%2C%20Goripalayam%2C%20Madurai%20625002!5e0!3m2!1sen!2sin!4v1766390700000"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4 text-sm text-white/50">
            <p>&copy; 2025 Padmarajam Institute of Management. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
          <div className="text-center text-sm text-white/50 pt-4 border-t border-white/10">
            <p>Designed and developed by <a href="https://godivatech.com" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:text-white transition-colors font-medium">godivatech</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
