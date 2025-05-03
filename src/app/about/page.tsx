"use client";

import Navbar from "@/components/Navbar";
import { useTranslate } from "@/store/translateStore";
import { translate } from "@/utilities/translate";
import Image from "next/image";
import AboutImage from "../../../public/about_image.jpg";

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
    <section className="relative flex flex-col h-dvh w-full pb-10">
      <Image
        src={AboutImage}
        alt="about image"
        fill
        className="absolute inset-0 size-full object-cover"
      />

      <Navbar />

      <div className="relative flex flex-col max-w-7xl mx-auto mt-10  w-full">
        <div className="p-5 w-full grid grid-cols-5 rounded-xl bg-black/50 border border-white/20">
          <div className="col-span-3 max-w-xl">
            <h1 className="text-4xl uppercase font-bold text-white">{title}</h1>

            <h3 className="mt-2 text-xl uppercase font-bold text-white">
              {sub_title}
            </h3>

            <p className="mt-5 text-sm/6 uppercase font-medium text-white">
              {description_one}
            </p>

            <p className="mt-5 text-sm/6 uppercase font-medium text-white">
              {description_two}
            </p>

            <div className="mt-5 w-full">
              <div className="flex items-center justify-start gap-2 text-lg font-medium text-white">
                <div className="w-32 rounded-full bg-black/50 h-2 overflow-hidden">
                  <div className="w-[70%] bg-[#0EF7FF] h-full rounded-full"></div>
                </div>
                <p className="uppercase">{success_rate.success_one}</p>
              </div>
              <div className="flex items-center justify-start gap-2 text-lg font-medium text-white">
                <div className="w-32 rounded-full bg-black/50 h-2 overflow-hidden">
                  <div className="w-[85%] bg-[#F00] h-full rounded-full"></div>
                </div>
                <p className="uppercase">{success_rate.success_two}</p>
              </div>
              <div className="flex items-center justify-start gap-2 text-lg font-medium text-white">
                <div className="w-32 rounded-full bg-black/50 h-2 overflow-hidden">
                  <div className="w-[65%] bg-[#0FFF71] h-full rounded-full"></div>
                </div>
                <p className="uppercase">{success_rate.success_three}</p>
              </div>
            </div>
          </div>

          <div className="col-span-2 w-full rounded-xl bg-black/50 p-5 flex flex-col">
            <div className="relative flex-1 w-full aspect-video rounded-xl overflow-hidden">
              <Image
                src={AboutImage}
                alt="about image"
                fill
                className="absolute inset-0 size-full object-cover"
              />
            </div>

            <ul className="mt-5 space-y-3">
              {features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-start gap-3 text-xs text-white font-medium"
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
