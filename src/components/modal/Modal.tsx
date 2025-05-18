"use client";
import { Dispatch, ReactNode, SetStateAction } from "react";

import { useBreakpoint } from "@/hooks/useBreakpoint";
import { CustomSlottedComponent } from "@/types/type-utils";
import { cn } from "@/utilities/cn";
import Dialog from "../dialog";
import { Drawer } from "../drawer";

interface IModal {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  title?: string;
  description?: string;
  showClose?: boolean;
  Trigger: CustomSlottedComponent<"button">;
  desktopClassName?: string;
  mobileClassName?: string;
}
const Modal = ({
  isOpen,
  setIsOpen,
  children,
  Trigger,
  title,
  description,
  desktopClassName,
  mobileClassName,
}: IModal) => {
  const isMd = useBreakpoint("md");

  return (
    <>
      {isMd ? (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <Trigger />
          <Dialog.Content
            className={cn(
              "flex max-h-dvh flex-col rounded-2xl border border-white/10 bg-black/90 p-1.5 sm:max-w-[425px]",
              desktopClassName,
            )}
          >
            <div className="dark:from-primary-dark-foreground relative flex flex-1 flex-col overflow-hidden rounded-[calc(var(--radius-2xl)-(--spacing(1.5)))] bg-gradient-to-b from-white/5">
              {(title || description) && (
                <Dialog.Header className="relative p-5">
                  {title && <Dialog.Title>{title}</Dialog.Title>}
                  {description && (
                    <Dialog.Description className={"max-w-md"}>
                      {description}
                    </Dialog.Description>
                  )}
                </Dialog.Header>
              )}

              <div className="scrollbar flex h-full flex-1 flex-col overflow-y-auto">
                {children}
              </div>
            </div>
          </Dialog.Content>
        </Dialog>
      ) : (
        <Drawer shouldScaleBackground open={isOpen} onOpenChange={setIsOpen}>
          <Trigger />
          <Drawer.Content
            className={cn(
              "mt-auto flex h-min max-h-[80dvh] flex-col",
              mobileClassName,
            )}
          >
            <div className="dark:bg-primary-dark flex h-full flex-1 flex-col overflow-hidden rounded-t-2xl border border-white/10 bg-black/90 p-1.5">
              <div className="flex flex-1 flex-col overflow-hidden rounded-[calc(var(--radius-2xl)-(--spacing(1.5)))] bg-gradient-to-b from-white/5">
                {(title || description) && (
                  <Drawer.Header className="p-5 text-left">
                    {title && <Drawer.Title>{title}</Drawer.Title>}
                    {description && (
                      <Drawer.Description className="max-w-md">
                        {description}
                      </Drawer.Description>
                    )}
                  </Drawer.Header>
                )}
                <div className="scrollbar flex flex-1 flex-col overflow-y-auto">
                  {children}
                </div>
              </div>
            </div>
          </Drawer.Content>
        </Drawer>
      )}
    </>
  );
};

export default Modal;
