import { motion } from "motion/react";
import imgLogo from "../assets/logo (1).png";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  Send,
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
    <footer className="bg-[#00262f] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a className="inline-block mb-6 cursor-pointer" onClick={() => handleNavigation("home")}>
              <img src={imgLogo} alt="Arabplast" className="h-16 w-auto" />
            </a>

            <p className="text-[#d9d9d9] leading-relaxed mb-6">
              We specialize in manufacturing and supplying high-quality piping solutions
              for plumbing, industrial, agricultural, and infrastructure applications,
              ensuring durability, reliability, and long-term performance.
            </p>

            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center group"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon className="w-4 h-4 text-[#0E343D] group-hover:text-[#4baf47]" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Explore */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl mb-6 relative inline-block">
              Explore
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#0e343d] rounded" />
              <span className="absolute bottom-0 left-14 w-1 h-1 bg-[#0e343d] rounded-full" />
            </h3>

           <ul className="space-y-3 text-[#d9d9d9]">
  {[
    { label: "About", page: "about" },
    { label: "Services", page: "services" },
    { label: "Our Projects", page: "applications" },
    { label: "Latest News", page: "catalogue" },
    { label: "Contact", page: "contact" },
  ].map((item) => (
    <li key={item.label}>
      <button
        onClick={() => handleNavigation(item.page as any)}
        className="hover:text-white transition-colors text-left"
      >
        {item.label}
      </button>
    </li>
  ))}
</ul>

          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl mb-6 relative inline-block">
              Contact
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#0e343d] rounded" />
              <span className="absolute bottom-0 left-14 w-1 h-1 bg-[#0e343d] rounded-full" />
            </h3>
<div className="space-y-4">
  <div className="flex gap-3">
    <Phone className="w-4 h-4 text-[#EEC044]" />
    <a
      href="tel:6668880000"
      className="text-[#d9d9d9] hover:text-white transition-colors"
    >
      666 888 0000
    </a>
  </div>

  <div className="flex gap-3">
    <Mail className="w-4 h-4 text-[#EEC044]" />
    <a
      href="mailto:info@arabplastpipes.com"
      className="text-[#d9d9d9] hover:text-white transition-colors"
    >
      info@arabplastpipes.com
    </a>
  </div>
</div>

          </motion.div>

          {/* Address + Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl mb-6 relative inline-block">
              Address
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#0e343d] rounded" />
              <span className="absolute bottom-0 left-14 w-1 h-1 bg-[#0e343d] rounded-full" />
            </h3>

            <div className="flex gap-3 text-[#d9d9d9] mb-6">
              <MapPin className="w-4 h-4 text-[#EEC044]" />
              <span>
                New industrial area 1,<br />
                Ajman, UAE
              </span>
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-[#d9d9d9] mb-3">Subscribe to our newsletter</p>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full px-5 py-3 pr-14 rounded-lg bg-white text-[#00262f] placeholder-[#878680] focus:outline-none focus:ring-2 focus:ring-[#4baf47]"
                />
                <motion.button
                  className="absolute right-0 top-0 h-full px-4 bg-[#0e343d] rounded-r-lg hover:bg-[#4baf47]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-4 h-4 text-white" />
                </motion.button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0e343d] py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#d9d9d9] text-sm">
            <span>
              © All Copyright 2024 by <span className="text-white">shawonetc Themes</span>
            </span>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white">Terms of Use</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
