"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface SolutionCardProps {
  title: string;
  description: string;
  tag: string;
  className?: string;
  index: number;
  href?: string; // رابط اختياري
  imageSrc?: string; // مسار الصورة اختياري
}

export default function SolutionCard({
  title,
  description,
  tag,
  className,
  index,
  href,
  imageSrc,
}: SolutionCardProps) {
  const CardContent = (
    <>
      {/* تأثير الإضاءة */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-blue/10 blur-[60px] group-hover:bg-brand-blue/20 transition-all duration-700 rounded-full"></div>

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-4 block">
            {tag}
          </span>
          <h2 className="text-2xl font-semibold mb-4 text-white/90">{title}</h2>
          <p className="text-slate-400 font-light leading-relaxed text-sm max-w-70">
            {description}
          </p>
        </div>

        {/* عرض الصورة إذا وجدت (مثل حالة Uniceps) */}
        {imageSrc && (
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 translate-y-4 translate-x-4 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-700 ease-out">
            <Image
              src={imageSrc}
              alt={title}
              width={400}
              height={400}
              className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
          </div>
        )}
      </div>

      {/* السهم */}
      {href && (
        <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 z-20">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-brand-blue"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      )}
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative p-8 rounded-4xl bg-white/3 border border-white/10 
                  hover:bg-white/6 hover:border-brand-blue/30 transition-all 
                  duration-500 overflow-hidden cursor-pointer ${className}`}
      onClick={() => href && window.open(href, "_blank")}
    >
      {CardContent}
    </motion.div>
  );
}
