"use client"
import Link from "next/link"
import { useState } from "react"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import { useFitLog } from "@/context/FitLogContext"
import { toast } from "react-toastify"

export default function MyPlan() {

    const { plan, saved, removeFromPlan, removeSaved } = useFitLog()

    const [activeTab, setActiveTab] = useState<"today" | "saved">("today")
    const [sortBy, setSortBy] = useState("Duration")

    const workouts = [...(activeTab === "today" ? plan : saved)].sort((a, b) =>
        sortBy === "Duration"
            ? a.duration - b.duration
            : sortBy === "Calories"
                ? a.caloriesBurned - b.caloriesBurned
                : b.rating - a.rating
    )
    const minutes = workouts.reduce((total, workout) => total + workout.duration, 0)
    const calories = workouts.reduce((total, workout) => total + workout.caloriesBurned, 0)
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="mx-auto w-full max-w-[1280px] flex-1 px-10 py-12">
                <h1 className="font-[family-name:var(--font-oswald)] text-[30px] font-bold leading-9 text-white">MY PLAN</h1>
                <p className="mt-2 font-[family-name:var(--font-inter)] text-[14px] font-normal leading-5 text-[#8A92A0]">Cap of five lifts for today. Finish them, then load more.</p>
                <div className="mt-8 grid h-[120px] grid-cols-3 rounded-xl border border-[#232732] bg-[#13161D]">
                    <div className="flex flex-col justify-center px-6">
                        <span className="font-[family-name:var(--font-inter)] text-[12px] text-[#8A92A0]">Exercises</span>
                        <span className="font-[family-name:var(--font-oswald)] text-[36px] font-bold text-[#CCFF00]">{plan.length}</span>
                    </div>
                    <div className="relative flex flex-col justify-center px-6 after:absolute after:left-0 after:h-14 after:w-px after:bg-[#232732]">
                        <span className="font-[family-name:var(--font-inter)] text-[12px] text-[#8A92A0]">Minutes</span>
                        <span className="font-[family-name:var(--font-oswald)] text-[36px] font-bold text-white">{minutes}</span>
                    </div>
                    <div className="relative flex flex-col justify-center px-6 after:absolute after:left-0 after:h-14 after:w-px after:bg-[#232732]">
                        <span className="font-[family-name:var(--font-inter)] text-[12px] text-[#8A92A0]">Calories</span>
                        <span className="font-[family-name:var(--font-oswald)] text-[36px] font-bold text-white">{calories}</span>
                    </div>
                </div>
                <div className="cursor-pointer mt-8 flex items-center justify-between">
                    <div className="cursor-pointer  flex rounded-lg bg-[#232732] p-1">
                        <button
                            onClick={() => setActiveTab("today")}
                            className={activeTab === "today" ? "cursor-pointer rounded-md border border-[#2B303D] bg-[#1F242D] px-4 py-2 font-[family-name:var(--font-inter)] text-[12px] font-bold text-white" : "px-4 py-2 font-[family-name:var(--font-inter)] text-[12px] font-normal text-[#8A92A0]"}
                        >
                            Today&apos;s Plan
                        </button>
                        <button
                            onClick={() => setActiveTab("saved")}
                            className={activeTab === "saved" ? "cursor-pointer rounded-md border border-[#2B303D] bg-[#1F242D] px-4 py-2 font-[family-name:var(--font-inter)] text-[12px] font-bold text-white" : "px-4 py-2 font-[family-name:var(--font-inter)] text-[12px] font-normal text-[#8A92A0]"}
                        >
                            Saved
                        </button>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-[family-name:var(--font-inter)] text-[12px] text-[#8A92A0]">Sort by</span>
                        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="w-[80px] rounded-2xl border border-[#232732] bg-[#13161D] px-1 py-2 text-center font-[family-name:var(--font-inter)] text-[12px] text-white outline-none">
                            <option>Duration</option>
                            <option>Calories</option>
                            <option>Rating</option>
                        </select>
                    </div>
                </div>
                <div className="mt-6 space-y-3">
                    {workouts.map((workout) => (
                        <div key={workout.id} className="flex h-[114px] items-center rounded-xl bg-[#13161D] p-4">
                            <img src={workout.image} alt={workout.name} className="h-20 w-36 rounded-xl object-cover" />
                            <div className="ml-4 flex-1">
                                <h3 className="font-[family-name:var(--font-inter)] text-[16px] font-bold text-white">{workout.name}</h3>
                                <p className="mt-1 font-[family-name:var(--font-inter)] text-[12px] font-semibold text-[#8A92A0]">{workout.equipment}</p>
                                <div className="mt-3 flex gap-4 font-[family-name:var(--font-inter)] text-[12px] text-[#8A92A0]">
                                    {/* used Ai for icon */}
                                    <span className="flex items-center gap-1.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#CCFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>{workout.duration} min</span>
                                    <span className="flex items-center gap-1.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="#CCFF00" stroke="#CCFF00" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3z" /></svg>{workout.caloriesBurned} kcal</span>
                                    <span className="flex items-center gap-1.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#CCFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>{workout.rating}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Link href={`/workouts/${workout.id}`} className="rounded-full border border-[#374151] px-4 py-2 font-[family-name:var(--font-inter)] text-[12px] text-white">
                                    View Details
                                </Link>
                                {activeTab === "today" && (
                                    <button onClick={() => { removeFromPlan(workout.id); toast.success("Workout marked as done") }}
                                        className="cursor-pointer rounded-full bg-[#C2F800] px-4 py-2 font-[family-name:var(--font-inter)] text-[12px] font-bold text-[#0F1115]">✓ Mark as Done</button>
                                )}
                                <button
                                    onClick={() => {
                                        if (activeTab === "today") {
                                            removeFromPlan(workout.id)
                                            toast.success("Removed from today's plan")
                                        } else {
                                            removeSaved(workout.id)
                                            toast.success("Removed from saved")
                                        }
                                    }}
                                    className="cursor-pointer px-2 text-xl text-white"
                                >
                                    ×
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    )
}