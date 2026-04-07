"use client";
import { useEffect } from "react";
import { useLanguageStore } from "@/store/useLanguageStore";

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = useLanguageStore((state) => state.lang);

  useEffect(() => {
    // تحديث خصائص الـ HTML بمجرد تغيير اللغة في الـ Store
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return <>{children}</>;
}
