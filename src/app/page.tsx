"use client";

import Navbar from "@/components/Navbar";
import { useTranslate } from "@/store/translateStore";
import { translate } from "@/utilities/translate";
import Image from "next/image";
import Link from "next/link";
import ContactImage from "../../public/about_image.webp";
import BuyNowButton from "./BuyNowButton";

export default function Home() {
  const { lang } = useTranslate();

  const {
    title,
    sub_title_1,
    sub_title_2,
    sub_title_highlight,
    feat_1,
    feat_2,
    feat_3,
  } = translate("homepage", lang);
  return (
    <section className="relative flex h-dvh w-full flex-col pb-10">
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/30 to-transparent"></div>
      <Image
        src={ContactImage}
        alt="contact image"
        fill
        placeholder="blur"
        className="absolute inset-0 size-full object-cover"
      />

      <Navbar />

      <div className="relative z-50 mt-10 flex w-full flex-col overflow-y-auto px-5 lg:px-20">
        <div className="flex w-full flex-col items-center justify-start rounded-xl border border-white/20 bg-black/50 p-5 lg:p-10">
          <div className="relative flex items-center justify-center lg:w-max">
            <div className="absolute inset-2 inset-y-3 bg-[#00FF80]/70 blur-md"></div>
            <h1 className="text-shadow-sm relative text-center text-4xl font-bold tracking-wider text-white uppercase lg:text-5xl">
              {title}
            </h1>
          </div>
          <p className="mt-2 text-center text-xl text-white uppercase">
            {sub_title_1}{" "}
            <span className="text-shadow-sm text-shadow-[#09CCDE]/30 relative text-[#09CCDE]">
              {sub_title_highlight}
            </span>{" "}
            {sub_title_2}
          </p>

          <div className="relative flex items-center justify-center">
            <div className="absolute -inset-1 bg-[#00FF80]/20 blur-md"></div>
            <div className="relative mt-2 h-2 w-24 rounded-full bg-white"></div>
          </div>

          <div className="mt-10 grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
            <div className="flex h-full w-full flex-col items-center justify-start rounded-xl border border-white/20 bg-black/20 p-10">
              <div className="flex aspect-square items-center justify-center rounded-full border border-[#00FF80]/70 bg-radial from-black/10 from-5% to-[#00FF80]/20 p-5 text-[#00FF80]">
                <svg
                  width={33}
                  height={46}
                  viewBox="0 0 33 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_29_40)">
                    <path
                      d="M9.507 24.576C3.617 28.67 0 35.428 0 42.856v1.54C0 45.28.715 46 1.597 46c.881 0 1.597-.719 1.597-1.605v-1.54c0-.383.053-.755.076-1.134h26.49c.022.377.046.754.046 1.135v1.54c0 .885.716 1.604 1.597 1.604.882 0 1.597-.719 1.597-1.605v-1.54c0-9.884-6.605-18.683-16.061-21.398-3.416-.98-6.388-2.896-8.693-5.41H24.73c-1.336 1.44-2.875 2.707-4.634 3.692a24.526 24.526 0 013.397 1.685C29.383 17.33 33 10.573 33 3.144v-1.54C33 .72 32.285 0 31.403 0c-.881 0-1.596.719-1.596 1.605v1.54c0 .383-.054.755-.077 1.134H3.24c-.022-.377-.046-.753-.046-1.135v-1.54C3.194.72 2.478 0 1.597 0 .715 0 0 .719 0 1.605v1.54c0 9.884 6.605 18.683 16.061 21.398 3.416.98 6.388 2.896 8.693 5.41H8.27c1.336-1.44 2.875-2.707 4.634-3.692a24.526 24.526 0 01-3.397-1.685zM5.87 12.837a19.126 19.126 0 01-2.162-5.349h25.567c-.441 1.897-1.135 3.704-2.108 5.35H5.87zm21.26 20.326a19.128 19.128 0 012.162 5.349H3.725c.442-1.897 1.135-3.704 2.108-5.35H27.13z"
                      fill="#00FF80"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_29_40">
                      <path fill="#fff" d="M0 0H33V46H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className="flex flex-1 flex-col items-center justify-start">
                <h2 className="mt-5 text-center text-xl font-medium text-white uppercase">
                  {feat_1.title}
                </h2>

                <p className="mt-2 text-center text-base text-white">
                  {feat_1.description}
                </p>
              </div>

              <div className="group relative mt-5 flex items-center justify-center">
                <div className="absolute -inset-1 bg-[#03FF81]/50 blur-lg group-hover:bg-[#03FF81]/10"></div>
                <Link
                  href={"/blog"}
                  className="relative w-full border border-white bg-radial from-[#03FF81]/60 from-10% to-[#03FF81]/60 px-5 py-2 text-xl font-bold tracking-wider text-white uppercase hover:from-transparent"
                >
                  {feat_1.cta}
                </Link>
              </div>
            </div>

            <div className="flex aspect-square h-full w-full flex-col items-center rounded-xl border border-white/20 bg-black/20 p-10">
              <div className="rounded-full border border-[#00FF80]/70 bg-radial from-black/10 from-5% to-[#00FF80]/20 p-5 text-[#00FF80]">
                <svg
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 32a8 8 0 008 8h8a8 8 0 100-16h-8a8 8 0 110-16h8a8 8 0 018 8M24 4v40"
                    stroke="#00FF80"
                    strokeWidth={3.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="flex flex-1 flex-col items-center justify-start">
                <h2 className="mt-5 text-center text-xl font-medium text-white uppercase">
                  {feat_2.title}
                </h2>

                <p className="mt-2 text-center text-base text-white">
                  {feat_2.description}
                </p>

                <p className="mt-2 text-center text-lg text-[#00FF80]">
                  {feat_2.tag}
                </p>
              </div>

              <div className="group relative mt-5 flex items-center justify-center">
                <div className="absolute -inset-1 bg-[#03FF81]/50 blur-lg group-hover:bg-[#03FF81]/10"></div>
                <Link
                  href={"/apply-now"}
                  className="relative w-full border border-white bg-radial from-[#03FF81]/60 from-10% to-[#03FF81]/60 px-5 py-2 text-xl font-bold tracking-wider text-white uppercase hover:from-transparent"
                >
                  {feat_2.cta}
                </Link>
              </div>
            </div>

            <div className="flex h-full w-full flex-col items-center justify-start rounded-xl border border-white/20 bg-black/20 p-10">
              <div className="flex aspect-square items-center justify-center rounded-full border border-[#00FF80]/70 bg-radial from-black/10 from-5% to-[#00FF80]/20 p-5 text-[#00FF80]">
                <svg
                  width={40}
                  height={40}
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.01 12.153a7.861 7.861 0 01-15.722 0m-8.582-1.176L2.33 27.486c-.295 3.546-.443 5.32.156 6.687a5.896 5.896 0 002.594 2.819c1.313.71 3.092.71 6.651.71h16.837c3.559 0 5.338 0 6.651-.71a5.896 5.896 0 002.594-2.819c.6-1.367.451-3.14.156-6.687l-1.376-16.51c-.254-3.05-.381-4.576-1.057-5.731a5.896 5.896 0 00-2.544-2.34c-1.207-.578-2.738-.578-5.8-.578H13.107c-3.062 0-4.593 0-5.8.577a5.896 5.896 0 00-2.544 2.34C4.087 6.4 3.96 7.926 3.706 10.978z"
                    stroke="#00FF80"
                    strokeWidth={3.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="flex flex-1 flex-col items-center justify-start">
                <h2 className="mt-5 text-center text-xl font-medium text-white uppercase">
                  {feat_3.title}
                </h2>

                <p className="mt-2 text-center text-base text-white">
                  {feat_3.description}
                </p>

                <p className="mt-2 text-center text-lg text-[#00FF80]">
                  {feat_3.address}
                </p>
              </div>

              <BuyNowButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
