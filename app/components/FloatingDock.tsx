"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// غيرت الأيقونات لـ Lucide بس بقياس أكبر
import {
  Home,
  LayoutGrid,
  Shield,
  Cpu,
  MessageSquare,
  Languages,
} from "lucide-react";
import { useLanguageStore } from "@/store/useLanguageStore";

export default function FloatingDock() {
  const { dict, lang, setLanguage } = useLanguageStore();
  const { nav } = dict;
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // تأكد إن الـ IDs مطابقة لما في الـ page.tsx
    // ملاحظة: غيرت اسم "founders" لـ "tech-stack" بما إننا استبدلنا القسم
    const sectionIds = [
      "home",
      "solutions",
      "standars",
      "techstack",
      "partners",
    ];

    const observerOptions = {
      root: null,
      threshold: 0.4, // زدنا النسبة عشان التبديل يكون أدق
      rootMargin: "-10% 0px -20% 0px",
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const toggleLanguage = () => {
    setLanguage(lang === "en" ? "ar" : "en");
  };
  return (
    <motion.nav
      initial={{ y: 100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      className="fixed bottom-6 md:bottom-10 left-1/2 z-50 w-fit"
    >
      <div className="flex items-center gap-2 md:gap-3 px-2 py-2 md:px-3 md:py-3 rounded-3xl bg-black/70 backdrop-blur-3xl border border-white/15 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)]">
        <NavButton
          icon={<Home size={20} />}
          label={nav.home}
          active={activeSection === "home"}
          onClick={() => scrollTo("home")}
        />

        <div className="w-px h-6 bg-white/15 mx-1" />

        <NavButton
          icon={<LayoutGrid size={20} />}
          label={nav.solutions}
          active={activeSection === "solutions"}
          onClick={() => scrollTo("solutions")}
        />

        <div className="w-px h-6 bg-white/15 mx-1" />

        <NavButton
          icon={<Shield size={20} />}
          label={nav.standards}
          active={activeSection === "standars"}
          onClick={() => scrollTo("standars")}
        />

        <div className="w-px h-6 bg-white/15 mx-1" />

        {/* أيقونة الـ Tech Stack (بدل الفاوندرز) */}
        <NavButton
          icon={<Cpu size={20} />}
          label={nav.tech}
          active={activeSection === "techstack"}
          onClick={() => scrollTo("techstack")}
        />
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.05)" }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleLanguage}
          className="p-2.5 rounded-xl text-brand-blue flex items-center justify-center transition-all"
          title={lang === "en" ? "العربية" : "English"}
        >
          <div className="relative">
            <Languages size={18} />
            <span className="absolute -top-1 -right-1 text-[7px] font-bold bg-blue-700 text-white px-1 rounded-sm uppercase">
              {lang === "en" ? "AR" : "EN"}
            </span>
          </div>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollTo("partners")}
          aria-label={`Talk to us `}
          className="ml-2 bg-logo-gradient px-4 py-2 md:px-6 md:py-2.5 rounded-full text-white shadow-lg flex items-center justify-center transition-all"
        >
          <span className="hidden md:block text-sm text-nowrap font-bold tracking-tight">
            {nav.cta}
          </span>
          <span className="md:hidden">
            <MessageSquare size={20} />
          </span>
        </motion.button>
      </div>
    </motion.nav>
  );
}

function NavButton({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      aria-label={`Go to ${label} section`}
      onClick={onClick}
      className={`relative p-2.5 md:px-4 md:py-2 outline-none transition-all duration-500 rounded-2xl flex items-center gap-3 ${
        active ? "text-white" : "text-slate-500 hover:text-slate-200"
      }`}
    >
      <span
        className={`relative z-10 transition-transform duration-300 ${active ? "scale-110" : "scale-100"}`}
      >
        {icon}
      </span>

      <span className="hidden md:block relative z-10 text-sm font-bold tracking-tight">
        {label}
      </span>

      {active && (
        <motion.div
          layoutId="activeGlow"
          className="absolute inset-0 bg-brand-blue/20 border border-brand-blue/30 rounded-xl"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </button>
  );
}
