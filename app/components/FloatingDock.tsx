"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingDock() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // نحدد الأقسام اللي بدنا نراقبها
    const sectionIds = [
      "home",
      "solutions",
      "standars",
      "founders",
      "partners",
    ];

    const observerOptions = {
      root: null,
      // threshold: 0.5 تعني لما يصير 50% من القسم ظاهر عالشاشة
      threshold: 0.3,
      rootMargin: "-10% 0px -40% 0px", // بيساعد في لقط القسم قبل ما يوصل للنص تماماً
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
      const offset = 0;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: 100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      className="fixed bottom-8 left-1/2 z-50 w-fit"
    >
      <div className="flex items-center gap-2 md:gap-4 px-4 py-2 rounded-full bg-black/60 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <NavButton
          label="Home"
          active={activeSection === "home"}
          onClick={() => scrollTo("home")}
        />
        <div className="w-px h-4 bg-white/10" />
        <NavButton
          label="Solutions"
          active={activeSection === "solutions"}
          onClick={() => scrollTo("solutions")}
        />
        <div className="w-px h-4 bg-white/10" />
        <NavButton
          label="Standards"
          active={activeSection === "standars"}
          onClick={() => scrollTo("standars")}
        />
        <div className="w-px h-4 bg-white/10" />
        <NavButton
          label="Founders"
          active={activeSection === "founders"}
          onClick={() => scrollTo("founders")}
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollTo("partners")}
          className="ml-2 bg-logo-gradient px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold text-white shadow-lg whitespace-nowrap"
        >
          Partner Up
        </motion.button>
      </div>
    </motion.nav>
  );
}

function NavButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-[10px] md:text-xs font-semibold transition-all duration-500 relative px-2 py-1 outline-none ${
        active ? "text-brand-blue" : "text-slate-500 hover:text-slate-200"
      }`}
    >
      <span className="relative z-10">{label}</span>
      {active && (
        <motion.div
          layoutId="activeGlow"
          className="absolute inset-0 bg-brand-blue/10 rounded-lg"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </button>
  );
}
