import * as Dialog from "@radix-ui/react-dialog";
import { MagnifyingGlassPlus } from "phosphor-react";

export const CreateAdBanner = () => {
  return (
    <Dialog.Root>
      <section className="w-3/4 sm:w-full mt-8 pt-1 bg-duo-gradient rounded-lg overflow-hidden">
        <div className="px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-0 bg-[#2A2634]">
          <p>
            <strong className="block mb-4 text-xl sm:text-2xl text-center sm:text-start text-white font-black">
              Didn&apos;t you find your duo?
            </strong>

            <span className="block text-center sm:text-start text-zinc-400">
              Publish an ad to find new players!
            </span>
          </p>

          <Dialog.Trigger className="px-4 py-3 flex items-center gap-3 bg-violet-500 hover:bg-violet-600 text-white rounded transition-colors">
            <MagnifyingGlassPlus size={24} />
            Publish ad
          </Dialog.Trigger>
        </div>
      </section>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

        <Dialog.Content className="fixed w-3/4 max-w-[480px] px-10 py-8 bg-[#2A2634] text-white rounded-lg shadow-lg shadow-black/25 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Dialog.Title className="text-xl sm:text-3xl font-black">
            Publish an ad
          </Dialog.Title>

          <form action=""></form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
