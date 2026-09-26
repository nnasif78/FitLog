import Image from "next/image"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import WorkoutActions from "@/components/homepage/WorkoutActions"
import { Workout } from "@/types/workout.type"
import { notFound } from "next/navigation"
import { fetchJson } from "@/lib/api"

export default async function WorkoutDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    let workout: Workout
    try {
        workout = await fetchJson<Workout>([
            `https://api.abcz.workers.dev/api/fitlog/${id}`,
            `https://api.api-store.workers.dev/api/fitlog/${id}`,
        ])
    } catch {
        notFound()
    }

    if (!workout || typeof workout.name !== "string") notFound()

    return (
        <>
            <Navbar />
            <main className="mx-auto w-full max-w-[1232px] px-5 py-8 sm:px-8 sm:py-12 lg:px-0">
                <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
                    <Image src={workout.image} alt={workout.name} width={588} height={773} className="h-auto max-h-[773px] w-full rounded-lg object-cover lg:h-[773px] lg:w-[588px]" />
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
                                    <span className="font-[family-name:var(--font-inter)] text-[14px] font-medium leading-5 text-[#E5E7EB]">{value}</span>
                                </div>
                            ))}
                        </div>

                        <h2 className="mt-8 font-[family-name:var(--font-inter)] text-[16px] font-extrabold leading-5 text-white">INSTRUCTIONS</h2>
                        <ol className="mt-4 space-y-3 font-[family-name:var(--font-inter)] text-[14px] font-normal leading-5 text-white">
                            {workout.instructions.map((instruction, index) => (
                                <li key={index} className="flex gap-3"><span>{index + 1}.</span><span>{instruction}</span></li>
                            ))}
                        </ol>

                        <div className="mt-8"><WorkoutActions workout={workout} /></div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}