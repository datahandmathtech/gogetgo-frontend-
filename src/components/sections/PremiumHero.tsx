
"use client";

import Image from "next/image";
import { ArrowRight, MapPin, Calendar, Star } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PremiumHero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen w-full overflow-hidden flex items-center pt-32 pb-24 md:pt-32 md:pb-24">
      {/* Main Background Image - Provided by User */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Gemini_Generated_Image_f2wk2xf2wk2xf2wk.png"
          alt="Premium Udaipur Taxi Service"
          fill
          priority
          className="object-cover object-bottom"
        />
        {/* Sleek Gradient Overlay for text contrast on the LEFT side */}
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/90 via-midnight/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />
      </div>

      {/* Content - Left Aligned */}
      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="max-w-3xl pt-10">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-gold-premium/30 bg-midnight/60 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-gold-premium animate-pulse" />
            <span className="text-white font-bold uppercase tracking-[0.2em] text-[10px]">Your Premium Travel Partner</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl font-serif text-white leading-[1.05] mb-6 tracking-tight"
          >
            Redefining <br /> 
            <span className="text-gold-light">Luxury Travel</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-200 max-w-xl mb-12 leading-relaxed font-light drop-shadow-md"
          >
            Experience Udaipur and beyond with our premium fleet. We manage your complete journey with impeccable service and professional chauffeurs.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-6"
          >
            <Link 
              href="/booking" 
              className="flex items-center justify-center gap-3 bg-gold-premium text-white px-8 h-14 rounded-full font-bold text-sm tracking-widest uppercase transition-all hover:bg-gold-light active:scale-95 shadow-[0_0_30px_rgba(56,189,248,0.3)] hover:shadow-[0_0_50px_rgba(56,189,248,0.5)]"
            >
              Book Now <ArrowRight className="w-5 h-5" />
            </Link>

            <div className="flex items-center gap-4 bg-midnight/40 backdrop-blur-md border border-white/10 rounded-full pr-6 pl-2 py-2">
                <div className="w-10 h-10 rounded-full bg-gold-premium flex items-center justify-center shrink-0">
                    <Star className="w-5 h-5 text-white fill-white" />
                </div>
                <div>
                    <div className="text-white font-bold text-xs">4.9/5 Rating</div>
                    <div className="text-slate-300 text-[10px] uppercase tracking-wider">Trusted by 10k+</div>
                </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

