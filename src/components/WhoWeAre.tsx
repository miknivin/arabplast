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
          className="max-w-5xl mx-auto"
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
            From Trading Excellence to Advanced Manufacturing
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
            Arabplast Pipe Industries carries forward a legacy that began in 1987 with Brightway Trading & Power Building Materials in Abu Dhabi. In 2002, that legacy moved into manufacturing — and today, Arabplast produces a complete range of piping systems built on advanced extrusion technology, sustainable engineering, and uncompromising quality
          </p>
        </motion.div>
      </div>
    </section>
  );
}