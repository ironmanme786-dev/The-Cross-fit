'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { navigateToSection } from "@/lib/navigation";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay with Parallax and Scale */}
      <motion.div 
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute inset-0 z-0 h-[120%] -top-[10%]"
      >
        {/* Dark Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-[#050505] z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_#050505_100%)] z-10 mix-blend-multiply opacity-80" />
        
        {/* change hero image here */}
        <Image
          src="https://drive.google.com/uc?export=view&id=1tvjmnnToImsHRYI3w1VDdgk9ObRJgK7c"
          alt="Gym Background"
          fill
          referrerPolicy="no-referrer"
          className="object-cover object-center filter brightness-90 contrast-110"
          priority
        />
      </motion.div>

      {/* Floating Light Glows */}
      <div className="absolute inset-0 pointer-events-none z-5 overflow-hidden">
        <motion.div
          initial={{ x: 0, y: 0, opacity: 0.1 }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -left-1/4 w-[1000px] h-[1000px] rounded-full bg-red-600/10 blur-[150px]"
        />
        <motion.div
          initial={{ x: 0, y: 0, opacity: 0.1 }}
          animate={{
            x: [0, -40, 0],
            y: [0, 60, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-purple-600/10 blur-[150px]"
        />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 flex flex-col items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.2 }
            }
          }}
          className="flex flex-col items-center w-full"
        >
          {/* Compact Text Block */}
          <div className="w-full max-w-[600px] flex flex-col items-center text-center mb-8">
            {/* Top Subtitle */}
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 0.4, y: 0, transition: { duration: 0.8 } }
              }}
              className="text-white font-oswald text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.5em] font-black mb-4 block"
            >
              The Ultimate Fitness Destination
            </motion.span>

            {/* Main Heading with Soft Glow */}
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.98 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="relative text-[12vw] sm:text-6xl md:text-7xl lg:text-8xl font-oswald font-black text-white uppercase tracking-tighter mb-4 leading-[0.9] text-shadow-xl"
            >
              <span className="relative z-10">
                The <span className="text-red-600">CrossFit</span> <br/> Gym
              </span>
              {/* Subtle light glow behind heading */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-red-600/10 blur-[80px] -z-10 pointer-events-none" />
            </motion.h1>

            {/* Subtext - Stylish/Italic */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              className="text-gray-400 font-inter text-base sm:text-lg md:text-xl max-w-md mx-auto mb-6 leading-relaxed font-light italic tracking-tight"
            >
              &quot;Forge your body into a weapon. Stay disciplined, stay consistent, and experience <span className="text-white font-medium not-italic">true transformation</span>.&quot;
            </motion.p>

            {/* Founders Section - Compact Clean Design */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              className="flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-md shadow-lg"
            >
              <span className="text-gray-500 font-oswald text-[9px] uppercase tracking-[0.3em] font-black">Co-Founded by</span>
              <div className="flex items-center gap-4">
                <span className="text-white font-oswald font-black text-[11px] sm:text-xs uppercase tracking-[0.1em]">Awinash Singh</span>
                <div className="w-1 h-1 rounded-full bg-red-600/40" />
                <span className="text-white font-oswald font-black text-[11px] sm:text-xs uppercase tracking-[0.1em]">Alik Patra</span>
              </div>
            </motion.div>
          </div>
          
          {/* Premium Pill Buttons - Directly Below Block */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2, boxShadow: "0 15px 30px rgba(220,38,38,0.2)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigateToSection(navigate, location, "membership")}
              className="group relative px-10 py-4 bg-red-600 text-white font-oswald text-lg uppercase tracking-[0.2em] font-black rounded-full w-full sm:w-auto transition-all duration-300 overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex items-center justify-center gap-3">
                Join Now 
                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
              <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] pointer-events-none" />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.98 }}
              href="tel:7870800800"
              className="px-8 py-4 border border-white/10 backdrop-blur-md text-white font-oswald text-base uppercase tracking-widest font-black rounded-full w-full sm:w-auto transition-all duration-300 flex items-center justify-center"
            >
              Call Us
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
