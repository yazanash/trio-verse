"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export default function TalentSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-20">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-linear-to-r from-brand-blue/10 via-brand-purple/5 to-transparent border border-white/10 p-8 md:p-12">
        {/* الدوائر الجمالية في الخلفية */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-blue/20 blur-[80px] rounded-full" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="max-w-xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4 text-brand-blue">
              <Sparkles size={20} />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
                Trio Talent Lab
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tighter">
              Not just a team, <br className="hidden md:block" />
              but a <span className="text-brand-blue">Movement.</span>
            </h2>
            <p className="text-slate-400 font-light leading-relaxed">
              We are constantly looking for unconventional thinkers and raw
              talents to join our ecosystem. No CVs required—just your logic and
              your vision.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSdTGXcx2RAYhw9QiVRItl-EyIYilz4HtBbpC76cOfpXAsKrog/viewform?usp=header",
                "_blank",
              )
            }
            className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-full text-white transition-all duration-300"
          >
            <span className="text-sm font-bold uppercase tracking-widest">
              Apply to the Lab
            </span>
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
