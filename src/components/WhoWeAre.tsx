import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import svgPaths from "../imports/svg-b2esuppf8h";

export function WhoWeAre() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-20 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1380 835" fill="none">
          <g opacity="0.25">
            <path d={svgPaths.p397ed300} stroke="#0E343D" opacity="0.25" />
            <path d={svgPaths.p33068700} stroke="#0E343D" opacity="0.25" />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Title */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0e343d] mb-4 inline-block relative">
            Who We Are
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-[#00262f]/20"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h2>
        </motion.div>

        {/* Main Description */}
        <motion.div
          className="max-w-5xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3
            className="text-2xl md:text-3xl lg:text-4xl leading-tight md:leading-snug text-center px-4"
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 700,
              color: 'rgba(14, 52, 61, 0.91)',
              lineHeight: '1.35'
            }}
          >
            Leading Manufacturers of Advanced Piping Solutions in the GCC
          </h3>
          <p
            className="mt-6 text-lg md:text-2xl lg:text-3xl leading-relaxed text-center px-4"
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 500,
              color: 'rgba(14, 52, 61, 0.91)',
              lineHeight: '1.35'
            }}
          >
            Arabplast has evolved from a dedicated local supplier into a powerhouse in the global piping industry. Headquartered in the UAE, our journey is defined by a commitment to expansion and excellence, serving major infrastructure markets across the Middle East, Asia, and Africa. We pride ourselves on delivering industrial-grade piping systems that set the standard for durability and performance in the toughest environments.
          </p>
        </motion.div>

        {/* Two Column Content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Regional Manufacturing */}
          <motion.div
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4
              className="text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6"
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 600,
                color: '#0E343D',
                lineHeight: '1.3'
              }}
            >
              Regional Manufacturing:
            </h4>
            <p
              className="text-base md:text-xl lg:text-2xl leading-relaxed"
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 500,
                color: '#0E343D',
                lineHeight: '1.25',
                textAlign: 'justify'
              }}
            >
              We operate a specialized pipe fittings factory in Abu Dhabi, UAE, focusing on the production of high-grade PVC, PPR, and PE systems designed for the region's unique climate and industrial needs.
            </p>
          </motion.div>

          {/* International Expansion */}
          <motion.div
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h4
              className="text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6"
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 600,
                color: '#0E343D',
                lineHeight: '1.3'
              }}
            >
              International Expansion:
            </h4>
             <p
              className="text-base md:text-xl lg:text-2xl leading-relaxed"
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 500,
                color: '#0E343D',
                lineHeight: '1.25',
                textAlign: 'justify'
              }}
            >
      Beyond the Gulf, our manufacturing footprint extends to India, where two advanced facilities bolster our production capacity, allowing us to serve markets across Asia and Africa with speed and precision.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}