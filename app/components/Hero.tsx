import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
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
          Reliability in{" "}
          <span className="bg-logo-gradient bg-clip-text text-transparent">
            Every Bit.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-light leading-relaxed mb-10">
          We don't just write code; we architect scalable digital ecosystems
          that drive real-world impact. From Uniceps to custom NGO solutions.
        </p>

        <div className="flex gap-4 justify-center">
          <button
            className="px-8 py-3 rounded-xl border border-white/10 bg-white/5 
                                 hover:bg-brand-blue/10 hover:border-brand-blue/50 transition-all font-medium"
          >
            Explore Solutions
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
