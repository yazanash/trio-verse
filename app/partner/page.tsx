"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguageStore } from "@/store/useLanguageStore";
import {
  ShieldAlert,
  Construction,
  Rocket,
  ArrowRight,
  Zap,
  Languages,
  Home,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

// --- المكون الفرعي: Dock التنقل ---
function PartnershipDock() {
  const { lang, setLanguage, dict } = useLanguageStore();
  const isAr = lang === "ar";

  const toggleLanguage = () => {
    setLanguage(lang === "en" ? "ar" : "en");
  };

  return (
    <motion.nav
      initial={{ y: 100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      className="fixed bottom-8 left-1/2 z-50 w-fit"
    >
      <div className="flex items-center gap-2 px-3 py-2 rounded-3xl bg-black/70 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {/* زر العودة للموقع الرئيسي لرؤية القوة التقنية */}
        <button
          onClick={() => (window.location.href = "/")}
          className="group flex items-center gap-2 p-2.5 md:px-4 md:py-2 text-slate-400 hover:text-white transition-all rounded-xl hover:bg-white/5"
        >
          <Home
            size={18}
            className="group-hover:scale-110 transition-transform"
          />
          <span className="hidden md:block text-xs font-bold tracking-tight">
            {isAr ? "الرئيسية" : "Home"}
          </span>
          <ArrowUpRight
            size={12}
            className="opacity-0 group-hover:opacity-100 transition-all -ml-1"
          />
        </button>

        <div className="w-px h-5 bg-white/10 mx-1" />

        {/* زر تبديل اللغة الأنيق */}
        <motion.button
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(255,255,255,0.05)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleLanguage}
          className="p-2.5 rounded-xl text-blue-400 flex items-center justify-center transition-all gap-2"
        >
          <div className="relative">
            <Languages size={18} />
            <span className="absolute -top-1 -right-1 text-[7px] font-bold bg-blue-600 text-white px-0.5 rounded-sm">
              {isAr ? "EN" : "AR"}
            </span>
          </div>
          <span className="hidden md:block text-xs font-bold font-mono">
            {isAr ? "English" : "العربية"}
          </span>
        </motion.button>

        <div className="w-px h-5 bg-white/10 mx-1" />

        {/* زر تواصل سريع */}
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            document
              .getElementById("cta-section")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="ml-1 bg-blue-600 px-4 py-2 md:px-5 md:py-2 rounded-full text-white shadow-lg flex items-center justify-center gap-2 transition-all"
        >
          <span className="text-sm font-bold tracking-tight whitespace-nowrap">
            {isAr ? "تواصل" : "Talk"}
          </span>
          <MessageCircle size={16} />
        </motion.button>
      </div>
    </motion.nav>
  );
}

// --- المكون الرئيسي للبيج ---
export default function PartnershipPage() {
  const { dict, lang } = useLanguageStore();
  const p = dict.partnership;
  const isAr = lang === "ar";

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      className={`bg-[#020617] text-slate-200 min-h-screen font-sans antialiased selection:bg-blue-500/30 ${
        isAr ? "font-arabic" : ""
      }`}
    >
      <PartnershipDock />

      {/* 1. Hero Section - ممركز وفخم */}
      <section className="max-w-5xl mx-auto pt-36 md:pt-56 pb-24 px-6 text-center">
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.2] md:leading-[1.1]">
          {p.hero.title_1} <br />
          <span className="text-blue-500">{p.hero.title_2}</span>
        </h1>

        <p className="text-lg md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto opacity-90">
          {p.hero.description}
        </p>

        <div className="flex flex-col items-center mt-10">
          <span className="text-blue-400 font-medium text-lg md:text-xl italic mb-10">
            {p.hero.signature}
          </span>

          <button
            onClick={() =>
              document
                .getElementById("values")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-slate-500 hover:text-blue-400 transition-colors text-sm font-mono uppercase tracking-widest flex items-center gap-2 group border-b border-transparent hover:border-blue-500/20 pb-1"
          >
            <Zap className="w-4 h-4 group-hover:animate-pulse" /> [{" "}
            {p.hero.see_how} ]
          </button>
        </div>
      </section>

      {/* 2. Problem Section */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-y border-slate-800/50">
        <h2
          className={`text-xl md:text-2xl text-white mb-14 font-light italic opacity-70 ${isAr ? "text-right" : "text-left"}`}
        >
          {p.problem.title}
        </h2>

        <div className="space-y-12">
          {[
            {
              icon: <ShieldAlert className="w-6 h-6 text-blue-500" />,
              text: p.problem.p1,
            },
            {
              icon: <Construction className="w-6 h-6 text-blue-500" />,
              text: p.problem.p2,
            },
            {
              icon: <Rocket className="w-6 h-6 text-blue-500" />,
              text: p.problem.p3,
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-6 md:gap-8 group">
              <div className="p-4 bg-blue-500/5 rounded-2xl border border-blue-500/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all shrink-0">
                {item.icon}
              </div>
              <p className="text-lg md:text-xl italic leading-relaxed text-slate-400 group-hover:text-slate-200 transition-colors">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Values Section */}
      <section id="values" className="max-w-3xl mx-auto px-6 py-24">
        <h2
          className={`text-sm font-mono tracking-[0.3em] text-blue-500 mb-20 uppercase ${isAr ? "text-right" : "text-left"}`}
        >
          {p.values.label}
        </h2>

        <div className="space-y-24">
          <div className="group">
            <h3 className="text-2xl md:text-3xl text-white mb-6 font-medium">
              {p.values.v1.title}
            </h3>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed italic opacity-80">
              {p.values.v1.desc}
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="p-6 bg-slate-900/30 rounded-2xl border border-slate-800 group-hover:border-blue-500/20 transition-all">
                <strong className="text-blue-400 block mb-2">
                  {p.values.v1.goal_label}:
                </strong>
                {p.values.v1.goal_text}
              </div>
              <div className="p-6 bg-slate-900/30 rounded-2xl border border-slate-800 group-hover:border-blue-500/20 transition-all">
                <strong className="text-blue-400 block mb-2">
                  {p.values.v1.value_label}:
                </strong>
                {p.values.v1.value_text}
              </div>
            </div>
          </div>

          <div className="group border-t border-slate-800 pt-16">
            <h3 className="text-2xl md:text-3xl text-white mb-6 font-medium">
              {p.values.v2.title}
            </h3>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed italic opacity-80">
              {p.values.v2.desc}
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="p-6 bg-slate-900/30 rounded-2xl border border-slate-800 group-hover:border-blue-500/20 transition-all">
                <strong className="text-blue-400 block mb-2">
                  {p.values.v2.goal_label}:
                </strong>
                {p.values.v2.goal_text}
              </div>
              <div className="p-6 bg-slate-900/30 rounded-2xl border border-slate-800 group-hover:border-blue-500/20 transition-all">
                <strong className="text-blue-400 block mb-2">
                  {p.values.v2.value_label}:
                </strong>
                {p.values.v2.value_text}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Trust Signal */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-t border-slate-800 text-center">
        <h3 className="text-xs font-mono tracking-[0.3em] text-blue-500 mb-6 uppercase">
          {p.trust.label}
        </h3>
        <h4 className="text-2xl md:text-4xl text-white mb-6 font-semibold italic">
          {p.trust.title}
        </h4>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed italic">
          {p.trust.desc}{" "}
          <span className="text-blue-400 font-bold">{p.trust_highlight}</span>
        </p>
      </section>

      {/* 5. Models Section */}
      <section className="max-w-5xl mx-auto px-6 py-24 border-t border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { t: p.models.m1_title, d: p.models.m1_desc },
            { t: p.models.m2_title, d: p.models.m2_desc },
            { t: p.models.m3_title, d: p.models.m3_desc },
          ].map((m, i) => (
            <div
              key={i}
              className="p-8 bg-slate-900/20 rounded-3xl border border-slate-800 hover:border-blue-500/30 transition-all"
            >
              <h4 className="text-blue-500 font-bold text-xl mb-4 italic">
                {m.t}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">{m.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CTA Section */}
      <section
        id="cta-section"
        className="max-w-4xl mx-auto px-6 py-32 text-center border-t border-slate-800"
      >
        <h2 className="text-4xl md:text-6xl text-white mb-10 font-bold italic leading-tight">
          "{p.cta.title}"
        </h2>

        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
            {/* الزر الأساسي: يفتح الإيميل دغري */}
            <a
              href={`mailto:trio3verse@gmail.com?subject=${encodeURIComponent(isAr ? "طلب شراكة - TrioVerse" : "Partnership Inquiry - TrioVerse")}&body=${encodeURIComponent(isAr ? "مرحباً فريق TrioVerse، نود مناقشة فرصة شراكة معكم..." : "Hello TrioVerse Team, we would like to discuss a partnership opportunity...")}`}
              className="bg-blue-600 text-white px-10 py-5 rounded-full font-bold hover:bg-blue-500 transition-all shadow-2xl shadow-blue-500/20 active:scale-95 text-lg flex items-center justify-center gap-2"
            >
              {p.cta.primary}
              <ArrowRight className={`w-5 h-5 ${isAr ? "rotate-180" : ""}`} />
            </a>

            {/* الزر الثانوي: يمكنك توجيهه للرئيسية أو قسم آخر */}
            <button
              onClick={() => (window.location.href = "/")}
              className="border border-slate-700 text-slate-300 px-10 py-5 rounded-full font-bold hover:bg-slate-900 transition-all active:scale-95 text-lg"
            >
              {p.cta.secondary}
            </button>
          </div>
          <p className="text-slate-500 text-sm italic">{p.cta.micro_copy}</p>
        </div>
      </section>
      <footer className="pb-32 pt-12 text-center text-slate-700 border-t border-slate-900/50 text-xs tracking-widest uppercase">
        © {new Date().getFullYear()} TrioVerse Labs // Engineering Growth
      </footer>
    </div>
  );
}
