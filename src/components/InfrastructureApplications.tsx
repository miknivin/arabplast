import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "./hooks/useInView";

import imgWaterSupply from "../assets/infrastructure/Water Supply & Plumbing.png";
import imgIrrigation from "../assets/infrastructure/Agricultural & Irrigation.png";
import imgSoilWaste from "../assets/infrastructure/Soil & Waste Systems.png";
import imgSewerage from "../assets/infrastructure/Sewerage & Underground Drainage.png";
import imgTelecom from "../assets/infrastructure/Electrical & Telecom Industry.png";
import imgIndustrial from "../assets/infrastructure/Industrial & Chemical Applications.png";

const items = [
  {
    title: "Water Supply &\nPlumbing",
    image: imgWaterSupply,
  },
  {
    title: "Agricultural &\nIrrigation",
    image: imgIrrigation,
  },
  {
    title: "Soil & Waste\nSystems",
    image: imgSoilWaste,
  },
  {
    title: "Sewerage &\nUnderground Drainage",
    image: imgSewerage,
  },
  {
    title: "Electrical & Telecom\nIndustry",
    image: imgTelecom,
  },
  {
    title: "Industrial & Chemical\nApplications",
    image: imgIndustrial,
  },
];

export function InfrastructureApplications() {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.2 });
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktop = windowWidth >= 1024;
  const itemsPerPage = windowWidth >= 640 ? (isDesktop ? 6 : 3) : 1;
  const maxIndex = Math.max(0, items.length - itemsPerPage);

  // If index is out of bounds after window resize, reset it
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerPage, maxIndex, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Auto-play for mobile/tablet slider
  useEffect(() => {
    if (isDesktop || maxIndex <= 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(interval);
  }, [isDesktop, maxIndex]);

  const visibleItems = isDesktop
    ? items
    : items.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section
      ref={sectionRef}
      className="bg-white relative overflow-hidden select-none"
      style={{ paddingTop: "80px", paddingBottom: "160px" }}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-[#00262f] font-bold inline-block relative">
            Infrastructure Applications
            <motion.div
              className="absolute -bottom-3 left-0 right-0 h-1 bg-[#00262f]/20"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h2>
        </motion.div>

        {/* Desktop View: Single static row with vertical dividers */}
        {isDesktop ? (
          <div className="flex flex-row flex-nowrap justify-between divide-x divide-gray-200 py-6">
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="flex-1 flex flex-col items-center justify-center p-4 text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="w-20 h-20 mb-6 flex items-center justify-center"
                >
                  <img
                    src={item.image}
                    alt={item.title.replace("\n", " ")}
                    className="max-w-full max-h-full object-contain filter hover:brightness-110 transition-all duration-300"
                  />
                </motion.div>
                <h3 className="text-[#00262f] font-semibold text-base sm:text-lg leading-snug whitespace-pre-line group-hover:text-[#4baf47] transition-colors duration-300 min-h-[56px] flex items-center justify-center px-2">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Mobile & Tablet Slider View (Only dots navigation) */
          <div className="relative flex flex-col items-center w-full">
            <div className="w-full flex items-center justify-center">

              {/* Slider Items Container */}
              <div className="flex-1 overflow-hidden py-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-150">
                  <AnimatePresence mode="wait">
                    {visibleItems.map((item, idx) => {
                      const globalIdx = currentIndex + idx;
                      return (
                        <motion.div
                          key={globalIdx}
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -30 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col items-center justify-center p-6 text-center group"
                        >
                          <div className="w-20 h-20 mb-6 flex items-center justify-center">
                            <img
                              src={item.image}
                              alt={item.title.replace("\n", " ")}
                              className="max-w-full max-h-full object-contain filter"
                            />
                          </div>
                          <h3 className="text-[#00262f] font-semibold text-lg leading-snug whitespace-pre-line min-h-[56px] flex items-center justify-center">
                            {item.title}
                          </h3>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </div>

            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center items-center gap-2 mt-4">
              {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === dotIdx ? "w-6 bg-[#4baf47]" : "w-2.5 bg-[#00262f]/30 hover:bg-[#00262f]/50"
                    }`}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
