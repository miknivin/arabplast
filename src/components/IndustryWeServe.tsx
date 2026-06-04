import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import imgBlock1 from "../assets/blocks/block 1.png";
import imgBlock2 from "../assets/blocks/block2.webp";
import imgBlock3 from "../assets/blocks/block3.png";
import imgBlock4 from "../assets/blocks/block 4.png";
import imgBlock5 from "../assets/blocks/block 5.png";

const products = [
  {
    title: "PVC/uPVC Piping Solutions",
    image: imgBlock1
  },
  {
    title: "Conduit & Duct Piping Systems",
    image: imgBlock2
  },
  {
    title: "Polyethylene Pipes (HDPE / MDPE / LDPE / LLDPE)",
    image: imgBlock3
  },
  {
    title: "HDPE Soil, Waste & Drainage Systems",
    image: imgBlock4
  },
  {
    title: "Acoustic (Soundproof) Drainage Systems",
    image: imgBlock5
  }
];

export function IndustryWeServe() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-b from-white via-[rgba(0,38,47,0.05)] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title - Centered on desktop */}
        <div className="mb-20 flex justify-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl text-[#00262f] relative whitespace-nowrap">
              Our Products
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-[#00262f]/20"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </h2>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Image Container */}
                <motion.div
                  className="relative h-60 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-[#00262f]/60 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Content */}
                <motion.div
                  className="p-6 bg-white"
                  initial={{ y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl text-[#0e343d]">
                    {product.title}
                  </h3>
                </motion.div>

                {/* Hover Indicator */}
                <motion.div
                  className="h-1 bg-gradient-to-r from-[#4baf47] to-[#00262f]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
