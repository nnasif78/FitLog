import Navbar from "@/components/shared/Navbar"
import Banner from "@/components/homepage/Banner"
import WorkoutLibrary from "@/components/homepage/WorkoutLibrary"
import Footer from "@/components/shared/Footer"
export default function Home() {
  return (
    <>
    <Navbar/>
    <Banner />
    <WorkoutLibrary />
    <Footer />
    </>
  );
}
