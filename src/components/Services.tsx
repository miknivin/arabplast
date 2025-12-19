import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

import { useInView } from "./hooks/useInView";

const ourServices = [
  {
    title: "Pipeline Construction & Installation",
    description: "Complete design and installation of HDPE pipelines for diverse applications.",
    image: "https://images.unsplash.com/photo-1653990831085-2b2696d31d2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXBlbGluZSUyMGNvbnN0cnVjdGlvbiUyMHdvcmtlcnN8ZW58MXx8fHwxNzY0OTI4NDg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Welding & Fabrication",
    description: "Expert welding services ensuring leak-proof joints and durable systems.",
    image: "https://images.unsplash.com/photo-1608126842524-7e10c3b18453?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxkaW5nJTIwbWV0YWwlMjBmYWN0b3J5fGVufDF8fHx8MTc2NDkyODQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Pipeline Maintenance & Repair",
    description: "Leak rectification, relocations, shutdowns, and modifications.",
    image: "https://images.unsplash.com/photo-1696853961331-22ed783d24cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXBlbGluZSUyMG1haW50ZW5hbmNlJTIwcmVwYWlyfGVufDF8fHx8MTc2NDkyODQ5Nnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Custom Solutions",
    description: "Tailored HDPE pipeline solutions to meet specific industry needs.",
    image: "https://images.unsplash.com/photo-1748255882537-cbe88b145305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwY29udHJvbCUyMGluZHVzdHJ5fGVufDF8fHx8MTc2NDkyODQ5OXww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

const whyChooseUs = [
  {
    title: "Certified Expertise",
    description: "Authorized engineers for critical operations and modifications.",
    image: "https://images.unsplash.com/photo-1615774925655-a0e97fc85c14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpZWQlMjBlbmdpbmVlciUyMGluc3BlY3Rpb258ZW58MXx8fHwxNzY0OTI4NTA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Proven Experience",
    description: "Extensive industry knowledge with advanced equipment..",
    image: "https://images.unsplash.com/photo-1759975142096-86dbd64ad327?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjBmaXZlJTIwc3RhcnxlbnwxfHx8fDE3NjQ5Mjg1MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Quality & Safety Focused",
    description: "Committed to safety, sustainability, and high-quality standards.",
    image: "https://images.unsplash.com/photo-1680281724146-b11cba719eb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ5Mjg1MDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "On-Time & Cost-Effective",
    description: "Timely project completion at competitive rates.",
    image: "https://images.unsplash.com/photo-1668678437217-ad4bcac34f32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aW1lJTIwbWFuYWdlbWVudCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2NDkyODUxNHww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function Services() {
  const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.5 });
  const { ref: infoRef, isInView: infoInView } = useInView({ threshold: 0.2 });
  const { ref: ourServicesRef, isInView: ourServicesInView } = useInView({ threshold: 0.2 });
  const { ref: whyChooseRef, isInView: whyChooseInView } = useInView({ threshold: 0.2 });
 const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

 
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 const paddingTop = windowWidth >= 768 ? 180 : 80; // Desktop: 152px, Mobile: 80px

  return (
    <div className="bg-white overflow-hidden">
      {/* Title Section */}
      <section ref={titleRef} className="pt-12 pb-8 text-center"
      style={{ paddingTop: `${paddingTop}px`, paddingBottom: "32px" }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl text-[#00262f]">Services</h1>
            <div className="mt-2 border-t-[0.5px] border-[#0e343d]" />
          </motion.div>
        </div>
      </section>

      {/* Info Section with Background */}
      <section ref={infoRef} className="relative py-14 overflow-hidden">
        {/* Decorative Wave Pattern Background */}
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          {[...Array(32)].map((_, i) => (
            <svg
              key={i}
              className="absolute"
              style={{
                left: `${-60 + i * 1.2}px`,
                top: `${20 + i * 0.5}px`,
                transform: `rotate(${i * 0.3}deg)`,
              }}
              width="1366"
              height="782"
              viewBox="0 0 1366 782"
              fill="none"
            >
              <path
                d="M1 1C300 200 600 300 1000 100C1200 0 1365 781 1365 781"
                stroke="#0e343d"
                strokeOpacity="0.25"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.h2
            className="text-4xl text-[#00262f] mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={infoInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Installation of pipes and fittings
          </motion.h2>

          <motion.p
            className="text-sm text-[#0e343d] leading-relaxed max-w-6xl mb-12"
            initial={{ opacity: 0, x: -30 }}
            animate={infoInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Power Plastic not only manufactures high-quality pipes but also provides professional installation services at the client&apos;s site, tailored to their specific requirements. Our team of highly skilled and qualified staff ensures that the installation process is carried out efficiently and effectively, meeting industry standards and exceeding client expectations. By offering comprehensive services from manufacturing to installation, Power Plastic ensures seamless integration of our products into the client&apos;s infrastructure, providing peace of mind and optimal performance for their projects.
          </motion.p>

          <motion.h2
            className="text-4xl text-[#00262f] mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={infoInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Design and Specifications
          </motion.h2>

          <motion.p
            className="text-sm text-[#0e343d] leading-relaxed max-w-6xl"
            initial={{ opacity: 0, x: -30 }}
            animate={infoInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            At Power Plastic, we pride ourselves on tailoring our products to meet the unique needs and specifications of each customer. Whether you require custom dimensions, specific materials, or specialized features, our team is dedicated to delivering solutions that perfectly align with your requirements.
          </motion.p>
        </div>
      </section>

      {/* Our Services Section */}
      <section ref={ourServicesRef} className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-4xl text-[#00262f] text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={ourServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {ourServices.map((service, index) => (
              <motion.div
                key={index}
                className="relative rounded-2xl overflow-hidden h-[270px] group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={ourServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#00262f]" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.h3
                    className="text-white text-sm leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={ourServicesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    <span className="block mb-1">{service.title}</span>
                    {service.description}
                  </motion.h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyChooseRef} className="relative py-16 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(1,50,62,0.25)] to-[rgba(255,255,255,0.25)] transform rotate-180" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.h2
            className="text-4xl text-[#00262f] text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={whyChooseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Why Choose Us?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className="relative rounded-2xl overflow-hidden h-[270px] group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={whyChooseInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#00262f]" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.h3
                    className="text-white text-sm leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={whyChooseInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    <span className="block mb-1">{item.title}</span>
                    {item.description}
                  </motion.h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
