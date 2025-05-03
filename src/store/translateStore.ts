"use client";

import { availableLanguages } from "@/utilities/translate";
import { Dispatch, SetStateAction } from "react";
import { create } from "zustand";
import Cookies from "js-cookie";

interface TranslateState {
  states: {
    lang: keyof typeof availableLanguages;
  };
  actions: {
    setLang: Dispatch<SetStateAction<keyof typeof availableLanguages>>;
  };
}

const getInitialLang = (): keyof typeof availableLanguages => {
  if (typeof window === "undefined") return "en";
  const lang = Cookies.get("bio-lang");
  return lang ? (lang as keyof typeof availableLanguages) : "en";
};

const useTranslateStore = create<TranslateState>()((set) => ({
  states: {
    lang: getInitialLang(),
  },
  actions: {
    setLang: (value) =>
      set(({ states }) => ({
        states: {
          ...states,
          lang: typeof value === "function" ? value(states.lang) : value,
        },
      })),
  },
}));

export const useTranslate = () => useTranslateStore((state) => state.states);

export const useTranslateActions = () =>
  useTranslateStore((state) => state.actions);
