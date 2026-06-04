import { motion } from "motion/react";
import imgLogo from "../assets/logo (1).png";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
} from "lucide-react";

interface FooterProps {
  currentPage?: "home" | "about" | "products" | "services" | "applications" | "catalogue" | "contact";
  onNavigate?: (
    page: "home" | "about" | "products" | "services" | "applications" | "catalogue" | "contact"
  ) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavigation = (
    page: "home" | "about" | "products" | "services" | "applications" | "catalogue" | "contact"
  ) => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer style={{ backgroundColor: 'rgb(7, 20, 47)' }} className="text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Column 1: Logo & Info (4 cols) */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a className="inline-block mb-6 cursor-pointer" onClick={() => handleNavigation("home")}>
              <img src={imgLogo} alt="Arabplast" className="h-16 w-auto" />
            </a>

            <p className="text-white/80 leading-relaxed mb-6 text-sm max-w-sm">
              Advanced piping solutions engineered for a better tomorrow.
            </p>

            <div className="flex gap-3">
              <motion.a
                href="#"
                className="w-10 h-10 border border-white/40 rounded-full flex items-center justify-center group hover:bg-white transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-4 h-4 text-white group-hover:text-[#002B7F] transition-colors" />
              </motion.a>
            </div>
          </motion.div>

          {/* Column 2: Quick Links (2 cols) */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-bold tracking-wider text-white mb-6 uppercase">
              Quick Links
            </h3>

            <ul className="space-y-3 text-white/80 text-sm">
              {[
                { label: "Home", page: "home" },
                { label: "About Us", page: "about" },
                { label: "Products", page: "products" },
                { label: "Catalog", page: "catalogue" },
                { label: "Contact Us", page: "contact" },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNavigation(item.page as any)}
                    className="hover:text-white hover:underline transition-all text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Our Products (3 cols) */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-bold tracking-wider text-white mb-6 uppercase">
              Our Products
            </h3>

            <ul className="space-y-3 text-white/80 text-sm">
              {[
                "PVC/uPVC Piping Solutions",
                "Conduit & Duct Piping Systems",
                "Polyethylene Pipes",
                "HDPE Soil, Waste & Drainage Systems",
                "Acoustic (Soundproof) Drainage Systems",
                "Fittings & Fabricated Products"
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavigation("products")}
                    className="hover:text-white hover:underline transition-all text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact Us (3 cols) */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-sm font-bold tracking-wider text-white mb-6 uppercase">
              Contact Us
            </h3>

            <div className="space-y-4 text-white/80 text-sm">
              <div className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-white/90 mt-1 flex-shrink-0" />
                <span>
                  Industrial Area 1, Ajman,<br />
                  United Arab Emirates
                </span>
              </div>

              <div className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-white/90 flex-shrink-0" />
                <a
                  href="tel:+97167317334"
                  className="hover:text-white transition-colors"
                >
                  +971 6 731 7334
                </a>
              </div>

              <div className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-white/90 flex-shrink-0" />
                <a
                  href="mailto:info@arabplastpipes.com"
                  className="hover:text-white transition-colors"
                >
                  info@arabplastpipes.com
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div style={{ backgroundColor: 'rgb(5, 14, 33)' }} className="py-6 border-t border-white/10 text-white/60 text-xs">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
          <span>
            © 2024 Arabplast Pipe Industries. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
