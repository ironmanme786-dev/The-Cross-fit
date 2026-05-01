'use client';

import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-[#050505] py-20 border-t border-white/5 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="mb-12 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-red-600/30" />
             <span className="font-oswald font-black text-3xl tracking-tighter uppercase text-white">
              The <span className="text-red-600">CrossFit</span> Gym
            </span>
            <div className="w-12 h-[1px] bg-red-600/30" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-gray-500 font-oswald text-[10px] uppercase tracking-[0.4em] font-black mb-8">
            <a href="#about" className="hover:text-white transition-colors duration-300">Sanctuary</a>
            <a href="#trainers" className="hover:text-white transition-colors duration-300">Bloodline</a>
            <a href="#equipments" className="hover:text-white transition-colors duration-300">Arsenal</a>
            <a href="#membership" className="hover:text-white transition-colors duration-300">Covenant</a>
            <a href="https://www.instagram.com/thecrossfitsonari" className="hover:text-white transition-colors duration-300" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <p className="text-gray-400 font-inter text-xs tracking-wider max-w-sm">
            PATANJALI BUILDING, River Meet Road, Near Sonari Airport, Main Rd, Kagal Nagar, Naya Line, Jamshedpur, Jharkhand - 831011
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="pt-12 border-t border-white/5 flex flex-col items-center gap-6"
        >
          <p className="text-gray-600 font-inter text-xs tracking-wider">
            &copy; {new Date().getFullYear()} The CrossFit Gym. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-[9px] font-oswald uppercase tracking-[0.2em] font-black text-gray-700">
            <span>Powered by</span>
            <span className="text-red-900/50">Awinash Singh & Alik Patra</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
