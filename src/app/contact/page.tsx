"use client";

import Navbar from "@/components/Navbar";
import { useTranslate } from "@/store/translateStore";
import { translate } from "@/utilities/translate";
import Image from "next/image";
import ContactImage from "../../../public/about_image.webp";

export default function Home() {
  const { lang } = useTranslate();

  const { title, sub_title, call_us, email_us, visit_us } = translate(
    "contact",
    lang
  );
  return (
    <section className="relative flex flex-col h-dvh w-full pb-10">
      <Image
        src={ContactImage}
        alt="contact image"
        fill
        placeholder="blur"
        className="absolute inset-0 size-full object-cover"
      />

      <Navbar />

      <div className="relative flex flex-col px-20 mt-10  w-full">
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

          <div className="mt-10 grid grid-cols-3 gap-5 w-full">
            <div className="w-full bg-black/20 border border-white/20 rounded-xl p-10 flex flex-col items-center justify-start">
              <div className="p-5 rounded-full border text-[#00FF80] bg-radial from-black/10 from-5% border-[#00FF80]/70 to-[#00FF80]/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-8"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19.2 20q-2.702 0-5.418-1.244t-5.005-3.533q-2.27-2.289-3.523-5.021Q4 7.469 4 4.8V4h4.439l.848 4.083-2.696 2.51q.684 1.186 1.417 2.167t1.527 1.769q.802.84 1.808 1.57t2.296 1.44l2.611-2.708 3.75.756V20zM6.121 9.654l2.092-1.92L7.635 5h-2.63q.03 1.144.309 2.305.278 1.16.807 2.349m8.45 8.335q.923.463 2.09.723t2.339.277v-2.605l-2.388-.475zm0 0"
                  />
                </svg>
              </div>

              <h2 className="mt-5 uppercase text-xl text-white font-medium">
                {call_us.title}
              </h2>

              <p className="text-base text-white mt-2 text-center">
                {call_us.description}
              </p>

              <p className="text-lg text-[#00FF80] mt-2">{call_us.number}</p>
            </div>

            <div className="w-full bg-black/20 border border-white/20 rounded-xl p-10 flex flex-col items-center justify-start">
              <div className="p-5 rounded-full border text-[#00FF80] bg-radial from-black/10 from-5% border-[#00FF80]/70 to-[#00FF80]/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-8"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM12 12.116L4 6.885v10.5q0 .269.173.442t.443.173h14.769q.269 0 .442-.173t.173-.443v-10.5zM12 11l7.692-5H4.308zM4 6.885V6v11.385q0 .269.173.442t.443.173H4z"
                  />
                </svg>
              </div>

              <h2 className="mt-5 uppercase text-xl text-white font-medium">
                {email_us.title}
              </h2>

              <p className="text-base text-white mt-2 text-center">
                {email_us.description}
              </p>

              <p className="text-lg text-[#00FF80] mt-2">{email_us.email}</p>
            </div>

            <div className="w-full bg-black/20 border border-white/20 rounded-xl p-10 flex flex-col items-center justify-start">
              <div className="p-5 rounded-full border text-[#00FF80] bg-radial from-black/10 from-5% border-[#00FF80]/70 to-[#00FF80]/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="size-8"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                  >
                    <path d="M12.56 20.82a.96.96 0 01-1.12 0C6.611 17.378 1.486 10.298 6.667 5.182A7.6 7.6 0 0112 3c2 0 3.919.785 5.333 2.181 5.181 5.116.056 12.196-4.773 15.64" />
                    <path d="M12 12a2 2 0 100-4 2 2 0 000 4" />
                  </g>
                </svg>
              </div>

              <h2 className="mt-5 uppercase text-xl text-white font-medium">
                {visit_us.title}
              </h2>

              <p className="text-base text-white mt-2 text-center">
                {visit_us.description}
              </p>

              <p className="text-lg text-[#00FF80] mt-2 text-center">
                {visit_us.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
