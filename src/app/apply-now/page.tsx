"use client";

import Checkbox from "@/components/Checkbox";
import Navbar from "@/components/Navbar";
import Select from "@/components/Select";
import { useTranslate } from "@/store/translateStore";
import { translate } from "@/utilities/translate";
import Image from "next/image";
import AboutImage from "../../../public/about_image.jpg";

export default function ApplyNow() {
  const { lang } = useTranslate();

  const { title, sub_title, application_process, form, cta } = translate(
    "apply_now",
    lang
  );
  return (
    <section className="relative flex flex-col h-dvh w-full pb-10 overflow-hidden">
      <Image
        src={AboutImage}
        alt="about image"
        fill
        className="absolute inset-0 size-full object-cover"
      />

      <Navbar />

      <div className="relative flex flex-col max-w-7xl mx-auto mt-10 w-full overflow-hidden">
        <div className="p-5 w-full grid grid-cols-1 md:grid-cols-4 overflow-y-auto lg:grid-cols-5 gap-5 rounded-xl bg-black/70 border border-white/20">
          <div className="w-full md:col-span-2 md:max-w-xl flex flex-col">
            <h1 className="text-4xl uppercase font-bold text-white">{title}</h1>

            <h3 className="mt-2 uppercase text-sm font-bold text-white">
              {sub_title}
            </h3>

            <div className="mt-5 bg-black/50 rounded-xl border border-white/20 p-5 flex-1">
              <h2 className="text-2xl font-bold text-white">
                {application_process.title}
              </h2>

              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="w-full flex flex-col">
                  <div className="flex items-start justify-start gap-2">
                    <div className="size-8 aspect-square flex items-center rounded-full border-[#03FF81] p-2 justify-center text-xl font-medium text-white border bg-radial from-transparent to-[#03FF81]/60">
                      1
                    </div>

                    <div className="">
                      <h3 className="text-white font-bold text-sm">
                        {application_process.process[0].title}
                      </h3>
                      <p className="mt-1 text-xs text-white/80">
                        {application_process.process[0].description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-start justify-start gap-2">
                    <div className="size-8 aspect-square flex items-center rounded-full border-[#03FF81] p-2 justify-center text-xl font-medium text-white border bg-radial from-transparent to-[#03FF81]/60">
                      2
                    </div>

                    <div className="">
                      <h3 className="text-white font-bold text-sm">
                        {application_process.process[1].title}
                      </h3>
                      <p className="mt-1 text-xs text-white/80">
                        {application_process.process[1].description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col">
                  <div className="flex items-start justify-start gap-2">
                    <div className="size-8 aspect-square flex items-center rounded-full border-[#03FF81] p-2 justify-center text-xl font-medium text-white border bg-radial from-transparent to-[#03FF81]/60">
                      3
                    </div>

                    <div className="">
                      <h3 className="text-white font-bold text-sm">
                        {application_process.process[2].title}
                      </h3>
                      <p className="mt-1 text-xs text-white/80">
                        {application_process.process[2].description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-start justify-start gap-2">
                    <div className="size-8 aspect-square flex items-center rounded-full border-[#03FF81] p-2 justify-center text-xl font-medium text-white border bg-radial from-transparent to-[#03FF81]/60">
                      4
                    </div>

                    <div className="">
                      <h3 className="text-white font-bold text-sm">
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

          <div className="md:col-span-2 lg:col-span-3 w-full rounded-x p-5 flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div className="w-full">
                <label
                  htmlFor="first-name"
                  className="text-base text-white font-bold block"
                >
                  {form.first_name.label}
                </label>
                <input
                  id="first-name"
                  type="text"
                  placeholder={form.first_name.placeholder}
                  className="mt-2 w-full px-3 py-3 text-sm focus:outline-0 focus:border-white bg-black/30 rounded-xl border border-white/30 text-white placeholder:text-gray-300"
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="last-name"
                  className="text-base text-white font-bold block"
                >
                  {form.last_name.label}
                </label>
                <input
                  id="last-name"
                  type="text"
                  placeholder={form.last_name.placeholder}
                  className="mt-2 w-full px-3 py-3 text-sm focus:outline-0 focus:border-white bg-black/30 rounded-xl border border-white/30 text-white placeholder:text-gray-300"
                />
              </div>
            </div>

            <label
              htmlFor="email"
              className="text-base text-white font-bold block"
            >
              {form.email.label}
            </label>
            <input
              id="email"
              type="email"
              placeholder={form.email.placeholder}
              className="mt-2 w-full text-sm px-3 py-3 focus:outline-0 focus:border-white bg-black/30 rounded-xl border border-white/30 text-white placeholder:text-gray-300"
            />

            <div className="w-full mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
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
              <label className="text-base text-white font-bold block">
                {form.previous_treatments.label}
              </label>

              <div className="mt-2 w-full flex items-start gap-5 justify-start flex-wrap">
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

            <button className="mt-10 uppercase bg-radial border border-white from-[#03FF81]/60 hover:from-red-700/60 from-10% to-[#03FF81]/60 text-base px-5 py-2 font-bold text-white">
              {cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
