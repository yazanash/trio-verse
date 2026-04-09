"use client";
import { motion } from "framer-motion";

const team = [
  {
    name: "Yazan abo shash",
    image: "/team-avatar1.jpg", // حط مسار صورتك بمجلد public
    tagline: "Systems & Infrastructure",
    bio: "Focused on building resilient backends and scalable cloud architectures.",
  },
  {
    name: "Osama abu saada",
    image: "/team-avatar2.jpg", // حط مسار صورة شريكك بمجلد public
    tagline: "Mobile app development",
    bio: "Specialized in crafting high-performance user experiences and apps logic.",
  },
  // إذا في شخص ثالث
  {
    name: "Anas Nasser",
    image: "/team-avatar3.jpg", // حط مسار صورة شريكك بمجلد public
    tagline: "Public Relations & UI/UX",
    bio: "Specialized in UI/Ux and public relations",
  },
];

export default function Founders() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-32 snap-start border-t border-white/5 bg-brand-dark relative overflow-hidden">
      {/* إضاءة خلفية ناعمة زرقاء للفوتر */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="flex  flex-col gap-16 items-start relative z-10">
        {/* النص التعريفي - الروح الجماعية */}
        <div className="top-32">
          <h2 className="text-4xl font-bold mb-6 tracking-tighter text-white">
            The Founders <br />
            <span className="text-brand-blue opacity-80 italic">
              Collective
            </span>
          </h2>
          <p className="text-slate-400 font-light leading-relaxed mb-6">
            We are a flat-structured engineering lab. No titles, no
            bureaucracy—just direct access to the experts building your vision.
          </p>
          <div className="h-1 w-12 bg-logo-gradient rounded-full"></div>
        </div>

        {/* عرض الفاوندرز بشكل "Minimal" جداً مع الصور */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-4xl bg-white/2 border border-white/5 hover:border-brand-blue/20 transition-all hover:-translate-y-1"
            >
              {/* القسم العلوي: الصورة والاسم والـ Tagline */}
              <div className="flex items-start gap-5 mb-6">
                {/* الصورة كـ Avatar احترافي */}
                <div className="relative aspect-square w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-brand-blue/30 transition-all">
                  {/* استبدل الـ Placeholder بالصورة الحقيقية لما تجهز */}
                  <div className="absolute inset-0 bg-white/5 group-hover:bg-brand-blue/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-slate-700">T</span>{" "}
                    {/* Placeholder حرف */}
                  </div>
                  {/* <Image src={member.image} alt={member.name} layout="fill" className="object-cover" /> */}
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white group-hover:text-brand-blue transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-brand-purple text-xs font-bold uppercase tracking-[0.2em] mt-1">
                    {member.tagline}
                  </p>
                </div>
              </div>

              {/* البيو (Niche Expertise) */}
              <p className="text-slate-500 text-sm font-light leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
