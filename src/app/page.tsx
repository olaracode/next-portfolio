import SolarSystem from "@/components/SolarSystem";
import Navbar from "@/components/Navbar/Navbar";
import AsteroidBelt from "@/components/SolarSystem/AsteroidBelt";
import { About, Contact, Experiences, Header } from "@/components/landing";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <SolarSystem />
      <About />
      <AsteroidBelt />
      <Experiences />
      <Contact />
    </main>
  );
}
