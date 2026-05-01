'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Instagram, MessageCircle, Star, ShieldCheck, Zap, HeartPulse, UserCheck, Salad, Activity } from 'lucide-react';

const trainers = [
  {
    name: 'Ankit Singh',
    role: 'Senior Trainer',
    experience: '10 Years',
    highlight: 'Strength training & body transformation expert',
    badge: 'Top Trainer',
    tags: ['Strength', 'Powerlifting', 'Transformation'],
    rating: 5,
    image: 'https://drive.google.com/uc?export=view&id=1k7_TbhNgs7H67rLScsyegWMzPYliEZG7',
    isPremium: true
  },
  {
    name: 'Raman Rajak',
    role: 'Fitness Coach',
    experience: '5 Years',
    highlight: 'Fat loss & endurance coaching specialist',
    tags: ['Fat Loss', 'Endurance', 'HIIT'],
    rating: 5,
    image: 'https://drive.google.com/uc?export=view&id=11O2LO-iAtTMqYGilxkN6iVN-nvlfkiI3',
  },
  {
    name: 'Vikash Mahato',
    role: 'Strength Coach',
    experience: '5 Years',
    highlight: 'Muscle building & hypertrophy specialist',
    tags: ['Muscle Gain', 'Bodybuilding', 'Nutrition'],
    rating: 5,
    image: 'https://drive.google.com/uc?export=view&id=1TizmwFjTjTVhub84aYsIet9QeGd0MzRw',
  },
  {
    name: 'Biswanath Mahato',
    role: 'Functional Trainer',
    experience: '5 Years',
    highlight: 'Functional fitness & flexibility expert',
    tags: ['Functional', 'Flexibility', 'Mobility'],
    rating: 5,
    image: 'https://drive.google.com/uc?export=view&id=1UW_RsMrYbseWLxcNJkIgr8xJcDLxauKf',
  }
];

const features = [
  { icon: ShieldCheck, text: "Certified Guidance" },
  { icon: HeartPulse, text: "Friendly Support" },
  { icon: Activity, text: "Workout Assistance" },
  { icon: UserCheck, text: "Personalized Plans" },
  { icon: Salad, text: "Nutrition Advice" },
  { icon: Zap, text: "Injury Prevention" }
];

export function Trainers() {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  return (
    <section id="trainers" className="py-16 bg-[#050505] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -ml-64 -mb-64" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-red-600/50" />
            <span className="text-red-500 font-oswald uppercase font-black text-xs tracking-[0.4em]">Elite Coaching</span>
            <div className="w-12 h-px bg-red-600/50" />
          </div>
          <h2 className="text-5xl md:text-7xl font-oswald font-black text-white uppercase tracking-tighter mb-8 leading-none">
            Meet Our <span className="relative">
              Expert
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-2 left-0 h-2 bg-red-600/20 blur-[2px] rounded-full"
              />
            </span> Trainers
          </h2>
          <p className="text-gray-400 font-inter max-w-2xl mx-auto text-lg leading-relaxed">
            Train with Professionals. Transform with Confidence. Our certified masters are here to sculpt your ultimate version.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-24 sm:max-w-md md:max-w-none mx-auto">
          {trainers.map((trainer, index) => (
            <motion.div
              key={`trainer-${trainer.name.replace(/\s+/g, '-')}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative h-[480px] md:h-[550px] bg-[#0A0A0A] rounded-[32px] overflow-hidden border border-white/5 transition-all duration-700 hover:border-red-600/30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.8)] ${trainer.isPremium ? 'ring-2 ring-red-600/20' : ''}`}
            >
              {/* Top Trainer Ribbon */}
              {trainer.badge && (
                <div className="absolute top-6 right-6 z-40">
                  <span className="bg-red-600 text-white text-[10px] font-oswald font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-[0_5px_15px_rgba(220,38,38,0.4)]">
                    {trainer.badge}
                  </span>
                </div>
              )}

              {/* Image Container */}
              <div className="absolute inset-0 z-0 scale-105 group-hover:scale-100 transition-transform duration-1000">
                <div className={`absolute inset-0 bg-gray-900 z-10 transition-opacity duration-1000 ${loadedImages[trainer.name] ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="w-full h-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 animate-pulse" />
                </div>
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  referrerPolicy="no-referrer"
                  onLoad={() => setLoadedImages(prev => ({ ...prev, [trainer.name]: true }))}
                  className={`object-cover transition-all duration-1000 grayscale-[0.3] group-hover:grayscale-0 brightness-[0.7] group-hover:brightness-[0.5] ${loadedImages[trainer.name] ? 'opacity-100' : 'opacity-0'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/20 via-transparent to-transparent z-10" />
              </div>
              
              {/* Info Overlay (Visible by default) */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 transition-all duration-500 group-hover:pb-12">
                <div className="mb-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(trainer.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <h3 className="text-3xl font-oswald font-black text-white uppercase tracking-tight leading-none mb-1">
                    {trainer.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-red-500 font-oswald text-[10px] uppercase tracking-[0.3em] font-black">
                      {trainer.role}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-white/40 font-oswald text-[10px] uppercase tracking-[0.2em]">
                      {trainer.experience} XP
                    </span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                  {trainer.tags.map((tag) => (
                    <span key={tag} className="text-[9px] font-oswald uppercase tracking-widest text-white/60 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Expanded Content on Hover */}
                <div className="max-h-0 group-hover:max-h-[200px] overflow-hidden transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
                  <p className="text-gray-400 text-sm font-inter leading-relaxed mb-6">
                    {trainer.highlight}
                  </p>
                                    <div className="flex items-center justify-end w-full">
                    <motion.button
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById('contact-form');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2.5 bg-white text-black font-oswald font-black uppercase tracking-[0.15em] text-[10px] rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:bg-red-600 hover:text-white transition-all duration-300"
                    >
                      Book Session
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Premium Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/0 via-red-600/0 to-red-600/0 group-hover:from-red-600/5 group-hover:to-red-600/10 transition-all duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Feature Highlights Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative py-12 px-8 bg-white/[0.02] border border-white/5 rounded-[40px] backdrop-blur-md"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center gap-4 text-center group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-red-600/10 group-hover:border-red-600/20 transition-all duration-500 shadow-inner"
                >
                  <feature.icon className="w-5 h-5 text-red-300 drop-shadow-[0_0_8px_rgba(252,165,165,0.6)]" />
                </motion.div>
                <span className="text-[10px] sm:text-xs font-oswald font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

