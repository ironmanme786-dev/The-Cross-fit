"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Link, useNavigate } from "react-router-dom";
import { Reveal } from './Reveal';

export const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Crossfit Nutrition",
    excerpt:
      "Fuel your workouts properly with these essential crossfit nutrition tips and macro guidelines.",
    image:
      "https://drive.google.com/uc?export=view&id=1OXuZHtlqgFiohJZwlES8UQsAG0a_kMkk",
    date: "April 20, 2026",
    category: "Nutrition",
    content: [
      {
        id: "intro",
        title: "Introduction",
        body: "Nutrition is the foundation of your fitness journey. Without proper fuel, even the most intense <strong>CrossFit workouts</strong> will fall short of their potential. In this guide, we break down exactly what you need to eat to maximize performance, build muscle, and recover faster.",
      },
      {
        id: "macronutrients",
        title: "Understanding Macronutrients",
        body: "CrossFit athletes require a delicate balance of macronutrients to sustain high-intensity effort.\n\n<ul class='list-disc pl-5 mt-4 space-y-2 mb-4'>\n<li><strong>Carbohydrates:</strong> Your primary energy source. Focus on complex carbs like sweet potatoes, oats, and brown rice.</li>\n<li><strong>Proteins:</strong> Essential for muscle repair. Aim for 0.8–1g per pound of body weight from lean meats, fish, and plant-based sources.</li>\n<li><strong>Fats:</strong> Vital for hormone regulation and joint health. Include avocados, nuts, and olive oil in your diet.</li>\n</ul>",
      },
      {
        id: "meal-timing",
        title: "Meal Timing & Hydration",
        body: "When you eat is just as important as what you eat. Consuming a balanced meal <strong>1-2 hours before</strong> training ensures you have enough glycogen to power through. Post-workout, aim for a 3:1 carb-to-protein ratio within 30 minutes to kickstart recovery.\n\nDon't forget hydration—even a 2% drop in hydration levels can significantly impair your athletic performance.",
      },
    ],
  },
  {
    id: 2,
    title: "5 Best Exercises to Build Raw Strength",
    excerpt:
      "Incorporate these fundamental compound movements into your routine to see massive strength gains.",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
    date: "April 15, 2026",
    category: "Fitness",
    content: [
      {
        id: "intro",
        title: "The Foundation of Strength",
        body: "Building raw strength isn't about isolated movements; it's about <strong>compound exercises</strong> that recruit multiple muscle groups simultaneously. Mastering these lifts will translate to better performance across all sports and daily activities.",
      },
      {
        id: "deadlift",
        title: "The Deadlift",
        body: "Often called the king of all exercises, the deadlift builds unparalleled posterior chain strength.\n\n<ul class='list-disc pl-5 mt-4 space-y-2 mb-4'>\n<li>Engages the hamstrings, glutes, lower back, and core.</li>\n<li>Improves grip strength and overall pulling power.</li>\n<li><strong>Pro tip:</strong> Keep the bar close to your shins and maintain a neutral spine.</li>\n</ul>",
      },
      {
        id: "squat",
        title: "The Back Squat",
        body: "Squats are essential for lower body power and core stability. It builds the quads, hamstrings, and glutes while demanding upper back tightness holding the barbell.\n\nConsistent heavy squatting triggers an immense hormonal response, aiding in overall muscle growth across the entire body.",
      },
    ],
  },
  {
    id: 3,
    title: "New Equipment Arriving This Summer",
    excerpt:
      "Get ready for exciting new additions to the gym floor including more Eleiko plates and rowers.",
    image:
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop",
    date: "April 10, 2026",
    category: "News",
    content: [
      {
        id: "intro",
        title: "Upgrading Your Experience",
        body: "We are constantly looking for ways to improve <strong>The CrossFit Gym</strong> experience for our members. After reviewing your feedback, we're thrilled to announce a massive equipment upgrade rolling out this summer.",
      },
      {
        id: "eleiko",
        title: "More Eleiko Plates",
        body: "No more waiting around for the right weight. We are adding over <strong>2,000 lbs</strong> of brand-new Eleiko competition bumper plates.\n\nThese premium plates offer a dead bounce and extreme durability, perfect for those heavy Olympic lifting sessions.",
      },
      {
        id: "rowers",
        title: "Concept2 Rowers",
        body: "Cardio is getting an upgrade. We are bringing in <strong>5 new Concept2 Rowers</strong> to ensure you always have access to one of the most effective full-body conditioning tools available.\n\nGet ready for some intense rowing intervals in our upcoming summer programming!",
      },
    ],
  },
];

export function Blog() {
  const navigate = useNavigate();
  return (
    <section id="blog" className="py-16 bg-[#050505] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal width="100%">
          <div className="text-center mb-24">
            <h2 className="text-[44px] sm:text-6xl md:text-7xl lg:text-8xl font-oswald font-black uppercase tracking-tighter leading-none mb-8">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF073A] to-[#FF3131]">Article Base</span>
            </h2>
            <div className="h-1.5 w-32 bg-red-600 mx-auto rounded-full mb-10" />
            <p className="text-gray-500 font-inter max-w-2xl mx-auto text-lg md:text-xl font-light italic">
              Insights, news, and training secrets from the heart of <span className="text-white font-medium">Jamshedpur&apos;s elite gym.</span>
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              onClick={() => navigate(`/blog/${post.id}`)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col h-full bg-white/[0.02] rounded-[32px] p-6 cursor-pointer border border-white/5 shadow-2xl hover:border-red-600/30 hover:-translate-y-4 transition-all duration-500"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[24px] mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white font-oswald uppercase font-black text-[10px] px-4 py-2 tracking-[0.2em] rounded-xl shadow-2xl backdrop-blur-md" >
                  {post.category}
                </div>
              </div>
              
              <div className="flex flex-col flex-grow px-2 pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-px bg-red-600/50" />
                  <p className="text-gray-500 text-[11px] font-oswald uppercase tracking-[0.3em] font-black">
                    {post.date}
                  </p>
                </div>
                <h3 className="text-2xl sm:text-3xl leading-tight font-oswald font-black tracking-tight text-white mb-6 group-hover:text-red-500 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-inter mb-10 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-500">
                      <span className="text-lg group-hover:translate-x-1 transition-transform inline-block">→</span>
                    </div>
                    <span className="text-white/60 font-oswald uppercase text-xs font-black tracking-[0.2em] group-hover:text-white transition-colors">
                      Read Blueprint
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
