"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const inquiryTypes = [
  {
    id: "project",
    title: "Direct Project",
    desc: "Build a custom ecosystem for your business.",
  },
  {
    id: "partnership",
    title: "Strategic Partner",
    desc: "Tech-arm support for agencies & consultants.",
  },
  {
    id: "other",
    title: "General Inquiry",
    desc: "Consultations, technical audits, or just a hi.",
  },
];

export default function ContactPortal() {
  const [selected, setSelected] = useState("project");

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-32 snap-start">
      <div className="grid lg:grid-cols-5 gap-16 items-center">
        {/* الجانب الأيسر: النص التسويقي */}
        <div className="lg:col-span-2">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter leading-tight">
            Ready to <br />
            <span className="bg-logo-gradient bg-clip-text text-transparent">
              Scale Up?
            </span>
          </h2>
          <p className="text-lg text-slate-400 font-light leading-relaxed mb-8">
            Whether you are an ambitious startup, a growing agency, or an
            enterprise seeking stability—we’re here to engineer your success.
          </p>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 w-fit">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm text-slate-300 font-medium">
              Available for new projects in 2026
            </span>
          </div>
        </div>

        {/* الجانب الأيمن: الفورم التفاعلي */}
        <div className="lg:col-span-3 bg-white/2 p-2 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden">
          {/* Tabs Selection */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2 bg-black/40 rounded-2xl mb-6">
            {inquiryTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelected(type.id)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 relative ${
                  selected === type.id
                    ? "text-white"
                    : "text-slate-500 hover:bg-white/5"
                }`}
              >
                {selected === type.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/5 border border-white/10 rounded-xl"
                  />
                )}
                <span className="relative z-10 block text-sm font-bold mb-1">
                  {type.title}
                </span>
                <span className="relative z-10 block text-[10px] opacity-60 leading-tight">
                  {type.desc}
                </span>
              </button>
            ))}
          </div>

          {/* Form Area */}
          <form className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1 space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-slate-500 ml-2">
                Identify
              </label>
              <input
                type="text"
                placeholder="Name / Organization"
                className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-slate-600 focus:border-brand-blue outline-none transition-all"
              />
            </div>
            <div className="col-span-2 md:col-span-1 space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-slate-500 ml-2">
                Reach
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-slate-600 focus:border-brand-blue outline-none transition-all"
              />
            </div>
            <div className="col-span-2 space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-slate-500 ml-2">
                Context
              </label>
              <textarea
                placeholder="Tell us about your mission..."
                rows={4}
                className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-slate-600 focus:border-brand-blue outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="col-span-2 bg-logo-gradient p-5 rounded-2xl text-white font-bold shadow-xl hover:shadow-brand-blue/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
            >
              Initialize Sync
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
