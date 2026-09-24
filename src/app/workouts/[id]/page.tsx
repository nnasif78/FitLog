import Image from "next/image"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import { Workout } from "@/types/workout.type"

export default async function WorkoutDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`)
    const workout: Workout = await res.json()

    return (
        <>
            <Navbar />

            <main className="mx-auto max-w-[1232px] py-12">
                <div className="grid grid-cols-2 gap-12">
                    <Image src={workout.image} alt={workout.name} width={588} height={773} className="h-[773px] w-[588px] rounded-lg object-cover" />

                    <div>
                        <h1 className="font-[family-name:var(--font-oswald)] text-[36px] font-bold leading-[44px] text-white">{workout.name}</h1>

                        <p className="mt-4 font-[family-name:var(--font-inter)] text-[16px] font-normal leading-6 text-[#9CA3AF]">{workout.description}</p>

                        <div className="mt-5 flex gap-2">
                            {workout.muscleGroups.slice(0, 2).map((muscle) => (
                                <span key={muscle} className="flex h-5 items-center rounded bg-[#C2F800] px-2 font-[family-name:var(--font-inter)] text-[11px] font-bold leading-4 text-black">{muscle}</span>
                            ))}
                        </div>

                        <div className="mt-6 overflow-hidden rounded-lg bg-[#1E2330]">
                            {[
                                ["EQUIPMENT", workout.equipment],
                                ["DIFFICULTY", workout.difficulty],
                                ["SETS", workout.sets],
                                ["REPS", workout.reps],
                                ["DURATION", `${workout.duration} min`],
                                ["CALORIES", `${workout.caloriesBurned} cal`],
                                ["RATING", workout.rating],
                            ].map(([label, value], index) => (
                                <div key={label} className={`flex h-[49px] items-center justify-between px-5 ${index !== 6 ? "border-b border-[#232834]" : ""}`}>
                                    <span className="font-[family-name:var(--font-inter)] text-[12px] font-bold leading-4 text-[#9CA3AF]">{label}</span>
                                    <span className="font-[family-name:var(--font-inter)] text-[14px] font-medium leading-5 text-[E5E7EB]">{value}</span>
                                </div>
                            ))}
                        </div>
                        <h2 className="mt-8 font-[family-name:var(--font-inter)] text-[16px] font-extrabold leading-5 text-white">INSTRUCTIONS</h2>
                        <ol className="mt-4 space-y-3 font-[family-name:var(--font-inter)] text-[14px] font-normal leading-5 text-white">
                            {workout.instructions.map((instruction, index) => (
                                <li key={index} className="flex gap-3">
                                    <span>{index + 1}.</span>
                                    <span>{instruction}</span>
                                </li>
                            ))}
                        </ol>
                        <div className="flex items-center gap-3 mt-8">
                            <button className="flex h-12 w-[220px] cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-[#CCFF00] font-[family-name:var(--font-inter)] text-[14px] font-semibold text-[#0F1115] transition-opacity hover:opacity-90">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M8 2v4" />
                                    <path d="M16 2v4" />
                                    <rect width="18" height="18" x="3" y="4" rx="2" />
                                    <path d="M3 10h18" />
                                    <path d="M10 16h4" />
                                    <path d="M12 14v4" />
                                </svg>
                                <span>Add to today&apos;s plan</span>
                            </button>
                            <button className="flex h-12 w-[180px] cursor-pointer items-center justify-center gap-2.5 rounded-xl border border-[#2A303C] font-[family-name:var(--font-inter)] text-[14px] font-medium text-white transition-colors hover:bg-white/5">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                                </svg>
                                <span>Save for later</span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
