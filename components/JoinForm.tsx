'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, MessageSquare, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Reveal } from './Reveal';

export function JoinForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    goal: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const goals = ['Fat Loss 🔥', 'Muscle Gain 💪', 'Aesthetic Body (like Cristiano Ronaldo)', 'Bodybuilder Physique', 'General Fitness'];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName) newErrors.fullName = 'Required';
    if (!formData.phone) newErrors.phone = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/maqvyaao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ fullName: '', phone: '', email: '', goal: '', message: '' });
      } else {
        console.error('Formspree submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all duration-300";

  return (
    <section id="contact-form" className="py-24 bg-[#050505] text-white">
      <div className="max-w-xl mx-auto px-5">
        <Reveal width="100%">
          <div className="text-center mb-12">
            <h3 className="text-red-500 font-oswald uppercase tracking-[0.2em] font-black text-sm mb-4">Start Now</h3>
            <h2 className="text-4xl sm:text-5xl font-oswald font-black uppercase tracking-tighter text-white">
              Join The Journey
            </h2>
          </div>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 backdrop-blur-sm"
        >
          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send size={32} />
              </div>
              <h3 className="text-2xl font-oswald font-black uppercase text-white mb-2">Thank you!</h3>
              <p className="text-gray-400">We will contact you soon to kickstart your fitness training.</p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-8 text-red-500 hover:text-red-400 font-bold uppercase tracking-widest text-sm"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name *"
                  className={cn(inputClass, errors.fullName && "border-red-500/50")}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  className={inputClass}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address (optional)"
                  className={inputClass}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <select
                  name="goal"
                  className={inputClass}
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                >
                  <option value="" disabled className="bg-neutral-900">Select Fitness Goal</option>
                  {goals.map((goal) => <option key={goal} value={goal} className="bg-neutral-900">{goal}</option>)}
                </select>
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message / Note (optional)"
                  className={cn(inputClass, "h-24 resize-none")}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-oswald font-black uppercase tracking-widest py-4 rounded-xl shadow-lg shadow-red-900/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                {isSubmitting ? <Loader2 className="animate-spin" /> : "Start Your Fitness Journey"}
              </button>
              
              <p className="text-center text-[10px] text-gray-600 uppercase tracking-widest">
                No spam. Only fitness guidance.
              </p>
            </form>
          )}
        </motion.div>

        <div className="mt-8 text-center">
            <a 
              href="https://wa.me/919234431773" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 text-sm font-bold uppercase tracking-widest transition-colors"
            >
              <MessageSquare size={16} /> Quick Contact via WhatsApp
            </a>
        </div>
      </div>
    </section>
  );
}
