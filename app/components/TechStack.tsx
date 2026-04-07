"use client";
import React from "react";
import { motion } from "framer-motion";
import { Layers, Database, Cpu, Globe } from "lucide-react";

const techGroups = [
  {
    category: "Frontend Excellence",
    icon: <Layers size={20} className="text-brand-blue" />,
    tools: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    description:
      "Creating fluid, SEO-optimized, and high-performance user interfaces.",
  },
  {
    category: "Backend & Systems",
    icon: <Cpu size={20} className="text-brand-blue" />,
    tools: [".NET Core", "Go (Golang)", "Node.js", "Python"],
    description:
      "Building robust APIs and microservices designed for high concurrency.",
  },
  {
    category: "Data & Storage",
    icon: <Database size={20} className="text-brand-blue" />,
    tools: ["PostgreSQL", "Redis", "MongoDB", "Elasticsearch"],
    description:
      "Architecting secure, scalable, and real-time data structures.",
  },
  {
    category: "Cloud & DevOps",
    icon: <Globe size={20} className="text-brand-blue" />,
    tools: ["Docker", "Kubernetes", "AWS", "Vercel"],
    description:
      "Ensuring 99.9% uptime with modern deployment and scaling strategies.",
  },
];

export default function TechStack() {
  return (
    <section
      id="techstack"
      className="w-full max-w-6xl mx-auto px-6 py-6 border-t border-white/5"
    >
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-xl text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter">
            Our <span className="text-brand-blue italic">Tech-DNA.</span>
          </h2>
          <p className="text-slate-400 font-light text-lg">
            We don't follow hype. We select industry-leading technologies to
            build future-proof ecosystems that scale with your business.
          </p>
        </div>
        <div className="hidden md:block text-right">
          <p className="text-[10px] uppercase tracking-[0.4em] text-slate-600 font-bold mb-2">
            Build for Scale
          </p>
          <div className="h-px w-32 bg-linear-to-l from-brand-blue/50 to-transparent ml-auto" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {techGroups.map((group, idx) => (
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
                {group.icon}
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
