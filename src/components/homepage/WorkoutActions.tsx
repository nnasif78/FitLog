"use client"
import { useFitLog } from "@/context/FitLogContext"
import { toast } from "react-toastify"
import { Workout } from "@/types/workout.type"
export default function WorkoutActions({ workout }: { workout: Workout }) {
    const { addToPlan, saveWorkout } = useFitLog()
    return (
        <div className="flex gap-3">
            <button onClick={() => { addToPlan(workout); toast.success("Added to today's plan") }} className="flex h-12 w-[220px] cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-[#CCFF00] font-[family-name:var(--font-inter)] text-[14px] font-semibold text-[#0F1115] transition-opacity hover:opacity-90"><svg width="18" height="18" viewBox="0 0 24 24"><path d="M8 2v4M16 2v4M3 10h18M10 16h4M12 14v4M5 4h14a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2h12Z" fill="none" stroke="currentColor" strokeWidth="2" /></svg><span>Add to today&apos;s plan</span></button>
            <button onClick={() => { saveWorkout(workout); toast.success("Saved for later") }} className="flex h-12 w-[180px] cursor-pointer items-center justify-center gap-2.5 rounded-xl border border-[#2A303C] font-[family-name:var(--font-inter)] text-[14px] font-medium text-white transition-colors hover:bg-white/5"><svg width="18" height="18" viewBox="0 0 24 24"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16Z" fill="none" stroke="currentColor" strokeWidth="2" /></svg><span>Save for later</span></button>
        </div>
    )
}