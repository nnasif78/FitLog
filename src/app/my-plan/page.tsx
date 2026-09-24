"use client"
import Link from "next/link"
import { useState } from "react"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import { useFitLog } from "@/context/FitLogContext"
import { toast } from "react-toastify"
import { useRouter, useSearchParams } from "next/navigation"

export default function MyPlan() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const activeTab = searchParams.get("tab") === "saved" ? "saved" : "today"
    const { plan, saved, removeFromPlan, removeSaved } = useFitLog()
    const [sortBy, setSortBy] = useState("Duration")

    const workouts = [...(activeTab === "today" ? plan : saved)].sort((a, b) =>
        sortBy === "Duration" ? a.duration - b.duration : sortBy === "Calories" ? a.caloriesBurned - b.caloriesBurned : b.rating - a.rating
    )
    const minutes = workouts.reduce((total, workout) => total + workout.duration, 0)
    const calories = workouts.reduce((total, workout) => total + workout.caloriesBurned, 0)

    const checkIcon = (
        <span className="toast-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12l4 4L19 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
    )
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="mx-auto w-full max-w-[1280px] flex-1 px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                <h1 className="cursor-pointer font-[family-name:var(--font-oswald)] text-[30px] font-bold leading-9 text-white">MY PLAN</h1>
                <p className="mt-2 font-[family-name:var(--font-inter)] text-[14px] font-normal leading-5 text-[#8A92A0]">Cap of five lifts for today. Finish them, then load more.</p>

                <div className="mt-8 grid h-[100px] w-full grid-cols-3 rounded-xl border border-[#232732] bg-[#13161D] sm:h-[120px]">
                    <div className="flex flex-col justify-center px-3 sm:px-6">
                        <span className="font-[family-name:var(--font-inter)] text-[10px] text-[#8A92A0] sm:text-[12px]">Exercises</span>
                        <span className="font-[family-name:var(--font-oswald)] text-[28px] font-bold text-[#CCFF00] sm:text-[36px]">{workouts.length}</span>
                    </div>
                    <div className="relative flex flex-col justify-center px-3 sm:px-6 after:absolute after:left-0 after:h-12 after:w-px after:bg-[#232732] sm:after:h-14">
                        <span className="font-[family-name:var(--font-inter)] text-[10px] text-[#8A92A0] sm:text-[12px]">Minutes</span>
                        <span className="font-[family-name:var(--font-oswald)] text-[28px] font-bold text-white sm:text-[36px]">{minutes}</span>
                    </div>
                    <div className="relative flex flex-col justify-center px-3 sm:px-6 after:absolute after:left-0 after:h-12 after:w-px after:bg-[#232732] sm:after:h-14">
                        <span className="font-[family-name:var(--font-inter)] text-[10px] text-[#8A92A0] sm:text-[12px]">Calories</span>
                        <span className="font-[family-name:var(--font-oswald)] text-[28px] font-bold text-white sm:text-[36px]">{calories}</span>
                    </div>
                </div>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex w-fit cursor-pointer rounded-lg bg-[#232732] p-1">
                        <button onClick={() => router.push("/my-plan")} className={activeTab === "today" ? "cursor-pointer rounded-md border border-[#2B303D] bg-[#1F242D] px-4 py-2 font-[family-name:var(--font-inter)] text-[12px] font-bold text-white" : "px-4 py-2 font-[family-name:var(--font-inter)] text-[12px] font-normal text-[#8A92A0]"}>Today&apos;s Plan</button>
                        <button onClick={() => router.push("/my-plan?tab=saved")} className={activeTab === "saved" ? "cursor-pointer rounded-md border border-[#2B303D] bg-[#1F242D] px-4 py-2 font-[family-name:var(--font-inter)] text-[12px] font-bold text-white" : "cursor-pointer px-4 py-2 font-[family-name:var(--font-inter)] text-[12px] font-normal text-[#8A92A0]"}>Saved</button>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-[family-name:var(--font-inter)] text-[12px] text-[#8A92A0]">Sort by</span>
                        <div className="relative">
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="w-[100px] appearance-none rounded-2xl border border-[#232732] bg-[#13161D] px-2 py-2 pr-4 text-center font-[family-name:var(--font-inter)] text-[12px] text-white outline-none">
                                <option>Duration</option><option>Calories</option><option>Rating</option>
                            </select>
                            <svg className="pointer-events-none absolute right-2 top-1/2 h-3 w-3 -translate-y-1/2" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                        </div>
                    </div>
                </div>
                {workouts.length === 0 ? (
                    <div className="mt-6 flex h-[300px] w-full flex-col items-center justify-center rounded-xl border border-dashed border-[#2D3139] bg-[#111317] text-center">
                        <h2 className="font-[family-name:var(--font-oswald)] text-[20px] font-bold text-white">NOTHING HERE YET</h2>
                        <p className="mt-2 font-[family-name:var(--font-inter)] text-[12px] font-normal text-[#8A92A0]">Browse the library and add a lift to get today moving.</p>
                        <Link href="/#library" className="mt-5 rounded-full bg-[#CCFF00] px-5 py-2 font-[family-name:var(--font-inter)] text-[12px] font-semibold text-black">Go to workouts</Link>
                    </div>
                ) : (
                    <div className="mt-6 space-y-3">
                        {workouts.map((workout) => (
                            <div key={workout.id} className="flex min-h-[114px] flex-col gap-4 rounded-xl bg-[#13161D] p-4 min-[768px]:h-[114px] min-[768px]:flex-row min-[768px]:items-center min-[768px]:gap-0">
                                <img src={workout.image} alt={workout.name} className="h-40 w-full rounded-xl object-cover min-[768px]:h-20 min-[768px]:w-36" />
                                <div className="ml-0 min-w-0 flex-1 min-[768px]:ml-4">
                                    <h3 className="truncate font-[family-name:var(--font-inter)] text-[16px] font-bold text-white">{workout.name}</h3>
                                    <p className="mt-1 truncate font-[family-name:var(--font-inter)] text-[12px] font-semibold text-[#8A92A0]">{workout.equipment}</p>
                                    <div className="mt-3 flex flex-wrap gap-3 font-[family-name:var(--font-inter)] text-[12px] text-[#8A92A0] sm:gap-4">
                                        <span className="flex items-center gap-1.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#CCFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>{workout.duration} min</span>
                                        <span className="flex items-center gap-1.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="#CCFF00" stroke="#CCFF00" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3z" /></svg>{workout.caloriesBurned} kcal</span>
                                        <span className="flex items-center gap-1.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#CCFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>{workout.rating}</span>
                                    </div>
                                </div>

                                <div className="flex w-full flex-wrap items-center gap-1.5 min-[768px]:w-auto min-[768px]:flex-nowrap min-[768px]:gap-2">
                                    <Link href={`/workouts/${workout.id}`} className="shrink-0 rounded-full border border-[#374151] px-3 py-1.5 font-[family-name:var(--font-inter)] text-[11px] text-white sm:px-4 sm:py-2 sm:text-[12px]">View Details</Link>

                                    {activeTab === "today" && (
                                        <button onClick={() => { removeFromPlan(workout.id); toast.success("Workout marked as done", { autoClose: 3000, icon: checkIcon }) }} className="shrink-0 cursor-pointer rounded-full bg-[#C2F800] px-3 py-1.5 font-[family-name:var(--font-inter)] text-[11px] font-bold text-[#0F1115] sm:px-4 sm:py-2 sm:text-[12px]">Mark as Done</button>
                                    )}
                                    <button
                                        onClick={() => {
                                            if (activeTab === "today") {
                                                removeFromPlan(workout.id)
                                                toast.success("Removed from today's plan", { autoClose: 3000, icon: checkIcon })
                                            } else {
                                                removeSaved(workout.id)
                                                toast.success("Removed from saved", { autoClose: 3000, icon: checkIcon })
                                            }
                                        }}
                                        className="cursor-pointer px-1.5 text-lg text-white sm:px-2 sm:text-xl"
                                    >×</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
            <Footer />
        </div>
    )
}