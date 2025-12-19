import { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ChevronRight } from "lucide-react";

const categories = [
  { id: "pvc", name: "PVC/UPVC Pipe and Fittings" },
  { id: "ppr", name: "PPR Pipes and Fittings" },
  { id: "poly", name: "Polyethelyne Pipes and Fittings" },
  { id: "spacers", name: "Spacers" },
  { id: "glue", name: "Power Bond / PVC Glue" }
];

const productsByCategory = {
  pvc: [
    {
      title: "Pressure Pipes (uPVC)",
      description: " Manufactured in sizes from 20mm to 450mm, suitable for water supply, irrigation, and industrial gas systems, with pressure ratings from 4 to 16 bar",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      standards: ["ISO 161/1", "Din 8061/62", "BS 3505", "BSEN 1452-2:2009"]
    },
    {
      title: "Soil, Waste & Drainage Pipes (uPVC)",
      description: " Designed for above-ground soil and waste systems and underground sewer and drainage applications, available from 1¼ inch to 16 inch",
      image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      standards: ["ISO 161/1", "Din 8061/62", "BS 3505", "BSEN 1452-2:2009"]
    },
    {
      title: "Duct Pipes",
      description: "PVC duct pipes are specifically designed for electrical and telecommunication cable protection. These rigid pipes provide excellent mechanical protection for cables in underground and above-ground installations. Their smooth interior surface allows for easy cable pulling, while the robust exterior protects against physical damage and environmental factors.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      standards: ["ISO 161/1", "Din 8061/62", "BS 3505"]
    },
    {
      title: "Duct Pipe Fittings",
      description: "PVC duct pipe fittings complement our duct pipe range, providing complete solutions for cable management systems. Available in various configurations including bends, junctions, and couplers, these fittings ensure seamless cable routing and protection throughout your installation.",
      image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      standards: ["ISO 161/1", "Din 8061/62", "BS 3505"]
    },
    {
      title: "Drainage Pipes (above ground) (Grey)",
      description: "PVC drainage pipes are engineered for efficient wastewater management in residential and commercial buildings. The grey color-coded pipes are specifically designed for above-ground drainage systems, offering excellent chemical resistance and durability for long-term performance.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      standards: ["ISO 161/1", "Din 8061/62", "BSEN 1452-2:2009"]
    }
  ],
  ppr: [
    {
      title: "PPR Hot & Cold Water Pipes",
      description: "PPR pipes are ideal for hot and cold water distribution systems in residential and commercial buildings. Made from polypropylene random copolymer, these pipes offer excellent temperature resistance, durability, and hygiene standards for potable water applications.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      standards: ["DIN 8077", "DIN 8078", "ISO 15874"]
    },
    {
      title: "PPR Pipe Fittings",
      description: "Our comprehensive range of PPR fittings includes elbows, tees, couplers, and adapters designed for heat fusion welding. These fittings ensure leak-free joints and maintain the integrity of your plumbing system for decades.",
      image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      standards: ["DIN 8077", "DIN 8078", "ISO 15874"]
    }
  ],
  poly: [
    {
      title: "HDPE Pipes",
      description: "High-Density Polyethylene pipes offer superior flexibility and impact resistance for water supply, gas distribution, and industrial applications. These pipes are lightweight, corrosion-resistant, and suitable for underground installations.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      standards: ["ISO 4427", "DIN 8074", "ASTM D3035"]
    },
    {
      title: "PE Fittings",
      description: "Polyethylene fittings are designed for butt fusion, electrofusion, or mechanical jointing methods. Available in various configurations to suit different installation requirements and pressure ratings.",
      image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      standards: ["ISO 4427", "DIN 8074"]
    }
  ],
  spacers: [
    {
      title: "Concrete Spacers",
      description: "High-quality plastic spacers designed to maintain proper concrete cover for reinforcement bars. These spacers ensure structural integrity and longevity of concrete structures by preventing steel corrosion.",
      image: "https://images.unsplash.com/photo-1722440814333-51292da1c59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwc3BhY2VycyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjQ5Mjc4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      standards: ["BS 7973", "EN 13670"]
    },
    {
      title: "Rebar Spacers",
      description: "Durable plastic rebar spacers available in various heights and load capacities. Suitable for walls, slabs, beams, and columns to maintain accurate reinforcement positioning during concrete pouring.",
      image: "https://images.unsplash.com/photo-1722440814333-51292da1c59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwc3BhY2VycyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjQ5Mjc4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      standards: ["BS 7973", "EN 13670"]
    }
  ],
  glue: [
    {
      title: "PVC Solvent Cement",
      description: "Professional-grade PVC solvent cement formulated for strong, permanent joints in PVC pipe systems. Fast-setting formula ensures quick installation while maintaining superior bond strength and chemical resistance.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGhlc2l2ZSUyMGdsdWV8ZW58MXx8fHwxNzY0OTI3ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      standards: ["ASTM D2564", "BS 6209"]
    },
    {
      title: "Power Bond Adhesive",
      description: "High-performance adhesive suitable for bonding PVC, UPVC, and other plastic materials. Provides excellent adhesion, water resistance, and long-lasting durability for various plumbing and construction applications.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGhlc2l2ZSUyMGdsdWV8ZW58MXx8fHwxNzY0OTI3ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      standards: ["ASTM D2564", "ISO 9001"]
    }
  ]
};

const relatedProducts = [
  {
    title: "Pressure Pipes",
    image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Spacers",
    image: "https://images.unsplash.com/photo-1722440814333-51292da1c59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwc3BhY2VycyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjQ5Mjc4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Pressure Pipes",
    image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Spacers",
    image: "https://images.unsplash.com/photo-1722440814333-51292da1c59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwc3BhY2VycyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjQ5Mjc4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

interface ProductsProps {
  onViewDetail?: (productName: string) => void;
}

export function Products({ onViewDetail }: ProductsProps) {
  const [activeCategory, setActiveCategory] = useState("pvc");
  const { ref: categoriesRef, isInView: categoriesInView } = useInView({ threshold: 0.2 });
  const { ref: productsRef, isInView: productsInView } = useInView({ threshold: 0.1 });
  const { ref: relatedRef, isInView: relatedInView } = useInView({ threshold: 0.2 });

  const handleViewMore = (productName: string) => {
    if (onViewDetail) {
      onViewDetail(productName);
    }
  };

  // Get products for the active category
  const currentProducts = productsByCategory[activeCategory as keyof typeof productsByCategory] || [];

return (
    <div className="bg-white">
      {/* Category Tabs */}
      <section ref={categoriesRef} className="pt-32 md:pt-40 lg:pt-44 pb-8 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Mobile: Vertical Stack - Unchanged */}
          <div className="md:hidden flex flex-col gap-3" style={{ marginTop: 55 }}>
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-2xl transition-all text-left ${
                  activeCategory === category.id
                    ? 'bg-[rgba(14,52,61,0.75)] text-white'
                    : 'bg-[rgba(14,52,61,0.1)] text-[#878680]'
                }`}
                style={{
                  fontFamily: 'Roboto, sans-serif',
                  fontWeight: 500,
                  fontSize: '18px',
                  lineHeight: '23px'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Desktop/Tablet: Horizontal Scrollable Tags in One Row */}
          <div 
            className="hidden md:block"
            style={{
              overflowX: 'auto',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none', /* Firefox */
              msOverflowStyle: 'none' /* IE/Edge */
            }}
          >
            <div 
              style={{
                display: 'flex',
                gap: '12px',
                padding: '8px 0',
                minWidth: 'max-content', /* Ensures all buttons stay in one row */
                marginTop: '50px'
              }}
            >
              {categories.map((category, index) => {
                const widths = {
                  pvc: { width: '314px' },
                  ppr: { width: '249px' },
                  poly: { width: '317px' },
                  spacers: { width: '93px' },
                  glue: { width: '230px' }
                };

                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    style={{
                      height: '50px',
                      borderRadius: '15px',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: activeCategory === category.id 
                        ? 'rgba(14,52,61,0.75)' 
                        : 'rgba(14,52,61,0.1)',
                      color: activeCategory === category.id ? 'white' : '#878680',
                      fontFamily: 'Roboto, sans-serif',
                      fontWeight: 500,
                      fontSize: '20px',
                      lineHeight: '23px',
                      ...widths[category.id as keyof typeof widths]
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={categoriesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: activeCategory === category.id
                        ? 'rgba(14,52,61,0.85)'
                        : 'rgba(14,52,61,0.15)'
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {category.name}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Hide scrollbar visually */}
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {/* Active Category Indicator */}
          <motion.div
            className="mt-6 text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-[#0e343d]/60">
              Showing products for:{" "}
              <span className="font-semibold text-[#0e343d]">
                {categories.find(c => c.id === activeCategory)?.name}
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products List & Related Products - unchanged */}
      <section ref={productsRef} className="pb-16">
        <div className="max-w-7xl mx-auto px-4 space-y-8">
          {currentProducts.map((product, index) => (
            /* ... your existing product card code ... */
            <motion.div
              key={index}
              className="bg-[rgba(217,217,217,0.25)] rounded-3xl p-8 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={productsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <motion.div className="flex-shrink-0" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <div className="w-60 h-52 rounded-2xl overflow-hidden">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                  </div>
                </motion.div>
                <div className="flex-1">
                  <motion.h3 className="text-3xl text-[#00262f] mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={productsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}>
                    {product.title}
                  </motion.h3>
                  <motion.p className="text-sm text-[#0e343d] leading-relaxed mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={productsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}>
                    {product.description}
                  </motion.p>
                  <div className="flex flex-wrap items-center gap-3">
                    <motion.button
                      onClick={() => handleViewMore(product.title)}
                      className="bg-[#0e343d] text-white px-8 py-3 rounded-2xl flex items-center gap-2 group"
                      whileHover={{ scale: 1.05, backgroundColor: "#00262f" }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={productsInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    >
                      View more
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                    {product.standards.map((standard, stdIndex) => (
                      <motion.div
                        key={stdIndex}
                        className="border border-[#00262f] rounded-2xl px-4 py-2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={productsInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.5 + stdIndex * 0.05 }}
                        whileHover={{ scale: 1.1, borderColor: "#0e343d" }}
                      >
                        <span className="text-sm text-[#00262f]">{standard}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Related Products */}
      <section ref={relatedRef} className="py-16 bg-white">
     <div className="max-w-7xl mx-auto px-4">
  <motion.h2
    className="text-4xl md:text-5xl text-[#00262f] mb-12 whitespace-nowrap text-center"
    initial={{ opacity: 0, y: 30 }}
    animate={relatedInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6 }}
  >
    Related Products
  </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-lg overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={relatedInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
              >
                <div className="p-4">
                  <motion.h3
                    className="text-2xl text-[#00262f] mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    {product.title}
                  </motion.h3>

                  <motion.div
                    className="w-full h-52 rounded-2xl overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}