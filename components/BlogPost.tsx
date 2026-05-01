"use client";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { blogPosts } from "./Blog";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { navigateToSection } from "@/lib/navigation";

export function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-oswald font-black text-red-600 mb-4">Post Not Found</h1>
        <button
          onClick={() => navigate("/")}
          className="text-white hover:text-red-600 uppercase tracking-widest font-oswald font-black"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  const handleTocClick = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBack = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-6 pb-24 selection:bg-red-600 selection:text-white">
      <div className="max-w-[850px] mx-auto px-5 md:px-[30px]">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-white hover:text-red-500 transition-all bg-white/[0.05] hover:bg-white/[0.1] px-6 py-3 rounded-full font-oswald uppercase font-black text-[12px] tracking-[0.2em] mb-12 border border-white/10 shadow-lg active:scale-95"
        >
          <ArrowLeft size={16} className="text-red-600" /> Back to Article Base
        </button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-red-600/50" />
              <span className="text-red-500 font-oswald uppercase font-black text-[11px] tracking-[0.3em]">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-[38px] md:text-[56px] font-oswald font-black uppercase tracking-tighter mb-8 text-white leading-[0.95]">
              {post.title}
            </h1>
            
            <p className="text-gray-500 text-xs sm:text-sm font-oswald uppercase tracking-[0.2em] font-black">
              Published on <span className="text-gray-400">{post.date}</span>
            </p>
          </div>

          <div className="relative w-full aspect-[16/9] rounded-[32px] overflow-hidden mb-12 border border-white/5 shadow-2xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              referrerPolicy="no-referrer"
              className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
              priority
            />
          </div>

          <div className="max-w-none font-inter font-light text-[17px] md:text-[19px] text-gray-400 leading-relaxed">
            <p className="font-light text-[20px] md:text-[24px] text-white mb-16 italic border-l-2 border-red-600 pl-8 py-3 leading-relaxed tracking-tight">
              &quot;{post.excerpt}&quot;
            </p>

            <div className="bg-white/[0.02] p-8 md:p-10 rounded-[32px] border border-white/5 mb-20 shadow-2xl backdrop-blur-sm">
              <h3 className="font-oswald text-[20px] uppercase tracking-[0.3em] text-white mb-8 font-black flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                Blueprint
              </h3>
              <ul className="space-y-5 font-oswald text-xs uppercase tracking-widest list-none m-0">
                {post.content?.map((section, idx) => (
                  <li
                    key={`toc-${post.id}-${section.id}`}
                    className="flex items-center gap-6"
                  >
                    <span className="text-red-600 font-black tabular-nums">{String(idx + 1).padStart(2, '0')}</span>
                    <a
                      href={`#${section.id}`}
                      onClick={(e) => handleTocClick(e, section.id)}
                      className="text-gray-500 hover:text-white transition-all duration-300 hover:translate-x-2"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-24">
              {post.content?.map((section) => (
                <section
                  key={`section-${post.id}-${section.id}`}
                  id={section.id}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-4 mb-10">
                    <h2 className="text-[28px] md:text-[36px] font-oswald font-black text-white uppercase tracking-tight leading-none">
                      {section.title}
                    </h2>
                    <div className="flex-grow h-px bg-white/5" />
                  </div>
                  <div
                    className="whitespace-pre-wrap format-bold-text text-gray-400 leading-relaxed tracking-normal font-inter font-light"
                    dangerouslySetInnerHTML={{ __html: section.body }}
                  />
                </section>
              ))}
            </div>

            <div className="mt-28 pt-16 border-t border-white/5">
              <h3 className="text-[24px] md:text-[32px] font-oswald font-black text-white uppercase tracking-tight mb-8">
                The Final Word
              </h3>
              <p className="text-gray-400 leading-relaxed font-inter font-light mb-12">
                Maintaining consistency and listening to your body are the ultimate keys to long-term progress. 
                Keep exploring our Article Base for more insights, training programs, and nutrition advice. 
                Join <strong className="text-white font-black uppercase tracking-wider">The CrossFit Gym</strong> today and let&apos;s achieve greatness together.
              </p>
              <button 
                onClick={() => navigateToSection(navigate, location, "membership")}
                className="group relative w-full sm:w-auto px-16 py-6 bg-red-600 text-white font-oswald font-black uppercase tracking-[0.3em] rounded-full hover:scale-105 transition-all duration-500 overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center justify-center gap-4">
                  Join Elite Clan <ArrowLeft className="rotate-180" size={18} />
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
