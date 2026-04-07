import { create } from "zustand";
import en from "@/app/dictionaries/en.json";
import ar from "@/app/dictionaries/ar.json";

// هذا السطر السحري هو المسؤول عن الـ Autocomplete
type Dictionary = typeof en;

interface LanguageState {
  lang: "en" | "ar";
  dict: Dictionary;
  setLanguage: (lang: "en" | "ar") => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  lang: "en",
  dict: en, // القاموس الافتراضي
  setLanguage: (newLang) =>
    set({
      lang: newLang,
      dict: newLang === "ar" ? ar : en,
    }),
}));
