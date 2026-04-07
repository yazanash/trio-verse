"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function UnicepsSection() {
  return (
    <section id="uniceps" className="w-full max-w-6xl mx-auto px-6 py-4">
      <div className="relative rounded-[2.5rem] bg-white/2 border border-white/5 overflow-hidden">
        {/* إضاءة خلفية خفيفة */}
        <div className="absolute top-0 right-0 w-125 h-125 bg-brand-blue/5 blur-[100px] -z-10" />

        <div className="flex flex-col lg:flex-row items-center gap-12 p-8 md:p-16">
          {/* الجانب النصي */}
          <div className="lg:w-1/2 space-y-6">
            <div className="flex items-center gap-2 text-brand-blue bg-brand-blue/10 w-fit px-4 py-1.5 rounded-full border border-brand-blue/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Our Featured Product
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-tight">
              Uniceps: The Future of <br />
              <span className="text-slate-500 italic font-light">
                Fitness Engineering.
              </span>
            </h2>

            <p className="text-slate-400 text-lg font-light leading-relaxed max-w-md">
              A robust dual-platform ecosystem built for high-performance gym
              chains. Real-time synchronization between club management and
              athlete mobile apps.
            </p>

            <ul className="space-y-3">
              {[
                "Cloud-Native Architecture",
                "Real-time Data Sync",
                "Cross-Platform Experience",
              ].map((feat) => (
                <li
                  key={feat}
                  className="flex items-center gap-3 text-slate-300 text-sm font-medium"
                >
                  <CheckCircle2 size={16} className="text-brand-blue" />
                  {feat}
                </li>
              ))}
            </ul>

            <button
              onClick={() =>
                window.open("https://uniceps.trio-verse.com", "_blank")
              }
              className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-brand-blue hover:text-white transition-all active:scale-95 shadow-xl shadow-white/5"
            >
              Visit Uniceps
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </button>
          </div>

          {/* الجانب البصري - الموك آب */}
          <div className="lg:w-1/2 relative h-75 md:h-125 w-full">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center lg:justify-end"
            >
              {/* هنا نضع صورتك mockup.png */}
              <Image
                src="/mockup.png"
                alt="Uniceps Product"
                width={700}
                height={500}
                className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)] group-hover:scale-[1.02] transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
