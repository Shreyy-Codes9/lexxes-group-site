import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
// import Services from "../components/sections/Services";
import Package from "../components/sections/Package";
import FeaturedServices from "@/components/sections/FeaturedServices";  
import VideoReveal from "@/components/sections/Videoreveal"; 

export default function Home() {
  return (
    <>
      <Hero />
      <VideoReveal />
      <About />
      <FeaturedServices />
      {/* <Services /> */}
      <Package />
    </>
  );
}