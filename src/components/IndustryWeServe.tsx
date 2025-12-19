import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import imgBuilding from "../assets/3ebb00a32bb648e73a23eaa0a9161e1c93bb93a8.png";
import imgCivil from "../assets/f7a61e7b77bdf7a50a89a5d841343a2ba21a8c9e.png";
import imgFactories from "../assets/c9319e053880dc1ce5d96dcb6e11793f16dca2b1.png";
import imgInfrastructure from "../assets/dfb0d002b8cfc34d06f771e442be890e434bab4f.png";
import imgFirefighting from "../assets/a5c10229ef75135d7a32a40e168bf8f3961d3995.png";
import imgAgriculture from "../assets/95a8295c9758180cec56e4d6d7960464d75cb322.png";

const industries = [
  {
    title: "Building & Construction",
    description: "We provide high-quality pipes and fittings in UAE for residential and commercial buildings.",
    image: imgBuilding
  },
  {
    title: "Civil & Landscaping",
    description: "Our durable PVC pipes other piping systems support various civil engineering and landscaping projects",
    image: imgCivil
  },
  {
    title: "Factories & Industries",
    description: "Our plastic piping solutions have versatile factory and industrial applications across Dubai and UAE.",
    image: imgFactories
  },
  {
    title: "Infrastructure Piping",
    description: "We deliver advanced piping solutions for the development & maintenance of infrastructure.",
    image: imgInfrastructure
  },
  {
    title: "Firefighting",
    description: "Our FM -approved pipes and fittings are manufactured to meet the safety standards requirements.",
    image: imgFirefighting
  },
  {
    title: "Agriculture & Irrigation",
    description: "We are reliable plastic pipe supplier in UAE optimizing water usage and agricultural productivity.",
    image: imgAgriculture
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
      Industry we serve
      <motion.div
        className="absolute -bottom-2 left-0 right-0 h-1 bg-[#00262f]/20"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </h2>
  </motion.div>
</div>

    {/* Industries Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {industries.map((industry, index) => (
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
                src={industry.image}
                alt={industry.title}
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
              <h3 className="text-2xl text-[#0e343d] mb-4">
                {industry.title}
              </h3>
              <p className="text-lg text-[#0e343d]/80 leading-relaxed">
                {industry.description}
              </p>
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
