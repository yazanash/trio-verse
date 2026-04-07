"use client";
import React from "react";
import { motion } from "framer-motion";
import { Gavel, Copyright, Handshake, AlertTriangle } from "lucide-react";

export default function TermsOfService() {
  const framework = [
    {
      icon: <Gavel size={22} className="text-brand-blue" />,
      title: "Digital Agreement",
      content:
        "By navigating the TrioVerse ecosystem, you acknowledge that you are interacting with our proprietary technical environment. These terms govern your professional use of our showcased assets and insights.",
    },
    {
      icon: <Copyright size={22} className="text-brand-blue" />,
      title: "Intellectual Property",
      content:
        "All source code architectures, UI/UX blueprints, and product logic (such as Uniceps) are the exclusive IP of TrioVerse Labs. 'Cloning' or unauthorized reverse-engineering of our assets is a breach of our digital integrity.",
    },
    {
      icon: <Handshake size={22} className="text-brand-blue" />,
      title: "Engagement Protocol",
      content:
        "The content here is a demonstration of capability. Formal engineering engagement only commences once a Master Service Agreement (MSA) or Statement of Work (SOW) is cryptographically signed by both parties.",
    },
    {
      icon: <AlertTriangle size={22} className="text-brand-blue" />,
      title: "Liability Boundary",
      content:
        "While we build for 99.9% precision, the general insights provided on this platform are for strategic reference. Direct technical implementation without a formal Trio-Audit is at the user's discretion.",
    },
  ];

  return (
    <main className="min-h-screen text-slate-400 py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
            Legal{" "}
            <span className="bg-logo-gradient bg-clip-text text-transparent italic">
              Framework.
            </span>
          </h1>
          <p className="text-slate-500 text-lg font-light max-w-2xl">
            The rules of engagement for interacting with our lab, our products,
            and our proprietary technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {framework.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-4xl bg-white/2 border border-white/5 hover:border-brand-blue/20 transition-all group"
            >
              <div className="mb-6 p-3 w-fit rounded-xl bg-brand-blue/5 group-hover:bg-brand-blue/10 transition-colors">
                {item.icon}
              </div>
              <h2 className="text-xl font-bold text-white mb-4 tracking-tight">
                {item.title}
              </h2>
              <p className="text-sm leading-relaxed font-light text-slate-500 group-hover:text-slate-300 transition-colors">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-600 font-mono italic">
            // TrioVerse Labs reserves the right to update the Framework as our
            tech-stack scales.
          </p>
          <div className="px-6 py-2 rounded-full border border-white/10 text-[10px] uppercase tracking-widest text-slate-500">
            Last Patch: April 2024
          </div>
        </div>
      </div>
    </main>
  );
}
