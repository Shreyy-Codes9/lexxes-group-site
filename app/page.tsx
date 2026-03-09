import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Process from "../components/sections/Process";
import Package from "../components/sections/Package";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Process />
      <Package />
    </>
  );
}