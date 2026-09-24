import { Workout } from "@/types/workout.type"
import WorkoutCard from "@/components/homepage/WorkoutCard"
export default async function WorkoutLibrary() {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog")
    const workouts: Workout[] = await res.json()
    return (
        <section id="library" className="mx-auto mt-15 w-full max-w-[1232px] px-4 sm:px-8 lg:px-0">
            <div className="text-center min-[1280px]:text-left">
                <h2 className="font-[family-name:var(--font-oswald)] text-[30px] font-bold tracking-[-.75px] text-white">
                    THE LIBRARY
                </h2>
                <p className="font-[family-name:var(--font-inter)] text-[14px] text-[#9CA3AF]">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            <div className="mt-8 grid w-full grid-cols-1 justify-items-center gap-6 min-[860px]:grid-cols-2 min-[1280px]:grid-cols-3">
                {workouts.map((workout) => (
                    <div key={workout.id} className="cursor-pointer h-[368px] w-full overflow-hidden rounded-3xl bg-[#222630]">
                        <WorkoutCard workout={workout} />
                    </div>
                ))}
            </div>
        </section>
    )
}