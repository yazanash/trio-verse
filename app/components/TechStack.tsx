"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Database,
  Cpu,
  Globe,
  Smartphone,
  Monitor,
  Server,
} from "lucide-react";
import { useLanguageStore } from "@/store/useLanguageStore";

export default function TechStack() {
  const { dict, lang } = useLanguageStore();
  const { tech } = dict;
  const icons = [
    <Layers size={20} className="text-brand-blue" key="web" />,
    <Smartphone size={20} className="text-brand-blue" key="mobile" />,
    <Monitor size={20} className="text-brand-blue" key="core" />,
    <Server size={20} className="text-brand-blue" key="infra" />,
  ];
  return (
    <section
      id="techstack"
      className="w-full max-w-6xl mx-auto px-6 py-6 border-t border-white/5"
    >
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-xl text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter">
            {tech.title}{" "}
            <span className="text-brand-blue italic">{tech.titleGradient}</span>
          </h2>
          <p className="text-slate-400 font-light text-lg">{tech.subtitle}</p>
        </div>
        <div className="hidden md:block text-right">
          <p className="text-[10px] uppercase tracking-[0.4em] text-slate-600 font-bold mb-2">
            {tech.badge}
          </p>
          <div className="h-px w-32 bg-linear-to-l from-brand-blue/50 to-transparent ml-auto" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tech.groups.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group p-8 rounded-[2.5rem] bg-white/1 border border-white/5 hover:border-brand-blue/20 hover:bg-white/3 transition-all duration-500"
          >
            <div className="flex items-start justify-between mb-8">
              <div className="p-3 rounded-2xl bg-brand-blue/5 border border-brand-blue/10">
                {icons[idx]}
              </div>
              <div className="flex gap-2">
                {group.tools.slice(0, 2).map((t) => (
                  <span
                    key={t}
                    className="text-[9px] px-2 py-1 rounded-md bg-white/5 text-slate-500 border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
              {group.category}
            </h3>
            <p className="text-slate-500 text-sm font-light leading-relaxed mb-6">
              {group.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {group.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-xs font-mono text-slate-300 bg-white/5 px-3 py-1 rounded-full border border-white/10 group-hover:border-brand-blue/30 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
