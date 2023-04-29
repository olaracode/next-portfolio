import SolarSystem from "@/components/SolarSystem";
import Header from "@/components/landing/Header";
import Article from "@/components/Article";
import Navbar from "@/components/Navbar/Navbar";
import GoTop from "@/components/GoTop";
import TechStack from "@/components/TechStack";
import { about, stack } from "@/lib/About";
import Experiences from "@/components/landing/Experiences";
import AsteroidBelt from "@/components/SolarSystem/AsteroidBelt";
import Contact from "@/components/landing/Contact";
export default function Home() {
  return (
    <main>
      <div id="top" />
      <Navbar />
      <Header />
      <SolarSystem />
      <Article
        content={about}
        Stack={<TechStack title="Stack" stack={stack} />}
      />
      <AsteroidBelt />
      <Experiences />
      <Contact />
      <GoTop />
    </main>
  );
}
