import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ChevronRight } from "lucide-react";
import imgBlock1 from "../assets/blocks/block 1.png";
import imgBlock2 from "../assets/blocks/block2.webp";
import imgBlock3 from "../assets/blocks/block3.png";
import imgBlock4 from "../assets/blocks/block 4.png";
import imgBlock5 from "../assets/blocks/block 5.png";
import imgBlock6 from "../assets/blocks/block6.png";
const products = [
  {
    title: "PVC/uPVC Piping Solutions",
    description: "Arabplast PVC and uPVC pipes deliver high strength, corrosion resistance, and long service life across three core systems: Pressure Pipes for water supply and industrial use, Soil, Waste & Drainage for buildings, and Perforated & Slotted Pipes for sub-soil applications. Available in sizes from 20mm to 450mm, all products conform to ISO, DIN, ASTM, and BS international standards.",
    image: imgBlock1,
    standards: ["ISO 161/1", "Din 8061/62", "BS 3505", "BSEN 1452-2:2009"]
  },
  {
    title: "Conduit & Duct Piping Systems",
    description: "Arabplast Conduit & Duct Pipes are manufactured from high-quality PVC-U compounds, engineered to provide reliable protection and efficient routing for electrical, telecommunication, and data cabling systems. Widely used across infrastructure, commercial, and residential projects, our pipes are manufactured to Etisalat and DU network specifications and suitable for fibre-optic and CCTV cable installations. All products conform to NEMA, ASTM, BS, and EN international standards.",
    image: imgBlock2,
    standards: ["NEMA", "ASTM", "BS", "EN"]
  },
  {
    title: "Polyethylene Pipes (HDPE / MDPE / LDPE / LLDPE)",
    description: "Arabplast manufactures a complete range of polyethylene pipes — HDPE, MDPE, LDPE, and LLDPE — engineered for water supply, gas distribution, irrigation, firefighting networks, and industrial fluid transportation across the UAE. Known for excellent flexibility, corrosion resistance, and leak-free performance, our polyethylene piping systems deliver long service life with minimal maintenance. All products conform to international standards and are suitable for potable water, underground, and high-pressure applications.",
    image: imgBlock3,
    standards: ["ISO 4427", "DIN 8074", "ASTM D3035"]
  },
  {
    title: "HDPE Soil, Waste & Drainage Systems",
    description: "Arabplast manufactures HDPE soil, waste, and drainage pipes engineered for above-ground and underground drainage applications across residential, commercial, and industrial projects in the UAE. Suitable for soil, waste, and vent (SWV) piping inside buildings, underground drainage networks, and installations embedded in concrete slabs, our HDPE drainage systems deliver excellent flexibility, chemical resistance, and long service life — even in aggressive wastewater conditions. Available in a wide range of diameters, all pipes are manufactured to international drainage standards.",
    image: imgBlock4,
    standards: ["ISO 4427", "DIN 8074"]
  },
  {
    title: "Acoustic (Soundproof) Drainage System",
    description: "Arabplast manufactures Acoustic (Soundproof) Drainage Systems engineered to significantly reduce noise transmission in soil, waste, and drainage applications across the UAE. Available in two technologies — PP Silent Pipes with solid-wall polypropylene construction and HDPE Silent Pipes with advanced 3-layer mineral-reinforced polyethylene design — our soundproof piping systems deliver excellent acoustic insulation, high mechanical strength, and long service life. Ideal for high-rise apartments, hotels, hospitals, healthcare facilities, and commercial complexes where low-noise drainage is essential.",
    image: imgBlock5,
    standards: ["DIN 4109", "EN 14366"]
  },
  {
    title: "Fittings & Fabricated Products",
    description: "Arabplast offers a complete range of custom-fabricated pipe products engineered to meet specific project requirements across the UAE. Our fabrication division manufactures grease traps, gully traps, long-radius bends, sockets, couplers, flanges, adaptors, repair couplings etc — designed to match exact specifications while conforming to international standards. From standard fittings to fully bespoke piping components, every fabricated product is built with precision to integrate seamlessly into residential, commercial, and infrastructure projects.",
    image: imgBlock6,
    standards: ["ISO 9001", "BS 3505"]
  }
];

const relatedProducts = [
  {
    title: "Pressure Pipes",
    image: imgBlock1
  },
  {
    title: "Conduit Pipes",
    image: imgBlock2
  },
  {
    title: "HDPE Pipes",
    image: imgBlock3
  },
  {
    title: "Drainage Systems",
    image: imgBlock4
  }
];

interface ProductsProps {
  onViewDetail?: (productName: string) => void;
}

export function Products({ onViewDetail }: ProductsProps) {
  const { ref: productsRef, isInView: productsInView } = useInView({ threshold: 0.1 });
  const { ref: relatedRef, isInView: relatedInView } = useInView({ threshold: 0.2 });

  const handleViewMore = (productName: string) => {
    if (onViewDetail) {
      onViewDetail(productName);
    }
  };

  return (
    <div className="bg-white">
      {/* Products List */}
      <section ref={productsRef} style={{ paddingTop: '180px', paddingBottom: '64px' }}>
        <div className="max-w-7xl mx-auto px-4 space-y-8">
          {products.map((product, index) => (
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
                  {/* <div className="flex flex-wrap items-center gap-3">
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
                  </div> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Related Products */}
      {/* <section ref={relatedRef} className="py-16 bg-white">
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
      </section> */}
    </div>
  );
}