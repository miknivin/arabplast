import { motion } from "motion/react";
import imgLogo from "../assets/logo (1).png";
import { Phone, Mail, MapPin, Linkedin, Instagram } from "lucide-react";

interface FooterProps {
  currentPage?: "home" | "about" | "products" | "downloads" | "contact";
  onNavigate?: (
    page: "home" | "about" | "products" | "downloads" | "contact"
  ) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavigation = (
    page: "home" | "about" | "products" | "downloads" | "contact"
  ) => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "Home", page: "home" as const },
    { label: "About Us", page: "about" as const },
    { label: "Products", page: "products" as const },
    { label: "Contact Us", page: "contact" as const },
  ];

  const products = [
    "PVC/uPVC Piping Solutions",
    "Conduit & Duct Piping Systems",
    "Polyethylene Pipes",
    "HDPE Soil, Waste & Drainage Systems",
    "Acoustic (Soundproof) Drainage Systems",
    "Fittings & Fabricated Products",
  ];

  return (
    <footer style={{ backgroundColor: "rgb(7, 20, 47)", fontFamily: "Inter, sans-serif" }} className="text-white">
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 24px 64px 24px' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '40px' }}>
          {/* ── Column 1: Logo + Tagline + Social ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a
              className="inline-block mb-5 cursor-pointer"
              onClick={() => handleNavigation("home")}
            >
              <img src={imgLogo} alt="Arabplast" style={{ height: "56px", width: "auto" }} />
            </a>

            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px", lineHeight: "1.7", marginBottom: "20px" }}>
              Advanced piping solutions<br />engineered for a better tomorrow.
            </p>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <motion.a
                href="https://www.instagram.com/arabplastpipes?igsh=OXkwbGV2ZzU4cHR3"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1.5px solid rgba(255,255,255,0.4)",
                }}
              >
                <Instagram style={{ width: "16px", height: "16px", color: "white" }} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/arabplast-pipe-industries/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1.5px solid rgba(255,255,255,0.4)",
                }}
              >
                <Linkedin style={{ width: "16px", height: "16px", color: "white" }} />
              </motion.a>
            </div>
          </motion.div>

          {/* ── Column 2: Quick Links ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ paddingTop: '8px' }}
          >
            <h3
              style={{
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "white",
                marginBottom: "20px",
              }}
            >
              Quick Links
            </h3>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNavigation(item.page)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "rgba(255,255,255,0.75)",
                      fontSize: "14px",
                      cursor: "pointer",
                      padding: 0,
                      textAlign: "left",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Column 3: Our Products ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3
              style={{
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "white",
                marginBottom: "20px",
              }}
            >
              Our Products
            </h3>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {products.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavigation("products")}
                    style={{
                      background: "none",
                      border: "none",
                      color: "rgba(255,255,255,0.75)",
                      fontSize: "14px",
                      cursor: "pointer",
                      padding: 0,
                      textAlign: "left",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Column 4: Contact Us ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3
              style={{
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "white",
                marginBottom: "20px",
              }}
            >
              Contact Us
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Address */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <MapPin style={{ width: "16px", height: "16px", color: "rgba(255,255,255,0.85)", flexShrink: 0, marginTop: "2px" }} />
                <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px", lineHeight: "1.6" }}>
                  Industrial Area 1, Ajman,<br />United Arab Emirates
                </span>
              </div>

              {/* Phone */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Phone style={{ width: "16px", height: "16px", color: "rgba(255,255,255,0.85)", flexShrink: 0 }} />
                <a
                  href="tel:+97167673119"
                  style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                >
                  +971 6 767 3119
                </a>
              </div>

              {/* Email */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Mail style={{ width: "16px", height: "16px", color: "rgba(255,255,255,0.85)", flexShrink: 0 }} />
                <a
                  href="mailto:info@arabplastpipes.com"
                  style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                >
                  info@arabplastpipes.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          backgroundColor: "rgb(5, 14, 33)",
          padding: "20px 24px",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", margin: 0 }}>
            © 2024 Arabplast Pipe Industries. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
