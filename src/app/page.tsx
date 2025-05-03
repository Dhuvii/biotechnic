"use client";

import Navbar from "@/components/Navbar";
import { useTranslate } from "@/store/translateStore";
import { translate } from "@/utilities/translate";
import Image from "next/image";
import HeroImage from "../../public/hero_image.jpg";

export default function Home() {
  const { lang } = useTranslate();
  const { hero, features, cta } = translate("homepage", lang);

  return (
    <section className="relative flex flex-col h-dvh w-full pb-10">
      <Image
        src={HeroImage}
        alt="hero image"
        fill
        className="absolute inset-0 size-full object-cover"
      />

      <Navbar />

      <div className="relative flex flex-col max-w-7xl mx-auto mt-10  w-full">
        <div className="p-10 w-full max-w-xl rounded-xl bg-black/50 border border-white/20">
          <h1 className="text-4xl uppercase font-bold text-white">
            {hero.title_start}{" "}
            <span className="text-[#09CCDE] text-shadow-sm text-shadow-[#09CCDE]/30">
              {hero.title_highlight}
            </span>{" "}
            {hero.title_end}
          </h1>

          <h3 className="mt-5 text-2xl uppercase font-bold text-[#00FF80]">
            {hero.sub_title}
          </h3>

          <p className="mt-5 text-lg font-medium uppercase text-white">
            {hero.description_start}
            <span className="text-[#F00]">{hero.description_highlight}</span>.
          </p>

          <button className="mt-5 bg-radial border border-white from-white/60 from-50% to-white/60 hover:from-transparent text-base px-5 py-1.5 font-bold text-[#1DF58E]">
            {hero.cta}
          </button>
        </div>
      </div>

      <div className="relative flex flex-col max-w-7xl mx-auto mt-10">
        <div className="mt-16 flex items-center justify-center w-full gap-5">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="uppercase rounded-full shadow-md shadow-[#18FF8C] text-xs px-5 py-1.5 border border-[#18FF8C] font-bold text-white"
            >
              {feature}
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center w-full gap-5">
          <button className="uppercase bg-radial border border-white from-white/60 from-50% to-white/60 hover:from-transparent text-base px-5 py-1.5 font-bold text-white">
            {cta}
          </button>
        </div>
      </div>
    </section>
  );
}
