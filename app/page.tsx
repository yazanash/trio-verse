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
import UnicepsSection from "./components/UnicepsShowcase";
import TechStack from "./components/TechStack";
import TalentSection from "./components/TalentSection";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* الإضاءة الخلفية الناعمة (Ambient Glow) */}

      <Hero />
      {/* <section className="flex items-center justify-center py-10 snap-start">
        <LogoCloud />
      </section> */}
      <SolutionsBento />
      <UnicepsSection />

      <section
        id="standars"
        className="min-h-screen flex items-center justify-center snap-start"
      >
        <CorePillars />
      </section>

      <TechStack />

      <TalentSection />
      <section
        id="partners"
        className="min-h-screen flex items-center justify-center snap-start"
      >
        <PartnershipPortal />
      </section>

      {/* Footer بسيط */}
      <Footer />
      {/* شريط التنقل السفلي */}
      <FloatingDock />

      <div
        className="absolute inset-0 -z-20 opacity-[0.050]"
        style={{
          backgroundImage: `
      linear-gradient(to right, #808080 1px, transparent 1px),
      linear-gradient(to bottom, #808080 1px, transparent 1px)
    `,
          backgroundSize: "30px 30px",
          maskImage: "linear-gradient(to bottom, white, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, white, transparent)",
        }}
      ></div>
    </main>
  );
}
