"use client";

import Navbar from "@/components/Navbar";
import { useTranslate } from "@/store/translateStore";
import { translate } from "@/utilities/translate";
import * as Accordion from "@radix-ui/react-accordion";
import Image from "next/image";
import FaqImage from "../../../public/about_image.webp";

export default function Faq() {
  const { lang } = useTranslate();

  const { title, sub_title, faqs } = translate("faq", lang);

  return (
    <section className="relative flex h-dvh w-full flex-col overflow-hidden pb-5 lg:pb-10">
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/30 to-transparent"></div>
      <Image
        src={FaqImage}
        alt="hero image"
        fill
        placeholder="blur"
        className="absolute inset-0 size-full object-cover"
      />

      <Navbar />

      <div className="relative z-50 mt-10 flex w-full flex-col overflow-y-auto px-5 lg:px-20">
        <div className="flex w-full flex-col items-center justify-start rounded-xl border border-white/20 bg-black/50 p-5 lg:p-10">
          <div className="relative flex items-center justify-center lg:w-max">
            <div className="absolute inset-2 inset-y-3 bg-[#00FF80]/70 opacity-50 blur-md lg:opacity-100"></div>
            <h1 className="text-shadow-sm relative text-center text-4xl font-bold tracking-wider text-white uppercase lg:text-5xl">
              {title}
            </h1>
          </div>
          <p className="mt-2 text-center text-xl text-white uppercase">
            {sub_title}
          </p>

          <div className="relative flex items-center justify-center">
            <div className="absolute -inset-1 bg-[#00FF80]/20 blur-md"></div>
            <div className="relative mt-2 h-2 w-24 rounded-full bg-black/80"></div>
          </div>

          <div className="mx-auto mt-10 w-full max-w-4xl">
            <div className="flex w-full flex-col items-center justify-start rounded-xl border border-white/20 bg-black/40 p-10">
              <Accordion.Root type="multiple" className="w-full">
                {faqs.map((faq, idx) => (
                  <Accordion.Item
                    key={idx}
                    value={idx.toString()}
                    className="w-full border-b border-[#00FF80]/50 py-3"
                  >
                    <Accordion.Header className="w-full">
                      <Accordion.Trigger className="flex w-full cursor-pointer items-center justify-between text-left">
                        <div className="w-full font-bold tracking-widest text-white uppercase">
                          {faq.question}
                        </div>

                        <div className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-6 text-[#00FF80]"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 5v14m-7-7h14"
                            />
                          </svg>
                        </div>
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content>
                      <p className="mt-5 text-base/6 tracking-widest text-white">
                        {faq.answer}
                      </p>
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
