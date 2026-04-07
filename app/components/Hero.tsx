"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguageStore } from "@/store/useLanguageStore";
const Hero = () => {
  const { dict } = useLanguageStore(); // سحب القاموس
  const { hero } = dict;
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="home"
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden snap-start"
    >
      {/* الإضاءة الخلفية - محصورة بالهيرو فقط */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                          w-125 h-125 bg-brand-purple/20 blur-[120px] rounded-full -z-10 animate-pulse"
      ></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10 px-4"
      >
        <div className="mb-8 flex justify-center">
          <Image
            src="/logo123.png"
            alt="TrioVerse Logo"
            width={120}
            height={120}
            className="drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          {hero.titleMain}{" "}
          <span className="bg-logo-gradient bg-clip-text text-transparent">
            {hero.titleGradient}
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-light leading-relaxed mb-10">
          {hero.description}
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => scrollTo("solutions")}
            className="px-8 py-3 rounded-xl border border-white/10 bg-white/5 
                                 hover:bg-brand-blue/10 hover:border-brand-blue/50 transition-all font-medium"
          >
            {hero.cta}
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
