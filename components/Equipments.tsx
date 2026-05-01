'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useNavigate } from 'react-router-dom';
import { equipmentsData } from '@/lib/data';

import { Reveal } from './Reveal';

export function Equipments() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const navigate = useNavigate();

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const handleEquipmentClick = (id: number) => {
    navigate(`/equipment/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="equipments" className="py-16 bg-secondary overflow-hidden min-h-[500px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal width="100%">
          <div className="text-center mb-20">
            <h2 className="text-[44px] sm:text-5xl md:text-6xl lg:text-7xl font-oswald font-black text-white uppercase mb-6 tracking-tighter leading-none">
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-purple-600">Equipments</span>
            </h2>
            <div className="h-1.5 w-32 bg-red-600 mx-auto mb-8 rounded-full" />
            <p className="text-gray-400 font-inter max-w-2xl mx-auto text-lg sm:text-xl font-light italic">
              Train with world-class machines designed for <span className="text-white font-medium">uncompromising performance.</span>
            </p>
          </div>
        </Reveal>
      </div>

      <div className="relative w-full max-w-[1700px] mx-auto">
        {/* Horizontal Scroll Container - Optimized for Swipe */}
        {/* main card /
        / partial preview /
        / slider interaction */}
        <div 
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 md:px-8 pb-16 pt-10 scroll-smooth will-change-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {equipmentsData.map((eq, index) => {
            const hasError = imageErrors[eq.id];
            
            return (
              <motion.div 
                key={`equip-${eq.id}`}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.02 }}
                onClick={() => handleEquipmentClick(eq.id)}
                className="group/card flex-none w-[75vw] max-w-[320px] sm:w-[380px] aspect-[9/16] snap-center cursor-grab active:cursor-grabbing"
              >
                <div className="relative h-full w-full rounded-[32px] overflow-hidden bg-black border border-white/5 transition-all duration-700 hover:border-red-600/50 hover:shadow-[0_40px_80px_rgba(220,38,38,0.2)]">
                  {/* Image with skeleton */}
                  <div className={`absolute inset-0 bg-gray-900 z-10 transition-opacity duration-1000 ${loadedImages[eq.id] ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="w-full h-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 animate-pulse" />
                  </div>

                  {!hasError && (
                    <Image
                      src={eq.image}
                      alt={eq.name}
                      fill
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(eq.id)}
                      onLoad={() => handleImageLoad(eq.id)}
                      loading="lazy"
                      className={`object-cover transition-all duration-1000 group-hover/card:scale-110 z-0 ${loadedImages[eq.id] ? 'opacity-60 group-hover/card:opacity-100' : 'opacity-0'}`}
                      sizes="(max-width: 640px) 75vw, 380px"
                    />
                  )}
                  
                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent z-20" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 z-30 flex flex-col justify-end p-8 translate-y-6 group-hover/card:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-oswald font-black text-white uppercase tracking-tight mb-4 drop-shadow-2xl">
                      {eq.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
