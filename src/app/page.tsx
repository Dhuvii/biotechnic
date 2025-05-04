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
    <section className="relative flex flex-col h-dvh w-full ">
      <Image
        src={HeroImage}
        alt="hero image"
        fill
        className="absolute inset-0 size-full object-cover"
      />

      <Navbar />

      <div className="-mt-5 w-full flex flex-col flex-1 overflow-y-auto pb-10">
        <div className="relative flex flex-col px-20 w-full ">
          <div className="p-10 w-full max-w-xl rounded-xl bg-black/50 border border-white/20">
            <h1 className="text-4xl uppercase font-bold text-white">
              {hero.title_start}{" "}
              <div className="w-max relative">
                <div className="absolute inset-2 inset-y-3 blur-md bg-[#09CCDE]/50"></div>
                <span className="text-[#09CCDE] relative text-shadow-sm text-shadow-[#09CCDE]/30">
                  {hero.title_highlight}
                </span>{" "}
              </div>
              {hero.title_end}
            </h1>

            <div className="w-max relative">
              <div className="absolute inset-2 inset-y-3 blur-md bg-[#80FF00]/70"></div>
              <h3 className="mt-5 relative text-2xl uppercase font-bold text-[#80FF00]">
                {hero.sub_title}
              </h3>
            </div>

            <p className="mt-5 text-lg font-medium uppercase text-white">
              {hero.description_start}
              <span className="text-[#F00]">{hero.description_highlight}</span>.
            </p>

            <div className="w-full flex items-center justify-start">
              <div className="relative group flex items-center justify-center">
                <div className="absolute -inset-1 blur-lg bg-white/30 group-hover:bg-white/20"></div>
                <button className="relative mt-5 bg-radial border border-white from-white/10 from-50% to-white/60 group-hover:from-transparent text-base px-5 py-2 font-bold text-[#1DF58E]">
                  {hero.cta}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col mt-10">
          <div className="mt-16 flex items-center justify-center w-full gap-5">
            {features.map((feature, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -inset-1 blur-md bg-[#18FF8C]/50"></div>
                <div className="uppercase bg-radial relative from-black/20 from-60% to-[#00FF80] rounded-full text-sm px-5 py-1.5 border border-[#18FF8C] font-bold text-white">
                  {feature}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center w-full gap-5">
            <div className="relative group flex items-center justify-center">
              <div className="absolute -inset-1 blur-lg bg-white/50 group-hover:bg-white/20"></div>
              <button className="relative uppercase bg-radial border border-white from-white/20 from-50% to-white/60 group-hover:from-black/10 text-lg px-10 py-2 font-bold text-white">
                {cta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
