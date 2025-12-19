import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Award } from "lucide-react";

const certifications = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 }
];

export function Certifications() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-24 bg-white">
     <div className="max-w-7xl mx-auto px-4">
  {/* Title */}
  <motion.div
    className="text-center mb-20"
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-4xl md:text-5xl text-[#00262f] inline-block relative whitespace-nowrap">
      Certifications
      <motion.div
        className="absolute -bottom-2 left-0 right-0 h-1 bg-[#00262f]/20"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </h2>
  </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-[#d9d9d9] rounded-2xl aspect-square flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#e0e0e0] group-hover:to-[#d0d0d0]">
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <Award className="w-20 h-20 text-[#00262f]/30 group-hover:text-[#4baf47] transition-colors" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Text */}
        <motion.p
          className="text-center text-lg text-[#0e343d]/60 mt-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Our products meet international standards and are certified by leading quality assurance bodies
        </motion.p>
      </div>
    </section>
  );
}
