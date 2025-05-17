"use client";

import * as S from "@radix-ui/react-select";
import { motion, useAnimationControls } from "framer-motion";
import { forwardRef, LegacyRef, useEffect, useId, useState } from "react";
import { Label as AriaLabel, Text } from "react-aria-components";
import { IoChevronDown, IoChevronUp, IoWarning } from "react-icons/io5";
import { CustomSlottedComponent } from "@/types/type-utils";
import { cn } from "@/utilities/cn";
import Spinner from "./Spinner";

interface ISelect extends S.SelectProps, S.SelectPortalProps {
  isLoading?: boolean;
  placeholder: string;
  Icon?: CustomSlottedComponent<"svg">;
  Label?: string | CustomSlottedComponent<"label">;
  AbsoluteContainer?: CustomSlottedComponent<"div">;
  description?: string;
  error?: string;
  hideError?: boolean;
  ErrorIcon?: CustomSlottedComponent<"svg">;
  className?: string;
  labelClass?: string;
  placeholderClass?: string;
  descriptionClass?: string;
  triggerClass?: string;
  contentClass?: string;
  errorClass?: string;
  chevronClass?: string;
  children: React.ReactNode;
}

const Select = forwardRef<HTMLButtonElement, ISelect>(
  (
    {
      isLoading = false,
      error,
      Label,
      AbsoluteContainer,
      ErrorIcon,
      Icon,
      className,
      placeholder,
      children,
      description,
      labelClass,
      placeholderClass,
      descriptionClass,
      contentClass,
      triggerClass,
      container,
      hideError,
      errorClass,
      chevronClass,
      ...rest
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);
    const id = useId();
    const errorAnimationControls = useAnimationControls();

    const [doc, setDoc] = useState<Document | undefined>(undefined);
    useEffect(() => {
      if (typeof window !== "undefined") {
        setDoc(window?.document);
      }
    }, []);

    // Function to control error animations
    useEffect(() => {
      let isMounted = false; // Start as false to ensure component is not yet mounted

      // Using a setTimeout to delay the animation trigger until after mount
      const triggerErrorAnimation = async () => {
        if (error) {
          // Ensure this only runs after the component has mounted
          setTimeout(async () => {
            if (isMounted) {
              await errorAnimationControls.start("error");
              await errorAnimationControls.start("vibrate");
            }
          }, 5); // Timeout with 0 ensures that this runs in the next tick, after mount
        } else {
          errorAnimationControls.start("no_error");
        }
      };

      // Set mounted flag after the first effect execution
      isMounted = true;
      triggerErrorAnimation();

      // Clean up by setting isMounted to false on component unmount
      return () => {
        isMounted = false;
      };
    }, [error, errorAnimationControls]); // Only run this effect when error changes

    return (
      <S.Root
        disabled={isLoading}
        open={open}
        onOpenChange={(v) => setOpen(v)}
        {...rest}
      >
        <motion.div
          animate={errorAnimationControls}
          initial={{ x: 0 }}
          className={cn(`relative flex flex-col justify-start`, className)}
        >
          {/* Label and error icon */}
          {Label && (
            <AriaLabel
              htmlFor={id}
              className={cn(
                "flex items-center justify-start gap-1 text-base font-bold text-white transition-colors duration-150",
                { "text-red-700": error },
                labelClass,
                { "mb-1.5": !description },
              )}
            >
              <motion.div
                animate={errorAnimationControls}
                initial="no_error"
                variants={{
                  no_error: {
                    width: 0,
                    opacity: 0,
                    filter: `blur(4px)`,
                    scale: 0.5,
                  },
                  error: {
                    width: "1.25rem",
                    opacity: 1,
                    filter: `blur(0px)`,
                    scale: 1,
                  },
                }}
              >
                {ErrorIcon ? (
                  <ErrorIcon data-testid="error-icon-svg" />
                ) : (
                  <IoWarning
                    data-testid="error-icon-svg"
                    className="size-5 flex-shrink-0"
                  />
                )}
              </motion.div>

              {typeof Label === "function" ? <Label /> : Label}
            </AriaLabel>
          )}

          {description && (
            <Text
              id={`${id}-description`}
              className={cn(
                "mt-0.5 mb-1.5 block pl-1 text-xs text-gray-600",
                descriptionClass,
              )}
              slot="description"
            >
              {description}
            </Text>
          )}

          <SelectTrigger
            ref={ref}
            id={id}
            error={error}
            placeholder={placeholder}
            isLoading={isLoading}
            placeholderClass={placeholderClass}
            triggerClass={triggerClass}
            hideError={hideError}
            errorClass={errorClass}
            chevronClass={chevronClass}
            Icon={Icon}
            AbsoluteContainer={AbsoluteContainer}
            aria-labelledby={Label ? `${id}-label` : undefined}
            aria-describedby={description ? `${id}-description` : undefined}
            aria-invalid={!!error}
          />
        </motion.div>

        <S.Portal
          container={container ?? doc?.getElementById("select-container")}
        >
          <S.Content
            className={cn(
              `w-full rounded-xl border border-gray-800 bg-black/80 p-1 shadow`,
              contentClass,
            )}
          >
            <S.ScrollUpButton className="flex items-center justify-center py-1">
              <IoChevronUp className="size-4 text-gray-300" />
            </S.ScrollUpButton>

            <S.Viewport>{children}</S.Viewport>

            <S.ScrollDownButton className="flex items-center justify-center py-1">
              <IoChevronDown className="size-4 text-gray-300" />
            </S.ScrollDownButton>
            <S.Arrow />
          </S.Content>
        </S.Portal>
      </S.Root>
    );
  },
);

interface ISelectGroup extends S.SelectGroupProps {
  Label?: string | CustomSlottedComponent<"label">;
}

const SelectGroup = ({ children, Label }: ISelectGroup) => {
  return (
    <S.Group>
      {Label && (
        <OptionLabel>
          {" "}
          {typeof Label === "function" ? <Label /> : Label}
        </OptionLabel>
      )}
      <div className="flex flex-col">{children}</div>
    </S.Group>
  );
};

interface ISelectTrigger extends S.SelectTriggerProps {
  ref: LegacyRef<HTMLButtonElement>;
  id: string;
  isLoading?: boolean;
  error?: string;
  Icon?: CustomSlottedComponent<"svg">;
  placeholderClass?: string;
  triggerClass?: string;
  placeholder?: string;
  hideError?: boolean;
  errorClass?: string;
  chevronClass?: string;
  AbsoluteContainer?: CustomSlottedComponent<"div">;
}

const SelectTrigger = ({
  ref,
  id,
  error,
  Icon,
  placeholder,
  isLoading = false,
  placeholderClass,
  triggerClass,
  hideError,
  errorClass,
  chevronClass,
  AbsoluteContainer,
  ...rest
}: ISelectTrigger) => {
  const errorText = useAnimationControls();
  useEffect(() => {
    if (error) {
      errorText.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 },
      });
    }
  }, [error, errorText]);
  return (
    <>
      <div className="relative w-full">
        <S.Trigger
          id={id}
          ref={ref}
          className={cn(
            "group peer flex w-full items-center justify-between gap-5 rounded-xl border border-white/30 bg-black/50 px-3 py-3 text-sm text-white transition-all duration-75 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-50 data-[placeholder]:text-gray-400",
            {
              "border-red-600 focus:border-red-100 focus:ring-red-700": error,
            },
            `${isLoading ? "pl-10" : "pl-3"}`,

            triggerClass,
          )}
          data-testid="select-trigger"
          {...rest}
        >
          {isLoading && (
            <div
              data-testid="select-loading"
              className="absolute inset-y-0 left-0 flex items-center"
            >
              <Spinner className="h-4 text-gray-600" />
            </div>
          )}

          {AbsoluteContainer && <AbsoluteContainer />}

          <div
            className={cn(
              "flex items-center justify-start gap-2 truncate",
              placeholderClass,
            )}
          >
            {Icon && !isLoading && (
              <span
                data-testid="input-icon-svg"
                className={cn(
                  "group-focus:text-skin-primary peer-focus:text-skin-primary flex items-center justify-center text-gray-500",
                  { "text-red-700 peer-focus:text-red-700": error },
                )}
              >
                <Icon />
              </span>
            )}
            <S.Value placeholder={!isLoading ? placeholder : "Loading..."} />
          </div>

          <S.Icon>
            <IoChevronDown
              className={cn("size-4 text-gray-600", chevronClass)}
            />
          </S.Icon>
        </S.Trigger>
      </div>

      {/* error text */}
      {!hideError && (
        <div className="mt-1 h-3">
          {error && (
            <Text
              id={`${id}-error`}
              slot="errorMessage"
              className={cn("block text-xs text-red-700", errorClass)}
            >
              {error}
            </Text>
          )}
        </div>
      )}
      {/* end of error text */}
    </>
  );
};

interface IOption extends S.SelectItemProps {
  level?: number;
}
const Option = ({
  children,
  value,
  className,
  level = 1,
  ...rest
}: IOption) => {
  return (
    <S.Item
      value={value}
      style={{ paddingLeft: `${0.75 * level}rem` }}
      className={cn(
        `cursor-pointer rounded-lg p-3 py-[0.68rem] text-sm text-gray-200 data-[highlighted]:bg-[#421CA4] data-[highlighted]:text-white data-[highlighted]:outline-none data-[state=checked]:font-medium`,
        className,
      )}
      data-testid={`select-option-${value}`}
      {...rest}
    >
      <S.ItemText>{children}</S.ItemText>
      <S.ItemIndicator />
    </S.Item>
  );
};

interface IOptionLabel extends S.SelectLabelProps {}
const OptionLabel = ({ children, className }: IOptionLabel) => {
  return (
    <S.Label
      className={cn(
        "mt-3 mb-2 block px-3 text-sm font-semibold tracking-wide text-gray-300",
        className,
      )}
    >
      {children}
    </S.Label>
  );
};

interface IDivider extends S.SelectArrowProps {
  dividerClassName?: string;
}
const Divider = ({ className, children, dividerClassName }: IDivider) => {
  return (
    <S.Separator className={cn("my-1 px-3", className)}>
      {children ? (
        children
      ) : (
        <div className={cn("w-full border-t", dividerClassName)}></div>
      )}
    </S.Separator>
  );
};

Select.displayName = "Select";
export default Object.assign(Select, {
  Divider,
  Option,
  OptionLabel,
  SelectGroup,
  SelectTrigger,
});
