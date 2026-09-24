import Image from "next/image"
import logo from "@/assets/banner.png"

export default function Banner() {
    return (
        <section className="mx-auto flex h-[448px] w-full max-w-[1232px] items-center justify-between rounded-3xl bg-[#15171D] px-16 mt-15">
            <div>
                <p className="font-[family-name:var(--font-inter)] text-[11px] font-bold leading-[16.5px] tracking-[1.1px] text-[#C2F800]">WORKOUT LIBRARY</p>
                <h1 className="mt-3 font-[family-name:var(--font-oswald)] text-[60px] font-extrabold leading-[1] tracking-[-1.5px] text-white">
                    TRAIN WITH INTENT. LOG
                    <br/>
                    EVERY SET.
                </h1>
                <p className="mt-5 font-[family-name:var(--font-inter)] text-[16px] font-normal leading-6 text-[#9CA3AF]">
                    FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                    <br />
                    into today&apos;s plan, and watch the week&apos;s work add up.
                </p>
                <button className="mt-6 h-10 w-[180px] cursor-pointer bg-[#C2F800] font-[family-name:var(--font-inter)] text-[12px] rounded-md font-bold leading-4 tracking-[0.3px] text-black">BROWSE WORKOUTS</button>
            </div>
            <Image src={logo} alt="FitLog workout" className="h-[334px] w-[334px] object-cover" />
        </section>
    )
}