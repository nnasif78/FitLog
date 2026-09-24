"use client"
import { createContext, useContext, useState } from "react"
import { Workout } from "@/types/workout.type"
type FitLogContextType = {
    plan: Workout[]
    saved: Workout[]
    addToPlan: (workout: Workout) => boolean
    saveWorkout: (workout: Workout) => void
    removeFromPlan: (id: number) => void
    removeSaved: (id: number) => void
}
const FitLogContext = createContext<FitLogContextType | null>(null)
export function FitLogProvider({ children }: { children: React.ReactNode }) {
    const [plan, setPlan] = useState<Workout[]>([])
    const [saved, setSaved] = useState<Workout[]>([])
    const addToPlan = (workout: Workout) => {
        if (plan.some(item => item.id === workout.id)) return false
        if (plan.length >= 5) return false
        setPlan([...plan, workout])
        return true
    }
    const saveWorkout = (workout: Workout): boolean => {
    if (saved.some(item => item.id === workout.id)) return false
    setSaved([...saved, workout])
    return true
}
    const removeFromPlan = (id: number) => setPlan(plan.filter(item => item.id !== id))
    const removeSaved = (id: number) => setSaved(saved.filter(item => item.id !== id))
    return <FitLogContext.Provider value={{ plan, saved, addToPlan, saveWorkout, removeFromPlan, removeSaved }}>{children}</FitLogContext.Provider>
}
export function useFitLog() {
    const context = useContext(FitLogContext)
    if (!context) throw new Error("useFitLog must be used inside FitLogProvider")
    return context
}