'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "fit-content" }: RevealProps) => {
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};
