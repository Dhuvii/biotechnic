import Navbar from "@/components/Navbar";
import Image from "next/image";
import FaqImage from "../../../public/faq_image.jpg";
import * as Accordion from "@radix-ui/react-accordion";

export default function Home() {
  return (
    <section className="relative flex flex-col h-dvh w-full pb-10 overflow-hidden">
      <Image
        src={FaqImage}
        alt="hero image"
        fill
        className="absolute inset-0 size-full object-cover"
      />

      <Navbar />

      <div className="relative flex flex-col max-w-7xl mx-auto mt-10 w-full overflow-y-auto">
        <div className="p-10 w-full flex flex-col items-center justify-start rounded-xl bg-black/50 border border-white/20">
          <h1 className="text-4xl text-shadow-sm text-shadow-[#00FF80]/50 font-bold text-white text-center">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="text-xl text-white mt-2 text-center">
            EVERYTHING YOU NEED TO KNOW ABOUT OUR REVOLUTIONARY TREATMENT
          </p>

          <div className="w-24 mt-2 h-2 rounded-full bg-black/80"></div>

          <div className="mt-10 w-full max-w-4xl mx-auto">
            <div className="w-full bg-black/40 border border-white/20 rounded-xl p-10 flex flex-col items-center justify-start">
              <Accordion.Root type="multiple" className="w-full">
                <Accordion.Item
                  value="item-1"
                  className="w-full py-3 border-b border-[#00FF80]/50"
                >
                  <Accordion.Header className="w-full">
                    <Accordion.Trigger className="w-full cursor-pointer text-left flex items-center justify-between">
                      <div className="w-full font-bold text-white">
                        HOW DOES NO PAYMENT IF NO RESULTS&apos; WORK?
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
                    <p className="text-white mt-5 text-base/6">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Explicabo quis quos atque eos est asperiores quam dolor,
                      incidunt, quasi temporibus molestiae neque eum sit commodi
                      voluptatem dicta itaque? Voluptate odit esse distinctio
                      harum voluptatem unde non, fuga, fugiat natus, nobis error
                      quasi dolor in quis.
                    </p>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item
                  value="item-2"
                  className="w-full py-3 border-t border-[#00FF80]/50"
                >
                  <Accordion.Header className="w-full">
                    <Accordion.Trigger className="w-full cursor-pointer text-left flex items-center justify-between">
                      <div className="w-full font-bold text-white">
                        HOW DOES NO PAYMENT IF NO RESULTS&apos; WORK?
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
                    <p className="text-white mt-5 text-base/6">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Explicabo quis quos atque eos est asperiores quam dolor,
                      incidunt, quasi temporibus molestiae neque eum sit commodi
                      voluptatem dicta itaque? Voluptate odit esse distinctio
                      harum voluptatem unde non, fuga, fugiat natus, nobis error
                      quasi dolor in quis.
                    </p>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item
                  value="item-3"
                  className="w-full py-3 border-t border-[#00FF80]/50"
                >
                  <Accordion.Header className="w-full">
                    <Accordion.Trigger className="w-full cursor-pointer text-left flex items-center justify-between">
                      <div className="w-full font-bold text-white">
                        HOW DOES NO PAYMENT IF NO RESULTS&apos; WORK?
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
                    <p className="text-white mt-5 text-base/6">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Explicabo quis quos atque eos est asperiores quam dolor,
                      incidunt, quasi temporibus molestiae neque eum sit commodi
                      voluptatem dicta itaque? Voluptate odit esse distinctio
                      harum voluptatem unde non, fuga, fugiat natus, nobis error
                      quasi dolor in quis.
                    </p>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item
                  value="item-4"
                  className="w-full py-3 border-t border-[#00FF80]/50"
                >
                  <Accordion.Header className="w-full">
                    <Accordion.Trigger className="w-full cursor-pointer text-left flex items-center justify-between">
                      <div className="w-full font-bold text-white">
                        HOW DOES NO PAYMENT IF NO RESULTS&apos; WORK?
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
                    <p className="text-white mt-5 text-base/6">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Explicabo quis quos atque eos est asperiores quam dolor,
                      incidunt, quasi temporibus molestiae neque eum sit commodi
                      voluptatem dicta itaque? Voluptate odit esse distinctio
                      harum voluptatem unde non, fuga, fugiat natus, nobis error
                      quasi dolor in quis.
                    </p>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item
                  value="item-5"
                  className="w-full py-3 border-t border-[#00FF80]/50"
                >
                  <Accordion.Header className="w-full">
                    <Accordion.Trigger className="w-full cursor-pointer text-left flex items-center justify-between">
                      <div className="w-full font-bold text-white">
                        HOW DOES NO PAYMENT IF NO RESULTS&apos; WORK?
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
                    <p className="text-white mt-5 text-base/6">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Explicabo quis quos atque eos est asperiores quam dolor,
                      incidunt, quasi temporibus molestiae neque eum sit commodi
                      voluptatem dicta itaque? Voluptate odit esse distinctio
                      harum voluptatem unde non, fuga, fugiat natus, nobis error
                      quasi dolor in quis.
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
