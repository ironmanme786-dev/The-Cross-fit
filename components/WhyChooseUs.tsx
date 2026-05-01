'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Users, Dumbbell, LayoutPanelLeft, Check, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

const reasons = [
  {
    title: 'Clean & Hygienic Gym',
    description: 'The gym is maintained regularly to ensure a comfortable and safe workout space.',
    icon: ShieldCheck,
    details: 'A clean environment is essential for a safe and focused workout. Our dedicated staff ensures that all areas, from the workout floor to the locker rooms, are spotless and sanitized.',
    bullets: [
      'Daily deep cleaning of all equipment',
      'Sanitization stations throughout the gym',
      'Spotless locker rooms and showers',
      'Proper ventilation for fresh air',
    ],
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop'
  },
  {
    title: 'Friendly Environment',
    description: 'Members and trainers create a positive and motivating atmosphere.',
    icon: Users,
    details: 'We believe fitness is a journey best shared. Our community is built on mutual respect and encouragement, making every workout a positive experience.',
    bullets: [
      'Welcoming atmosphere for all fitness levels',
      'Supportive community of members',
      'No judgments, just motivation',
      'Group events and challenges',
    ],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop'
  },
  {
    title: 'Professional Trainers',
    description: 'Guidance from experienced trainers helps improve performance and consistency.',
    icon: Dumbbell,
    details: 'Our certified trainers are passionate about helping you reach your full potential. They provide personalized guidance, correct form, and continuous support.',
    bullets: [
      'Certified and experienced professionals',
      'Personalized workout plans',
      'Nutrition and lifestyle advice',
      'Form correction and injury prevention',
    ],
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop'
  },
  {
    title: 'Comfortable Workout Space',
    description: 'Spacious and organized layout for smooth workouts.',
    icon: LayoutPanelLeft,
    details: 'Our facility is designed with flow in mind. You will never feel cramped, giving you the space you need to focus entirely on your movement and form.',
    bullets: [
      'Intelligently zoned workout areas',
      'Ample space between machines',
      'Dedicated stretching and mobility zones',
      'Climate-controlled environment',
    ],
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop'
  },
];

import { Reveal } from './Reveal';

export function WhyChooseUs() {
  const [selectedReason, setSelectedReason] = useState<typeof reasons[0] | null>(null);

  // Prevent background scrolling when panel is open
  useEffect(() => {
    if (selectedReason) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedReason]);

  return (
    <section id="why-choose-us" className="py-16 bg-[#050505] relative overflow-hidden">
      {/* Subtle Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] select-none">
        <h2 className="text-[20vw] font-oswald font-black uppercase leading-none">ELITE</h2>
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <Reveal width="100%">
          <div className="text-center mb-24">
            <h2 className="text-[44px] sm:text-6xl md:text-7xl lg:text-8xl font-oswald font-black uppercase tracking-tighter leading-[0.9] mb-8">
              <span className="text-white">Why</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39ff14] to-[#2ecc71]">Choose Us</span>
            </h2>
            <div className="h-2 w-40 bg-[#39ff14] mx-auto rounded-full mb-10 shadow-[0_0_20px_rgba(57,255,20,0.5)]" />
            <p className="text-gray-500 font-inter max-w-2xl mx-auto text-lg md:text-xl font-light">
              Elevate your training standards. We provide an ecosystem designed for <span className="text-white font-medium">peak performance.</span>
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {reasons.map((reason, idx) => (
            <motion.div
              key={`why-choose-${reason.title.replace(/\s+/g, '-')}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedReason(reason)}
              className="group relative bg-white/[0.02] rounded-[40px] p-8 md:p-12 border border-white/5 cursor-pointer backdrop-blur-3xl overflow-hidden transition-all duration-500 hover:border-red-600/30 hover:shadow-[0_30px_70px_rgba(220,38,38,0.1)]"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity duration-500">
                <reason.icon className="w-32 h-32 text-[#39ff14]" />
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#39ff14]/10 border border-[#39ff14]/20 flex items-center justify-center mb-10 group-hover:bg-[#39ff14] group-hover:text-black transition-all duration-500 group-hover:scale-110">
                  <reason.icon className="w-8 h-8 text-[#39ff14] group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-3xl font-oswald font-black text-white uppercase tracking-tight mb-4 leading-none">
                  {reason.title}
                </h3>
                <p className="text-gray-400 font-inter text-base md:text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                  {reason.description}
                </p>
                
                <div className="mt-8 flex items-center gap-3 text-[#39ff14] font-oswald text-xs uppercase tracking-[0.3em] font-black group-hover:gap-5 transition-all">
                  <span>Explore Features</span>
                  <span className="text-xl">→</span>
                </div>
              </div>

              {/* Hover Grain/Light Layer */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(57,255,20,0.1)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedReason && (
          <div key="why-choose-modal" className="fixed inset-0 z-50 pointer-events-none">
            {/* Dark Overlay */}
            <motion.div
              key="why-choose-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedReason(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 pointer-events-auto"
            />

            {/* Sliding Panel */}
            <motion.div
              key="why-choose-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: [0.25, 0.1, 0.25, 1], duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-full max-w-xl bg-[#111111] border-l border-[#222] shadow-2xl z-50 overflow-y-auto pointer-events-auto"
            >
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={() => {
                    setSelectedReason(null);
                    // Add slight delay to allow smooth scrolling if needed, or straightforward
                    document.getElementById('why-choose-us')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="absolute top-6 left-6 z-20 group flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-xl border border-white/30 hover:border-[#39ff14]/70 hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] shadow-[0_8px_32px_rgba(0,0,0,0.4)] text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
                >
                  <div className="absolute inset-0 -translate-x-[150%] skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300 relative z-10" />
                  <span className="font-oswald uppercase tracking-widest font-black relative z-10 text-sm">Back</span>
                </button>

                {/* Hero Image */}
                <div className="relative h-64 md:h-80 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent z-10" />
                  <Image
                    src={selectedReason.image}
                    alt={selectedReason.title}
                    fill
                    referrerPolicy="no-referrer"
                    className="object-cover"
                  />
                  <div className="absolute bottom-6 left-6 z-20 flex items-center gap-4">
                    <div className="bg-[#39ff14]/20 backdrop-blur-md p-3 rounded-full border border-[#39ff14]/50">
                       <selectedReason.icon className="w-8 h-8 text-[#39ff14]" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-10 space-y-8">
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-oswald font-bold text-white uppercase leading-tight">
                    {selectedReason.title}
                  </h2>
                  
                  <p className="text-[#A0A0A0] font-inter text-lg leading-relaxed">
                    {selectedReason.details}
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-xl font-oswald font-medium text-white uppercase">Key Highlights</h4>
                    <ul className="space-y-4">
                      {selectedReason.bullets.map((bullet, idx) => (
                        <li key={`${selectedReason.title}-bullet-${idx}`} className="flex flex-row items-start gap-4">
                          <div className="mt-1 flex-shrink-0 bg-[#39ff14]/10 p-1.5 rounded-full border border-[#39ff14]/20">
                            <Check className="w-4 h-4 text-[#39ff14]" />
                          </div>
                          <span className="text-[#CCCCCC] font-inter text-base">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Bottom Padding */}
                  <div className="h-10" />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
