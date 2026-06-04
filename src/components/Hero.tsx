import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import heroVideo from "../assets/0_Pipes_Tubes_1920x1080.mp4";
import posterImage from "../assets/255f8b75da8c48acb4d1529092d41378285f7e06.png";
import cataloguePdf from "../assets/pdf/Arabplast_catalogee.pdf";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-start overflow-hidden">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster={posterImage}
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#00262f]/80 to-transparent" />

        {/* Animated gradient blurs */}
        <motion.div
          className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#00262f] to-transparent opacity-70"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl xl:text-[10rem]
                 mb-6 sm:mb-8 text-white leading-none font-black tracking-tight"
            style={{
              WebkitTextStroke: "2px white",
              fontWeight: 500,
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
            }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Building stronger piping solutions
            <span className="block mt-2 sm:mt-4">for a Better Tomorrow</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 max-w-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Top-grade industrial pipes for demanding projects
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Explore Our Products - Filled Blue Button */}
            <motion.a
              href="/products"
              className="group flex flex-row items-center justify-center gap-2 px-8 py-3.5 rounded-lg shadow-lg transition-colors"
              style={{ backgroundColor: "#1a3c8f", display: "inline-flex", flexDirection: "row" as const, padding: "14px 32px" }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="text-white font-semibold text-sm">Explore Our Products</span>
              <ArrowRight className="w-4 h-4 text-white shrink-0 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            {/* Download Catalog - Outlined Button */}
            {/* <motion.a
              href={cataloguePdf}
              download="Arabplast_Catalogue.pdf"
              className="group flex flex-row items-center justify-center gap-2 px-8 py-3.5 bg-white rounded-lg border-2 border-gray-200 shadow-lg hover:bg-gray-50 transition-colors"
              style={{ display: "inline-flex", flexDirection: "row" as const, padding: "14px 32px" }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="text-gray-800 font-semibold text-sm">Download Catalog</span>
              <Download className="w-4 h-4 text-[#1a3c8f] shrink-0 group-hover:translate-y-0.5 transition-transform" />
            </motion.a> */}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1 }, y: { duration: 1.5, repeat: Infinity } }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
