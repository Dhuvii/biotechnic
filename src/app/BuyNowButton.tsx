import Checkbox from "@/components/Checkbox";
import Modal from "@/components/modal";
import ModalButton from "@/components/modal/ModalButton";
import { useTranslate } from "@/store/translateStore";
import { cn } from "@/utilities/cn";
import { translate } from "@/utilities/translate";
import { useState } from "react";
import { IoCheckmark, IoWarning } from "react-icons/io5";

const BuyNowButton = () => {
  const { lang } = useTranslate();
  const [openOrderForm, setOpenOrderForm] = useState(false);
  const [openOrderConfirmation, setOpenOrderConfirmation] = useState(false);
  const [acceptInvite, setAcceptInvite] = useState(false);

  const { feat_3, orderForm, orderConfirmation } = translate("homepage", lang);
  return (
    <>
      <div className="group relative mt-5 flex items-center justify-center">
        <div className="absolute -inset-1 bg-[#03FF81]/50 blur-lg group-hover:bg-[#03FF81]/10"></div>
        <Modal
          title=""
          desktopClassName="w-full sm:max-w-xl"
          description={""}
          Trigger={() => (
            <ModalButton className="relative w-full border border-white bg-radial from-[#03FF81]/60 from-10% to-[#03FF81]/60 px-5 py-2 text-xl font-bold text-white uppercase hover:from-transparent">
              {feat_3.cta}
            </ModalButton>
          )}
          isOpen={openOrderForm}
          setIsOpen={setOpenOrderForm}
        >
          <div className="flex w-full flex-col space-y-5 p-5">
            <div className="w-full">
              <label
                htmlFor="first-name"
                className="block text-base font-bold tracking-widest text-white"
              >
                {orderForm.full_name.label}
                <sup className="ml-2 text-xl text-red-700">*</sup>
              </label>
              <input
                id="first-name"
                type="text"
                placeholder={orderForm.full_name.placeholder}
                className="font-game mt-2 w-full rounded-xl border border-white/30 bg-black/30 px-3 py-3 text-sm text-white placeholder:text-gray-300 focus:border-white focus:outline-0"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="street-address"
                className="block text-base font-bold tracking-widest text-white"
              >
                {orderForm.street_address.label}
                <sup className="ml-2 text-xl text-red-700">*</sup>
              </label>
              <input
                id="street-address"
                type="text"
                placeholder={orderForm.street_address.placeholder}
                className="font-game mt-2 w-full rounded-xl border border-white/30 bg-black/30 px-3 py-3 text-sm text-white placeholder:text-gray-300 focus:border-white focus:outline-0"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="region"
                className="block text-base font-bold tracking-widest text-white"
              >
                {orderForm.region.label}
              </label>
              <input
                id="region"
                type="text"
                placeholder={orderForm.region.placeholder}
                className="font-game mt-2 w-full rounded-xl border border-white/30 bg-black/30 px-3 py-3 text-sm text-white placeholder:text-gray-300 focus:border-white focus:outline-0"
              />
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="w-full">
                <label
                  htmlFor="city"
                  className="block text-base font-bold tracking-widest text-white"
                >
                  {orderForm.city.label}
                  <sup className="ml-2 text-xl text-red-700">*</sup>
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder={orderForm.city.placeholder}
                  className="font-game mt-2 w-full rounded-xl border border-white/30 bg-black/30 px-3 py-3 text-sm text-white placeholder:text-gray-300 focus:border-white focus:outline-0"
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="zip_code"
                  className="block text-base font-bold tracking-widest text-white"
                >
                  {orderForm.zip_code.label}
                  <sup className="ml-2 text-xl text-red-700">*</sup>
                </label>
                <input
                  id="zip_code"
                  type="text"
                  placeholder={orderForm.zip_code.placeholder}
                  className="font-game mt-2 w-full rounded-xl border border-white/30 bg-black/30 px-3 py-3 text-sm text-white placeholder:text-gray-300 focus:border-white focus:outline-0"
                />
              </div>
            </div>

            <div className="w-full">
              <label
                htmlFor="country"
                className="block text-base font-bold tracking-widest text-white"
              >
                {orderForm.country.label}
                <sup className="ml-2 text-xl text-red-700">*</sup>
              </label>
              <input
                id="country"
                type="text"
                placeholder={orderForm.country.placeholder}
                className="font-game mt-2 w-full rounded-xl border border-white/30 bg-black/30 px-3 py-3 text-sm text-white placeholder:text-gray-300 focus:border-white focus:outline-0"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-base font-bold tracking-widest text-white"
              >
                {orderForm.email.label}
                <sup className="ml-2 text-xl text-red-700">*</sup>
              </label>
              <input
                id="email"
                type="text"
                placeholder={orderForm.email.placeholder}
                className="font-game mt-2 w-full rounded-xl border border-white/30 bg-black/30 px-3 py-3 text-sm text-white placeholder:text-gray-300 focus:border-white focus:outline-0"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="phone_number"
                className="block text-base font-bold tracking-widest text-white"
              >
                {orderForm.phone_number.label}
                <sup className="ml-2 text-xl text-red-700">*</sup>
              </label>
              <input
                id="phone_number"
                type="text"
                placeholder={orderForm.phone_number.placeholder}
                className="font-game mt-2 w-full rounded-xl border border-white/30 bg-black/30 px-3 py-3 text-sm text-white placeholder:text-gray-300 focus:border-white focus:outline-0"
              />
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-1 mx-auto w-24 bg-[#00FF80]/20 blur-md"></div>
              <div className="relative mt-2 h-2 w-24 rounded-full bg-white"></div>
            </div>

            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-base font-bold tracking-widest text-white"
              >
                {orderForm.terms_and_conditions.label}
              </label>

              <div className="mt-2 rounded-xl border border-white/10 bg-white/5 text-sm text-white">
                <div className="h-64 overflow-y-auto p-5">
                  {orderForm.terms_and_conditions.content}
                </div>

                <div className="border border-white/10 px-5 py-3">
                  <Checkbox
                    label="Accept invite"
                    value={acceptInvite ? "accept" : ""}
                    onChange={() => setAcceptInvite((pv) => !pv)}
                  />
                </div>
              </div>
            </div>

            <div className="w-full">
              <label
                htmlFor="phone_number"
                className="block text-base font-bold tracking-widest text-white"
              >
                {orderForm.price.label}
              </label>

              <p className="text-2xl text-white">{orderForm.price.value}</p>
            </div>

            <div className="w-full">
              <label
                htmlFor="phone_number"
                className="block text-base font-bold tracking-widest text-white"
              >
                {orderForm.payment_option.label}
              </label>

              <p className="text-2xl text-white">
                {orderForm.payment_option.value}
              </p>
            </div>

            <div className="group relative flex items-center justify-center">
              <div
                className={cn(
                  "absolute -inset-1 bg-[#03FF81]/50 blur-lg group-hover:bg-[#03FF81]/10",
                  { hidden: !acceptInvite },
                )}
              ></div>
              <button
                onClick={() => {
                  setOpenOrderForm(false);
                  setOpenOrderConfirmation(true);
                }}
                disabled={!acceptInvite}
                className={cn(
                  "relative w-full border border-white px-5 py-2 text-xl font-bold uppercase hover:from-transparent",
                  {
                    "cursor-not-allowed bg-white/10 text-white/20":
                      !acceptInvite,
                  },
                  {
                    "cursor-pointer bg-radial from-[#03FF81]/60 from-10% to-[#03FF81]/60 text-white":
                      acceptInvite,
                  },
                )}
              >
                {orderForm.cta}
              </button>
            </div>
          </div>
        </Modal>
      </div>

      <Modal
        title=""
        desktopClassName="w-full sm:max-w-xl"
        description={""}
        Trigger={() => <></>}
        isOpen={openOrderConfirmation}
        setIsOpen={setOpenOrderConfirmation}
      >
        <div className="flex w-full flex-col p-5 text-white">
          <div className="flex w-full items-center justify-center">
            <div className="relative size-7">
              <div className="absolute -inset-1 z-10 bg-white opacity-35 blur-lg"></div>
              <div className="relative z-20 flex size-7 items-center justify-center bg-radial from-transparent from-40% to-[#00FF80]">
                <IoCheckmark className="size-5 text-[#00FF80]" />
              </div>
            </div>
          </div>

          <h1 className="text-center text-2xl">{orderConfirmation.title}</h1>
          <p className="text-center text-lg">{orderConfirmation.sub_title}</p>

          <h3 className="mt-5 text-center text-2xl">
            {orderConfirmation.order_number} : # 115
          </h3>

          <div className="mt-5 w-full">
            <p className="text-sm">
              {orderConfirmation.confirmation_email.title}
            </p>
            <p className="mt-2">
              {orderConfirmation.confirmation_email.content}
            </p>
          </div>

          <div className="relative my-5 flex items-center justify-center">
            <div className="absolute -inset-1 mx-auto mt-2 w-24 bg-[#00FF80]/20 blur-md"></div>
            <div className="relative mt-2 h-2 w-24 rounded-full bg-white"></div>
          </div>

          <h3 className="mt-5 text-left text-2xl">
            {orderConfirmation.bank.title} :
          </h3>

          <div className="mt-5 flex items-center justify-start gap-2">
            <p className="text-sm text-gray-400">
              {orderConfirmation.bank.bank_name} :
            </p>
            <p className="text-sm text-white">
              {orderConfirmation.bank.bank_name}
            </p>
          </div>

          <div className="mt-2 flex items-center justify-start gap-2">
            <p className="text-sm text-gray-400">
              {orderConfirmation.bank.account_holder} :
            </p>
            <p className="text-sm text-white">
              {orderConfirmation.bank.account_holder}
            </p>
          </div>

          <div className="mt-2 flex items-center justify-start gap-2">
            <p className="text-sm text-gray-400">
              {orderConfirmation.bank.iban} :
            </p>
            <p className="text-sm text-white"># 11122 22233 2222 2222</p>
          </div>

          <div className="mt-2 flex items-center justify-start gap-2">
            <p className="text-sm text-gray-400">
              {orderConfirmation.bank.swift} :
            </p>
            <p className="text-sm text-white"># 11122</p>
          </div>

          <div className="mt-2 flex items-center justify-start gap-2">
            <p className="text-sm text-gray-400">
              {orderConfirmation.bank.amount} :
            </p>
            <p className="text-sm text-white">49.999 EUR</p>
          </div>

          <div className="mt-10">
            <div className="flex items-center justify-start gap-2">
              <IoWarning className="size-5 text-yellow-500" />
              <p>{orderConfirmation.note.title}</p>
            </div>

            <p className="mt-2 text-sm">{orderConfirmation.note.content}</p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BuyNowButton;
