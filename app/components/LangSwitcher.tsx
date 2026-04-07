"use client";
import { useLanguageStore } from "@/store/useLanguageStore";

export default function LangSwitcher() {
  const { lang, setLanguage } = useLanguageStore();

  return (
    <button
      onClick={() => setLanguage(lang === "en" ? "ar" : "en")}
      className="fixed top-5 right-5 z-100 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-widest hover:bg-brand-blue/20 transition-all"
    >
      {lang === "en" ? "AR" : "EN"}
    </button>
  );
}
