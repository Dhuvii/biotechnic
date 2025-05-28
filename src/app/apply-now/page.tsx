"use client";

import Checkbox from "@/components/Checkbox";
import Navbar from "@/components/Navbar";
import Select from "@/components/Select";
import { useTranslate } from "@/store/translateStore";
import { translate } from "@/utilities/translate";
import Image from "next/image";
import ApplyNowImage from "../../../public/apply_now_image.webp";
import Link from "next/link";

export default function ApplyNow() {
  const { lang } = useTranslate();

  const { title, sub_title, application_process, form, cta, back_cta } =
    translate("apply_now", lang);
  return (
    <section className="relative flex h-dvh w-full flex-col overflow-hidden pb-10">
      <Image
        src={ApplyNowImage}
        alt="about image"
        fill
        placeholder="blur"
        className="absolute inset-0 size-full object-cover"
      />

      <Navbar />

      <div className="relative mt-10 flex w-full flex-col overflow-hidden px-20">
        <div className="grid w-full grid-cols-1 gap-5 overflow-y-auto rounded-xl border border-white/20 bg-black/70 p-5 md:grid-cols-4 lg:grid-cols-5">
          <div className="flex w-full flex-col md:col-span-2 md:max-w-xl">
            <h1 className="text-4xl font-bold text-white uppercase">{title}</h1>

            <h3 className="mt-2 text-sm font-bold text-white uppercase">
              {sub_title}
            </h3>

            <div className="mt-5 flex-1 rounded-xl border border-white/20 bg-black/50 p-5">
              <h2 className="text-2xl font-bold text-white">
                {application_process.title}
              </h2>

              <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="flex w-full flex-col">
                  <div className="flex items-start justify-start gap-2">
                    <div className="flex aspect-square size-8 items-center justify-center rounded-full border border-[#03FF81] bg-radial from-transparent to-[#03FF81]/60 p-2 text-xl font-medium text-white">
                      1
                    </div>

                    <div className="">
                      <h3 className="text-sm font-bold text-white">
                        {application_process.process[0].title}
                      </h3>
                      <p className="mt-1 text-xs text-white/80">
                        {application_process.process[0].description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-start justify-start gap-2">
                    <div className="flex aspect-square size-8 items-center justify-center rounded-full border border-[#03FF81] bg-radial from-transparent to-[#03FF81]/60 p-2 text-xl font-medium text-white">
                      2
                    </div>

                    <div className="">
                      <h3 className="text-sm font-bold text-white">
                        {application_process.process[1].title}
                      </h3>
                      <p className="mt-1 text-xs text-white/80">
                        {application_process.process[1].description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex w-full flex-col">
                  <div className="flex items-start justify-start gap-2">
                    <div className="flex aspect-square size-8 items-center justify-center rounded-full border border-[#03FF81] bg-radial from-transparent to-[#03FF81]/60 p-2 text-xl font-medium text-white">
                      3
                    </div>

                    <div className="">
                      <h3 className="text-sm font-bold text-white">
                        {application_process.process[2].title}
                      </h3>
                      <p className="mt-1 text-xs text-white/80">
                        {application_process.process[2].description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-start justify-start gap-2">
                    <div className="flex aspect-square size-8 items-center justify-center rounded-full border border-[#03FF81] bg-radial from-transparent to-[#03FF81]/60 p-2 text-xl font-medium text-white">
                      4
                    </div>

                    <div className="">
                      <h3 className="text-sm font-bold text-white">
                        {application_process.process[3].title}
                      </h3>
                      <p className="mt-1 text-xs text-white/80">
                        {application_process.process[3].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-x flex w-full flex-col p-5 md:col-span-2 lg:col-span-3">
            <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="w-full">
                <label
                  htmlFor="first-name"
                  className="block text-base font-bold text-white"
                >
                  {form.first_name.label}
                </label>
                <input
                  id="first-name"
                  type="text"
                  placeholder={form.first_name.placeholder}
                  className="mt-2 w-full rounded-xl border border-white/30 bg-black/30 px-3 py-3 text-sm text-white placeholder:text-gray-300 focus:border-white focus:outline-0"
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="last-name"
                  className="block text-base font-bold text-white"
                >
                  {form.last_name.label}
                </label>
                <input
                  id="last-name"
                  type="text"
                  placeholder={form.last_name.placeholder}
                  className="mt-2 w-full rounded-xl border border-white/30 bg-black/30 px-3 py-3 text-sm text-white placeholder:text-gray-300 focus:border-white focus:outline-0"
                />
              </div>
            </div>

            <label
              htmlFor="email"
              className="block text-base font-bold text-white"
            >
              {form.email.label}
            </label>
            <input
              id="email"
              type="email"
              placeholder={form.email.placeholder}
              className="mt-2 w-full rounded-xl border border-white/30 bg-black/30 px-3 py-3 text-sm text-white placeholder:text-gray-300 focus:border-white focus:outline-0"
            />

            <div className="mt-5 grid w-full grid-cols-1 gap-5 md:grid-cols-2">
              <Select
                placeholder={form.cancer_type.placeholder}
                Label={form.cancer_type.label}
              >
                {form.cancer_type.options.map((option, idx) => (
                  <Select.Option key={idx} value={option.value}>
                    {option.name}
                  </Select.Option>
                ))}
              </Select>

              <Select placeholder="Cancer Stage" Label={"Cancer Stage"}>
                {form.cancer_stage.options.map((option, idx) => (
                  <Select.Option key={idx} value={option.value}>
                    {option.name}
                  </Select.Option>
                ))}
              </Select>
            </div>

            <div className="mt-5 w-full">
              <label className="block text-base font-bold text-white">
                {form.previous_treatments.label}
              </label>

              <div className="mt-2 flex w-full flex-wrap items-start justify-start gap-5">
                {form.previous_treatments.options.map((option, idx) => (
                  <Checkbox
                    key={idx}
                    defaultChecked={true}
                    value={"show-original"}
                    label={option.name}
                  />
                ))}
              </div>
            </div>

            <div className="group relative mt-10 flex items-center justify-center">
              <div className="absolute -inset-1 bg-[#03FF81]/50 blur-lg group-hover:bg-[#03FF81]/10"></div>
              <button className="relative w-full border border-white bg-radial from-[#03FF81]/60 from-10% to-[#03FF81]/60 px-5 py-2 text-xl font-bold text-white uppercase hover:from-red-700/60">
                {cta}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex w-full items-center justify-center gap-5">
          <div className="group relative flex items-center justify-center">
            <div className="absolute -inset-1 bg-white/50 blur-lg group-hover:bg-white/20"></div>
            <Link
              href="/"
              className="relative flex items-center justify-center gap-2 border border-white bg-radial from-black/20 from-50% to-white/60 px-10 py-2 text-lg font-bold tracking-wider text-white uppercase group-hover:from-black/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-7"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.426 12t.063-.375.212-.325l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12t-.288.713T19 13z"
                />
              </svg>
              {back_cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
