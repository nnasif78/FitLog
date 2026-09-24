"use client"

import { useFitLog } from "@/context/FitLogContext"
import { toast } from "react-toastify"
import { Workout } from "@/types/workout.type"

export default function WorkoutActions({ workout }: { workout: Workout }) {
    const { plan, saved, addToPlan, saveWorkout } = useFitLog()

    const checkIcon = (
        <span className="toast-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12l4 4L19 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </span>
    )
    const errorIcon = <span className="toast-error-icon">!</span>

    return (
        <div className="flex flex-col gap-3 min-[480px]:flex-row">
            <button
                onClick={() => {
                    if (plan.some(item => item.id === workout.id)) {
                        toast.error("Workout is already in today's plan", { autoClose: 3000, icon: errorIcon })
                        return
                    }
                    if (plan.length >= 5) {
                        toast.error("Today's plan can only have 5 workouts", { autoClose: 3000, icon: errorIcon })
                        return
                    }
                    addToPlan(workout)
                    toast.success("Added to today's plan", { autoClose: 3000, icon: checkIcon })
                }}
                className="flex h-12 w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-[#CCFF00] font-[family-name:var(--font-inter)] text-[14px] font-semibold text-[#0F1115] transition-opacity hover:opacity-90 min-[480px]:w-[220px]"
            >
                <svg width="18" height="18" viewBox="0 0 24 24">
                    <path d="M8 2v4M16 2v4M3 10h18M10 16h4M12 14v4M5 4h14a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2h12Z" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
                <span>Add to today&apos;s plan</span>
            </button>

            <button
                onClick={() => {
                    if (saved.some(item => item.id === workout.id)) {
                        toast.error("Workout is already saved", { autoClose: 3000, icon: errorIcon })
                        return
                    }
                    saveWorkout(workout)
                    toast.success("Saved for later", { autoClose: 3000, icon: checkIcon })
                }}
                className="flex h-12 w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl border border-[#2A303C] font-[family-name:var(--font-inter)] text-[14px] font-medium text-white transition-colors hover:bg-white/5 min-[480px]:w-[180px]"
            >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 21l-6-3.5L6 21V6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v15z" /></svg>
                <span>Save for later</span>
            </button>
        </div>
    )
}