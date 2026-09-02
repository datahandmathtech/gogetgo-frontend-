
"use client";

import { useState } from "react";
import { Plus, Minus, MessageCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const faqs = [
  {
    q: "How early should I book my taxi in Udaipur?",
    a: "We recommend booking at least 24 hours in advance, especially during peak tourist seasons (October to March), to ensure your preferred vehicle type is available."
  },
  {
    q: "Do you provide outstation cabs from Udaipur?",
    a: "Yes, we offer premium outstation taxi services from Udaipur to Jaipur, Jodhpur, Mount Abu, Jaisalmer, and all major cities across Rajasthan and Gujarat."
  },
  {
    q: "Are toll taxes and parking included in the fare?",
    a: "Our transparent pricing model means you can choose between all-inclusive packages (where tolls/parking are covered) or base-fare packages where you pay tolls as actuals. We clarify this before booking."
  },
  {
    q: "What types of vehicles do you offer?",
    a: "Our exclusive fleet includes luxury Sedans (Dzire, Etios), premium SUVs (Innova Crysta), and high-end Maharaja Tempo Travellers (12-26 seaters) for large groups."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Title Area */}
            <div className="lg:col-span-5 space-y-8">
                <div>
                    <span className="text-gold-premium font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Travel Queries</span>
                    <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-[1] font-serif mb-6">
                        Frequently <br/> Asked Questions
                    </h2>
                    <p className="text-slate-500 text-lg">
                        Everything you need to know about our luxury transport services in Rajasthan.
                    </p>
                </div>
                
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                    <MessageCircle className="w-8 h-8 text-gold-premium mb-4" />
                    <h3 className="text-xl font-bold text-midnight mb-2">Still have questions?</h3>
                    <p className="text-slate-500 mb-6 text-sm">Our support team is available 24/7 to assist you.</p>
                    <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-midnight hover:text-gold-premium transition-colors">
                        Contact Support <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            {/* Accordion Area */}
            <div className="lg:col-span-7 space-y-4">
                {faqs.map((faq, idx) => (
                    <div 
                        key={idx} 
                        className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${openIndex === idx ? "border-gold-premium/30 bg-gold-premium/5" : "border-slate-200 bg-white hover:border-slate-300"}`}
                    >
                        <button 
                            className="w-full flex items-center justify-between p-6 text-left"
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        >
                            <span className="text-lg font-bold text-midnight font-serif pr-8">{faq.q}</span>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIndex === idx ? "bg-gold-premium text-white" : "bg-slate-100 text-slate-500"}`}>
                                {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                            </div>
                        </button>
                        <AnimatePresence>
                            {openIndex === idx && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                                        {faq.a}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>

        </div>
      </div>
    </section>
  );
}


