import Navbar from "@/components/Navbar";
import HeroImage from "../../public/hero_image.jpg";
import Image from "next/image";

export default function Home() {
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
          <h1 className="text-4xl font-bold text-white">
            IMMUNOTHERAPY FOR{" "}
            <span className="text-[#09CCDE] text-shadow-sm text-shadow-[#09CCDE]/30">
              LATE-STAGE
            </span>{" "}
            CANCER
          </h1>

          <h3 className="mt-5 text-2xl font-bold text-[#00FF80]">
            &quot;NO RESULTS / NO PAYMENT&quot;
          </h3>

          <p className="mt-5 text-lg font-medium text-white">
            FOR STAGE 3 & 4 PATIENTS WHO FAILED CHEMOTHERAPY. BREAKTHROUGH
            TREATMENT WITH{" "}
            <span className="text-[#F00]">ZERO UPFRONT COST</span>.
          </p>

          <button className="mt-5 bg-radial border border-white from-white/60 from-50% to-white/60 hover:from-transparent text-base px-5 py-1.5 font-bold text-[#1DF58E]">
            Apply now no upfront cost
          </button>
        </div>
      </div>

      <div className="relative flex flex-col max-w-7xl mx-auto mt-10">
        <div className="mt-16 flex items-center justify-center w-full gap-5">
          <div className=" rounded-full shadow-md shadow-[#18FF8C] text-xs px-5 py-1.5 border border-[#18FF8C] font-bold text-white">
            100% transparent
          </div>
          <div className=" rounded-full shadow-md shadow-[#18FF8C] text-xs px-5 py-1.5 border border-[#18FF8C] font-bold text-white">
            FOR-APPROVED LABS
          </div>
          <div className=" rounded-full shadow-md shadow-[#18FF8C] text-xs px-5 py-1.5 border border-[#18FF8C] font-bold text-white">
            AI POWERED TREATMENT
          </div>
          <div className=" rounded-full shadow-md shadow-[#18FF8C] text-xs px-5 py-1.5 border border-[#18FF8C] font-bold text-white">
            ZERO UPFRONT COST
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center w-full gap-5">
          <button className="bg-radial border border-white from-white/60 from-50% to-white/60 hover:from-transparent text-base px-5 py-1.5 font-bold text-white">
            INQUIRY
          </button>
        </div>
      </div>
    </section>
  );
}
