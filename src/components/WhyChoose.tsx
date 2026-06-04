import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

const features = [
  {
    title: "Quality Assured",
    description: "Premium PVC and HDPE pipes manufactured with 100% virgin raw materials and advanced extrusion technology in the UAE."
  },
  {
    title: "Standards Compliant",
    description: "All piping solutions conform to ISO, DIN, ASTM, BS, BS EN and NEMA international standards."
  },
  {
    title: "Wide Product Range",
    description: "Complete range of PVC, uPVC, HDPE and polyethylene pipes for every project requirement across the UAE."
  },
  {
    title: "In-House Testing",
    description: "Fully equipped quality laboratory ensuring every batch of pipes meets strict performance standards."
  }
];

export function WhyChoose() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
       <motion.div
  className="text-center mb-20"
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6 }}
>
  <h2 className="text-4xl md:text-6xl text-[#00262f] inline-block relative whitespace-nowrap">
    Why choose Arabplast
    <motion.div
      className="absolute -bottom-2 left-0 right-0 h-1 bg-[#00262f]/20"
      initial={{ scaleX: 0 }}
      animate={isInView ? { scaleX: 1 } : {}}
      transition={{ duration: 0.8, delay: 0.3 }}
    />
  </h2>
</motion.div>


        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Card */}
              <div className="bg-gradient-to-b from-white to-[#f0f0f0] rounded-3xl p-6 shadow-lg group-hover:shadow-xl transition-shadow flex flex-col flex-1">
                <h3 className="text-xl text-[#0e343d] mb-3">
                  {feature.title}
                </h3>
                <div className="w-20 h-0.5 bg-[#00262f] mb-3" />
                <p className="text-sm text-[#0e343d] leading-relaxed flex-1">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-[#4baf47]/5 -z-10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.05, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
