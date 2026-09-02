
"use client";

import { ShieldCheck, Target, ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DetailedAbout() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      
      {/* Decorative Text */}
      <div className="absolute top-10 left-[-5%] text-[15rem] font-serif font-black text-slate-50 opacity-50 pointer-events-none whitespace-nowrap z-0">
        JOURNEY
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Image Composition */}
            <div className="lg:col-span-6 relative h-[700px] w-full">
                
                {/* Main Large Image */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="absolute top-0 right-0 w-[85%] h-[80%] rounded-[2.5rem] overflow-hidden shadow-2xl"
                >
                    <Image src="/about-showcase-new.jpg" alt="Luxury Travel Udaipur" fill className="object-cover" />
                    <div className="absolute inset-0 bg-midnight/20" />
                </motion.div>

                {/* Overlapping Small Image */}
                <motion.div 
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="absolute bottom-0 left-0 w-[55%] h-[45%] rounded-[2rem] border-8 border-white overflow-hidden shadow-2xl"
                >
                    <Image src="/luxury_sedan_lake_palace_1788329128615.jpg" alt="Udaipur Palace Travel" fill className="object-cover" />
                </motion.div>

                {/* Floating Experience Badge */}
                <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 0.4 }}
                    className="absolute top-1/2 left-[10%] -translate-y-1/2 w-32 h-32 rounded-full bg-gold-premium shadow-2xl flex items-center justify-center overflow-hidden group"
                >
                    {/* Spinning Border */}
                    <div className="absolute inset-1 border-2 border-midnight border-dashed rounded-full animate-[spin_20s_linear_infinite]" />
                    
                    {/* Static Text */}
                    <div className="relative z-10 flex flex-col items-center justify-center">
                        <span className="font-serif font-black text-3xl text-midnight leading-none">15+</span>
                        <span className="text-[8px] uppercase font-bold tracking-widest text-midnight text-center mt-1">Years<br/>Experience</span>
                    </div>
                </motion.div>

            </div>

            {/* Right Content Area */}
            <div className="lg:col-span-6 lg:pl-10">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-slate-50 text-gold-premium font-black uppercase tracking-[0.3em] text-[10px] mb-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-premium" /> Our Story
                </span>
                
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8 font-serif uppercase">
                    Redefining <br/> <span className="text-gold-premium">Luxury Travel</span>
                </h2>
                
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light mb-12">
                    <p>
                        Based in Udaipur, Rajasthan, we are a premier travel company dedicated to providing unparalleled experiences. From the moment you arrive, we ensure your journey is seamless, comfortable, and memorable.
                    </p>
                    <p>
                        Travel with pride in our signature vehicles. Impeccably maintained, and equipped with top-tier amenities to ensure a prestigious journey across Udaipur and beyond.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8 mb-12">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                            <ShieldCheck className="w-6 h-6 text-midnight" />
                        </div>
                        <div>
                            <h4 className="font-serif font-bold text-lg text-midnight mb-1">Safety First</h4>
                            <p className="text-slate-500 text-sm">Strict hygiene protocols & licensed drivers.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                            <Target className="w-6 h-6 text-midnight" />
                        </div>
                        <div>
                            <h4 className="font-serif font-bold text-lg text-midnight mb-1">Always Punctual</h4>
                            <p className="text-slate-500 text-sm">Advanced dispatch systems for on-time arrivals.</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-6">
                    <Link href="/about" className="inline-flex items-center gap-3 bg-midnight text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gold-premium hover:text-white transition-colors shadow-xl hover:shadow-2xl">
                        Read Full Story <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
            
        </div>
      </div>
    </section>
  );
}


