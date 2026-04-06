"use client";
import { motion } from "framer-motion";

import FloatingDock from "./components/FloatingDock";
import Image from "next/image";
import SolutionCard from "./components/SolutionCard";
import CorePillars from "./components/CorePillars";
import PartnershipPortal from "./components/PartnershipPortal";
import Footer from "./components/Footer";
import Founders from "./components/Founders";
import LogoCloud from "./components/LogoCloud";
import Hero from "./components/Hero";
import SolutionsBento from "./components/SolutionsBento";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* الإضاءة الخلفية الناعمة (Ambient Glow) */}
      <Hero />
      {/* <section className="flex items-center justify-center py-10 snap-start">
        <LogoCloud />
      </section> */}
      <SolutionsBento />
      <section
        id="standars"
        className="min-h-screen flex items-center justify-center py-10 snap-start"
      >
        <CorePillars />
      </section>
      <section
        id="founders"
        className="min-h-screen flex items-center justify-center py-10 snap-start"
      >
        <Founders />
      </section>
      {/* 4. Partnership Portal Section */}
      <section
        id="partners"
        className="min-h-screen flex items-center justify-center py-10 snap-start"
      >
        <PartnershipPortal />
      </section>

      {/* Footer بسيط */}
      <Footer />
      {/* شريط التنقل السفلي */}
      <FloatingDock />

      {/* تأثير الـ Grid الخفيف جداً */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center mask-[linear-gradient(180deg,white,rgba(255,255,255,0))] -z-20 opacity-20"></div>
    </main>
  );
}
