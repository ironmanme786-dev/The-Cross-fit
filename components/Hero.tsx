"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
    <section
      ref={ref}
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 h-full w-full">
        {/* Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/10 z-10" />

        {/* Hero Image */}
        <Image
          src="https://drive.google.com/uc?export=view&id=1ypmwt4elc26pd5fgKcJ2VlmE8W46yOIS"
          alt="The CrossFit Gym Background"
          fill
          referrerPolicy="no-referrer"
          className="object-cover object-[center_top] filter brightness-100 contrast-105"
          priority
        />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-[100px] pb-[80px] flex flex-col items-start justify-center h-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.2 },
            },
          }}
          className="flex flex-col items-start w-full max-w-3xl"
        >
          {/* Top Subtitle */}
          <motion.span
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
            }}
            className="text-white font-oswald text-xs sm:text-sm uppercase tracking-[0.3em] font-bold mb-6 -mt-6 block"
          >
            The Ultimate Fitness Destination
          </motion.span>

          {/* Main Heading */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-oswald font-black text-white uppercase tracking-tighter mb-8 leading-[1.05] drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
          >
            THE{" "}
            <span className="text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.4)]">
              CROSSFIT
            </span>{" "}
            <br /> GYM
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
            }}
            className="font-oswald text-2xl sm:text-3xl md:text-4xl max-w-2xl mb-12 leading-snug font-black text-white italic transform -rotate-2 skew-x-[-5deg] drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
          >
            Transform Your Body. Build Strength. Stay Consistent.
          </motion.p>

          {/* Premium Pill Buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto mt-4"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 10px 25px rgba(220,38,38,0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                navigateToSection(navigate, location, "membership")
              }
              className="group relative px-10 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-oswald text-lg uppercase tracking-widest font-black rounded-full w-full sm:w-auto transition-all duration-300 shadow-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <div className="relative z-10 flex items-center justify-center gap-3">
                Join Today
                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </motion.button>

            <motion.a
              whileHover={{
                scale: 1.05,
                y: -2,
                backgroundColor: "rgba(255,255,255,0.1)",
                borderColor: "rgba(255,255,255,0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              href="tel:7870800800"
              className="px-8 py-4 border border-white/20 backdrop-blur-md text-white font-oswald text-base uppercase tracking-widest font-bold rounded-full w-full sm:w-auto transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              Call Us
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
