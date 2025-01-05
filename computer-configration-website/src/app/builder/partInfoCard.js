export function PartInfoCard() {
  return (
    <div className="w-[360px] h-20 relative bg-white  overflow-hidden">
      <div className="w-[360px] h-20 left-0 top-[1px] absolute rounded-xl justify-start items-center inline-flex overflow-hidden">
        <div className="grow shrink basis-0 self-stretch p-4 justify-start items-center gap-4 flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
            <div className="self-stretch text-zinc-900 text-base font-medium font-['Roboto'] leading-normal tracking-tight">
              Header
            </div>
          </div>
        </div>
      </div>
      <div className="p-3 left-[277px] top-[15px] absolute bg-zinc-800 rounded-lg border border-zinc-800 justify-center items-center gap-2 inline-flex overflow-hidden">
        <button >
          <div className="text-neutral-100 text-base font-normal font-['Inter'] leading-none">
            Button
          </div>
        </button>
      </div>
      <div className="left-[220px] top-[28px] absolute text-black text-base font-medium font-['Roboto'] leading-normal tracking-tight">
        price
      </div>
    </div>
  );
}
