"use client";
import { motion } from "motion/react";
import { MapPin, Navigation, Clock, Phone } from "lucide-react";

import { Reveal } from './Reveal';

export function Location() {
  const address = "The CrossFit Gym, Near Sonari Airport, Jamshedpur, Jharkhand";
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.291730030528!2d86.155!3d22.822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e3b6b6b6b6b6%3A0x0!2sThe+CrossFit+Gym!5e0!3m2!1sen!2sin!4v1714412345678!5m2!1sen!2sin`;

  return (
    <section id="location" className="py-16 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal width="100%">
          <div className="text-center mb-24">
             <h2 className="text-[44px] sm:text-6xl md:text-7xl lg:text-8xl font-oswald font-black uppercase tracking-tighter leading-none mb-8">
              Battle <span className="text-red-600">Location</span>
            </h2>
            <div className="h-1.5 w-32 bg-red-600 mx-auto rounded-full mb-10" />
            <p className="text-gray-500 font-inter max-w-2xl mx-auto text-lg md:text-xl font-light">
              Visit the temple of hard work. We are strategically located for your <span className="text-white font-medium">uninterrupted training.</span>
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/[0.02] border border-white/5 rounded-[40px] p-8 md:p-16 flex flex-col justify-between backdrop-blur-3xl"
          >
            <div className="space-y-12">
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 group">
                <div className="bg-cyan-400/10 p-5 rounded-2xl border border-cyan-400/20 shrink-0 w-fit group-hover:bg-cyan-400 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] group-hover:text-black transition-all duration-500">
                  <MapPin className="text-cyan-400 group-hover:text-black" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-oswald font-black text-white uppercase tracking-tight mb-3">Our Sanctuary</h3>
                  <p className="text-gray-400 font-inter leading-relaxed text-lg break-words">{address}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 group">
                <div className="bg-cyan-400/10 p-5 rounded-2xl border border-cyan-400/20 shrink-0 w-fit group-hover:bg-cyan-400 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] group-hover:text-black transition-all duration-500">
                  <Clock className="text-cyan-400 group-hover:text-black" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-oswald font-black text-white uppercase tracking-tight mb-3">Training Hours</h3>
                  <div className="space-y-2">
                    <p className="text-gray-400 font-inter text-lg">
                      <span className="text-white font-black italic mr-4">MON — SUN</span> 05:00 AM — 11:00 PM
                    </p>
                    <p className="text-cyan-400 font-oswald font-black uppercase text-xs tracking-widest mt-4 drop-shadow-[0_0_12px_rgba(34,211,238,1)]">OPEN ALL DAYS</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 group">
                <div className="bg-cyan-400/10 p-5 rounded-2xl border border-cyan-400/20 shrink-0 w-fit group-hover:bg-cyan-400 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] group-hover:text-black transition-all duration-500">
                  <Phone className="text-cyan-400 group-hover:text-black" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-oswald font-black text-white uppercase tracking-tight mb-3">Direct Contact</h3>
                  <p className="text-gray-400 font-inter text-lg">+91 7870800800</p>
                  <p className="text-gray-400 font-inter text-lg">+91 7717753428</p>
                </div>
              </div>
            </div>

            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(34,211,238,0.6)" }}
              whileTap={{ scale: 0.95 }}
              href="https://maps.app.goo.gl/Gk4Gpn3pibmHDSKw7" 
              target="_blank"
              className="mt-16 bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.5)] text-black px-10 py-6 rounded-2xl font-oswald font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 transition-all duration-500 group"
            >
              Open GPS <Navigation size={22} className="group-hover:rotate-12 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full rounded-[20px] overflow-hidden border-2 border-cyan-400/60 shadow-[0_0_40px_rgba(34,211,238,0.5)] relative h-[300px] sm:h-[400px] lg:h-[500px] lg:my-auto scale-95 hover:scale-100 hover:shadow-[0_0_60px_rgba(34,211,238,0.8)] transition-all duration-500"
          >
            {/* Proper Colorful Embed */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14710.871151608977!2d86.155458!3d22.812975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e3ff68f7c1a3%3A0xc3256ee769169bbd!2sTHE%20CROSSFIT!5e0!3m2!1sen!2sin!4v1714412345678!5m2!1sen!2sin"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
