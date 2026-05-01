'use client';

import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence, useScroll } from 'motion/react';
import { Check, Sparkles, ShieldCheck, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Silver Package',
    subtitle: '(Only Strength)',
    price: '₹1,250',
    duration: 'Month',
    features: [
      'Monday to Saturday access',
      '90 Minutes per day',
      'Strength equipment only',
      'Sunday not allowed',
    ],
    prices: [
      { dur: '1 Mo', pr: '₹1,250' },
      { dur: '3 Mo', pr: '₹2,500' },
      { dur: '6 Mo', pr: '₹4,500' },
      { dur: '12 Mo', pr: '₹7,500' },
    ],
    highlight: false,
  },
  {
    name: 'Gold Package',
    subtitle: '(Cardio + Strength)',
    price: '₹1,500',
    duration: 'Month',
    features: [
      'Monday to Saturday access',
      'Cardio & Strength Training',
      '2 Hours per day',
      'Sunday not allowed',
    ],
    prices: [
      { dur: '1 Mo', pr: '₹1,500' },
      { dur: '3 Mo', pr: '₹3,000' },
      { dur: '6 Mo', pr: '₹5,000' },
      { dur: '12 Mo', pr: '₹8,500' },
    ],
    highlight: true,
  },
  {
    name: 'Platinum Package',
    subtitle: '(Unlimited Access)',
    price: '₹1,750',
    duration: 'Month',
    features: [
      'Monday to Sunday access',
      'Unlimited Cardio & Strength',
      '2 Entries per day allowed',
      'Trainer guidance included',
    ],
    prices: [
      { dur: '1 Mo', pr: '₹1,750' },
      { dur: '3 Mo', pr: '₹3,500' },
      { dur: '6 Mo', pr: '₹6,000' },
      { dur: '12 Mo', pr: '₹10,000' },
    ],
    highlight: false,
  },
];

function Card3D({ plan, index }: { plan: typeof plans[0]; index: number }) {
  const isBestValue = plan.highlight;
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative group flex flex-col h-full rounded-[32px] transition-all duration-500 cursor-pointer
        ${isBestValue ? 'md:scale-[1.08] z-20' : 'z-10'}
      `}
    >
      {/* 3D Content Container */}
      <div 
        style={{ transform: "translateZ(50px)" }}
        className={`relative flex flex-col h-full rounded-[32px] border overflow-hidden backdrop-blur-2xl transition-all duration-500
          ${isBestValue 
            ? 'bg-white/[0.04] border-[#39ff14]/40 shadow-[0_30px_70px_rgba(0,0,0,0.7),0_0_20px_rgba(57,255,20,0.1)]' 
            : 'bg-white/[0.02] border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'}
          group-hover:border-[#39ff14]/60 group-hover:shadow-[0_40px_80px_rgba(57,255,20,0.15)]
        `}
      >
        {/* Floating Best Value Badge */}
        {isBestValue && (
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
            <motion.div 
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="bg-gradient-to-r from-[#39ff14] to-[#2ecc71] text-black font-oswald text-[11px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-b-2xl shadow-[0_10px_20px_rgba(57,255,20,0.4)] flex items-center gap-2"
            >
              <Zap className="w-3 h-3 fill-black" /> Best Value
            </motion.div>
          </div>
        )}

        {/* Glossy Reflection Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute left-0 inset-y-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          <div className="absolute right-0 inset-y-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          
          {/* Moving Shine Effect */}
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_60%)] group-hover:block hidden animate-pulse" />
        </div>

        <div className="p-8 sm:p-12 flex flex-col h-full relative z-10">
          {/* Plan Header */}
          <div className="mb-10" style={{ transform: "translateZ(30px)" }}>
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 rounded-lg bg-[#39ff14]/10 border border-[#39ff14]/20">
                <ShieldCheck className="w-4 h-4 text-[#39ff14]" />
              </div>
              <p className="text-[#39ff14] font-oswald text-xs uppercase tracking-[0.3em] font-bold">
                {plan.subtitle}
              </p>
            </div>
            <h3 className="text-3xl lg:text-4xl font-oswald font-black text-white uppercase tracking-wider mb-4 leading-tight">
              {plan.name}
            </h3>
            <div className="h-[2px] w-16 bg-gradient-to-r from-[#39ff14] to-transparent rounded-full" />
          </div>

          {/* Price Section */}
          <div className="mb-12" style={{ transform: "translateZ(40px)" }}>
            <div className="flex items-baseline gap-2">
              <span className="text-6xl lg:text-7xl font-oswald font-black text-white tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                {plan.price}
              </span>
              <span className="text-gray-500 font-inter text-sm uppercase tracking-widest font-bold">
                / {plan.duration}
              </span>
            </div>
          </div>

          {/* Features */}
          <ul className="space-y-6 mb-12 flex-grow" style={{ transform: "translateZ(20px)" }}>
            {plan.features.map((feature, i) => (
              <li key={`feat-${plan.name}-${i}`} className="flex items-start gap-4 group/item">
                <div className={`mt-1 flex-shrink-0 p-1.5 rounded-full ${isBestValue ? 'bg-[#39ff14]/15 text-[#39ff14] shadow-[0_0_10px_rgba(57,255,20,0.2)]' : 'bg-white/5 text-gray-400'} border border-white/10 group-hover/item:border-[#39ff14]/40 transition-all duration-300`}>
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-gray-300 font-inter text-[15px] leading-relaxed group-hover/item:text-white transition-colors duration-300">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* Extended Packages Grid */}
          <div className="mb-12 pt-10 border-t border-white/[0.08]" style={{ transform: "translateZ(10px)" }}>
            <div className="flex items-center justify-between mb-5">
              <h4 className="text-gray-500 font-oswald text-[10px] uppercase tracking-[0.2em] font-black">Plan Variants</h4>
              <Sparkles className="w-3 h-3 text-gray-600" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {plan.prices.slice(1).map((p, idx) => (
                <div key={`tier-${plan.name}-${idx}`} className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-4 hover:bg-white/[0.06] hover:border-[#39ff14]/30 transition-all duration-300 group/tier">
                   <div className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mb-1 shadow-sm">{p.dur}</div>
                   <div className="text-[15px] text-white font-oswald font-black tracking-wide">{p.pr}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Join Button */}
          <div className="mt-auto" style={{ transform: "translateZ(60px)" }}>
            <a
              href={`https://wa.me/919234431773?text=${encodeURIComponent(
                plan.name.includes('Silver')
                  ? "Hi, I want to join your Silver Membership Plan. Please share details."
                  : plan.name.includes('Gold')
                  ? "Hi, I want to join your Gold Membership Plan. Please guide me further."
                  : "Hi, I want to join your Platinum Membership Plan. Please assist me."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full py-5 px-8 rounded-2xl font-oswald text-xl uppercase tracking-[0.2em] font-black transition-all duration-500 flex items-center justify-center gap-3 group/btn relative overflow-hidden
                ${isBestValue 
                  ? 'bg-[#39ff14] text-[#050505] shadow-[0_15px_30px_rgba(57,255,20,0.3)] hover:shadow-[0_20px_50px_rgba(57,255,20,0.5)] hover:-translate-y-1.5' 
                  : 'bg-white/[0.05] border border-white/10 text-white hover:border-[#39ff14] hover:text-[#39ff14] hover:bg-[#39ff14]/10 hover:-translate-y-1.5 shadow-xl'}
              `}>
              <span className="relative z-10">Join Now</span>
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="relative z-10"
              >
                →
              </motion.span>
              
              {/* Shine Sweep animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:animate-[sweep_1.5s_ease-in-out_infinite] z-20" />
            </a>
            <p className="text-center text-[11px] text-gray-600 font-inter uppercase tracking-[0.2em] mt-6 font-bold flex items-center justify-center gap-2">
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              Secure Enrollment
              <span className="w-1 h-1 rounded-full bg-gray-600" />
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Membership() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={sectionRef} id="membership" className="py-16 bg-[#050505] relative overflow-hidden">
      {/* Background Architectural Glows (Parallax removed to prevent scroll glow) */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_50%_50%,rgba(57,255,20,0.1)_0%,transparent_70%)]" />
        <div className="absolute -top-[20%] -left-[10%] w-[80%] h-[80%] bg-[#39ff14]/[0.03] blur-[180px] rounded-full" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[80%] h-[80%] bg-purple-600/[0.03] blur-[180px] rounded-full" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-8 backdrop-blur-md"
          >
            <div className="w-2 h-2 rounded-full bg-[#39ff14] animate-pulse" />
            <span className="text-gray-400 font-oswald text-xs uppercase tracking-[0.4em] font-bold">Premier Club Access</span>
          </motion.div>
          
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-oswald font-black text-white uppercase mb-8 tracking-tighter leading-[0.9]">
            Select Your <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FF3131] to-[#D00000]">Domain</span>
          </h2>
          
          <p className="text-gray-500 font-inter max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Ultimate flexibility meets professional standards. Explore our elite membership tiers crafted for those who refuse to settle for ordinary.
          </p>
        </motion.div>
        {/* Cards Grid with Perspective */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-14 items-stretch max-w-7xl mx-auto perspective-[2000px]">
          {plans.map((plan, index) => (
            <Card3D key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        {/* Enhanced Rules Footer Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 max-w-5xl mx-auto"
        >
          <div className="relative p-10 sm:p-14 rounded-[48px] bg-white/[0.01] border border-white/5 backdrop-blur-3xl overflow-hidden group">
            {/* Background element */}
            <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#39ff14]/[0.03] rounded-full blur-[100px] pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 sm:gap-16 relative z-10">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#39ff14]/10 to-transparent border border-[#39ff14]/20 flex items-center justify-center shadow-[0_0_40px_rgba(57,255,20,0.1)]">
                   <ShieldCheck className="w-10 h-10 text-[#39ff14]" />
                </div>
              </div>
              
              <div className="flex-grow text-center lg:text-left">
                <h4 className="text-white font-oswald text-2xl sm:text-3xl uppercase tracking-[0.2em] font-black mb-8">Gym Regulations & Policy</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {[
                    "Lockdown Facility: ₹300/mo addition",
                    "Strict no-extension policy on absence",
                    "Sunday access restricted (Silver & Gold)",
                    "Non-transferable digital membership"
                  ].map((rule, i) => (
                    <div key={`rule-${i}`} className="flex items-center gap-4 group/rule">
                      <div className="w-2 h-2 rounded-full bg-[#39ff14] shadow-[0_0_10px_rgba(57,255,20,0.8)] group-hover/rule:scale-150 transition-transform" />
                      <span className="text-gray-400 font-inter text-sm md:text-base uppercase tracking-widest font-medium transition-colors group-hover/rule:text-white">
                        {rule}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Bottom Accent */}
            <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#39ff14]/30 to-transparent" />
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-between mt-12 gap-6 opacity-40">
            <p className="text-[11px] text-gray-500 font-inter uppercase tracking-[0.5em] font-black">
              Professional Grade Environment
            </p>
            <div className="h-px w-24 bg-gray-800 hidden sm:block" />
            <p className="text-[11px] text-gray-500 font-inter uppercase tracking-[0.5em] font-black">
              Established 2024
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
