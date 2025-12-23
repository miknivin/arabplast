import { motion, AnimatePresence } from "motion/react";
import { useInView } from "./hooks/useInView";
import { useState, useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Thomas",
    text: "I recently ordered products from Arabplast Factory and was very impressed with their timely delivery. The entire process was smooth, and my order arrived right on schedule. The products were well-packaged and in perfect condition. Their commitment to prompt delivery truly sets them apart. Highly recommended for reliable and timely service!",
    rating: 5,
  },
  {
    name: "John Smith",
    text: "Outstanding quality and excellent customer service. The team at Arabplast went above and beyond to meet our project requirements. The pipes and fittings exceeded our expectations in terms of durability and performance",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    text: "We've been using Arabplast products for over 5 years now. Their consistency in quality and competitive pricing makes them our go-to supplier for all piping needs. Highly professional team!",
    rating: 5,
  }
];

export function Testimonials() {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Refs for wheel throttling and touch swipe detection
  const lastWheelTime = useRef(0);
  const touchStartX = useRef<number | null>(null);

  // Mouse wheel navigation (desktop)
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();

    const now = Date.now();
    if (now - lastWheelTime.current < 300) return;
    lastWheelTime.current = now;

    if (e.deltaY > 0) {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  // Touch swipe handlers (mobile/tablet)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;

    const touchEndX = e.touches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (Math.abs(diffX) > 50) {
      e.preventDefault();
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      } else {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      }
    }

    touchStartX.current = null;
  };

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl text-[#00262f] inline-block relative whitespace-nowrap">
            What Our Clients Say
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-[#00262f]/20"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <div
          className="max-w-4xl mx-auto relative"
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="bg-gradient-to-br from-white to-[#e5e5e5] rounded-2xl md:rounded-3xl p-8 md:p-14 shadow-xl cursor-pointer select-none touch-pan-y text-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.01 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-2xl md:text-3xl font-semibold text-[#00262f] mb-4">
                  {testimonials[currentIndex].name}
                </h3>

                {/* Star Rating */}
                <div className="flex gap-1 md:gap-2 mb-4 md:mb-6 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                    >
                      <Star
                        className={`w-5 h-5 md:w-6 md:h-6 ${i < testimonials[currentIndex].rating
                          ? "fill-[#EBA330] text-[#EBA330]"
                          : "fill-[#CFCFCF] text-[#CFCFCF]"
                          }`}
                      />
                    </motion.div>
                  ))}
                </div>

                <p className="text-lg md:text-2xl text-[#00262f] leading-relaxed italic">
                  "{testimonials[currentIndex].text}"
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-8 md:mt-12">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                  ? "w-6 md:w-8 bg-[#00262f]"
                  : "w-2 bg-[#00262f]/30 hover:bg-[#00262f]/50"
                  }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}