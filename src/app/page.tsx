import Navbar from "@/components/shared/Navbar"
import Banner from "@/components/homepage/Banner"
import WorkoutLibrary from "@/components/homepage/WorkoutLibrary"
import Footer from "@/components/shared/Footer"
export default function Home() {
  return (
    <>
    <div className="flex min-h-screen w-full flex-col items-center overflow-x-hidden">
    <Navbar/>
    <Banner />
    <WorkoutLibrary />
    <Footer />
    </div>
    </>
  );
}
