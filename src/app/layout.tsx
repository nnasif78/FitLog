import type { Metadata } from "next"
import { Inter, Oswald } from "next/font/google"
import "./globals.css"
import "react-toastify/dist/ReactToastify.css"
import { FitLogProvider } from "@/context/FitLogContext"

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
})
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})
export const metadata: Metadata = {
  title: "FitLog",
  description: "Track your workouts",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} min-h-screen bg-[#0C0D10] text-white`}>
        <FitLogProvider>{children}</FitLogProvider>
      </body>
    </html>
  );
}
