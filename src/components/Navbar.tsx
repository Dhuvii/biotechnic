"use client";

import { useTranslate, useTranslateActions } from "@/store/translateStore";
import { cn } from "@/utilities/cn";
import { translate } from "@/utilities/translate";
import Cookie from "js-cookie";
import Link from "next/link";
import { useState } from "react";
import Dropdown from "./dropdown";
import Image from "next/image";
import Logo from "../../public/logo.png";
const Navbar = () => {
  const { lang } = useTranslate();
  const { setLang } = useTranslateActions();

  const { links } = translate("navbar", lang);

  const [isLangOpen, setIsLangOpen] = useState(false);
  return (
    <nav className="relative isolate z-40 -mt-10 flex w-full items-center justify-between px-14">
      <Link
        href="/"
        className="relative h-48 w-60 rounded-2xl bg-black/10 p-1 backdrop-blur-xs"
      >
        <Image fill src={Logo} alt="logo" className="object-cover" />
      </Link>

      <div className="flex items-center justify-end gap-5">
        <div className="group relative flex items-center justify-center">
          <div className="absolute -inset-1 bg-white/70 blur-lg group-hover:bg-white/20"></div>
          <Link
            href="/about"
            className="relative rounded-xs border border-white/60 bg-radial from-black/80 from-40% to-black/80 px-3 py-2.5 text-sm font-semibold tracking-widest text-white uppercase transition-all duration-200 group-hover:from-white/10"
          >
            {links.about}
          </Link>
        </div>

        <div className="group relative flex items-center justify-center">
          <div className="absolute -inset-1 bg-white/70 blur-lg group-hover:bg-white/20"></div>
          <Link
            href="/faq"
            className="relative rounded-xs border border-white/60 bg-radial from-black/80 from-40% to-black/80 px-3 py-2.5 text-sm font-semibold tracking-widest text-white uppercase transition-all duration-200 group-hover:from-white/10"
          >
            {links.faq}
          </Link>
        </div>

        <div className="group relative flex items-center justify-center">
          <div className="absolute -inset-1 bg-white/70 blur-lg group-hover:bg-white/20"></div>
          <Link
            href="/contact"
            className="relative rounded-xs border border-white/60 bg-radial from-black/80 from-40% to-black/80 px-3 py-2.5 text-sm font-semibold tracking-widest text-white uppercase transition-all duration-200 group-hover:from-white/10"
          >
            {links.contact}
          </Link>
        </div>

        <div className="h-10 w-1 rounded-full bg-white"></div>

        <Dropdown open={isLangOpen} onOpenChange={setIsLangOpen}>
          <div className="group relative flex items-center justify-center">
            <div className="absolute -inset-1 bg-white/70 blur-lg group-hover:bg-white/20"></div>
            <Dropdown.Button
              className={cn(
                "relative flex items-center justify-center gap-2 rounded-xs border border-white/60 bg-radial from-black/80 from-40% to-black/80 px-3 py-2.5 text-sm font-semibold tracking-widest text-white uppercase transition-all duration-200 group-hover:from-white/10",
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
          </div>

          <Dropdown.Menu
            align="start"
            className="rounded-xl bg-gradient-to-br from-gray-900 to-gray-950 shadow-xl ring-[1px] ring-gray-800"
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

            <Dropdown.Item
              onSelect={() => {
                Cookie.set("bio-lang", "cs");
                setLang("cs");
              }}
              className="flex items-center gap-2 text-white/80 data-[highlighted]:text-white"
            >
              <span>Czech</span>
            </Dropdown.Item>

            <Dropdown.Item
              onSelect={() => {
                Cookie.set("bio-lang", "es");
                setLang("es");
              }}
              className="flex items-center gap-2 text-white/80 data-[highlighted]:text-white"
            >
              <span>Spanish</span>
            </Dropdown.Item>

            <Dropdown.Item
              onSelect={() => {
                Cookie.set("bio-lang", "zh");
                setLang("zh");
              }}
              className="flex items-center gap-2 text-white/80 data-[highlighted]:text-white"
            >
              <span>Chinese</span>
            </Dropdown.Item>

            <Dropdown.Item
              onSelect={() => {
                Cookie.set("bio-lang", "it");
                setLang("it");
              }}
              className="flex items-center gap-2 text-white/80 data-[highlighted]:text-white"
            >
              <span>Italian</span>
            </Dropdown.Item>

            <Dropdown.Item
              onSelect={() => {
                Cookie.set("bio-lang", "ru");
                setLang("ru");
              }}
              className="flex items-center gap-2 text-white/80 data-[highlighted]:text-white"
            >
              <span>Russian</span>
            </Dropdown.Item>

            <Dropdown.Item
              onSelect={() => {
                Cookie.set("bio-lang", "ar");
                setLang("ar");
              }}
              className="flex items-center gap-2 text-white/80 data-[highlighted]:text-white"
            >
              <span>Arabic</span>
            </Dropdown.Item>

            <Dropdown.Item
              onSelect={() => {
                Cookie.set("bio-lang", "pl");
                setLang("pl");
              }}
              className="flex items-center gap-2 text-white/80 data-[highlighted]:text-white"
            >
              <span>Polish</span>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
};

export default Navbar;
