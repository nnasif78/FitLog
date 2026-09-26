"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import logo from "@/assets/logo.png"
import { useFitLog } from "@/context/FitLogContext"

export default function Navbar() {
    const { plan, saved } = useFitLog()
    const pathname = usePathname()
    return (
        <nav className="sticky top-0 z-50 h-[112px] w-full border-b border-[#1C1F26] bg-black/90 backdrop-blur-xl sm:h-[80px]">
            <div className="relative mx-auto flex h-full max-w-[1280px] items-start px-4 pt-5 sm:items-center sm:px-8 sm:pt-0">
                <Link href="/" className="flex items-center gap-2">
                    <Image src={logo} alt="FitLog" width={28} height={28} className="h-7 w-7" />
                    <span className="font-[family-name:var(--font-oswald)] text-[18px] font-black leading-7 tracking-[0.9px] text-white">FITLOG</span>
                </Link>
                <div className="absolute left-0 top-[72px] flex w-full items-center justify-center gap-1 border-t border-[#1C1F26] py-2 sm:left-1/2 sm:top-auto sm:w-auto sm:-translate-x-1/2 sm:border-0 sm:py-0">
                    <Link href="/" className={`rounded-xl px-3 py-1 text-[12px] font-medium leading-5 ${pathname === "/" || pathname.startsWith("/workouts/") ? "bg-[#1A2312] text-[#C2F800]" : "text-white"}`}>Workouts</Link>
                    <Link href="/my-plan" className={`rounded-xl px-3 py-1 text-[12px] font-medium leading-5 ${pathname === "/my-plan" ? "bg-[#1A2312] text-[#C2F800]" : "text-white"}`}>My Plan</Link>
                </div>
                <div className="ml-auto flex items-center">
                    <Link href="/my-plan" className="flex cursor-pointer items-center gap-2">
                        <span className="text-[12px] font-medium leading-4 text-[#D1D5DB]">Plan</span>
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C2F800] text-[11px] font-bold leading-4 text-black">{plan.length}</span>
                    </Link>
                    <Link href="/my-plan?tab=saved" className="ml-5 flex cursor-pointer items-center gap-2">
                        <span className="text-[12px] font-medium leading-4 text-[#9CA3AF]">Saved</span>
                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#2D313B] text-[11px] font-medium leading-4 text-[#D1D5DB]">{saved.length}</span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}