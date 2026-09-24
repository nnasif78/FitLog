import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/logo.png"

export default function Footer() {
    return (
        <footer className="mt-15 h-auto min-h-[101px] w-full border-t border-[#1A1D24] bg-[#090A0D]">
            <div className="mx-auto flex h-full max-w-[1280px] flex-col items-center justify-center gap-3 px-5 py-6 sm:flex-row sm:justify-between sm:px-8">
                <Link href="/" className="flex cursor-pointer items-center gap-2">
                    <Image src={logo} alt="FitLog" width={24} height={24} className="h-6 w-6" />
                    <span className="font-[family-name:var(--font-oswald)] text-[16px] font-black leading-6 tracking-[0.8px] text-white">FITLOG</span>
                </Link>
                <p className="text-center font-[family-name:var(--font-inter)] text-[12px] font-normal leading-4 text-[#6B7280]">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    )
}

