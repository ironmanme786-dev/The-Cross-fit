"use client";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { equipmentsData } from "@/lib/data";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { navigateToSection } from "@/lib/navigation";

const getEquipmentTips = (name: string) => {
  const commonTips = [
    "Always warm up before using heavy equipment.",
    "Ask a trainer if you're unsure about the movement.",
    "Wipe down the machine after use.",
    "Control the weight on both the eccentric and concentric phases."
  ];

  if (name.toLowerCase().includes("press")) {
    return [
      ...commonTips,
      "Maintain a stable base and keep your core tight.",
      "Don't lock your elbows at the top."
    ];
  }
  if (name.toLowerCase().includes("cycle") || name.toLowerCase().includes("trainer")) {
    return [
      ...commonTips,
      "Adjust the seat height to fit your comfort.",
      "Maintain a consistent pace for cardio benefits."
    ];
  }
  return commonTips;
};

const getDetailedContent = (name: string) => {
  return {
    howToUse: [
      "Adjust the seat and handles to align with your body structure before starting.",
      "Choose a moderate weight to begin and ensure your form is perfect.",
      "Sit or stand firmly, engaging your core to maintain a neutral spine.",
      "Perform the movement with a slow, controlled tempo, focusing on the target muscle.",
      "Ensure a full range of motion without locking your joints at the end of the reps.",
      "Always return the weight to the starting position gently without letting it crash."
    ],
    precautions: [
      "Avoid arches in your back or excessive swinging during the movement.",
      "Do not hold your breath; maintain a steady breathing pattern throughout.",
      "If you feel any unusual joint pain, stop the exercise and consult a trainer.",
      "Check that all adjustment pins are securely locked in place before use.",
      "Never attempt to lift weights that compromise your posture or safety."
    ],
    benefits: [
      "Provides targeted isolation for specific muscle groups, leading to better hypertrophy.",
      "Maintains constant tension on the muscles throughout the entire range of motion.",
      "Significantly reduces the risk of injury compared to complex free-weight movements.",
      "Allows for easy drop-sets and quick weight adjustments for intensity techniques.",
      "Improves joint stability and movement mechanics through guided mechanical paths.",
      "Great for rehabilitation or for those working around specific physical limitations."
    ],
    pros: [
      "Extremely user-friendly for beginners and safe for solo training sessions.",
      "Consistent resistance profile makes it great for building muscle mind-connection.",
      "Easily adjustable to accommodate different fitness levels and goals."
    ],
    cons: [
      "Does not recruit stabilizer muscles as effectively as free weights.",
      "Fixed motion path might feel restrictive for some body types.",
      "Less functional transfer to real-world movements compared to compound lifts."
    ],
    whoShouldUse: "This equipment is suitable for all levels. Beginners can use it to build strength safely, while advanced athletes can use it for high-volume isolation work at the end of their sessions.",
    conclusion: `The ${name} is an indispensable part of a well-rounded fitness regimen. Whether your goal is to build power, increase muscle mass, or improve general health, using this machine with discipline will help you get there. Keep pushing, stay consistent, and the results will follow!`
  };
};

export function EquipmentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const eq = equipmentsData.find((p) => p.id === Number(id));

  if (!eq) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6">
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
        >
            <h1 className="text-5xl font-oswald text-red-600 mb-6 uppercase italic tracking-tighter">Equipment Not Found</h1>
            <p className="text-gray-400 mb-8 font-inter">The equipment you&apos;re looking for doesn&apos;t exist or has been moved.</p>
            <button
                onClick={() => navigate("/")}
                className="px-8 py-3 bg-white text-black font-oswald uppercase tracking-widest font-bold hover:bg-red-600 hover:text-white transition-all duration-300 rounded-full"
            >
                Back To Gym
            </button>
        </motion.div>
      </div>
    );
  }

  const tips = getEquipmentTips(eq.name);
  const detail = getDetailedContent(eq.name);

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-6 pb-24 selection:bg-red-600 selection:text-white">
      <div className="max-w-5xl mx-auto px-5 md:px-10">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/")}
          className="flex items-center gap-3 text-white hover:text-red-500 transition-all bg-white/[0.05] hover:bg-white/[0.1] px-6 py-3 rounded-full font-oswald uppercase tracking-widest text-[12px] mb-12 border border-white/10 shadow-lg group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[4/5] rounded-[30px] overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.05)] border border-white/10"
            >
                <Image
                    src={eq.image}
                    alt={eq.name}
                    fill
                    referrerPolicy="no-referrer"
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                    <span className="text-red-600 font-oswald uppercase font-black tracking-[0.2em] text-sm bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-sm border border-red-600/30">Premium Class</span>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h1 className="text-5xl md:text-7xl font-oswald font-black uppercase text-white mb-6 leading-none italic tracking-tighter">
                   {eq.name}
                </h1>
                
                <div className="h-1.5 w-24 bg-red-600 mb-10 shadow-[0_0_20px_rgba(220,38,38,0.5)]" />

                <div className="space-y-8 text-gray-400 font-inter text-lg leading-relaxed">
                    <p>
                        Our <span className="text-white font-bold">{eq.name}</span> is a top-tier piece of equipment at <span className="text-red-500 font-black italic">The CrossFit Gym</span>. Engineered for maximum efficiency and durability, this machine provides targeted stimulus for your muscles while maintaining joint safety.
                    </p>
                    <p>
                        Whether you are a beginner looking to build a foundation or an advanced athlete looking to isolate specific groups, this equipment is essential for your training split.
                    </p>
                </div>

                <div className="mt-12 bg-white/5 border border-white/10 rounded-[20px] p-8 backdrop-blur-sm">
                    <h3 className="text-xl font-oswald font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-3">
                        <span className="h-2 w-2 bg-red-600 rounded-full animate-pulse" />
                        Training Tips
                    </h3>
                    <ul className="space-y-5">
                        {tips.map((tip, i) => (
                            <li key={`tip-${i}-${tip.substring(0, 10)}`} className="flex items-start gap-4 text-gray-300">
                                <CheckCircle2 className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
                                <span className="text-[16px]">{tip}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-6">
                    <div className="p-6 bg-white/5 rounded-xl border border-white/5">
                        <span className="text-red-500 font-oswald uppercase text-xs tracking-widest block mb-2">Target Muscles</span>
                        <span className="text-white font-bold block">Compound Movement</span>
                    </div>
                    <div className="p-6 bg-white/5 rounded-xl border border-white/5">
                        <span className="text-red-500 font-oswald uppercase text-xs tracking-widest block mb-2">Difficulty</span>
                        <span className="text-white font-bold block">All Levels</span>
                    </div>
                </div>

                {/* HOW TO USE SECTION */}
                <div className="mt-12">
                    <h3 className="text-xl font-oswald font-bold text-white uppercase tracking-widest mb-6">
                        How To Use
                    </h3>
                    <div className="space-y-4 text-gray-400 font-inter leading-relaxed">
                        {detail.howToUse.map((step, i) => (
                            <div key={`how-to-${i}`} className="flex gap-4">
                                <span className="text-red-600 font-oswald font-black">{i + 1}.</span>
                                <span>{step}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* PRECAUTIONS SECTION */}
                <div className="mt-12">
                    <h3 className="text-xl font-oswald font-bold text-white uppercase tracking-widest mb-6">
                        Precautions
                    </h3>
                    <ul className="space-y-4 text-gray-400 font-inter leading-relaxed">
                        {detail.precautions.map((precaution, i) => (
                            <li key={`precaution-${i}`} className="flex items-start gap-3">
                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                                <span>{precaution}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* BENEFITS EXPANDED */}
                <div className="mt-12">
                    <h3 className="text-xl font-oswald font-bold text-white uppercase tracking-widest mb-6">
                        Key Benefits
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                        {detail.benefits.map((benefit, i) => (
                            <div key={`benefit-${i}`} className="p-5 bg-white/5 border border-white/5 rounded-xl">
                                <p className="text-gray-300 text-sm leading-relaxed">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* PROS & CONS */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-lg font-oswald font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                             <span className="text-green-500">✔</span> Pros
                        </h3>
                        <ul className="space-y-3 text-gray-400 text-sm font-inter">
                            {detail.pros.map((pro, i) => (
                                <li key={`pro-${i}`}>- {pro}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-oswald font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                            <span className="text-red-500">✖</span> Cons
                        </h3>
                        <ul className="space-y-3 text-gray-400 text-sm font-inter">
                            {detail.cons.map((con, i) => (
                                <li key={`con-${i}`}>- {con}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* WHO SHOULD USE */}
                <div className="mt-12">
                    <h3 className="text-xl font-oswald font-bold text-white uppercase tracking-widest mb-4">
                        Who Should Use
                    </h3>
                    <p className="text-gray-400 font-inter leading-relaxed bg-white/5 border border-white/5 p-6 rounded-xl">
                        {detail.whoShouldUse}
                    </p>
                </div>

                {/* CONCLUSION */}
                <div className="mt-12 border-t border-white/10 pt-12">
                    <p className="text-white font-inter text-xl leading-relaxed italic font-light">
                        {detail.conclusion}
                    </p>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row gap-4">
                    <button 
                        onClick={() => navigateToSection(navigate, location, "membership")}
                        className="flex-1 bg-red-600 text-white font-oswald font-black uppercase tracking-[0.2em] py-5 rounded-sm hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all duration-300 group overflow-hidden relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />
                        Join The Gym Now
                    </button>
                    <button 
                        onClick={() => navigate("/")}
                        className="flex-1 bg-white text-black font-oswald font-black uppercase tracking-[0.2em] py-5 rounded-sm hover:bg-gray-200 transition-all duration-300"
                    >
                        View More Info
                    </button>
                </div>
            </motion.div>
        </div>
      </div>
    </div>
  );
}
