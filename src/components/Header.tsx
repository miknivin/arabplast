import imgLogo from "../assets/logo (1).png";
import { motion, AnimatePresence } from "motion/react";
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  currentPage: 'home' | 'about' | 'products' | 'services' | 'applications' | 'catalogue' | 'contact';
  onNavigate: (page: 'home' | 'about' | 'products' | 'services' | 'applications' | 'catalogue' | 'contact') => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', page: 'home' as const },
    { name: 'About us', page: 'about' as const },
    { name: 'Products', page: 'products' as const },
    { name: 'Services', page: 'services' as const },
    { name: 'Applications', page: 'applications' as const },
    { name: 'Catalogue', page: 'catalogue' as const },
    { name: 'Contact Us', page: 'contact' as const },
  ];

  const handleNavigate = (page: typeof currentPage) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-[#00262f] shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Top Bar */}
      <div className="bg-[#00262f] border-b border-[rgba(255,255,255,0.1)]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              className="flex-shrink-0 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleNavigate('home')}
            >
              <img src={imgLogo} alt="Arabplast" className="h-12 md:h-16 w-auto" />
            </motion.a>

            {/* Right side: Social Icons → Contact Info → Mobile Menu */}
            <div className="flex items-center gap-6 lg:gap-8">
              {/* Social Icons - Visible on sm and up */}
              <div className="hidden sm:flex items-center gap-3">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="w-8 h-8 md:w-10 md:h-10 bg-[#f8f7f0] rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Icon className="w-3 h-3 md:w-4 md:h-4 text-[#00262f]" />
                  </motion.a>
                ))}
              </div>

              {/* Contact Info - Only on xl and larger */}
              <div className="hidden xl:flex items-center gap-8 text-white/75">
           <motion.div
    className="flex items-center gap-3 border-l border-white/20 pl-8"
    whileHover={{ scale: 1.05 }}
  >
    <Phone className="w-5 h-5 text-[#4baf47]" />
    <div>
      <p className="text-xs">Call anytime</p>
      <a
        href="tel:+980009630"
        className="text-sm text-white hover:text-[#4baf47] transition-colors"
      >
        +98 (000) - 9630
      </a>
    </div>
  </motion.div>

  {/* Email */}
  <motion.div
    className="flex items-center gap-3 border-l border-white/20 pl-8"
    whileHover={{ scale: 1.05 }}
  >
    <Mail className="w-5 h-5 text-[#4baf47]" />
    <div>
      <p className="text-xs">Send email</p>
      <a
        href="mailto:info@arabplastpipes.com"
        className="text-sm text-white hover:text-[#4baf47] transition-colors"
      >
        info@arabplastpipes.com
      </a>
    </div>
  </motion.div>

  {/* Address */}
  <motion.div
    className="flex items-center gap-3 border-l border-white/20 pl-8"
    whileHover={{ scale: 1.05 }}
  >
    <MapPin className="w-5 h-5 text-[#4baf47]" />
    <div>
      <p className="text-xs">Visit us</p>
      <p className="text-sm text-white">
        New industrial area 1, Ajman, UAE
      </p>
    </div>
  </motion.div>

</div>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden w-10 h-10 bg-[#f8f7f0] rounded-lg flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#00262f]" />
                ) : (
                  <Menu className="w-5 h-5 text-[#00262f]" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navigation (unchanged) */}
      <nav className="bg-white hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-6 lg:gap-12 h-16">
            {navItems.map((item, index) => {
              const isActive = currentPage === item.page;

              return (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavigate(item.page)}
                  className={`${isActive ? 'text-[#00262f]' : 'text-[#c7c7c7]'
                    } hover:text-[#00262f] transition-colors relative group text-sm lg:text-base`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                  <motion.span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00262f]"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu (unchanged) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            className="md:hidden bg-white absolute top-full left-0 right-0 shadow-2xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="flex flex-col gap-1">
                {navItems.map((item, index) => {
                  const isActive = currentPage === item.page;

                  return (
                    <motion.button
                      key={item.name}
                      onClick={() => handleNavigate(item.page)}
                      className={`${isActive
                        ? 'text-white bg-[#00262f]'
                        : 'text-[#00262f] bg-white hover:bg-[#f8f7f0]'
                        } px-4 py-3 rounded-lg text-left transition-colors`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.name}
                    </motion.button>
                  );
                })}
              </div>

              <motion.div
                className="mt-6 pt-6 border-t border-gray-200 space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-3 text-[#00262f]">
                  <Phone className="w-4 h-4 text-[#4baf47]" />
                  <div>
                    <p className="text-xs text-gray-600">Call anytime</p>
                    <p className="text-sm">+ 98 (000) - 9630</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-[#00262f]">
                  <Mail className="w-4 h-4 text-[#4baf47]" />
                  <div>
                    <p className="text-xs text-gray-600">Send email</p>
                    <p className="text-sm">ambed@agrios.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-[#00262f]">
                  <MapPin className="w-4 h-4 text-[#4baf47]" />
                  <div>
                    <p className="text-xs text-gray-600">380 St Kilda Road</p>
                    <p className="text-sm">Melbourne, Australia</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4">
                  {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="w-10 h-10 bg-[#f8f7f0] rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <Icon className="w-4 h-4 text-[#00262f]" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}