"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import AboutImage from "../../../public/about_image.jpg";
import Select from "@/components/Select";
import Checkbox from "@/components/Checkbox";

export default function About() {
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
            <h1 className="text-4xl font-bold text-white">
              START YOUR JOURNEY TODAY
            </h1>

            <h3 className="mt-2 text-sm font-bold text-white">
              TAKE THE FIRST STEP TOWARD A REVOLUTIONARY CANCER TREATMENT WITH
              NO UPFRONT COST APPLY NOW TO SEE IF YOU QUALIFY.
            </h3>

            <div className="mt-5 bg-black/50 rounded-xl border border-white/20 p-5 flex-1">
              <h2 className="text-2xl font-bold text-white">
                APPLICATION PROCESS
              </h2>

              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="w-full flex flex-col">
                  <div className="flex items-start justify-start gap-2">
                    <div className="size-8 aspect-square flex items-center rounded-full border-[#03FF81] p-2 justify-center text-xl font-medium text-white border bg-radial from-transparent to-[#03FF81]/60">
                      1
                    </div>

                    <div className="">
                      <h3 className="text-white font-bold text-sm">
                        SUBMIT APPLICATION
                      </h3>
                      <p className="mt-1 text-xs text-white/80">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod, consectetur sequi commodi hic ipsam fugiat.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-start justify-start gap-2">
                    <div className="size-8 aspect-square flex items-center rounded-full border-[#03FF81] p-2 justify-center text-xl font-medium text-white border bg-radial from-transparent to-[#03FF81]/60">
                      1
                    </div>

                    <div className="">
                      <h3 className="text-white font-bold text-sm">
                        SUBMIT APPLICATION
                      </h3>
                      <p className="mt-1 text-xs text-white/80">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod, consectetur sequi commodi hic ipsam fugiat.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col">
                  <div className="flex items-start justify-start gap-2">
                    <div className="size-8 aspect-square flex items-center rounded-full border-[#03FF81] p-2 justify-center text-xl font-medium text-white border bg-radial from-transparent to-[#03FF81]/60">
                      1
                    </div>

                    <div className="">
                      <h3 className="text-white font-bold text-sm">
                        SUBMIT APPLICATION
                      </h3>
                      <p className="mt-1 text-xs text-white/80">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod, consectetur sequi commodi hic ipsam fugiat.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-start justify-start gap-2">
                    <div className="size-8 aspect-square flex items-center rounded-full border-[#03FF81] p-2 justify-center text-xl font-medium text-white border bg-radial from-transparent to-[#03FF81]/60">
                      1
                    </div>

                    <div className="">
                      <h3 className="text-white font-bold text-sm">
                        SUBMIT APPLICATION
                      </h3>
                      <p className="mt-1 text-xs text-white/80">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod, consectetur sequi commodi hic ipsam fugiat.
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
                  First Name
                </label>
                <input
                  id="first-name"
                  type="text"
                  placeholder="Enter First Name"
                  className="mt-2 w-full px-3 py-3 text-sm focus:outline-0 focus:border-white bg-black/30 rounded-xl border border-white/30 text-white placeholder:text-gray-300"
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="last-name"
                  className="text-base text-white font-bold block"
                >
                  Last Name
                </label>
                <input
                  id="last-name"
                  type="text"
                  placeholder="Enter Last Name"
                  className="mt-2 w-full px-3 py-3 text-sm focus:outline-0 focus:border-white bg-black/30 rounded-xl border border-white/30 text-white placeholder:text-gray-300"
                />
              </div>
            </div>

            <label
              htmlFor="email"
              className="text-base text-white font-bold block"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              className="mt-2 w-full text-sm px-3 py-3 focus:outline-0 focus:border-white bg-black/30 rounded-xl border border-white/30 text-white placeholder:text-gray-300"
            />

            <div className="w-full mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
              <Select placeholder="Cancer Type" Label={"Cancer Type"}>
                <Select.Option value="Lung Cancer">Lung Cancer</Select.Option>
                <Select.Option value="Prostate Cancer">
                  Prostate Cancer
                </Select.Option>
                <Select.Option value="Colorectal Cancer">
                  Colorectal Cancer
                </Select.Option>
                <Select.Option value="Skin Cancer (Melanoma)">
                  Skin Cancer (Melanoma)
                </Select.Option>
                <Select.Option value="Pancreatic Cancer">
                  Pancreatic Cancer
                </Select.Option>
                <Select.Option value="Leukemia">Leukemia</Select.Option>
                <Select.Option value="Lymphoma">Lymphoma</Select.Option>
                <Select.Option value="Brain Cancer">Brain Cancer</Select.Option>
                <Select.Option value="Liver Cancer">Liver Cancer</Select.Option>
                <Select.Option value="Ovarian Cancer">
                  Ovarian Cancer
                </Select.Option>
                <Select.Option value="Cervical Cancer">
                  Cervical Cancer
                </Select.Option>
                <Select.Option value="Esophageal Cancer">
                  Esophageal Cancer
                </Select.Option>
                <Select.Option value="Kidney (Renal Cell) Cancer">
                  Kidney (Renal Cell) Cancer
                </Select.Option>
                <Select.Option value="Bladder Cancer">
                  Bladder Cancer
                </Select.Option>
                <Select.Option value="Sarcoma">Sarcoma</Select.Option>
                <Select.Option value="Thyroid Cancer">
                  Thyroid Cancer
                </Select.Option>
                <Select.Option value="Testicular Cancer">
                  Testicular Cancer
                </Select.Option>
                <Select.Option value="Multiple Myeloma">
                  Multiple Myeloma
                </Select.Option>
              </Select>

              <Select placeholder="Cancer Stage" Label={"Cancer Stage"}>
                <Select.Option value="Stage 0 (Carcinoma in situ)">
                  Stage 0 (Carcinoma in situ)
                </Select.Option>
                <Select.Option value="Stage I (Early stage)">
                  Stage I (Early stage)
                </Select.Option>
                <Select.Option value="Stage II (Localized)">
                  Stage II (Localized)
                </Select.Option>
                <Select.Option value="Stage III (Regional spread)">
                  Stage III (Regional spread)
                </Select.Option>
                <Select.Option value="Stage IV (Metastatic)">
                  Stage IV (Metastatic)
                </Select.Option>
                <Select.Option value="Recurrent">Recurrent</Select.Option>
                <Select.Option value="Unknown">Unknown</Select.Option>
              </Select>
            </div>

            <div className="mt-5 w-full">
              <label className="text-base text-white font-bold block">
                Previous Treatments
              </label>

              <div className="mt-2 w-full flex items-start gap-5 justify-start flex-wrap">
                <Checkbox
                  defaultChecked={true}
                  value={"show-original"}
                  label="Chemotherapy"
                />

                <Checkbox defaultChecked={false} value={""} label="Radiation" />

                <Checkbox defaultChecked={false} value={""} label="Surgery" />

                <Checkbox
                  defaultChecked={false}
                  value={""}
                  label="Immunotherapy"
                />
              </div>
            </div>

            <button className="mt-10 bg-radial border border-white from-[#03FF81]/60 hover:from-red-700/60 from-10% to-[#03FF81]/60 text-base px-5 py-2 font-bold text-white">
              APPLY NOW - NO UPFRONT COST
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
