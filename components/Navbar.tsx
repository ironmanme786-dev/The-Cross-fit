"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu as MenuIcon, X, Home, Users, Dumbbell, Info, Star, CreditCard, BookOpen, Phone, MapPin } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import Image from "next/image";
import { navigateToSection } from "@/lib/navigation";

const navLinks = [
  { name: "Home", href: "home", Icon: Home },
  { name: "Trainers", href: "trainers", Icon: Users },
  { name: "Equipments", href: "equipments", Icon: Dumbbell },
  { name: "About Us", href: "about", Icon: Info },
  { name: "Why Choose Us", href: "why-choose-us", Icon: Star },
  { name: "Membership", href: "membership", Icon: CreditCard },
  { name: "Blog", href: "blog", Icon: BookOpen },
  { name: "Contact", href: "contact", Icon: Phone },
  { name: "Location", href: "location", Icon: MapPin },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const element = document.getElementById(link.href);
      if (element) {
        observer.observe(element);
      }
    });

    // Also observe membership section if not in navLinks
    const membershipEl = document.getElementById("membership");
    if (membershipEl) observer.observe(membershipEl);

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    navigateToSection(navigate, location, id);
    setIsMobileMenuOpen(false);
  };


  // Adjust height and padding for the navbar here
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-1.5 shadow-2xl"
          : "bg-transparent py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href={`#${navLinks[0].href}`}
          onClick={(e) => handleNavClick(e, navLinks[0].href)}
          className="relative group flex items-center gap-2 transition-transform duration-500 hover:scale-105 active:scale-95"
        >
          <div className="relative h-9 w-9 group-hover:rotate-[360deg] transition-transform duration-1000 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]">
            <Image
              src="https://drive.google.com/uc?export=view&id=1m0UQuz3XwOeC5JVSdZmYK1uz6q_tCwXR"
              alt="The CrossFit Gym Logo"
              fill
              referrerPolicy="no-referrer"
              className="object-contain"
            />
            {/* Logo Glow */}
            <div className="absolute inset-0 bg-red-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-oswald font-black text-lg sm:text-xl tracking-tighter uppercase leading-none text-white">
              The <span className="text-red-600">CrossFit</span>
            </span>
            <span className="font-oswald font-light text-[9px] tracking-[0.4em] uppercase text-gray-500 group-hover:text-red-500 transition-colors">Gym Jamshedpur</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={`nav-desktop-${link.href}`}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative py-1 group"
              >
                <div className={`flex items-center gap-2 text-[10px] font-oswald font-black uppercase tracking-[0.2em] transition-all duration-500
                  ${isActive ? "text-red-500" : "text-gray-400 group-hover:text-white"}`}
                >
                  <link.Icon size={14} className={isActive ? "text-red-600" : "text-gray-500 group-hover:text-red-500"} />
                  <span>{link.name}</span>
                </div>
                {/* Underline Animation */}
                <motion.div 
                  initial={false}
                  animate={{ width: isActive ? "100%" : "0%" }}
                  className="absolute bottom-0 left-0 h-0.5 bg-red-600 rounded-full shadow-[0_0_10px_#dc2626]"
                />
              </a>
            );
          })}
          
          <motion.a
            href="#membership"
            onClick={(e) => handleNavClick(e, "membership")}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(220,38,38,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="ml-2 px-6 py-2.5 bg-red-600 text-white font-oswald text-[10px] font-black uppercase tracking-[0.2em] rounded-lg transition-all duration-300"
          >
            Start Core →
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white hover:text-red-600 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div key="mobile-nav-wrapper">
            {/* Backdrop to dismiss on tapping outside */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden absolute top-full left-0 right-0 h-screen bg-black/80 backdrop-blur-sm z-40"
            />
            {/* Menu Dropdown */}
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "85vh", transition: { duration: 0.4, ease: "easeInOut" } }}
              exit={{ opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeInOut", delay: 0.1 } }}
              className="lg:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] border-t border-red-600/10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-50 origin-top overflow-y-auto overscroll-contain scroll-smooth"
              style={{ maxHeight: "calc(100vh - 60px)" }}
            >
              <div className="px-6 py-6 flex flex-col space-y-1">
                {navLinks.map((link, i) => {
                   const isActive = activeSection === link.href;
                   return (
                     <motion.a
                       initial={{ opacity: 0, x: -20 }}
                       animate={{ opacity: 1, x: 0, transition: { duration: 0.3, delay: i * 0.05 } }}
                       exit={{ opacity: 0, x: -20, transition: { duration: 0.2, delay: (navLinks.length - i) * 0.02 } }}
                       key={`nav-mobile-${link.href}`}
                       href={`#${link.href}`}
                       onClick={(e) => handleNavClick(e, link.href)}
                       className={`font-oswald text-[22px] uppercase tracking-wider block py-3.5 border-b border-[#222]/50 last:border-0 transition-all duration-300 group
                         ${isActive ? "text-white pl-2 border-b-red-600/30" : "text-[#D0D0D0] hover:text-white hover:pl-2"}
                       `}
                     >
                      <div className="flex items-center space-x-4">
                        <link.Icon 
                          size={24} 
                          className={`transition-all duration-300 shrink-0
                            ${isActive 
                              ? "text-red-500 drop-shadow-[0_0_8px_rgba(220,38,38,0.6)]" 
                              : "text-white group-hover:text-red-500 group-hover:drop-shadow-[0_0_8px_rgba(220,38,38,0.6)]"
                            }`} 
                        />
                        <span>{link.name}</span>
                      </div>
                    </motion.a>
                  );
                })}
                  <motion.a
                    key="nav-mobile-join-now"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.3, delay: navLinks.length * 0.05 } }}
                    exit={{ opacity: 0, y: 20, transition: { duration: 0.2, delay: 0 } }}
                    href="#membership"
                    onClick={(e) => handleNavClick(e, "membership")}
                    className="mt-6 px-6 py-4 bg-red-600 text-white text-center font-oswald text-lg uppercase tracking-wider font-black hover:bg-red-500 w-full transition-all duration-300 rounded-lg shadow-[0_0_15px_rgba(220,38,38,0.4)] block"
                  >
                    Join Now
                  </motion.a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
