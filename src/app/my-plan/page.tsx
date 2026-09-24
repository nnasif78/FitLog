import Footer from "@/components/shared/Footer"
import Navbar from "@/components/shared/Navbar"
export default function MyPlan() {
    return (
        <main>
            <Navbar />
            <main className="mx-auto min-h-[680px] max-w-[1280px] px-10 py-12">
                <h1 className="font-[family-name:var(--font-oswald)] text-[30px] font-bold leading-9 text-white">MY PLAN</h1>

                <p className="mt-2 font-[family-name:var(--font-inter)] text-[14px] font-normal leading-5 text-[#8A92A0]">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
                <div className="mt-8 grid h-[120px] grid-cols-3 rounded-xl border border-[#232732] bg-[#13161D]">
                    <div className="flex flex-col justify-center px-6">
                        <span className="font-[family-name:var(--font-inter)] text-[12px] font-normal text-[#8A92A0]">Exercises</span>
                        <span className="font-[family-name:var(--font-oswald)] text-[36px] font-bold text-[#CCFF00]">0</span>
                    </div>

                    <div className="relative flex flex-col justify-center px-6 after:absolute after:left-0 after:h-14 after:w-px after:bg-[#232732]">
                        <span className="font-[family-name:var(--font-inter)] text-[12px] font-normal text-[#8A92A0]">Minutes</span>
                        <span className="font-[family-name:var(--font-oswald)] text-[36px] font-bold text-white">0</span>
                    </div>

                    <div className="flex flex-col justify-center border-l border-[#8A92A0] px-6">
                        <span className="font-[family-name:var(--font-inter)] text-[12px] font-normal text-[#8A92A0]">Calories</span>
                        <span className="font-[family-name:var(--font-oswald)] text-[36px] font-bold text-white">0</span>
                    </div>
                </div>

                <div className="mt-8 flex items-center justify-between">
                    <div className="flex rounded-lg bg-[#232732] p-1">
                        <button className="rounded-md border border-[#2B303D] bg-[#1F242D] px-4 py-2 font-[family-name:var(--font-inter)] text-[12px] font-bold text-white">Today&apos;s Plan</button>
                        <button className="px-4 py-2 font-[family-name:var(--font-inter)] text-[12px] font-normal text-[#8A92A0]">Saved</button>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-[family-name:var(--font-inter)] text-[12px] font-normal text-[#8A92A0] ">Sort by</span>
                        <select className="rounded-2xl w-[80] border border-[#232732] bg-[#13161D] px-1 py-2 font-[family-name:var(--font-inter)] text-center text-[12px] font-normal text-white outline-none">
                            <option>Duration</option>
                            <option>Calories</option>
                            <option>Rating</option>
                        </select>
                    </div>
                </div>
            </main>
            <Footer />
        </main>
    )
}