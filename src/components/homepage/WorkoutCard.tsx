import Image from "next/image"
import { Workout } from "@/types/workout.type"
import Link from "next/link"

export default function WorkoutCard({ workout }: { workout: Workout }) {
    return (
        <Link href={`/workouts/${workout.id}`} className="block">
            <div className="cursor-pointer h-[368px] w-[394px] overflow-hidden rounded-3xl bg-[#222630]">
                <Image src={workout.image} alt={workout.name} width={392} height={192} className="h-[192px] w-full object-cover" />
                <div className="px-5 py-4">
                    <div className="flex gap-2">
                        {workout.muscleGroups.slice(0, 2).map((muscle) => (
                            <span key={muscle} className="flex h-5 items-center rounded-md bg-[#C2F800] px-2 font-[family-name:var(--font-inter)] text-[11px] font-bold leading-[16px] text-black">{muscle}</span>
                        ))}
                    </div>
                    <h3 className="mt-3 font-[family-name:var(--font-oswald)] text-[18px] font-bold leading-7 tracking-[0.45px] text-white">{workout.name}</h3>
                    <p className="mt-1 font-[family-name:var(--font-inter)] text-[12px] font-normal leading-4 text-[#9CA3AF]">{workout.equipment}</p>
                    <div className="my-4 border-t border-[#383C45]" />
                    <div className="flex items-center gap-5 font-[family-name:var(--font-inter)] text-[14px] text-[#9CA3AF]">
                        {/* used Ai for icon */}
                        <span className="flex items-center gap-1.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>{workout.duration} min</span>
                        <span className="flex items-center gap-1.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3z" /></svg>{workout.caloriesBurned} kcal</span>
                        <span className="flex items-center gap-1.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" /></svg>{workout.rating}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}