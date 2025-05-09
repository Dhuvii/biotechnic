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
    <section className="relative flex flex-col h-dvh w-full pb-10 overflow-hidden">
      <Image
        src={FaqImage}
        alt="hero image"
        fill
        placeholder="blur"
        className="absolute inset-0 size-full object-cover"
      />

      <Navbar />

      <div className="relative flex flex-col px-20 mt-10 w-full overflow-y-auto">
        <div className="p-10 w-full flex flex-col items-center justify-start rounded-xl bg-black/50 border border-white/20">
          <div className="relative w-max flex items-center justify-center">
            <div className="absolute inset-2 inset-y-3 blur-md bg-[#00FF80]/70"></div>
            <h1 className="text-4xl relative uppercase text-shadow-sm font-bold text-white text-center">
              {title}
            </h1>
          </div>
          <p className="text-xl uppercase text-white mt-2 text-center">
            {sub_title}
          </p>

          <div className="relative flex items-center justify-center">
            <div className="absolute -inset-1 blur-md bg-[#00FF80]/20"></div>
            <div className="relative w-24 mt-2 h-2 rounded-full bg-black/80"></div>
          </div>

          <div className="mt-10 w-full max-w-4xl mx-auto">
            <div className="w-full bg-black/40 border border-white/20 rounded-xl p-10 flex flex-col items-center justify-start">
              <Accordion.Root type="multiple" className="w-full">
                {faqs.map((faq, idx) => (
                  <Accordion.Item
                    key={idx}
                    value={idx.toString()}
                    className="w-full py-3 border-b border-[#00FF80]/50"
                  >
                    <Accordion.Header className="w-full">
                      <Accordion.Trigger className="w-full cursor-pointer text-left flex items-center justify-between">
                        <div className="w-full font-bold uppercase text-white">
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
                      <p className="text-white  mt-5 text-base/6">
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
