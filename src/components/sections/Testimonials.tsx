
"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  
  useEffect(() => {
    const blockElfsightClicks = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      if (link && link.href.includes("elfsight")) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    window.addEventListener("click", blockElfsightClicks, true);
    return () => window.removeEventListener("click", blockElfsightClicks, true);
  }, []);

  return (
    <section className="py-32 bg-midnight relative overflow-hidden font-sans w-full">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-premium/10 via-midnight to-midnight" />
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gold-premium/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl relative">
              <Quote className="absolute -top-12 -left-8 w-24 h-24 text-white/5 -rotate-12" />
              <span className="text-gold-premium font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Client Feedback</span>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase font-serif leading-[0.9]">
                Guest<br/>Experiences.
              </h2>
          </div>
          <div className="text-slate-400 font-medium text-lg max-w-sm text-left md:text-right">
             Hear from our esteemed clients about their journeys across Rajasthan.
          </div>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-7xl mx-auto relative elfsight-wrapper bg-gradient-to-b from-white/10 to-white/5 p-4 md:p-8 rounded-[2.5rem] backdrop-blur-md border border-white/10 shadow-[0_0_60px_rgba(255,183,3,0.05)]" 
            style={{ height: "480px" }}
        >
          <iframe 
            src="/elfsight-reviews.html" 
            title="Google Reviews"
            className="w-full h-full rounded-2xl bg-white/5"
            frameBorder="0"
          />
        </motion.div>

      </div>
    </section>
  );
}

