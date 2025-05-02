import Navbar from "@/components/Navbar";
import Image from "next/image";
import AboutImage from "../../../public/about_image.jpg";

export default function About() {
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
            <h1 className="text-4xl font-bold text-white">
              ABOUT OUR TECHNOLOGY
            </h1>

            <h3 className="mt-2 text-xl font-bold text-white">
              MERGING AI AND IMMUNOTHERAPY TO TARGET RESISTANT CANCERS
            </h3>

            <p className="mt-5 text-sm/6 font-medium text-white">
              OUR REVOLUTIONARY APPROACH COMBINES ARTIFICIAL INTELLIGENCE WITH
              ADVANCED IMMUNOTHERAPY TO CREATE PERSONALIZED TREATMENT PROTOCOLS
              FOR LATE CANCER PATIENTS WHO HAVE NOT RESPONDED TO TRADITIONAL
              CHEMOTHERAPY. STAGE
            </p>

            <p className="mt-5 text-sm/6 font-medium text-white">
              BY ANALYZING THOUSANDS OF DATA POINTS FROM YOUR SPECIFIC CANCER
              PROFILE OUR AI SYSTEM IDENTIFIES THE OPTIMAL COMBINATION OF
              IMMUNOTHERAPY AGENTS TO TARGET YOUR UNIQUE CANCER CELLS
            </p>

            <div className="mt-5 w-full">
              <div className="flex items-center justify-start gap-2 text-lg font-medium text-white">
                <div className="w-32 rounded-full bg-black/50 h-2 overflow-hidden">
                  <div className="w-[70%] bg-[#0EF7FF] h-full rounded-full"></div>
                </div>
                <p>70%</p>
                <p>TUMOR REDUCTION IN TRIALS</p>
              </div>
              <div className="flex items-center justify-start gap-2 text-lg font-medium text-white">
                <div className="w-32 rounded-full bg-black/50 h-2 overflow-hidden">
                  <div className="w-[85%] bg-[#F00] h-full rounded-full"></div>
                </div>
                <p>85%</p>
                <p>SUCCESS WITH STAGE 3 PATIENTS</p>
              </div>
              <div className="flex items-center justify-start gap-2 text-lg font-medium text-white">
                <div className="w-32 rounded-full bg-black/50 h-2 overflow-hidden">
                  <div className="w-[65%] bg-[#0FFF71] h-full rounded-full"></div>
                </div>
                <p>60%</p>
                <p>SUCCESS WITH STAGE 4 PATIENTS</p>
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
              <li className="flex items-center justify-start gap-3 text-xs text-white font-medium">
                <div className="size-3 rounded-full bg-[#0FFF71]"></div>
                <p>ADVANCED CLEANROOM FACILITIES WITH FI-MONITORING SYSTEMS</p>
              </li>
              <li className="flex items-center justify-start gap-3 text-xs text-white font-medium">
                <div className="size-3 rounded-full bg-[#0FFF71]"></div>
                <p>PROPRIETARY IMMUNOTHERAPY SYNTHESIS PROCESS</p>
              </li>
              <li className="flex items-center justify-start gap-3 text-xs text-white font-medium">
                <div className="size-3 rounded-full bg-[#0FFF71]"></div>
                <p>REAL-TIME TREATMENT OPTIMIZATION THROUGH AI FEEDBACK</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
