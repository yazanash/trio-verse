import React from "react";
import SolutionCard from "./SolutionCard";

const SolutionsBento = () => {
  return (
    <section id="solutions" className="w-full max-w-6xl mx-auto px-6 py-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Uniceps - The Big Player */}
        <SolutionCard
          tag="Featured Product"
          index={0}
          title="Uniceps Ecosystem"
          imageSrc="/mockup.png"
          href="https://uniceps.trio-verse.com"
          description="A dual-platform management system for gym chains and athletes. Real-time sync, cloud-based architecture."
          className="md:col-span-2 min-h-87.5 flex flex-col justify-end"
        />

        {/* Custom Dev */}
        <SolutionCard
          index={1}
          tag="Agency Partner"
          title="Custom Scalable Apps"
          description="Turning complex business logic into high-performance web and mobile applications."
          className="md:col-span-1"
        />

        {/* NGO Support */}
        <SolutionCard
          index={2}
          tag="Social Impact"
          title="Data Intelligence"
          description="Advanced statistical systems for NGOs to manage distribution and aid tracking with zero error margin."
          className="md:col-span-1"
        />

        {/* TrioNexus (The Open Source) */}
        <SolutionCard
          index={3}
          tag="IT Infrastructure"
          title="TrioNexus Core"
          description="Open-source diagnostic tools for IT support teams. Solving boot issues and system failures programmatically."
          className="md:col-span-2 min-h-62.5 flex flex-col justify-end"
        />
      </div>
    </section>
  );
};

export default SolutionsBento;
