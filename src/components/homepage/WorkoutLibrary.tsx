import { Workout } from "@/types/workout.type"
import WorkoutCard from "@/components/homepage/WorkoutCard"
export default async function WorkoutLibrary() {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog")
    const workouts: Workout[] = await res.json()

    return (
        <section id="library" className="mx-auto w-full max-w-[1232px] mt-15">
            <h2 className="font-[family-name:var(--font-oswald)] text-[30px] font-bold text-white tracking-[-.75px]">
                THE LIBRARY
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-[14px] text-[#9CA3AF]">
                Twelve lifts covering every major muscle group.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
                {workouts.map((workout) => (
                    <WorkoutCard key={workout.id} workout={workout} />
                ))}
            </div>
        </section>
    )
}