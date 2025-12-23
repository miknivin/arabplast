import { motion, AnimatePresence } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Award, Recycle, Users, Shield, Star } from "lucide-react";
import imgProfile from "../assets/781866a76e0692b0d058abd7158ad9889b24ea23.png";
import svgPaths from "../imports/svg-b2esuppf8h";
import { useState, useRef,useEffect} from "react";
import rectangleImage from "../assets/Rectangle 44.png";


const values = [
  {
    icon: Award,
    title: "Quality",
    description:
      "We promise world-class quality and durability for all our plumbing pvc pipes and fittings.",
  },
  {
    icon: Recycle,
    title: "Sustainability",
    description:
      "As a plastic pipe manufacturer in the UAE, we adhere to environmentally friendly production methods and practices",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description:
      "Customer Focus: Customers are the integral force of Power Plastics. We wish to be an all-inclusive service partner.",
  },
  {
    icon: Shield,
    title: "Trustworthiness",
    description:
      "You can always expect honesty from our side regarding dealings, manufacturing plastic pipes and selling pricing range.",
  },
];

const testimonials = [
  {
    name: "Thomas",
    text: "I recently ordered products from Arabplast Factory and was very impressed with their timely delivery. The entire process was smooth, and my order arrived right on schedule. The products were well-packaged and in perfect condition. Their commitment to prompt delivery truly sets them apart. Highly recommended for reliable and timely service!",
    rating: 5,
    image: imgProfile
  },
  {
    name: "John Smith",
    text: "Outstanding quality and excellent customer service. The team at Arabplast went above and beyond to meet our project requirements. The pipes and fittings exceeded our expectations in terms of durability and performance.",
    rating: 5,
    image: imgProfile
  },
  {
    name: "Sarah Johnson",
    text: "We've been using Arabplast products for over 5 years now. Their consistency in quality and competitive pricing makes them our go-to supplier for all piping needs. Highly professional team!",
    rating: 5,
    image: imgProfile
  }
];

export function AboutUs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  // Refs for throttling wheel and detecting touch swipe
  const lastWheelTime = useRef(0);
  const touchStartX = useRef<number | null>(null);

  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.2 });
  const { ref: visionRef, isInView: visionInView } = useInView({ threshold: 0.3 });
  const { ref: valuesRef, isInView: valuesInView } = useInView({ threshold: 0.2 });
  const { ref: testimonialRef, isInView: testimonialInView } = useInView({ threshold: 0.3 });

  // Mouse wheel navigation
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

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;
    const diffX = touchStartX.current - e.touches[0].clientX;
    if (Math.abs(diffX) > 30) {
      e.preventDefault(); // Prevent page scroll during horizontal swipe
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleTouchEnd = () => {
    if (!touchStartX.current) return;

    const touchEndX = touchStartX.current; // We'll compare with last move, but simpler: use stored start
    // Actually better: store end on move or use changedTouches
    // But for simplicity, we'll rely on a separate ref or just use threshold from last move
    // Easier: add a touchEndX ref updated in move
    touchStartX.current = null;
  };

  // Improved touch end with proper diff calculation
  const handleTouchEndProper = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (Math.abs(diffX) > 50) { // Swipe threshold
      if (diffX > 0) {
        // Swiped left → next
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      } else {
        // Swiped right → previous
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      }
    }

    touchStartX.current = null;
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-16 overflow-hidden">
        {/* Background Gradient & Pattern (unchanged) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(1,50,62,0.25)] via-transparent to-[rgba(255,255,255,0.25)] rotate-180" />
        <div className="absolute top-0 left-0 w-full h-full opacity-25 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1380 835" fill="none">
            <g opacity="0.25">
              {[
                svgPaths.p397ed300,
                svgPaths.p33068700,
                svgPaths.p1de3cf00,
                svgPaths.p3cef380,
                svgPaths.pe83c800,
                svgPaths.p12c07c00,
                svgPaths.pb167400,
                svgPaths.pc3070c0,
              ].map((path, i) => (
                <motion.path
                  key={i}
                  d={path}
                  stroke="#0E343D"
                  opacity="0.25"
                  initial={{ pathLength: 0 }}
                  animate={heroInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 2, delay: i * 0.1 }}
                />
              ))}
            </g>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center"
        style={{ marginTop: isDesktop ? "70px" : "0px" }}
        >
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl text-[#00262f] inline-block relative">
              About us
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#0e343d]"
                initial={{ scaleX: 0 }}
                animate={heroInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </h1>
          </motion.div>

          <motion.div
            className="max-w-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl text-[#0e343d] leading-relaxed">
              Arabplast Pipe Industries carries forward a four-decade legacy that began in 1987 with Brightway Trading and Power Building Materials — trusted distributors in the UAE's building and piping sector. In 2002, this legacy grew into manufacturing with Power Plastic Factory, founded by two brothers who turned a small PVC bend unit into a leading pipe producer. Today, Arabplast represents the next chapter: a modern, technology-driven manufacturer delivering high-quality, sustainable PVC, UPVC, HDPE, MDPE, and LDPE pipes and fittings. Based in Ajman's New Industrial Area, we serve infrastructure, construction, water management, and industrial projects with reliable, eco-conscious solutions. Backed by advanced facilities, strict quality control, and a skilled technical team, Arabplast is committed to global standards and long-term performance. Built on trust and driven by innovation, we create piping systems that strengthen infrastructure and support a smarter, more resilient future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
     {/* Vision & Mission Section */}
      <section ref={visionRef} className="relative my-16 md:my-20 lg:my-24">
        {/* Desktop/Tablet View with Background Image */}
        <div className="hidden md:block relative min-h-[500px] lg:min-h-[600px]">
          <div className="absolute inset-0">
            <img
              src={rectangleImage}
              alt="Industrial"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/60" />
          </div>

          <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20 flex items-center">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 w-full">
              {/* Our Vision */}
              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 lg:p-10 border border-white/20 shadow-2xl"
                initial={{ opacity: 0, x: -50 }}
                animate={visionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.div
                  className="w-16 h-16 lg:w-20 lg:h-20 bg-[#4baf47] rounded-full flex items-center justify-center mb-6 lg:mb-8 mx-auto"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={visionInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                >
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </motion.div>
                
                <h2 className="text-3xl lg:text-4xl xl:text-5xl text-white mb-5 lg:mb-6 text-center">
                  Our Vision
                </h2>
                
                <motion.div
                  className="w-20 h-1 bg-[#4baf47] mx-auto mb-5 lg:mb-6"
                  initial={{ scaleX: 0 }}
                  animate={visionInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                />
                
                <p className="text-base lg:text-lg xl:text-xl text-white/90 leading-relaxed text-center">
                  To deliver durable and efficient piping
                  solutions that meet global standards and set new
                  benchmarks in reliability and performance.
                </p>
              </motion.div>

              {/* Our Mission */}
              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 lg:p-10 border border-white/20 shadow-2xl"
                initial={{ opacity: 0, x: 50 }}
                animate={visionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.div
                  className="w-16 h-16 lg:w-20 lg:h-20 bg-[#4baf47] rounded-full flex items-center justify-center mb-6 lg:mb-8 mx-auto"
                  initial={{ scale: 0, rotate: 180 }}
                  animate={visionInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                >
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </motion.div>
                
                <h2 className="text-3xl lg:text-4xl xl:text-5xl text-white mb-5 lg:mb-6 text-center">
                  Our Mission
                </h2>
                
                <motion.div
                  className="w-20 h-1 bg-[#4baf47] mx-auto mb-5 lg:mb-6"
                  initial={{ scaleX: 0 }}
                  animate={visionInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                />
                
                <p className="text-base lg:text-lg xl:text-xl text-white/90 leading-relaxed text-center">
                  To lead the region in advanced,
                  precision-engineered piping systems that power
                  infrastructure and build the future.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile View with Solid Backgrounds */}
       <div className="md:hidden space-y-8 px-4">
  {/* Our Vision - Mobile */}
  <motion.div
    className="bg-[#00262f] rounded-2xl p-6 shadow-2xl" // Solid dark blue background
    initial={{ opacity: 0, y: 30 }}
    animate={visionInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6 }}
  >
    <motion.div
      className="w-16 h-16 bg-[#4baf47] rounded-full flex items-center justify-center mb-5 mx-auto"
      initial={{ scale: 0, rotate: -180 }}
      animate={visionInView ? { scale: 1, rotate: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
    >
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    </motion.div>

    <h2 className="text-3xl text-white mb-4 text-center font-semibold">
      Our Vision
    </h2>

    <motion.div
      className="w-16 h-1 bg-[#4baf47] mx-auto mb-5 rounded-full"
      initial={{ scaleX: 0 }}
      animate={visionInView ? { scaleX: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.4 }}
    />

    <p className="text-base text-white/90 leading-relaxed text-center">
      To deliver durable and efficient piping solutions that meet global standards and set new benchmarks in reliability and performance.
    </p>
  </motion.div>

  {/* Our Mission - Mobile */}
  <motion.div
    className="bg-[#00262f] rounded-2xl p-6 shadow-2xl" // Solid dark blue background
    initial={{ opacity: 0, y: 30 }}
    animate={visionInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6 }}
  >
    <motion.div
      className="w-16 h-16 bg-[#4baf47] rounded-full flex items-center justify-center mb-5 mx-auto"
      initial={{ scale: 0, rotate: -180 }}
      animate={visionInView ? { scale: 1, rotate: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
    >
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    </motion.div>

    <h2 className="text-3xl text-white mb-4 text-center font-semibold">
      Our Mission
    </h2>

    <motion.div
      className="w-16 h-1 bg-[#4baf47] mx-auto mb-5 rounded-full"
      initial={{ scaleX: 0 }}
      animate={visionInView ? { scaleX: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.4 }}
    />

    <p className="text-base text-white/90 leading-relaxed text-center">
      To deliver durable and efficient piping solutions that meet global standards and set new benchmarks in reliability and performance.
    </p>
  </motion.div>

</div>
      </section>


      {/* Our Values */}
      <section ref={valuesRef} className="py-24 bg-[#f2f2f2]">
        {/* Values section unchanged */}
      <div className="max-w-7xl mx-auto px-4">
  <motion.div
    className="mb-20 text-center"
    initial={{ opacity: 0, y: 30 }}
    animate={valuesInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-4xl md:text-6xl text-[#00262f] inline-block relative whitespace-nowrap">
      Our Values
      <motion.div
        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#0e343d]"
        initial={{ scaleX: 0 }}
        animate={valuesInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </h2>
  </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 bg-[#0e343d] rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <value.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl text-[#0e343d] mb-3">{value.title}</h3>
                    <p className="text-lg text-[#00262f] leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section with Swipe Support */}
      <section ref={testimonialRef} className="py-16 md:py-24 bg-white">
       <div className="max-w-7xl mx-auto px-4">
  <motion.div
    className="text-center mb-12 md:mb-20"
    initial={{ opacity: 0, y: 30 }}
    animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-4xl md:text-6xl text-[#00262f] inline-block relative whitespace-nowrap">
      What Our Clients Say
      <motion.div
        className="absolute -bottom-2 left-0 right-0 h-1 bg-[#00262f]/20"
        initial={{ scaleX: 0 }}
        animate={testimonialInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </h2>
  </motion.div>

          {/* Testimonial Card with Swipe + Wheel + Dots */}
          <div
            className="max-w-4xl mx-auto relative touch-pan-y" // Allows vertical scroll outside
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEndProper}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="bg-gradient-to-br from-white to-[#e5e5e5] rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-xl select-none"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                  <motion.div
                    className="flex-shrink-0 mx-auto md:mx-0"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                  >
                    {/* <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg ring-4 ring-white">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div> */}
                  </motion.div>

                  <div className="flex-1 text-center md:text-left">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <h3 className="text-xl md:text-2xl text-[#00262f] mb-3 md:mb-4">
                        {testimonials[currentIndex].name}
                      </h3>

                      <div className="flex gap-1 md:gap-2 mb-4 md:mb-6 justify-center md:justify-start">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                          >
                            <Star
                              className={`w-5 h-5 md:w-6 md:h-6 ${
                                i < testimonials[currentIndex].rating
                                  ? "fill-[#EBA330] text-[#EBA330]"
                                  : "fill-[#CFCFCF] text-[#CFCFCF]"
                              }`}
                            />
                          </motion.div>
                        ))}
                      </div>

                      <p className="text-base md:text-xl text-[#00262f] leading-relaxed">
                        {testimonials[currentIndex].text}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots Indicator */}
            <div className="flex justify-center items-center gap-2 mt-8 md:mt-12">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
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
    </div>
  );
}