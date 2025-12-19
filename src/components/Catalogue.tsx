import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Download } from "lucide-react";
import cataloguePdf from "../assets/pdf/file-sample_150kB.pdf";

const catalogues = [
  {
    title: "Product Catalogue 2024",
    image: "https://images.unsplash.com/photo-1620887134181-fa28241f227d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwY2F0YWxvZ3VlJTIwYnJvY2h1cmV8ZW58MXx8fHwxNzY0OTI5NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    pdfUrl: cataloguePdf
  },
  {
    title: "Industrial Solutions",
    image: "https://images.unsplash.com/photo-1636247499734-893da2bcfc1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY2F0YWxvZyUyMGRlc2lnbnxlbnwxfHx8fDE3NjQ5Mjk0NzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    pdfUrl: cataloguePdf
  },
  {
    title: "Technical Specifications",
    image: "https://images.unsplash.com/photo-1699371829505-e9fdde74e869?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXBlcyUyMHByb2R1Y3QlMjBicm9jaHVyZXxlbnwxfHx8fDE3NjQ5Mjk0NzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    pdfUrl: cataloguePdf
  },
  {
    title: "Installation Guide",
    image: "https://images.unsplash.com/photo-1571727153934-b9e0059b7ab2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwY2F0YWxvZ3xlbnwxfHx8fDE3NjQ5Mjk0NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    pdfUrl: cataloguePdf
  }
];

export function Catalogue() {
  const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.5 });
  const { ref: descRef, isInView: descInView } = useInView({ threshold: 0.3 });

  // Responsive padding logic
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const paddingTop = windowWidth >= 768 ? 180 : 90; // Desktop: 152px, Mobile: 80px

  return (
    <div className="bg-white relative overflow-hidden min-h-screen">
      {/* Decorative Wave Patterns */}
      <div className="absolute inset-0 opacity-25 pointer-events-none overflow-hidden">
        <div className="absolute left-[-360px] top-[-38px] w-[1122px] h-[1978px]" style={{ transform: 'rotate(43.86deg)' }}>
          {[...Array(100)].map((_, i) => (
            <svg
              key={`wave-${i}`}
              className="absolute"
              style={{
                left: `${-254 + i * 0.1}px`,
                top: `${182 - i * 1.3}px`,
                width: `${1122 - i * 5.3}px`,
                height: `${1520 + i * 4.6}px`,
              }}
              viewBox="0 0 1122 1520"
              fill="none"
            >
              <path
                d="M1 1C200 400 400 700 700 500C900 350 1121 1519 1121 1519"
                stroke="rgba(14, 52, 61, 0.25)"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          ))}
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(1,50,62,0.125)] to-[rgba(255,255,255,0.5)] transform rotate-180 pointer-events-none" style={{ top: '502px', height: '1959px' }} />

      <div className="relative z-10">
        {/* Title Section */}
        <section ref={titleRef} style={{ paddingTop: `${paddingTop}px`, paddingBottom: "32px" }} className="text-center">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, y: 30 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl text-[#00262f]">Catalogue</h1>
              <div className="mt-2 border-t-[0.5px] border-[#0e343d] mx-auto w-24" />
            </motion.div>
          </div>
        </section>

        {/* Description Section */}
        <section ref={descRef} className="py-8 text-center">
          <div className="max-w-6xl mx-auto px-4">
            <motion.p
              className="text-xl text-[#0e343d] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={descInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Established in 1987 in Abu Dhabi, the Power Group of Companies has steadily expanded from a modest trading firm to become a prominent entity in the building materials sector within the region. Headquartered in Abu Dhabi, our operations include a PVC, PPR, PE & Pex Pipe and Fittings factory in Ajman, alongside two facilities in India. Complementing these production facilities are five sales outlets and two warehouses strategically positioned across the UAE.
            </motion.p>
          </div>
        </section>

        {/* Catalogues Grid */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-20">
              {catalogues.map((catalogue, index) => (
                <CatalogueItem key={index} {...catalogue} index={index} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

interface CatalogueItemProps {
  title: string;
  image: string;
  pdfUrl: string;
  index: number;
}

function CatalogueItem({ title, image, pdfUrl, index }: CatalogueItemProps) {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${title.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Catalogue Preview */}
      <motion.div
        className="relative w-full max-w-[480px] h-[360px] mx-auto rounded-lg overflow-hidden shadow-2xl"
        style={{ transform: 'rotate(-1.3deg)' }}
        whileHover={{
          scale: 1.02,
          rotate: 0,
          boxShadow: "0 25px 50px rgba(0,0,0,0.2)"
        }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#00262f]/90 via-[#00262f]/50 to-transparent" />

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl text-white mb-2 text-center">{title}</h3>
        </div>
      </motion.div>

      {/* Download Button */}
      <motion.div
        className="flex justify-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
      >
        <motion.button
          onClick={handleDownload}
          className="flex items-center gap-3 px-8 py-3 bg-[#0e343d] text-white rounded-2xl hover:bg-[#4baf47] transition-colors shadow-lg"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <Download className="w-5 h-5" />
          <span className="text-lg">Download Now</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
