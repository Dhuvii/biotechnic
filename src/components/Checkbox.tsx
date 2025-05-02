"use client";
import { cn } from "@/utilities/cn";
import * as Cbx from "@radix-ui/react-checkbox";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { forwardRef, useEffect, useId } from "react";

interface ICheckbox extends Cbx.CheckboxProps {
  label?: string;
  onChange?: (e: any) => void;
  labelClass?: string;
}

const Checkbox = forwardRef(
  (
    { name, value = "", onChange, label, labelClass, ...rest }: ICheckbox,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    const id = useId();
    const controls = useAnimationControls();

    useEffect(() => {
      if (value) {
        controls.start("checked");
      }
    }, [value]);

    return (
      <div className="group flex items-center justify-start">
        <Cbx.Root
          ref={ref}
          name={name}
          id={id}
          value={value}
          onClick={(e) => {
            e.stopPropagation();
          }}
          onCheckedChange={() => {
            onChange && onChange(value ? false : true);
          }}
          className={cn(
            `flex aspect-square h-5 w-5 items-center justify-center rounded-md p-1 ring-[1px] transition duration-300 focus:outline-none focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-skin-primary group-hover:scale-110`,
            `${value ? "ring-[#03FF81]" : "ring-gray-300"}`
          )}
          {...rest}
        >
          <AnimatePresence initial={false}>
            {value && (
              <motion.div
                initial={"unchecked"}
                animate={controls}
                exit={"unchecked"}
                variants={{
                  checked: {
                    opacity: 1,
                    scale: [0.9, 1, 1.3, 1],
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    transition: { ease: "easeOut", duration: 0.2 },
                  },
                  unchecked: {
                    opacity: 0,
                    backgroundColor: "#ffffff",
                    transition: { ease: "easeIn", duration: 0.1 },
                  },
                }}
                className="flex size-[1.35rem] items-center justify-center rounded-md border-none bg-white/80"
              >
                <Cbx.Indicator forceMount>
                  <span className="">
                    <svg
                      className="h-5 w-5 text-[#03FF81]"
                      viewBox="0 0 512 512"
                    >
                      <motion.path
                        initial={"unchecked"}
                        animate={controls}
                        variants={{
                          checked: {
                            pathLength: 1,
                            transition: { ease: "easeOut", duration: 0.6 },
                          },
                          unchecked: {
                            pathLength: 0,
                            transition: { ease: "easeIn", duration: 0.1 },
                          },
                        }}
                        fill="currentColor"
                        d="M17.47 250.9C88.82 328.1 158 397.6 224.5 485.5c72.3-143.8 146.3-288.1 268.4-444.37L460 26.06C356.9 135.4 276.8 238.9 207.2 361.9c-48.4-43.6-126.62-105.3-174.38-137z"
                      />
                    </svg>
                  </span>
                </Cbx.Indicator>
              </motion.div>
            )}
          </AnimatePresence>
        </Cbx.Root>
        {label && (
          <label
            htmlFor={id}
            className={cn(
              "cursor-pointer select-none pl-2 text-sm text-white font-bold",
              labelClass
            )}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
export default Checkbox;
