
"use client";

import { ShieldCheck, Map, Clock, Car, BadgeCheck, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-gold-premium font-black uppercase tracking-[0.4em] text-[10px] block mb-4">The GoGetGo Difference</span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase font-serif">
            Why Partner With Us.
          </h2>
        </div>

        {/* Bento Box Grid */}
        <div className="grid md:grid-cols-3 gap-6 auto-rows-[300px]">
            
            {/* Large Feature 1 */}
            <motion.div 
                whileHover={{ y: -10 }}
                className="md:col-span-2 relative rounded-[2.5rem] overflow-hidden group shadow-2xl"
            >
                <Image src="/luxury_interior_passenger_1788330440712.jpg" alt="Interior" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                    <BadgeCheck className="w-10 h-10 text-gold-premium mb-4" />
                    <h3 className="text-2xl font-serif text-white mb-2">Experienced Chauffeurs</h3>
                    <p className="text-slate-300 text-sm max-w-md">Commercially licensed, background-checked, and trained in corporate etiquette.</p>
                </div>
            </motion.div>

            {/* Small Feature 1 */}
            <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2.5rem] p-8 shadow-xl flex flex-col justify-end border border-slate-100 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-premium/10 rounded-bl-[100px]" />
                <Clock className="w-10 h-10 text-midnight mb-6" />
                <h3 className="text-xl font-serif text-slate-900 mb-2 font-bold">Punctuality</h3>
                <p className="text-slate-500 text-sm">Vehicles arrive 15 mins prior to the scheduled time.</p>
            </motion.div>

            {/* Small Feature 2 */}
            <motion.div 
                whileHover={{ y: -10 }}
                className="bg-midnight rounded-[2.5rem] p-8 shadow-2xl flex flex-col justify-end text-white relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px]" />
                <ShieldCheck className="w-10 h-10 text-gold-premium mb-6" />
                <h3 className="text-xl font-serif text-white mb-2">Transparent Pricing</h3>
                <p className="text-slate-400 text-sm">No hidden charges. Complete transparency upfront.</p>
            </motion.div>

            {/* Large Feature 2 */}
            <motion.div 
                whileHover={{ y: -10 }}
                className="md:col-span-2 bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-100 flex flex-col md:flex-row items-center gap-8"
            >
                <div className="flex-1">
                    <Map className="w-10 h-10 text-gold-premium mb-6" />
                    <h3 className="text-2xl font-serif text-slate-900 mb-4 font-bold">Local Rajasthan Expertise</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                        Deep knowledge of local routes, traffic patterns, and hidden gems across Udaipur, Jaipur, Jodhpur, and the entire Rajasthan state. Experience the culture with a local touch.
                    </p>
                </div>
                <div className="w-full md:w-64 h-48 relative rounded-2xl overflow-hidden shrink-0">
                     <Image src="/udaipur_suv_driving_1788330466467.jpg" alt="Driving" fill className="object-cover" />
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
}


