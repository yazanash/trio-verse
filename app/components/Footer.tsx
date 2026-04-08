"use client";
import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaFacebook,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import { useLanguageStore } from "@/store/useLanguageStore";

export default function Footer() {
  const { dict, lang } = useLanguageStore();
  const { footer } = dict;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/5 bg-black/20 backdrop-blur-sm pt-16 pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* العمود الأول: البراند */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-logo-gradient bg-clip-text text-transparent mb-4 tracking-tighter">
              TrioVerse Labs
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-light">
              {footer.description}
            </p>
          </div>

          {/* العمود الثاني: روابط سريعة */}
          <div>
            <h4 className="text-white text-[10px] font-bold mb-6 uppercase tracking-[0.3em] opacity-50">
              {footer.navTitle}
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              {Object.entries(footer.links).map(([key, label]) => (
                <li key={key}>
                  <a
                    href={`#${key}`}
                    className="hover:text-brand-blue transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* العمود الثالث: التواصل */}
          <div>
            <h4 className="text-white text-[10px] font-bold mb-6 uppercase tracking-[0.3em] opacity-50">
              {footer.connect}
            </h4>
            <div className="flex gap-3">
              <SocialIcon
                href="https://facebook.com/trio3verse"
                icon={<FaFacebookF size={18} />}
              />
              <SocialIcon
                href="https://instagram.com/trioverse.co"
                icon={<FaInstagram size={18} />}
              />
              <SocialIcon
                href="mailto:trio3verse@gmail.com"
                icon={<FaEnvelope size={18} />}
              />
            </div>
          </div>
        </div>

        {/* السطر السفلي: الحقوق والحالة */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="text-slate-600 text-[10px] md:text-xs">
              © {currentYear} TrioVerse Labs. {footer.rights}
            </p>
            {/* Status Indicator الفخم */}
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
            </div>
          </div>

          <div className="flex gap-6 text-[10px] text-slate-500 font-medium">
            <a
              href="/privacy"
              className="hover:text-white transition-colors uppercase tracking-widest"
            >
              {footer.legal.privacy}
            </a>
            <a
              href="/terms"
              className="hover:text-white transition-colors uppercase tracking-widest"
            >
              {footer.legal.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3, backgroundColor: "rgba(255,255,255,0.05)" }}
      className="p-2.5 rounded-xl bg-white/3 border border-white/10 text-slate-400 hover:text-brand-blue transition-all"
    >
      {icon}
    </motion.a>
  );
}
