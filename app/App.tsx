'use client';
import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Trainers } from "@/components/Trainers";
import { Equipments } from "@/components/Equipments";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Membership } from "@/components/Membership";
import { Blog } from "@/components/Blog";
import { ContactList } from "@/components/Contact";
import { JoinForm } from "@/components/JoinForm";
import { FloatingContact } from "@/components/FloatingContact";
import { Footer } from "@/components/Footer";
import { BlogPost } from "@/components/BlogPost";
import { EquipmentDetail } from "@/components/EquipmentDetail";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Location } from "@/components/Location";
import { AnimatePresence, motion } from 'motion/react';
import { SmoothScroll } from "@/lib/SmoothScroll";

function HashScroll() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/' && hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash, pathname]);

  return null;
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

function MainLanding() {
  return (
    <PageWrapper>
      <Navbar />
      <div className="relative overflow-hidden">
        <div className="relative z-10">
          <Hero />
          <Trainers />
          <Equipments />
          <About />
          <WhyChooseUs />
          <Membership />
          <Blog />
          <Location />
          <JoinForm />
          <ContactList />
          <Footer />
        </div>
      </div>
      <FloatingContact />
    </PageWrapper>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <>
      <SmoothScroll />
      <ScrollToTop />
      <HashScroll />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLanding />} />
        <Route path="/blog/:id" element={<PageWrapper><BlogPost /></PageWrapper>} />
        <Route path="/equipment/:id" element={<PageWrapper><EquipmentDetail /></PageWrapper>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
    </>
  );
}

export function App() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
  }, []);
  if (!mounted) return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full font-oswald text-red-600 flex items-center justify-center font-black italic text-xl"
      >
        CF
      </motion.div>
    </div>
  );

  return (
    <HashRouter>
      <AnimatedRoutes />
    </HashRouter>
  );
}
