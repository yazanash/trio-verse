"use client";
import React from "react";
import { motion } from "framer-motion";
import { Home, Languages, ArrowUpRight, MessageCircle } from "lucide-react";
import { useLanguageStore } from "@/store/useLanguageStore";

export default function PartnershipDock() {
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
      <div className="flex items-center gap-2 px-3 py-2 rounded-3xl bg-black/60 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {/* زر العودة للموقع الرئيسي */}
        <DockButton
          icon={<Home size={18} />}
          label={isAr ? "الرئيسية" : "Home"}
          onClick={() => (window.location.href = "/")} // أو المسار الخاص بموقعك
          showExternalIcon
        />

        <div className="w-px h-5 bg-white/10 mx-1" />

        {/* زر تبديل اللغة */}
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
            <span className="absolute -top-1 -right-1 text-[7px] font-bold bg-blue-600 text-white px-0.5 rounded-sm uppercase">
              {isAr ? "EN" : "AR"}
            </span>
          </div>
          <span className="hidden md:block text-xs font-bold font-mono">
            {isAr ? "English" : "العربية"}
          </span>
        </motion.button>

        <div className="w-px h-5 bg-white/10 mx-1" />

        {/* زر الـ CTA السريع */}
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="ml-1 bg-blue-600 px-4 py-2 md:px-5 md:py-2 rounded-full text-white shadow-lg flex items-center justify-center gap-2 transition-all"
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="text-sm font-bold tracking-tight whitespace-nowrap">
            {isAr ? "تواصل الآن" : "Let's Talk"}
          </span>
          <MessageCircle size={16} className="opacity-80" />
        </motion.button>
      </div>
    </motion.nav>
  );
}

function DockButton({
  icon,
  label,
  onClick,
  showExternalIcon = false,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  showExternalIcon?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="group relative p-2.5 md:px-4 md:py-2 flex items-center gap-2 text-slate-400 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/5"
    >
      <span className="transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>
      <span className="hidden md:block text-xs font-bold tracking-tight">
        {label}
      </span>
      {showExternalIcon && (
        <ArrowUpRight
          size={12}
          className="opacity-0 group-hover:opacity-100 transition-all -ml-1"
        />
      )}
    </button>
  );
}
