"use client";
import SolutionCard from "./SolutionCard";
import { useLanguageStore } from "@/store/useLanguageStore";

const SolutionsBento = () => {
  const { dict } = useLanguageStore();
  const { items } = dict.solutions;
  return (
    <section id="solutions" className="w-full max-w-6xl mx-auto px-6 py-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Uniceps - The Big Player */}
        {items.map((item, index) => {
          // توزيع المساحات: الأول والأخير كبار (col-span-2)
          const isLarge = index === 0 || index === 3;

          return (
            <SolutionCard
              key={item.id}
              index={index}
              tag={item.tag}
              title={item.title}
              description={item.description}
              className={`${
                isLarge ? "md:col-span-2 min-h-80" : "md:col-span-1"
              } flex flex-col justify-end transition-all duration-500`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SolutionsBento;
