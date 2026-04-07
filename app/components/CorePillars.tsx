"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, HeartHandshake, Clock } from "lucide-react";

const pillars = [
  {
    icon: <ShieldCheck className="text-brand-blue" size={28} />,
    title: "Privacy & Security",
    desc: "Your data is your most valuable asset. We implement industry-leading encryption and privacy protocols by default.",
  },
  {
    icon: <Zap className="text-brand-purple" size={28} />,
    title: "Engineered Speed",
    desc: "Built on modern stacks like Next.js & .NET, ensuring lightning-fast performance and seamless scalability.",
  },
  {
    icon: <Clock className="text-brand-blue" size={28} />,
    title: "High Availability",
    desc: "Mission-critical systems require 99.9% uptime. We provide continuous monitoring and robust architecture.",
  },
  {
    icon: <HeartHandshake className="text-brand-purple" size={28} />,
    title: "Partnership First",
    desc: "We don't just deliver code; we provide ongoing strategic technical support to ensure your long-term success.",
  },
];

export default function CorePillars() {
  return (
    <section className="w-full border-t  border-white/5 max-w-6xl mx-auto px-6 py-32 snap-start">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
          The{" "}
          <span className="bg-logo-gradient bg-clip-text text-transparent">
            Trio-Standard
          </span>
        </h2>
        <p className="text-slate-400 font-light max-w-2xl mx-auto text-lg">
          We bridge the gap between complex engineering and reliable business
          solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar, idx) => (
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
              {pillar.icon}
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
