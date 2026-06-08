import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Download, FileText } from "lucide-react";
import catalogPdf from "../assets/pdf/Arabplast_catalog.pdf";

export function Downloads() {
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.3 });

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const paddingTop = windowWidth >= 768 ? 180 : 120;

  const handleDownload = async () => {
    try {
      const res = await fetch(catalogPdf, { mode: 'cors' });
      if (!res.ok) throw new Error('Network response was not ok');
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Arabplast Catalog-2026.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Download failed', err);
      // Fallback to direct link if fetch fails
      const link = document.createElement('a');
      link.href = catalogPdf;
      link.download = 'Arabplast Catalog-2026.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="bg-white relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* White Background */}
      <div
        className="absolute inset-0"
        style={{ background: "#ffffff" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="text-center" ref={heroRef}>
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(7, 20, 47, 0.06)",
                borderRadius: "100px",
                padding: "8px 20px",
                marginBottom: "24px",
                border: "1px solid rgba(7, 20, 47, 0.1)",
              }}
            >
              <FileText style={{ width: "16px", height: "16px", color: "#1d4ed8" }} />
              <span style={{ fontSize: "14px", color: "rgb(7, 20, 47)", fontWeight: 500 }}>
                Product Downloads
              </span>
            </div>
          </motion.div> */}

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl mb-6"
            style={{ fontWeight: 700, lineHeight: 1.1, color: "rgb(7, 20, 47)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Downloads
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl max-w-2xl mx-auto"
            style={{ lineHeight: 1.7, color: "#6b7280", marginBottom: "40px" }}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Download our comprehensive catalog featuring complete product specifications,
            technical data, and installation guidelines for our entire range of piping solutions.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.button
              onClick={handleDownload}
              className="group"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "18px 44px",
                background: "rgb(7, 20, 47)",
                color: "white",
                borderRadius: "14px",
                border: "none",
                fontSize: "16px",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 8px 32px rgba(7, 20, 47, 0.25)",
              }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download style={{ width: "20px", height: "20px" }} />
              Download Catalog
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
