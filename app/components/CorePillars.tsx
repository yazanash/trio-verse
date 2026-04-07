"use client";
import { useLanguageStore } from "@/store/useLanguageStore";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, HeartHandshake, Clock } from "lucide-react";

export default function CorePillars() {
  const { dict, lang } = useLanguageStore();
  const { pillars } = dict;

  const icons = [
    <ShieldCheck className="text-brand-blue" size={28} key="shield" />,
    <Zap className="text-brand-purple" size={28} key="zap" />,
    <Clock className="text-brand-blue" size={28} key="clock" />,
    <HeartHandshake className="text-brand-purple" size={28} key="handshake" />,
  ];
  return (
    <section className="w-full border-t  border-white/5 max-w-6xl mx-auto px-6 py-32 snap-start">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
          {pillars.title}{" "}
          <span className="bg-logo-gradient bg-clip-text text-transparent">
            {pillars.titleGradient}
          </span>
        </h2>
        <p className="text-slate-400 font-light max-w-2xl mx-auto text-lg">
          {pillars.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.items.map((pillar, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="p-8 rounded-4xl bg-white/2 border border-white/5 
                       hover:border-brand-blue/30 hover:bg-white/4 transition-all duration-500 group"
          >
            <div className="mb-6 p-3 w-fit rounded-2xl bg-white/5 group-hover:scale-110 group-hover:bg-brand-blue/10 transition-all duration-500">
              {icons[idx]}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white/90">
              {pillar.title}
            </h3>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              {pillar.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
