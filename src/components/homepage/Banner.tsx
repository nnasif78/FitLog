import Image from "next/image"
import logo from "@/assets/banner.png"

export default function Banner() {
    return (
        <section className="mx-auto mt-8 flex h-auto min-h-[448px] w-full max-w-[1232px] flex-col items-center justify-center gap-8 rounded-3xl bg-[#15171D] px-6 py-10 text-center sm:mt-10 sm:px-10 lg:mt-15 lg:h-[448px] lg:flex-row lg:justify-between lg:px-16 lg:py-0 lg:text-left">
            <div>
                <p className="font-[family-name:var(--font-inter)] text-[11px] font-bold leading-[16.5px] tracking-[1.1px] text-[#C2F800]">WORKOUT LIBRARY</p>
                <h1 className="mt-3 font-[family-name:var(--font-oswald)] text-[40px] font-extrabold leading-[1] tracking-[-1.5px] text-white sm:text-[48px] lg:text-[60px]">
                    TRAIN WITH INTENT. LOG
                    <br />
                    EVERY SET.
                </h1>
                <p className="mt-5 font-[family-name:var(--font-inter)] text-[14px] font-normal leading-6 text-[#9CA3AF] sm:text-[16px]">
                    FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                    <br className="hidden sm:block" />
                    into today&apos;s plan, and watch the week&apos;s work add up.
                </p>
                <a href="#library"className="mx-auto mt-6 flex h-10 w-[180px] cursor-pointer items-center justify-center rounded-md bg-[#C2F800] font-[family-name:var(--font-inter)] text-[12px] font-bold leading-4 tracking-[0.3px] text-black lg:mx-0">BROWSE WORKOUTS</a>
            </div>
            <Image src={logo}alt="FitLog workout"className="h-[240px] w-[240px] object-cover sm:h-[280px] sm:w-[280px] lg:h-[334px] lg:w-[334px]"/>
        </section>
    )
}