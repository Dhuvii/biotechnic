"use client";

import { useTranslate, useTranslateActions } from "@/store/translateStore";
import { cn } from "@/utilities/cn";
import { translate } from "@/utilities/translate";
import Cookie from "js-cookie";
import Link from "next/link";
import { useState } from "react";
import Dropdown from "./dropdown";

const Navbar = () => {
  const { lang } = useTranslate();
  const { setLang } = useTranslateActions();

  const { links } = translate("navbar", lang);

  const [isLangOpen, setIsLangOpen] = useState(false);
  return (
    <nav className="relative w-full max-w-7xl mx-auto flex items-center justify-between">
      <Link href="/">
        <img src="logo.png" alt="logo" className="size-32 object-cover" />
      </Link>

      <div className="flex items-center justify-end gap-5 ">
        <Link
          href="/about"
          className="bg-radial uppercase from-black/80 from-40% to-black/80 hover:from-white/10 transition-all duration-200 border border-white shadow-xl shadow-white/60 px-3 py-2.5 text-sm font-semibold rounded-xs text-white "
        >
          {links.about}
        </Link>

        <Link
          href="/faq"
          className="bg-radial uppercase from-black/80 from-40% to-black/80 hover:from-white/10 transition-all duration-200 border border-white shadow-xl shadow-white/60 px-3 py-2.5 text-sm font-semibold rounded-xs text-white "
        >
          {links.faq}
        </Link>

        <Link
          href="/contact"
          className="bg-radial uppercase from-black/80 from-40% to-black/80 hover:from-white/10 transition-all duration-200 border border-white shadow-xl shadow-white/60 px-3 py-2.5 text-sm font-semibold rounded-xs text-white "
        >
          {links.contact}
        </Link>

        <Link
          href="./apply-now"
          className="bg-radial uppercase from-[#00FF80] from-40% to-[#00FF80] hover:from-white/10 transition-all duration-200 border border-black shadow-xl shadow-white/60 px-5 py-2.5 text-sm font-semibold rounded-full text-black "
        >
          {links.applyNow}
        </Link>

        <Dropdown open={isLangOpen} onOpenChange={setIsLangOpen}>
          <Dropdown.Button
            className={cn(
              "cursor-pointer flex items-center justify-start gap-2 p-2 bg-black text-white"
            )}
          >
            <span className="text-sm">{lang}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21.25 12A9.25 9.25 0 0012 2.75M21.25 12H2.75m18.5 0A9.25 9.25 0 0112 21.25m0-18.5A9.25 9.25 0 002.75 12M12 2.75c-.5 0-4 4.141-4 9.25s3.5 9.25 4 9.25m0-18.5c.5 0 4 4.141 4 9.25s-3.5 9.25-4 9.25M2.75 12A9.25 9.25 0 0012 21.25"
              />
            </svg>
          </Dropdown.Button>

          <Dropdown.Menu
            align="start"
            className="rounded-xl bg-gradient-to-br from-gray-900 to-gray-950 shadow-xl ring-[1px] ring-gray-800 "
          >
            <Dropdown.Item
              onSelect={() => {
                Cookie.set("bio-lang", "en");
                setLang("en");
              }}
              className="flex items-center gap-2 text-white/80 data-[highlighted]:text-white"
            >
              <span>English</span>
            </Dropdown.Item>
            <Dropdown.Item
              onSelect={() => {
                Cookie.set("bio-lang", "de");
                setLang("de");
              }}
              className="flex items-center gap-2 text-white/80 data-[highlighted]:text-white"
            >
              <span>German</span>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
};

export default Navbar;
