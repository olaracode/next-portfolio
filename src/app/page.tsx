import SolarSystem from "@/components/SolarSystem";
import Header from "@/components/Header";
import About from "@/components/About";
import Navbar from "@/components/Navbar/Navbar";
export default function Home() {
  return (
    <main>
      <div id="top" />
      <Navbar />
      <Header />
      <SolarSystem />
      <About />
    </main>
  );
}
