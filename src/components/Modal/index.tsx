import { Dialog, DialogPanel } from "@headlessui/react";
import { PropsWithChildren } from "react";

type ModalProps = PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
}>;

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={onClose}>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto  bg-black/50">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="data-closed:transform-[scale(95%)] data-closed:opacity-0 w-fit  rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out"
          >
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
