"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, EyeOff, FileText } from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: <Lock size={22} className="text-brand-blue" />,
      title: "Zero-Leaking Policy",
      content:
        "We treat your project ideas like our own source code. Any information shared—from initial sketches to complex logic—is strictly confidential and encrypted within our internal communication nodes.",
    },
    {
      icon: <ShieldCheck size={22} className="text-brand-blue" />,
      title: "Standard NDA",
      content:
        "Trust is built on documentation. We provide a comprehensive Non-Disclosure Agreement (NDA) as a standard first step for every partnership, ensuring your intellectual property stays yours.",
    },
    {
      icon: <EyeOff size={22} className="text-brand-blue" />,
      title: "No Third-Party Access",
      content:
        "We don't sell data. Period. Your contact info and project requirements are only accessible by the core Trio-Engineers assigned to your case.",
    },
    {
      icon: <FileText size={22} className="text-brand-blue" />,
      title: "Minimal Tracking",
      content:
        "Our site uses baseline telemetry to ensure high availability and performance. We don't use invasive trackers or sell your browsing habits to advertisers.",
    },
  ];

  return (
    <main className="min-h-screen  text-slate-400 py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
            Privacy{" "}
            <span className="bg-logo-gradient bg-clip-text text-transparent italic">
              Protocol.
            </span>
          </h1>
          <p className="text-slate-500 text-lg font-light max-w-2xl">
            At TrioVerse, privacy isn't a legal checkbox—it's an engineering
            requirement. Here is how we handle your digital footprints and
            business secrets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-4xl bg-white/2 border border-white/5 hover:border-brand-blue/20 transition-all"
            >
              <div className="mb-6 p-3 w-fit rounded-xl bg-brand-blue/5">
                {item.icon}
              </div>
              <h2 className="text-xl font-bold text-white mb-4 tracking-tight">
                {item.title}
              </h2>
              <p className="text-sm leading-relaxed font-light text-slate-500 group-hover:text-slate-400">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-10 rounded-[3rem] bg-linear-to-b from-white/3 to-transparent border border-white/5 text-center">
          <h3 className="text-white font-bold mb-4">Need a signed NDA?</h3>
          <p className="text-sm mb-8 font-light text-slate-500">
            If you have a high-sensitivity project, let's skip the talk and
            secure the paperwork.
          </p>
          <a
            href="mailto:contact@trio-verse.com"
            className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-brand-blue hover:text-white transition-all"
          >
            Request Official NDA
          </a>
        </div>
      </div>
    </main>
  );
}
