"use client"
import Image from "next/image"
import Link from "next/link"
import {usePathname} from "next/navigation"
import logo from "@/assets/logo.png"
export default function Navbar() {
    const pathname = usePathname()
    return (
        <nav className="h-[80px] w-full border-b border-[#1C1F26]">
            <div className="mx-auto flex h-full max-w-[1280px] items-center px-8">
                <Link href="/" className="flex cursor-pointer items-center gap-2">
                    <Image src={logo} alt="FitLog" width={28} height={28} className="h-7 w-7" />
                    <span className="font-[family-name:var(--font-oswald)] text-[18px] font-black leading-7 tracking-[0.9px] text-white">FITLOG</span>
                </Link>
                <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1">
                    <Link href="/" className={`cursor-pointer rounded-xl px-3 py-1 text-[12px] font-medium leading-5 ${pathname === "/" ? "bg-[#1A2312] text-[#C2F800]" : "text-white"}`}>Workouts</Link>
                    <Link href="/my-plan" className={`cursor-pointer rounded-xl px-3 py-1 text-[12px] font-medium leading-5 ${pathname === "/my-plan" ? "bg-[#1A2312] text-[#C2F800]" : "text-white"}`}>My Plan</Link>
                </div>
                <div className="ml-auto flex items-center">
                    <Link href="/my-plan" className="flex cursor-pointer items-center gap-2">
                        <span className="text-[12px] font-medium leading-4 text-[#D1D5DB]">Plan</span>
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C2F800] text-[11px] font-bold leading-4 text-black">0</span>
                    </Link>
                    <Link href="/my-plan" className="ml-5 flex cursor-pointer items-center gap-2">
                        <span className="text-[12px] font-medium leading-4 text-[#9CA3AF]">Saved</span>
                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#2D313B] text-[11px] font-medium leading-4 text-[#D1D5DB]">0</span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}