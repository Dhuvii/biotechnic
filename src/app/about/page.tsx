"use client";

import Navbar from "@/components/Navbar";
import { useTranslate } from "@/store/translateStore";
import { translate } from "@/utilities/translate";
import Image from "next/image";
import AboutImage from "../../../public/about_image.webp";
import AboutContentImage from "../../../public/about_content.webp";

export default function About() {
  const { lang } = useTranslate();

  const {
    title,
    sub_title,
    description_one,
    description_two,
    success_rate,
    features,
  } = translate("about-us", lang);

  return (
    <section className="relative flex h-dvh w-full flex-col pb-10">
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/30 to-transparent"></div>
      <Image
        src={AboutImage}
        alt="about image"
        fill
        placeholder="blur"
        className="absolute inset-0 size-full object-cover"
      />

      <Navbar />

      <div className="relative z-50 mt-10 flex w-full flex-col px-5 lg:px-20">
        <div className="grid w-full grid-cols-2 rounded-xl border border-white/20 bg-black/50 p-5 lg:grid-cols-5">
          <div className="col-span-2 max-w-xl lg:col-span-3">
            <div className="relative flex items-center justify-center xl:w-max">
              <div className="absolute inset-2 inset-y-3 bg-[#00FF80]/70 opacity-50 blur-md xl:opacity-100"></div>
              <h1 className="text-shadow-sm relative text-center text-4xl font-bold tracking-wider text-white uppercase lg:text-5xl">
                {title}
              </h1>
            </div>

            <h3 className="mt-2 text-xl font-bold text-white uppercase">
              {sub_title}
            </h3>

            <p className="mt-5 text-sm/6 font-medium text-white uppercase">
              {description_one}
            </p>

            <p className="mt-5 text-sm/6 font-medium text-white uppercase">
              {description_two}
            </p>

            <div className="mt-5 w-full">
              <div className="flex items-center justify-start gap-2 text-lg font-medium text-white">
                <div className="h-2 w-32 overflow-hidden rounded-full bg-black/50">
                  <div className="h-full w-[70%] rounded-full bg-[#0EF7FF]"></div>
                </div>
                <p className="uppercase">{success_rate.success_one}</p>
              </div>
              <div className="flex items-center justify-start gap-2 text-lg font-medium text-white">
                <div className="h-2 w-32 overflow-hidden rounded-full bg-black/50">
                  <div className="h-full w-[85%] rounded-full bg-[#F00]"></div>
                </div>
                <p className="uppercase">{success_rate.success_two}</p>
              </div>
              <div className="flex items-center justify-start gap-2 text-lg font-medium text-white">
                <div className="h-2 w-32 overflow-hidden rounded-full bg-black/50">
                  <div className="h-full w-[65%] rounded-full bg-[#0FFF71]"></div>
                </div>
                <p className="uppercase">{success_rate.success_three}</p>
              </div>
            </div>
          </div>

          <div className="col-span-2 flex w-full flex-col rounded-xl bg-black/50 p-5">
            <div className="relative aspect-video w-full flex-1 overflow-hidden rounded-xl">
              <Image
                src={AboutContentImage}
                alt="about image"
                fill
                placeholder="blur"
                className="absolute inset-0 size-full object-cover"
              />
            </div>

            <ul className="mt-5 space-y-3">
              {features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-start gap-3 text-xs font-medium text-white"
                >
                  <div className="size-3 rounded-full bg-[#0FFF71]"></div>
                  <p className="uppercase">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
