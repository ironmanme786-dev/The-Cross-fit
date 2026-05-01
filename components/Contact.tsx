'use client';

import { motion } from 'motion/react';
import { Phone, MessageSquare, Mail, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';

const buttonVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

import { Reveal } from './Reveal';

const ContactButton = ({ 
  href, 
  icon: Icon, 
  title, 
  subtitle, 
  target,
  isPrimary
}: { 
  href: string; 
  icon: any; 
  title: string; 
  subtitle: string; 
  target?: string;
  isPrimary?: boolean;
}) => {
  return (
    <motion.a 
      variants={buttonVariants}
      href={href} 
      target={target}
      rel={target ? "noopener noreferrer" : undefined}
      className={`group relative block w-full outline-none ${isPrimary ? 'hover:animate-none' : ''}`}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        whileHover={{ y: -8, rotateX: 6, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="relative flex items-center p-6 sm:p-8 bg-white/[0.03] rounded-[32px] border border-white/5 transition-all duration-500 hover:border-red-600/40 hover:shadow-[0_40px_80px_rgba(220,38,38,0.15)] overflow-hidden z-10 w-full"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mr-4 sm:mr-8 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-500 shadow-2xl">
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white transition-colors duration-500" strokeWidth={1.5} />
        </div>
        
        <div className="flex flex-col text-left relative z-10 w-full overflow-hidden">
          <h4 className="text-white font-oswald text-xl sm:text-3xl uppercase tracking-tighter mb-1 font-black group-hover:text-red-500 transition-colors">{title}</h4>
          <p className="text-gray-500 font-inter text-sm sm:text-lg group-hover:text-gray-300 transition-colors whitespace-nowrap overflow-hidden text-ellipsis">{subtitle}</p>
        </div>

        <div className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 transition-all pr-2 sm:pr-4 hidden sm:block">
           <span className="text-3xl font-light text-red-600">→</span>
        </div>
      </motion.div>
    </motion.a>
  );
};

export function ContactList() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const whatsappMessage = "Hello, I want to join The CrossFit Gym. Please share more details about membership and timing.";
  const whatsappUrl = `https://wa.me/919234431773?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contact" className="py-16 bg-[#050505] text-white relative overflow-hidden flex flex-col items-center justify-center min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10 w-full text-center">
        <Reveal width="100%">
          <div className="mb-24">
            <h3 className="text-red-500 font-oswald uppercase tracking-[0.4em] font-black text-sm mb-6">Connect</h3>
            <h2 className="text-[44px] sm:text-6xl md:text-7xl font-oswald font-black uppercase tracking-tighter leading-none mb-8">
              Join The <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">Bloodline</span>
            </h2>
            <div className="h-1.5 w-32 bg-red-600 mx-auto rounded-full mb-10" />
          </div>
        </Reveal>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col gap-6 max-w-2xl mx-auto w-full"
        >
          <ContactButton 
            href="tel:7870800800"
            icon={Phone}
            title="Direct Link"
            subtitle="+91 7870800800"
            isPrimary={true}
          />
          <ContactButton 
            href={whatsappUrl}
            target="_blank"
            icon={MessageSquare}
            title="Encrypted Chat"
            subtitle="+91 9234431773"
          />
          <ContactButton 
            href="https://www.google.com/maps/dir/?api=1&destination=The+CrossFit+Gym+Jamshedpur+Patanjali+Building+River+Meet+Road+Sonari+Airport+Jamshedpur"
            target="_blank"
            icon={Instagram}
            title="Get Directions"
            subtitle="Patanjali Building, Near Sonari Airport, Jamshedpur"
          />
          <ContactButton 
            href="mailto:thecrossfitsonari@gmail.com"
            icon={Mail}
            title="Secure Mail"
            subtitle="thecrossfitsonari@gmail.com"
          />
        </motion.div>
        
        <p className="mt-12 text-gray-400 font-inter text-sm block">
          {/* SEO Address */}
          PATANJALI BUILDING, River Meet Road, Near Sonari Airport, Main Rd, Kagal Nagar, Naya Line, Jamshedpur, Jharkhand - 831011
        </p>
      </div>
    </section>
  );
}
