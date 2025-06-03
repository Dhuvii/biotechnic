"use client";

import Navbar from "@/components/Navbar";
import { useTranslate } from "@/store/translateStore";
import { translate } from "@/utilities/translate";
import Image from "next/image";
import ContactImage from "../../../public/about_image.webp";
import { ContactUsInput, ContactUsSchema } from "@/schema/ContactUsSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleContactUs } from "../actions";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { lang } = useTranslate();

  const { title, sub_title, email_us, form } = translate("contact", lang);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactUsInput>({
    resolver: zodResolver(ContactUsSchema),
  });
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

          <div className="mt-10 grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
            <div className="flex w-full flex-col items-center justify-center rounded-xl border border-white/20 bg-black/20 p-5 lg:p-10">
              <div className="rounded-full border border-[#00FF80]/70 bg-radial from-black/10 from-5% to-[#00FF80]/20 p-5 text-[#00FF80]">
                <svg
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M43 36L29.714 24m-11.428 0L5 36M4 14l16.33 11.43c1.322.927 1.983 1.39 2.703 1.569.635.158 1.3.158 1.934 0 .72-.18 1.38-.642 2.703-1.568L44 14M13.6 40h20.8c3.36 0 5.04 0 6.324-.654a6 6 0 002.622-2.622C44 35.44 44 33.76 44 30.4V17.6c0-3.36 0-5.04-.654-6.324a6 6 0 00-2.622-2.622C39.44 8 37.76 8 34.4 8H13.6c-3.36 0-5.04 0-6.324.654a6 6 0 00-2.622 2.622C4 12.56 4 14.24 4 17.6v12.8c0 3.36 0 5.04.654 6.324a6 6 0 002.622 2.622C8.56 40 10.24 40 13.6 40z"
                    stroke="#00FF80"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h2 className="mt-5 text-xl font-medium text-white uppercase">
                {email_us.title}
              </h2>

              <p className="font-game mt-2 text-center text-xs text-white">
                {email_us.description}
              </p>

              <p className="font-game mt-2 text-lg text-[#00FF80]">
                {email_us.email.split("@")[0]}{" "}
                <span className="font-sans">@</span>{" "}
                {email_us.email.split("@")[1]}
              </p>
            </div>

            <form
              onSubmit={handleSubmit((values) => {
                handleContactUs(values);
                reset();
                router.push("/");
              })}
              className="col-span-2 flex w-full flex-col rounded-xl border border-white/30 bg-black/10 p-5"
            >
              <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="w-full">
                  <label
                    htmlFor="first-name"
                    className="block text-base font-bold tracking-widest text-white"
                  >
                    {form.first_name.label}
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    placeholder={form.first_name.placeholder}
                    className="font-game mt-2 w-full rounded-xl border border-white/30 bg-black/30 px-3 py-3 text-sm text-white placeholder:text-gray-300 focus:border-white focus:outline-0"
                    {...register("firstName")}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-xs font-medium text-red-700">
                      {form.errors.firstName.required}
                    </p>
                  )}
                </div>

                <div className="w-full">
                  <label
                    htmlFor="last-name"
                    className="block text-base font-bold tracking-widest text-white"
                  >
                    {form.last_name.label}
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    placeholder={form.last_name.placeholder}
                    className="font-game mt-2 w-full rounded-xl border border-white/30 bg-black/30 px-3 py-3 text-sm text-white placeholder:text-gray-300 focus:border-white focus:outline-0"
                    {...register("lastName")}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-xs font-medium text-red-700">
                      {form.errors.lastName.required}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-5 w-full">
                <label
                  htmlFor="email"
                  className="block text-base font-bold tracking-widest text-white"
                >
                  {form.email.label}
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder={form.email.placeholder}
                  className="font-game mt-2 w-full rounded-xl border border-white/30 bg-black/30 px-3 py-3 text-sm text-white placeholder:text-gray-300 focus:border-white focus:outline-0"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-1 text-xs font-medium text-red-700">
                    {errors.email.message === "invalid"
                      ? form.errors.email.invalid
                      : form.errors.email.required}
                  </p>
                )}
              </div>

              <div className="w-full">
                <label
                  htmlFor="message"
                  className="block text-base font-bold tracking-widest text-white"
                >
                  {form.message.label}
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder={form.message.placeholder}
                  className="font-game mt-2 w-full rounded-xl border border-white/30 bg-black/30 px-3 py-3 text-sm text-white placeholder:text-gray-300 focus:border-white focus:outline-0"
                  {...register("message")}
                />
                {errors.message && (
                  <p className="mt-1 text-xs font-medium text-red-700">
                    {form.errors.message.required}
                  </p>
                )}
              </div>

              <div className="group relative mt-5 flex items-center justify-center">
                <div className="absolute -inset-1 bg-[#03FF81]/50 blur-lg group-hover:bg-[#03FF81]/10"></div>
                <button
                  type="submit"
                  className="relative w-full border border-white bg-radial from-[#03FF81]/60 from-10% to-[#03FF81]/60 px-5 py-2 text-xl font-bold tracking-widest text-white uppercase hover:from-transparent"
                >
                  {form.cta}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
