import Image from "next/image"
import { Workout } from "@/types/workout.type"

export default function WorkoutCard({ workout }: { workout: Workout }) {
    return (
        <div className="cursor-pointer h-[368px] w-[394px] overflow-hidden rounded-3xl bg-[#222630]">
            <Image src={workout.image} alt={workout.name} width={392} height={192} className="h-[192px] w-full object-cover" />

            <div className="px-5 py-4">
                <div className="flex gap-2">
                    {workout.muscleGroups.slice(0, 2).map((muscle) => (
                        <span key={muscle} className="flex h-5 items-center rounded-md bg-[#C2F800] px-2 font-[family-name:var(--font-inter)] text-[11px] font-bold leading-[16px] text-black">
                            {muscle}
                        </span>
                    ))}
                </div>

                <h3 className="mt-3 font-[family-name:var(--font-oswald)] text-[18px] font-bold leading-7 tracking-[0.45px] text-white">
                    {workout.name}
                </h3>

                <p className="mt-1 font-[family-name:var(--font-inter)] text-[12px] font-normal leading-4 text-[#9CA3AF]">
                    {workout.equipment}
                </p>

                <div className="my-4 border-t border-[#383C45]" />

                <div className="flex items-center gap-5 font-[family-name:var(--font-inter)] text-[12px] font-normal leading-4 text-[#9CA3AF]">
                    <span>◷ {workout.duration} min</span>
                    <span>♨ {workout.caloriesBurned} cal</span>
                    <span>★ {workout.rating}</span>
                </div>
            </div>
        </div>
    )
}