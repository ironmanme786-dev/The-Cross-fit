'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

import { Reveal } from './Reveal';

export function About() {
  return (
    <section id="about" className="py-16 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 relative group"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[40px] border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60" />
              <Image
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop"
                alt="About The CrossFit Gym"
                fill
                referrerPolicy="no-referrer"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Floating Stat Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-10 right-[-20px] bg-red-600 p-8 rounded-3xl shadow-2xl z-20 hidden md:block"
              >
                <div className="text-4xl font-oswald font-black text-white leading-none mb-1 text-center">10+</div>
                <div className="text-[10px] font-oswald text-white/80 uppercase tracking-widest text-center">Years Experience</div>
              </motion.div>
            </div>
            
            {/* Background Decorative Element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-600/20 rounded-full blur-[80px] -z-10 animate-pulse" />
          </motion.div>

          <div className="w-full lg:w-1/2">
            <Reveal width="100%">
              <div className="mb-12">
                <h3 className="text-red-500 font-oswald uppercase tracking-[0.4em] font-black text-sm mb-6">Our Legacy</h3>
                <h2 className="text-[11vw] sm:text-6xl md:text-7xl lg:text-8xl font-oswald font-black text-white uppercase mb-8 leading-[0.9] tracking-tighter">
                  The <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500">CrossFit</span> <br/>
                  <span className="text-red-600">Sanctuary</span>
                </h2>
                <div className="h-1.5 w-24 bg-red-600 rounded-full mb-10" />
              </div>
            </Reveal>

            <Reveal width="100%">
              <div className="space-y-8 text-gray-400 font-inter text-lg md:text-xl leading-relaxed mb-16">
                <p>
                  Located in the heart of Jamshedpur near Sonari Airport, <span className="text-white font-medium">The CrossFit Gym</span> is more than just a training facility. It is a high-performance sanctuary for those who demand excellence from their bodies.
                </p>
                <p>
                  We strip away the noise and focus on what matters: <span className="italic text-red-500">precision, consistency, and results.</span> Our environment is surgically clean, our equipment is elite, and our atmosphere is charged with pure motivation.
                </p>
              </div>
            </Reveal>

            <Reveal>
               <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-white text-black font-oswald font-black uppercase tracking-[0.2em] rounded-2xl transition-all duration-300 shadow-lg"
               >
                 Discover Our DNA
               </motion.button>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
