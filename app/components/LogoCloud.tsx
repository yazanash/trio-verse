"use client";
import { motion } from "framer-motion";

const partners = [
  { name: "Uniceps", logo: "UNICEPS" },
  { name: "Partner 2", logo: "LOGOTYPE" },
  { name: "Partner 3", logo: "BRAND_NAME" },
  { name: "Partner 4", logo: "ECOSYSTEM" },
  { name: "Partner 5", logo: "SOLUTIONS" },
];

export default function LogoCloud() {
  return (
    <section className="w-full py-12 border-y border-white/5 bg-white/1 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-8 text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">
          Trusted by innovative teams & forward-thinking partners
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        {/* شريط اللوغوهات المتحرك */}
        <motion.div 
          className="flex gap-16 md:gap-32 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {/* تكرار القائمة مرتين عشان الـ Infinite Scroll يزبط */}
          {[...partners, ...partners].map((partner, idx) => (
            <div 
              key={idx} 
              className="text-xl md:text-2xl font-black tracking-tighter text-slate-700 hover:text-brand-blue transition-colors cursor-default select-none italic"
            >
              {partner.logo}
            </div>
          ))}
        </motion.div>

        {/* تأثير التلاشي (Gradient Fade) على الأطراف عشان الحركة تبين طبيعية */}
        <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-brand-dark to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-brand-dark to-transparent z-10"></div>
      </div>
    </section>
  );
}