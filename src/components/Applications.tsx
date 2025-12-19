import { motion } from "motion/react";
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "./hooks/useInView";
import waterVideo from "../assets/videos/2502195_Water_Art_1920x1080.mp4";
import wasteVideo from "../assets/videos/455266_Rubbish_Garbage_1920x1080.mp4";
import rainwaterVideo from "../assets/videos/0_Red_Lanterns_Wet_Market_1920x1080.mp4";
import agricultureVideo from "../assets/videos/0_Aerial_View_Birdseye_1920x1080 (1).mp4";
import fireVideo from "../assets/videos/GettyImages-1307964140.mp4";
import industrialVideo from "../assets/videos/5336504_Coll_wavebreak_Factory_1920x1080.mp4";
import bridgeVideo from "../assets/videos/5238104_Bridge_Middle_1920x1080.mp4";
import farmVideo from "../assets/videos/0_Farm_Field_1920x1080.mp4";
import peopleVideo from "../assets/videos/5998094_People_Person_3840x2160.mp4";
import pipeVideo from "../assets/videos/7191945_Pipe_Steam_1920x1080.mp4";

// Global reference to track the currently playing video
let currentlyPlaying: HTMLVideoElement | null = null;

const applications = [
  {
    title: "Water Plumbing and Water Pipes",
    description: "Power Plastic manufactures high-quality pipes and provides professional installation services tailored to client requirements. Our skilled team ensures efficient installation meeting industry standards for optimal performance.",
    video: peopleVideo,
    align: "left"
  },
  {
    title: "Waste Handling and Control",
    description: "PVC pipes are essential for waste management in construction, used in drain systems, sewers, and wastewater conveyance. Their durability, corrosion resistance, and low maintenance make them ideal for efficient waste handling.",
    video: wasteVideo,
    align: "left"
  },
  {
    title: "Rainwater Management",
    description: "Collecting rainwater from roofs via gutters and directing it through pipes into storage tanks. Filters remove debris, making water suitable for irrigation while conserving freshwater and reducing stormwater runoff.",
    video: waterVideo,
    align: "left"
  },
  {
    title: "Agriculture",
    description: "Pipes are vital for irrigation, drainage, and fluid transport in agriculture. PVC and HDPE pipes ensure optimal water distribution, soil conservation, and controlled environments for enhanced crop cultivation.",
    video: farmVideo,
    align: "left"
  },
  {
    title: "Fire Sprinklers",
    description: "PVC and HDPE pipes distribute water in fire sprinkler systems. PVC is lightweight for smaller systems, while HDPE offers durability for high-rise buildings and industrial applications with proper installation.",
    video: rainwaterVideo,
    align: "left"
  },
  {
    title: "Industrial Use",
    description: "PVC pipes transport water and chemicals in industrial settings. HDPE handles abrasive materials in mining and wastewater treatment. PPR pipes distribute hot and cold water with leak-proof joints.",
    video: pipeVideo,
    align: "left"
  },
  {
    title: "Chemical Handling",
    description: "PVC pipes resist chemicals like acids and hydrocarbons that corrode metals. Their chlorine content prevents chemical degradation and fire spread, making them ideal for chemical production and transfer.",
    video: industrialVideo,
    align: "left"
  },
  {
    title: "Building Infrastructure and Structural Material",
    description: "PVC pipes handle plumbing and electrical conduits. HDPE excels in water distribution networks. PPR pipes with high-temperature resistance are ideal for hot and cold water in buildings.",
    video: agricultureVideo,
    align: "left"
  },
  {
    title: "Coatings and Cable Insulation",
    description: "PVC pipes protect and install electrical and communication cables. Their insulation properties, flame resistance, and non-conductivity make them ideal for residential and commercial cable installations.",
    video: fireVideo,
    align: "left"
  },
  {
    title: "Gas Distribution",
    description: "PVC pipes are used in low-pressure residential gas systems. HDPE pipes handle high-pressure industrial transmission lines. Both ensure safe and efficient natural gas transportation.",
    video: bridgeVideo,
    align: "left"
  }
];

export function Applications() {
  const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.5 });
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  const paddingTop = windowWidth >= 768 ? 148 : 80;

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Decorative Wave Patterns - unchanged */}
      <div className="absolute inset-0 opacity-25 pointer-events-none overflow-hidden">
        <div className="absolute left-3 top-[-333px] w-[734px] h-[1921px] rotate-[15.06deg]">
          {[...Array(100)].map((_, i) => (
            <svg
              key={`wave-1-${i}`}
              className="absolute"
              style={{
                left: `${51 + i * 0.8}px`,
                top: `${-45 + i * 2.6}px`,
                width: `${734 - i * 0.7}px`,
                height: `${1475 - i * 0.35}px`,
              }}
              viewBox="0 0 734 1475"
              fill="none"
            >
              <path
                d="M1 1C150 400 350 600 550 400C650 250 733 1474 733 1474"
                stroke="rgba(14, 52, 61, 0.25)"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          ))}
        </div>

        <div className="absolute left-[448px] top-[597px] w-[734px] h-[1921px] rotate-[15.06deg]">
          {[...Array(100)].map((_, i) => (
            <svg
              key={`wave-2-${i}`}
              className="absolute"
              style={{
                left: `${486 + i * 0.7}px`,
                top: `${884 - i * 2.6}px`,
                width: `${734 - i * 0.7}px`,
                height: `${1475 - i * 0.3}px`,
              }}
              viewBox="0 0 734 1475"
              fill="none"
            >
              <path
                d="M1 1C150 400 350 600 550 400C650 250 733 1474 733 1474"
                stroke="rgba(14, 52, 61, 0.25)"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          ))}
        </div>
      </div>

      {/* Gradient Background Overlay - unchanged */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(1,50,62,0.125)] to-[rgba(255,255,255,0.5)] transform rotate-180 pointer-events-none" />

      <div className="relative z-10">
        {/* Title Section - unchanged */}
        <section ref={titleRef} className="pt-12 pb-8">
          <div 
            className="max-w-7xl mx-auto px-4 text-center"
            style={{ paddingTop: `${paddingTop}px`, paddingBottom: "32px" }}
          >
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, y: 30 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl text-[#00262f]">Applications</h1>
              <div className="mt-2 border-t-[0.5px] border-[#0e343d]" />
            </motion.div>
          </div>
        </section>

        {/* Application Sections - spacing kept similar */}
        <div className="py-8 space-y-24">
          {applications.map((app, index) => (
            <ApplicationSection
              key={index}
              {...app}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface ApplicationSectionProps {
  title: string;
  description: string;
  video: string;
  align: string;
  index: number;
}

function ApplicationSection({ title, description, video, align, index }: ApplicationSectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.4 }); // Slightly higher for smoother handoff
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    if (isInView) {
      // Pause any other playing video
      if (currentlyPlaying && currentlyPlaying !== videoEl) {
        currentlyPlaying.pause();
      }

      videoEl.play().catch(() => {
        // Autoplay blocked - silent fail (common on mobile)
      });
      currentlyPlaying = videoEl;
    } else {
      if (currentlyPlaying === videoEl) {
        videoEl.pause();
        currentlyPlaying = null;
      }
    }
  }, [isInView]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (currentlyPlaying === videoRef.current) {
        currentlyPlaying = null;
      }
    };
  }, []);

  const contentTop = index === 0 ? '300px' : '254px';

  return (
    <section ref={ref} className="max-w-[1074px] mx-auto px-4 relative">
      <div className="relative" style={{ minHeight: "650px" }}>
        {/* Background Video - exact same styling */}
        <motion.div
          className="w-full max-w-[1005px] h-[376px] rounded-md overflow-hidden ml-auto bg-gray-200"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src={video} type="video/mp4" />
          </video>
        </motion.div>

        {/* Content Box - 100% unchanged */}
        <motion.div
          className={`absolute bg-[#f2f2f2] shadow-md rounded-2xl p-8 max-w-[645px] ${
            align === 'right' ? 'right-0' : 'left-0'
          }`}
          style={{ 
            top: contentTop,
            marginBottom: index === 0 ? '100px' : '0'
          }}
          initial={{ opacity: 0, x: align === 'right' ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
        >
          <motion.h2
            className="text-4xl text-[#00262f] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {title}
          </motion.h2>

          <motion.p
            className="text-sm text-[#0e343d] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}