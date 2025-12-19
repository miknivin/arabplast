import React, { useState, useEffect } from "react";

import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ShoppingCart } from "lucide-react";

const categories = [
  { id: "pvc", name: "PVC/UPVC Pipe and Fittings" },
  { id: "ppr", name: "PPR Pipes and Fittings" },
  { id: "poly", name: "Polyethelyne Pipes and Fittings" },
  { id: "spacers", name: "Spacers" },
  { id: "glue", name: "Power Bond / PVC Glue" }
];

// Product items organized by specific product title
const productItemsByTitle: Record<string, any[]> = {
  "Pressure Pipes": [
    {
      title: "PVC Pressure Pipe 20mm Class 6",
      description: "High-quality 20mm pressure pipe rated for Class 6 applications. Suitable for cold water distribution systems with working pressure up to 600 kPa.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Pressure Pipe 25mm Class 9",
      description: "Durable 25mm pressure pipe for Class 9 applications. Designed for medium-pressure water supply with excellent chemical resistance.",
      image: "https://images.unsplash.com/photo-1610902773655-a67040ead1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBlbGJvdyUyMGZpdHRpbmclMjB3aGl0ZXxlbnwxfHx8fDE3NjQ5MjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "UPVC Pressure Pipe 32mm Class 12",
      description: "Heavy-duty 32mm UPVC pressure pipe for Class 12 applications. Ideal for industrial and commercial water distribution networks.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Pressure Pipe 40mm Class 15",
      description: "Premium 40mm pressure pipe for high-pressure applications. Manufactured to strict quality standards for long-lasting performance.",
      image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Pressure Pipe 50mm Class 9",
      description: "Versatile 50mm pressure pipe for commercial installations. Offers excellent impact strength and UV resistance for outdoor use.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "UPVC Pressure Pipe 63mm Class 12",
      description: "Large diameter 63mm UPVC pipe for main water lines. Superior pressure handling capability with minimal pressure loss.",
      image: "https://images.unsplash.com/photo-1610902773655-a67040ead1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBlbGJvdyUyMGZpdHRpbmclMjB3aGl0ZXxlbnwxfHx8fDE3NjQ5MjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Pressure Pipe 75mm Class 6",
      description: "Heavy-duty 75mm pressure pipe for municipal water systems. Engineered for reliability and longevity in demanding applications.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Pressure Pipe 90mm Class 9",
      description: "Industrial-grade 90mm pressure pipe for large-scale water distribution. Features smooth bore for optimal flow characteristics.",
      image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "UPVC Pressure Pipe 110mm Class 12",
      description: "Premium 110mm UPVC pipe for high-flow applications. Delivers exceptional performance in commercial and industrial settings.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ],
  "Pressure Pipe Fittings": [
    {
      title: "PVC Pressure Elbow 90° 20mm",
      description: "Precision-molded 90-degree elbow fitting for 20mm pressure pipes. Ensures leak-free directional changes in water distribution systems.",
      image: "https://images.unsplash.com/photo-1610902773655-a67040ead1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBlbGJvdyUyMGZpdHRpbmclMjB3aGl0ZXxlbnwxfHx8fDE3NjQ5MjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Pressure Tee 25mm",
      description: "High-quality tee fitting for branching 25mm pressure lines. Manufactured for consistent performance under pressure.",
      image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "UPVC Pressure Socket 32mm",
      description: "Durable socket fitting for joining 32mm UPVC pressure pipes. Features solvent cement welding for permanent connections.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Pressure Reducer 40mm x 25mm",
      description: "Transition reducer fitting for connecting different pipe sizes. Smooth interior design maintains optimal flow dynamics.",
      image: "https://images.unsplash.com/photo-1610902773655-a67040ead1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBlbGJvdyUyMGZpdHRpbmclMjB3aGl0ZXxlbnwxfHx8fDE3NjQ5MjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Pressure Union 50mm",
      description: "Detachable union fitting for easy maintenance access. Enables quick disconnection without pipe cutting.",
      image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "UPVC Pressure End Cap 63mm",
      description: "Secure end cap for terminating 63mm pressure lines. Provides reliable sealing against system pressure.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Pressure Elbow 45° 75mm",
      description: "Gentle 45-degree elbow for minimizing flow restriction. Ideal for gradual directional changes in large diameter pipes.",
      image: "https://images.unsplash.com/photo-1610902773655-a67040ead1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBlbGJvdyUyMGZpdHRpbmclMjB3aGl0ZXxlbnwxfHx8fDE3NjQ5MjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Pressure Cross 90mm",
      description: "Four-way cross fitting for complex pipe routing. Engineered for high-pressure distribution networks.",
      image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "UPVC Pressure Ball Valve 110mm",
      description: "Full-bore ball valve for flow control in large diameter systems. Quarter-turn operation with lever handle.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ],
  "Duct Pipes": [
    {
      title: "PVC Duct Pipe 20mm Orange",
      description: "Heavy-duty 20mm electrical duct pipe. Protects cables from physical damage in underground and concealed installations.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Duct Pipe 25mm Grey",
      description: "Rigid 25mm duct pipe for cable protection. Smooth interior facilitates easy cable pulling and installation.",
      image: "https://images.unsplash.com/photo-1610902773655-a67040ead1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBlbGJvdyUyMGZpdHRpbmclMjB3aGl0ZXxlbnwxfHx8fDE3NjQ5MjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Duct Pipe 32mm Black",
      description: "UV-stabilized 32mm duct pipe for outdoor cable management. Provides excellent mechanical protection against impacts.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "UPVC Duct Pipe 40mm",
      description: "High-strength 40mm duct pipe for telecommunications infrastructure. Suitable for direct burial applications.",
      image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Duct Pipe 50mm Heavy Duty",
      description: "Industrial-grade 50mm duct pipe for heavy cable loads. Enhanced wall thickness for maximum protection.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Duct Pipe 63mm Flexible",
      description: "Flexible 63mm duct pipe for complex routing paths. Combines durability with installation flexibility.",
      image: "https://images.unsplash.com/photo-1610902773655-a67040ead1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBlbGJvdyUyMGZpdHRpbmclMjB3aGl0ZXxlbnwxfHx8fDE3NjQ5MjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "UPVC Duct Pipe 75mm",
      description: "Large diameter 75mm duct pipe for main cable trunking. Suitable for multi-cable installations.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Duct Pipe 90mm Commercial",
      description: "Commercial-grade 90mm duct pipe for building infrastructure. Meets stringent electrical safety standards.",
      image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Duct Pipe 110mm Industrial",
      description: "Extra-large 110mm duct pipe for industrial cable management. Designed for high-capacity installations.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ],
  "Duct Pipe Fittings": [
    {
      title: "PVC Duct Bend 90° 20mm",
      description: "Right-angle bend fitting for 20mm electrical ducts. Facilitates smooth cable routing around corners.",
      image: "https://images.unsplash.com/photo-1610902773655-a67040ead1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBlbGJvdyUyMGZpdHRpbmclMjB3aGl0ZXxlbnwxfHx8fDE3NjQ5MjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Duct Coupler 25mm",
      description: "Straight coupler for joining 25mm duct pipes. Ensures continuous cable protection at joints.",
      image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Duct Inspection Tee 32mm",
      description: "Tee fitting with inspection access for 32mm ducts. Allows cable additions without disruption.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "UPVC Duct Junction Box 40mm",
      description: "Multi-way junction box for 40mm duct systems. Enables complex cable routing configurations.",
      image: "https://images.unsplash.com/photo-1610902773655-a67040ead1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBlbGJvdyUyMGZpdHRpbmclMjB3aGl0ZXxlbnwxfHx8fDE3NjQ5MjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Duct End Cap 50mm",
      description: "Sealed end cap for terminating 50mm duct runs. Prevents ingress of dirt and moisture.",
      image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Duct Bend 45° 63mm",
      description: "Shallow angle bend for gradual direction changes. Minimizes cable stress during installation.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "UPVC Duct Adapter 75mm",
      description: "Versatile adapter for connecting different duct sizes. Maintains cable protection at transitions.",
      image: "https://images.unsplash.com/photo-1610902773655-a67040ead1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBlbGJvdyUyMGZpdHRpbmclMjB3aGl0ZXxlbnwxfHx8fDE3NjQ5MjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Duct Pull Box 90mm",
      description: "Large pull box for facilitating cable installation. Reduces friction during long cable pulls.",
      image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Duct Y-Junction 110mm",
      description: "Y-shaped junction for splitting duct runs. Ideal for distributing cables to multiple destinations.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ],
  "Drainage Pipes (above ground) (Grey)": [
    {
      title: "PVC Drainage Pipe 40mm Grey",
      description: "Lightweight 40mm drainage pipe for above-ground waste systems. Suitable for sink and basin waste connections.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Drainage Pipe 50mm Grey",
      description: "Standard 50mm drainage pipe for bathroom fixtures. Chemical-resistant for long-term reliability.",
      image: "https://images.unsplash.com/photo-1610902773655-a67040ead1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBlbGJvdyUyMGZpdHRpbmclMjB3aGl0ZXxlbnwxfHx8fDE3NjQ5MjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "UPVC Drainage Pipe 75mm Grey",
      description: "Heavy-duty 75mm drainage pipe for toilet connections. High-flow capacity with smooth interior.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Drainage Pipe 90mm Grey",
      description: "Large 90mm drainage pipe for main waste stacks. Designed for commercial and residential buildings.",
      image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Drainage Pipe 110mm Grey",
      description: "Premium 110mm drainage pipe for soil stacks. Meets building regulations for above-ground drainage.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "UPVC Drainage Pipe 160mm Grey",
      description: "Extra-large 160mm drainage pipe for main building drains. Industrial-strength construction.",
      image: "https://images.unsplash.com/photo-1610902773655-a67040ead1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBlbGJvdyUyMGZpdHRpbmclMjB3aGl0ZXxlbnwxfHx8fDE3NjQ5MjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Drainage Vent Pipe 50mm",
      description: "Specialized vent pipe for drainage system ventilation. Prevents trap siphonage and odor issues.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Drainage Overflow Pipe 32mm",
      description: "Overflow pipe for cisterns and tanks. Highly visible grey color for compliance requirements.",
      image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "UPVC Drainage Reducer Pipe 110mm x 75mm",
      description: "Transition pipe for connecting different drain sizes. Maintains proper flow characteristics.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ],
  "PPR Hot & Cold Water Pipes": [
    {
      title: "PPR Pipe PN10 20mm",
      description: "PPR PN10 pipe for cold water applications. Rated for temperatures up to 20°C with excellent chemical resistance.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PPR Pipe PN16 25mm",
      description: "PPR PN16 pipe for hot water systems. Suitable for temperatures up to 60°C with reliable performance.",
      image: "https://images.unsplash.com/photo-1610902773655-a67040ead1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBlbGJvdyUyMGZpdHRpbmclMjB3aGl0ZXxlbnwxfHx8fDE3NjQ5MjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PPR Pipe PN20 32mm White",
      description: "Heavy-duty PPR PN20 pipe for high-temperature applications up to 95°C. Ideal for commercial hot water systems.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PPR Pipe PN25 40mm Green",
      description: "Industrial-grade PPR PN25 pipe with fiber reinforcement. Enhanced pressure rating for demanding applications.",
      image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PPR Pipe PN16 50mm",
      description: "Large diameter PPR pipe for main water distribution lines. Combines high flow capacity with thermal stability.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PPR Pipe PN20 63mm",
      description: "Premium 63mm PPR pipe for commercial buildings. Food-grade material ensures water quality safety.",
      image: "https://images.unsplash.com/photo-1610902773655-a67040ead1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBlbGJvdyUyMGZpdHRpbmclMjB3aGl0ZXxlbnwxfHx8fDE3NjQ5MjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PPR Pipe PN10 75mm",
      description: "Extra-large cold water PPR pipe for industrial supply systems. Low thermal expansion properties.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PPR Pipe PN25 90mm Fiber",
      description: "Fiber-reinforced PPR pipe with superior strength. Ideal for high-pressure industrial applications.",
      image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PPR Pipe PN20 110mm",
      description: "Maximum diameter PPR pipe for main building risers. UV-stabilized for outdoor installations.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ],
  "PPR Pipe Fittings": [
    {
      title: "PPR Elbow 90° 20mm",
      description: "Standard 90-degree PPR elbow for heat fusion welding. Creates permanent, leak-free directional changes.",
      image: "https://images.unsplash.com/photo-1610902773655-a67040ead1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBlbGJvdyUyMGZpdHRpbmclMjB3aGl0ZXxlbnwxfHx8fDE3NjQ5MjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PPR Tee Equal 25mm",
      description: "Equal tee fitting for branching PPR pipe systems. Maintains consistent flow in all directions.",
      image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PPR Male Threaded Adapter 32mm",
      description: "Transition fitting with male threads for connecting to metal components. Brass insert ensures durability.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PPR Female Threaded Elbow 40mm",
      description: "90-degree elbow with female thread connection. Combines heat fusion with mechanical jointing.",
      image: "https://images.unsplash.com/photo-1610902773655-a67040ead1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBlbGJvdyUyMGZpdHRpbmclMjB3aGl0ZXxlbnwxfHx8fDE3NjQ5MjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PPR Reducer Coupling 50mm x 32mm",
      description: "Concentric reducer for connecting different pipe sizes. Smooth transition maintains flow efficiency.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PPR Socket Union 63mm",
      description: "Detachable union for maintenance access. Allows pipe disconnection without cutting.",
      image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PPR End Cap 75mm",
      description: "Secure end cap for terminating PPR pipe runs. Heat-fusion welded for permanent closure.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PPR Ball Valve 90mm",
      description: "Full-bore ball valve with PPR connections. Quick shut-off with minimal pressure drop.",
      image: "https://images.unsplash.com/photo-1610902773655-a67040ead1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBlbGJvdyUyMGZpdHRpbmclMjB3aGl0ZXxlbnwxfHx8fDE3NjQ5MjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PPR Clamp Saddle 110mm",
      description: "Branch saddle for tapping into existing PPR lines. Enables connections without system shutdown.",
      image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ],
  "HDPE Pipes": [
    {
      title: "HDPE Pipe PE80 20mm SDR11",
      description: "PE80 grade HDPE pipe for water distribution. Flexible design accommodates ground movement.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "HDPE Pipe PE100 32mm SDR17",
      description: "High-performance PE100 pipe with superior pressure rating. Suitable for potable water applications.",
      image: "https://images.unsplash.com/photo-1610902773655-a67040ead1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBlbGJvdyUyMGZpdHRpbmclMjB3aGl0ZXxlbnwxfHx8fDE3NjQ5MjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "HDPE Pipe PE80 50mm SDR13.6",
      description: "Medium-duty HDPE pipe for municipal water systems. Excellent chemical resistance.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "HDPE Pipe PE100 63mm SDR11",
      description: "Heavy-duty PE100 pipe for high-pressure applications. UV-stabilized for outdoor installations.",
      image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "HDPE Pipe PE80 90mm SDR17",
      description: "Large diameter HDPE pipe for water mains. Lightweight design simplifies installation.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "HDPE Pipe PE100 110mm SDR11",
      description: "Premium PE100 pipe for industrial water supply. Long service life exceeding 50 years.",
      image: "https://images.unsplash.com/photo-1610902773655-a67040ead1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBlbGJvdyUyMGZpdHRpbmclMjB3aGl0ZXxlbnwxfHx8fDE3NjQ5MjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "HDPE Pipe PE80 160mm SDR13.6",
      description: "Extra-large HDPE pipe for main distribution lines. Resistant to ground movement and settlement.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "HDPE Pipe PE100 200mm SDR17",
      description: "Maximum capacity HDPE pipe for trunk mains. Butt fusion welded for leak-free joints.",
      image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "HDPE Pipe PE80 250mm SDR11",
      description: "Ultra-large HDPE pipe for major infrastructure projects. Exceptional impact resistance.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ],
  "PE Fittings": [
    {
      title: "HDPE Electrofusion Coupler 20mm",
      description: "Electrofusion coupler with embedded heating coils. Quick, reliable joining for small diameter pipes.",
      image: "https://images.unsplash.com/photo-1610902773655-a67040ead1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBlbGJvdyUyMGZpdHRpbmclMjB3aGl0ZXxlbnwxfHx8fDE3NjQ5MjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "HDPE Butt Fusion Elbow 90° 32mm",
      description: "90-degree elbow for butt fusion welding. Creates permanent directional changes in HDPE systems.",
      image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PE Compression Tee 50mm",
      description: "Mechanical compression tee for tool-free installation. Ideal for repairs and temporary connections.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "HDPE Electrofusion Reducer 63mm x 50mm",
      description: "Electrofusion reducer for connecting different pipe sizes. Maintains full pressure rating.",
      image: "https://images.unsplash.com/photo-1610902773655-a67040ead1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBlbGJvdyUyMGZpdHRpbmclMjB3aGl0ZXxlbnwxfHx8fDE3NjQ5MjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PE Flange Adapter 90mm",
      description: "Flange adapter for connecting HDPE to steel fittings. Enables integration with existing infrastructure.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "HDPE Saddle 110mm x 32mm",
      description: "Branch saddle for tapping into main lines. Electrofusion welded for leak-free service connections.",
      image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PE End Cap 160mm",
      description: "Butt fusion end cap for terminating large diameter pipes. Provides secure, permanent closure.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "HDPE Transition Fitting 200mm",
      description: "Universal transition fitting for connecting HDPE to various materials. Versatile solution for system upgrades.",
      image: "https://images.unsplash.com/photo-1610902773655-a67040ead1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBlbGJvdyUyMGZpdHRpbmclMjB3aGl0ZXxlbnwxfHx8fDE3NjQ5MjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PE Ball Valve 250mm",
      description: "Heavy-duty ball valve with electrofusion ends. Full-bore design for minimal flow restriction.",
      image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ],
  "Concrete Spacers": [
    {
      title: "Chair Spacer 15mm",
      description: "Compact chair spacer for thin slabs. Provides stable support for mesh reinforcement.",
      image: "https://images.unsplash.com/photo-1722440814333-51292da1c59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwc3BhY2VycyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjQ5Mjc4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Circular Spacer 20mm",
      description: "Versatile circular spacer for general applications. Maintains consistent concrete cover on all sides.",
      image: "https://images.unsplash.com/photo-1722440814333-51292da1c59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwc3BhY2VycyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjQ5Mjc4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Bar Chair 25mm High Load",
      description: "Heavy-duty bar chair for thick slabs. Enhanced load capacity withstands construction traffic.",
      image: "https://images.unsplash.com/photo-1722440814333-51292da1c59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwc3BhY2VycyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjQ5Mjc4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Wheel Spacer 30mm",
      description: "Wheel-style spacer for vertical applications. Secure grip prevents displacement during pouring.",
      image: "https://images.unsplash.com/photo-1722440814333-51292da1c59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwc3BhY2VycyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjQ5Mjc4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Block Spacer 35mm",
      description: "Block-type spacer for beam and column applications. Stable base prevents tipping.",
      image: "https://images.unsplash.com/photo-1722440814333-51292da1c59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwc3BhY2VycyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjQ5Mjc4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Linear Spacer 40mm",
      description: "Continuous linear spacer for long spans. Maintains uniform cover along entire rebar length.",
      image: "https://images.unsplash.com/photo-1722440814333-51292da1c59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwc3BhY2VycyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjQ5Mjc4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Tower Spacer 50mm",
      description: "High-rise tower spacer for deep cover requirements. Multi-tier design for exceptional stability.",
      image: "https://images.unsplash.com/photo-1722440814333-51292da1c59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwc3BhY2VycyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjQ5Mjc4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Corner Spacer 60mm",
      description: "Specialized corner spacer for edge protection. Prevents rebar displacement at formwork boundaries.",
      image: "https://images.unsplash.com/photo-1722440814333-51292da1c59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwc3BhY2VycyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjQ5Mjc4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Marine Grade Spacer 75mm",
      description: "Extra-deep spacer for marine environments. Enhanced durability for harsh coastal conditions.",
      image: "https://images.unsplash.com/photo-1722440814333-51292da1c59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwc3BhY2VycyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjQ5Mjc4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ],
  "Rebar Spacers": [
    {
      title: "Rebar Chair 20mm Standard",
      description: "Standard rebar chair for residential construction. Economical solution for typical cover requirements.",
      image: "https://images.unsplash.com/photo-1722440814333-51292da1c59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwc3BhY2VycyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjQ5Mjc4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Wall Spacer 25mm",
      description: "Vertical wall spacer with secure rebar grip. Prevents movement during concrete placement.",
      image: "https://images.unsplash.com/photo-1722440814333-51292da1c59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwc3BhY2VycyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjQ5Mjc4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Slab Bolster 30mm",
      description: "Continuous slab bolster for uniform support. Ideal for large floor areas and parking decks.",
      image: "https://images.unsplash.com/photo-1722440814333-51292da1c59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwc3BhY2VycyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjQ5Mjc4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Beam Spacer 40mm",
      description: "Specialized beam spacer for suspended beams. High strength withstands concentrated loads.",
      image: "https://images.unsplash.com/photo-1722440814333-51292da1c59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwc3BhY2VycyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjQ5Mjc4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Column Spacer 45mm",
      description: "Robust column spacer for vertical elements. Triangular design ensures stability under vibration.",
      image: "https://images.unsplash.com/photo-1722440814333-51292da1c59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwc3BhY2VycyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjQ5Mjc4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Foundation Spacer 50mm",
      description: "Heavy-duty foundation spacer for ground slabs. Resistant to soil moisture and chemicals.",
      image: "https://images.unsplash.com/photo-1722440814333-51292da1c59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwc3BhY2VycyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjQ5Mjc4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Mesh Spacer 15mm",
      description: "Low-profile spacer for welded wire mesh. Quick installation for large areas.",
      image: "https://images.unsplash.com/photo-1722440814333-51292da1c59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwc3BhY2VycyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjQ5Mjc4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Cantilever Spacer 35mm",
      description: "Specialized spacer for cantilever applications. Extra stability for overhanging sections.",
      image: "https://images.unsplash.com/photo-1722440814333-51292da1c59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwc3BhY2VycyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjQ5Mjc4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Double Layer Spacer 60mm",
      description: "Two-tier spacer for double-layer reinforcement. Maintains correct spacing between upper and lower mats.",
      image: "https://images.unsplash.com/photo-1722440814333-51292da1c59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwc3BhY2VycyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjQ5Mjc4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ],
  "PVC Solvent Cement": [
    {
      title: "PVC Cement Clear 100ml",
      description: "Clear solvent cement for small repairs. Low-VOC formula for indoor applications.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGhlc2l2ZSUyMGdsdWV8ZW58MXx8fHwxNzY0OTI3ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Cement Medium Body 250ml",
      description: "Medium-viscosity cement for general purpose use. Works well with schedule 40 and 80 pipes.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGhlc2l2ZSUyMGdsdWV8ZW58MXx8fHwxNzY0OTI3ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Cement Heavy Body 500ml",
      description: "Heavy-duty cement for large diameter pipes. Ideal for vertical applications and overhead work.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGhlc2l2ZSUyMGdsdWV8ZW58MXx8fHwxNzY0OTI3ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Cement Professional 1L",
      description: "Professional-grade cement for contractors. Fast-setting with extended working time.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGhlc2l2ZSUyMGdsdWV8ZW58MXx8fHwxNzY0OTI3ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "CPVC Cement Orange 250ml",
      description: "Specialized CPVC cement for hot water systems. Temperature-resistant up to 93°C.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGhlc2l2ZSUyMGdsdWV8ZW58MXx8fHwxNzY0OTI3ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Cement Blue 500ml",
      description: "Blue-tinted cement for easy inspection. Shows completed joints for quality control.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGhlc2l2ZSUyMGdsdWV8ZW58MXx8fHwxNzY0OTI3ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Cement All-Weather 1L",
      description: "All-weather formula for extreme conditions. Works in temperatures from -10°C to 40°C.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGhlc2l2ZSUyMGdsdWV8ZW58MXx8fHwxNzY0OTI3ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Cement Industrial 4L",
      description: "Bulk industrial cement for large projects. Economy size with excellent shelf life.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGhlc2l2ZSUyMGdsdWV8ZW58MXx8fHwxNzY0OTI3ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Cement Two-Part 500ml Kit",
      description: "Two-part system with primer and cement. Ensures maximum bond strength for critical applications.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGhlc2l2ZSUyMGdsdWV8ZW58MXx8fHwxNzY0OTI3ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ],
  "Power Bond Adhesive": [
    {
      title: "Power Bond Multi-Purpose 50ml",
      description: "Versatile adhesive for PVC, ABS, and other plastics. Quick-setting formula for fast repairs.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGhlc2l2ZSUyMGdsdWV8ZW58MXx8fHwxNzY0OTI3ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Power Bond Extra Strong 100ml",
      description: "Extra-strength formula for structural bonding. High shear and tensile strength.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGhlc2l2ZSUyMGdsdWV8ZW58MXx8fHwxNzY0OTI3ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Power Bond Waterproof 250ml",
      description: "Waterproof adhesive for wet environments. Perfect for bathroom and pool applications.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGhlc2l2ZSUyMGdsdWV8ZW58MXx8fHwxNzY0OTI3ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Power Bond Flexible 500ml",
      description: "Flexible adhesive for joints subject to movement. Maintains bond integrity during expansion and contraction.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGhlc2l2ZSUyMGdsdWV8ZW58MXx8fHwxNzY0OTI3ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Power Bond Clear Gel 100ml",
      description: "Crystal-clear gel adhesive for invisible bonds. Ideal for transparent and colored plastics.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGhlc2l2ZSUyMGdsdWV8ZW58MXx8fHwxNzY0OTI3ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Power Bond Contact 250ml",
      description: "Contact adhesive for instant bonding. Provides immediate grab and positioning.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGhlc2l2ZSUyMGdsdWV8ZW58MXx8fHwxNzY0OTI3ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Power Bond Spray 400ml",
      description: "Aerosol adhesive for large surface coverage. Even application for laminating and bonding sheets.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGhlc2l2ZSUyMGdsdWV8ZW58MXx8fHwxNzY0OTI3ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Power Bond Industrial 1L",
      description: "Industrial-strength adhesive for manufacturing. Consistent viscosity for automated dispensing.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGhlc2l2ZSUyMGdsdWV8ZW58MXx8fHwxNzY0OTI3ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Power Bond Heat Resistant 500ml",
      description: "Heat-resistant adhesive for high-temperature applications. Maintains bond up to 150°C.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGhlc2l2ZSUyMGdsdWV8ZW58MXx8fHwxNzY0OTI3ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ]
};

// Fallback to category-based items if no specific title match
const productItemsByCategory = {
  pvc: [
    {
      title: "PVC 90° Elbow",
      description: "PVC 90° elbow is a durable fitting that redirects fluid flow by 90 degrees in high-pressure piping systems. Made from PVC or UPVC, it resists corrosion and chemicals, making it ideal for industrial, irrigation, and plumbing applications.",
      image: "https://images.unsplash.com/photo-1610902773655-a67040ead1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBlbGJvdyUyMGZpdHRpbmclMjB3aGl0ZXxlbnwxfHx8fDE3NjQ5MjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Tee Joint",
      description: "PVC Tee Joint allows branching of pipelines in three directions. Perfect for creating distribution networks in water supply systems with excellent pressure resistance and leak-proof performance.",
      image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Socket Coupling",
      description: "PVC Socket Coupling provides secure connections between two pipe sections. Features smooth interior for optimal flow and easy installation with solvent cement bonding.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Reducer",
      description: "PVC Reducer seamlessly connects pipes of different diameters, maintaining smooth flow transition. Essential for optimizing system pressure and flow rate management.",
      image: "https://images.unsplash.com/photo-1610902773655-a67040ead1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBlbGJvdyUyMGZpdHRpbmclMjB3aGl0ZXxlbnwxfHx8fDE3NjQ5MjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC End Cap",
      description: "PVC End Cap provides secure closure for pipe ends. Prevents contamination and ensures system integrity with reliable sealing properties.",
      image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Union Adapter",
      description: "PVC Union Adapter allows easy disconnection and reconnection of pipe sections without cutting. Ideal for maintenance access points in the system.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Ball Valve",
      description: "PVC Ball Valve offers reliable flow control with quarter-turn operation. Corrosion-resistant design ensures long-lasting performance in various applications.",
      image: "https://images.unsplash.com/photo-1610902773655-a67040ead1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBlbGJvdyUyMGZpdHRpbmclMjB3aGl0ZXxlbnwxfHx8fDE3NjQ5MjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC 45° Elbow",
      description: "PVC 45° Elbow provides smooth directional change with reduced flow resistance. Perfect for applications requiring gradual pipe routing adjustments.",
      image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Cross Joint",
      description: "PVC Cross Joint enables four-way pipe connections for complex distribution networks. Engineered for high-pressure applications with superior durability.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ],
  ppr: [
    {
      title: "PPR 90° Elbow",
      description: "PPR 90° Elbow designed for hot and cold water systems. Heat-fusible connection ensures permanent, leak-free joints with exceptional temperature resistance up to 95°C.",
      image: "https://images.unsplash.com/photo-1610902773655-a67040ead1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBlbGJvdyUyMGZpdHRpbmclMjB3aGl0ZXxlbnwxfHx8fDE3NjQ5MjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PPR Male Threaded Elbow",
      description: "PPR Male Threaded Elbow combines heat fusion with threaded connection. Perfect for connecting PPR pipes to metal fittings in plumbing systems.",
      image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PPR Tee Fitting",
      description: "PPR Tee Fitting for branching hot/cold water lines. Superior thermal stability and pressure rating make it ideal for residential and commercial installations.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PPR Socket Coupler",
      description: "PPR Socket Coupler for joining pipe sections with heat fusion welding. Provides seamless connection with no risk of leakage over extended service life.",
      image: "https://images.unsplash.com/photo-1610902773655-a67040ead1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBlbGJvdyUyMGZpdHRpbmclMjB3aGl0ZXxlbnwxfHx8fDE3NjQ5MjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PPR Female Threaded Socket",
      description: "PPR Female Threaded Socket enables connection to external threaded components. Reinforced design ensures reliable performance under varying temperatures.",
      image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PPR Reducer Coupling",
      description: "PPR Reducer Coupling connects pipes of different sizes in hot/cold water systems. Smooth interior prevents scale buildup and maintains optimal flow.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PPR Ball Valve",
      description: "PPR Ball Valve with heat-fusible connections. Quick shut-off capability with minimal pressure drop, suitable for both hot and cold water applications.",
      image: "https://images.unsplash.com/photo-1610902773655-a67040ead1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBlbGJvdyUyMGZpdHRpbmclMjB3aGl0ZXxlbnwxfHx8fDE3NjQ5MjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PPR End Cap",
      description: "PPR End Cap for sealing pipe ends in hot/cold water systems. Heat-fusion installation ensures permanent, maintenance-free closure.",
      image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ],
  poly: [
    {
      title: "HDPE Butt Fusion Elbow",
      description: "HDPE Butt Fusion Elbow for high-pressure water and gas distribution. Superior flexibility and impact resistance with fusion welding for permanent joints.",
      image: "https://images.unsplash.com/photo-1610902773655-a67040ead1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBlbGJvdyUyMGZpdHRpbmclMjB3aGl0ZXxlbnwxfHx8fDE3NjQ5MjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "HDPE Electrofusion Tee",
      description: "HDPE Electrofusion Tee with embedded heating coils for quick, reliable connections. Ideal for underground installations with excellent corrosion resistance.",
      image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "HDPE Compression Coupling",
      description: "HDPE Compression Coupling allows easy installation without specialized equipment. Perfect for repairs and maintenance with secure mechanical grip.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PE Reducer Fitting",
      description: "PE Reducer Fitting for transitioning between pipe sizes in water distribution networks. Lightweight design simplifies handling and installation.",
      image: "https://images.unsplash.com/photo-1610902773655-a67040ead1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBlbGJvdyUyMGZpdHRpbmclMjB3aGl0ZXxlbnwxfHx8fDE3NjQ5MjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "HDPE Saddle Clamp",
      description: "HDPE Saddle Clamp for branch connections on main pipelines. Enables tapping without shutting down the system, minimizing service disruption.",
      image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PE End Cap",
      description: "PE End Cap for secure pipe termination in water and gas systems. Fusion welding ensures permanent seal against leakage and contamination.",
      image: "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBwaXBlcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ5Mjc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "HDPE Flange Adapter",
      description: "HDPE Flange Adapter connects polyethylene pipes to flanged equipment. Provides versatile connection options for pumps, valves, and tanks.",
      image: "https://images.unsplash.com/photo-1610902773655-a67040ead1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjBlbGJvdyUyMGZpdHRpbmclMjB3aGl0ZXxlbnwxfHx8fDE3NjQ5MjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PE Transition Coupling",
      description: "PE Transition Coupling joins polyethylene pipes to other materials like steel or PVC. Ensures compatibility across different piping systems.",
      image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2NDkyNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ],
  spacers: [
    {
      title: "Circular Spacer 20mm",
      description: "Circular Spacer 20mm maintains precise concrete cover for reinforcement bars. High-strength plastic construction withstands concrete pouring pressure.",
      image: "https://images.unsplash.com/photo-1722440814333-51292da1c59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwc3BhY2VycyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjQ5Mjc4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Chair Spacer 40mm",
      description: "Chair Spacer 40mm provides stable support for rebar in horizontal applications. Multiple leg design ensures even load distribution.",
      image: "https://images.unsplash.com/photo-1722440814333-51292da1c59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwc3BhY2VycyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjQ5Mjc4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Wheel Spacer 30mm",
      description: "Wheel Spacer 30mm ideal for vertical rebar placement in walls and columns. Easy positioning and secure grip on reinforcement bars.",
      image: "https://images.unsplash.com/photo-1722440814333-51292da1c59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwc3BhY2VycyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjQ5Mjc4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Block Spacer 50mm",
      description: "Block Spacer 50mm for heavy-duty applications in foundations and thick slabs. Superior load-bearing capacity for demanding projects.",
      image: "https://images.unsplash.com/photo-1722440814333-51292da1c59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwc3BhY2VycyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjQ5Mjc4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Linear Spacer 25mm",
      description: "Linear Spacer 25mm for continuous rebar support along beam lengths. Prevents sagging and ensures uniform concrete cover.",
      image: "https://images.unsplash.com/photo-1722440814333-51292da1c59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwc3BhY2VycyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjQ5Mjc4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Corner Spacer 35mm",
      description: "Corner Spacer 35mm designed for rebar positioning at corners and edges. Prevents displacement during concrete placement.",
      image: "https://images.unsplash.com/photo-1722440814333-51292da1c59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwc3BhY2VycyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjQ5Mjc4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Mesh Spacer 15mm",
      description: "Mesh Spacer 15mm supports wire mesh in slab applications. Lightweight design allows quick installation with reliable performance.",
      image: "https://images.unsplash.com/photo-1722440814333-51292da1c59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwc3BhY2VycyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjQ5Mjc4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Tower Spacer 60mm",
      description: "Tower Spacer 60mm for deep cover requirements in marine and industrial structures. Enhanced durability for harsh environments.",
      image: "https://images.unsplash.com/photo-1722440814333-51292da1c59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwc3BhY2VycyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjQ5Mjc4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ],
  glue: [
    {
      title: "PVC Solvent Cement 250ml",
      description: "PVC Solvent Cement 250ml for bonding PVC and UPVC pipes and fittings. Fast-setting formula creates strong, permanent joints resistant to water pressure.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGhlc2l2ZSUyMGdsdWV8ZW58MXx8fHwxNzY0OTI3ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Solvent Cement 500ml",
      description: "PVC Solvent Cement 500ml for medium-scale plumbing projects. Professional-grade adhesive ensures leak-proof connections with quick curing time.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGhlc2l2ZSUyMGdsdWV8ZW58MXx8fHwxNzY0OTI3ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Solvent Cement 1L",
      description: "PVC Solvent Cement 1L for large-scale installations. Economy size with applicator brush for convenient, efficient application.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGhlc2l2ZSUyMGdsdWV8ZW58MXx8fHwxNzY0OTI3ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Power Bond Adhesive 100ml",
      description: "Power Bond Adhesive 100ml for bonding PVC, ABS, and rigid plastics. High-strength formula with excellent chemical resistance.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGhlc2l2ZSUyMGdsdWV8ZW58MXx8fHwxNzY0OTI3ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Primer 250ml",
      description: "PVC Primer 250ml prepares pipe surfaces for optimal cement adhesion. Essential for ensuring maximum bond strength in critical applications.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGhlc2l2ZSUyMGdsdWV8ZW58MXx8fHwxNzY0OTI3ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "CPVC Solvent Cement 500ml",
      description: "CPVC Solvent Cement 500ml specifically formulated for hot water CPVC systems. Temperature-resistant formula maintains bond integrity up to 93°C.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGhlc2l2ZSUyMGdsdWV8ZW58MXx8fHwxNzY0OTI3ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Universal PVC Adhesive 300ml",
      description: "Universal PVC Adhesive 300ml works with multiple PVC types and schedules. Versatile solution for varied plumbing and construction needs.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGhlc2l2ZSUyMGdsdWV8ZW58MXx8fHwxNzY0OTI3ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "PVC Cleaner 500ml",
      description: "PVC Cleaner 500ml removes dirt, grease, and contaminants from pipe surfaces. Ensures proper surface preparation for optimal bonding results.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGhlc2l2ZSUyMGdsdWV8ZW58MXx8fHwxNzY0OTI3ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ]
};

interface ProductDetailProps {
  productName?: string;
}

// Helper function to determine category from product name
const getCategoryFromProductName = (productName: string): string => {
  const name = productName.toLowerCase();
  
  // PVC/UPVC products
  if (name.includes('pvc') || name.includes('upvc') || 
      name.includes('pressure pipe') || name.includes('duct pipe') || 
      name.includes('drainage')) {
    return 'pvc';
  }
  
  // PPR products
  if (name.includes('ppr') || name.includes('hot') || name.includes('cold water')) {
    return 'ppr';
  }
  
  // Polyethylene products
  if (name.includes('hdpe') || name.includes('polyethylene') || name.includes('pe fitting')) {
    return 'poly';
  }
  
  // Spacers
  if (name.includes('spacer') || name.includes('concrete') || name.includes('rebar')) {
    return 'spacers';
  }
  
  // Glue/Adhesives
  if (name.includes('glue') || name.includes('cement') || name.includes('bond') || 
      name.includes('adhesive') || name.includes('primer')) {
    return 'glue';
  }
  
  // Default to pvc
  return 'pvc';
};

export function ProductDetail({ productName = "Pressure Pipes" }: ProductDetailProps) {
  const [isDesktop, setIsDesktop] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [activeCategory, setActiveCategory] = useState(getCategoryFromProductName(productName));
  const { ref: categoriesRef, isInView: categoriesInView } = useInView({ threshold: 0.2 });
  const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.5 });
  const { ref: gridRef, isInView: gridInView } = useInView({ threshold: 0.1 });


  // Get products - first try by specific title, then fall back to category
  const currentProducts = productItemsByTitle[productName] || 
                         productItemsByCategory[activeCategory as keyof typeof productItemsByCategory] || 
                         [];

  return (
    <div className="bg-white"
    
    >
      {/* Category Tabs */}
      <section ref={categoriesRef} className="pt-8 pb-6"  style={{
    marginBottom: isDesktop ? "55px" : "0px",
  }}
>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-2xl transition-all ${
                  activeCategory === category.id
                    ? 'bg-[rgba(14,52,61,0.75)] text-white'
                    : 'bg-[rgba(14,52,61,0.1)] text-[#878680]'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Title */}
      <section ref={titleRef} className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1
            className="text-5xl text-[#00262f] text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {productName}
          </motion.h1>
        </div>
      </section>

      {/* Product Grid */}
      <section ref={gridRef} className="pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#e7ebec] rounded-xl overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              >
                {/* Product Image */}
                <motion.div
                  className="w-full aspect-square overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Product Content */}
                <div className="p-6">
                  <motion.h3
                    className="text-4xl text-[rgba(14,52,61,0.91)] leading-tight mb-4"
                    initial={{ opacity: 0 }}
                    animate={gridInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.08 + 0.2 }}
                  >
                    {item.title}
                  </motion.h3>

                  <motion.p
                    className="text-[rgba(14,52,61,0.91)] text-sm leading-relaxed mb-6"
                    initial={{ opacity: 0 }}
                    animate={gridInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.08 + 0.3 }}
                  >
                    {item.description}
                  </motion.p>

                  {/* Order Button */}
                  <motion.button
                    className="bg-[#0e343d] text-white px-8 py-3 rounded-2xl flex items-center gap-2 mx-auto group"
                    whileHover={{ scale: 1.05, backgroundColor: "#00262f" }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={gridInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.08 + 0.4 }}
                  >
                    Order now
                    <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
