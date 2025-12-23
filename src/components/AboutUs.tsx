import { motion, AnimatePresence } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Award, Recycle, Users, Shield } from "lucide-react";
import imgProfile from "../assets/781866a76e0692b0d058abd7158ad9889b24ea23.png";
import svgPaths from "../imports/svg-b2esuppf8h";
import { useState, useEffect } from "react";
import rectangleImage from "../assets/Rectangle 44.png";
import { Testimonials } from "./Testimonials";


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


export function AboutUs() {
  const [isDesktop, setIsDesktop] = useState(false);
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.2 });
  const { ref: visionRef, isInView: visionInView } = useInView({ threshold: 0.3 });
  const { ref: valuesRef, isInView: valuesInView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

      <Testimonials />
    </div>
  );
}