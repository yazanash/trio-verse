"use client";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/5 bg-black/20 backdrop-blur-sm pt-16 pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* العمود الأول: البراند */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold bg-logo-gradient bg-clip-text text-transparent mb-4">
              TrioVerse Labs
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Architecting the next generation of digital ecosystems. Precision,
              scalability, and innovation in every line of code.
            </p>
          </div>

          {/* العمود الثاني: روابط سريعة */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-brand-blue transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-blue transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-blue transition-colors">
                  Uniceps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-blue transition-colors">
                  Partnership
                </a>
              </li>
            </ul>
          </div>

          {/* العمود الثالث: التواصل والسوشال */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-widest">
              Connect
            </h4>
            <div className="flex gap-4">
              <SocialIcon
                href="https://linkedin.com"
                icon={<FaFacebookF size={18} />}
              />
              <SocialIcon
                href="https://github.com"
                icon={<FaInstagram size={18} />}
              />
              <SocialIcon
                href="https://twitter.com"
                icon={<FaWhatsapp size={18} />}
              />
              <SocialIcon
                href="mailto:info@trioverse.com"
                icon={<FaEnvelope size={18} />}
              />
            </div>
          </div>
        </div>

        {/* السطر السفلي */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs">
            © {currentYear} TrioVerse Labs. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-600">
            <a href="#" className="hover:text-slate-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// مكون صغير للأيقونات لتقليل تكرار الكود
function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3, color: "#3b82f6" }}
      className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 transition-colors"
    >
      {icon}
    </motion.a>
  );
}
