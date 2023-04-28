import SolarSystem from "@/components/SolarSystem";
import Header from "@/components/Header";
import Article from "@/components/Article";
import Navbar from "@/components/Navbar/Navbar";
import GoTop from "@/components/GoTop";
import TechStack from "@/components/TechStack";
import { about, stack } from "@/lib/About";
import Experiences from "@/components/Experiences";
import AsteroidBelt from "@/components/SolarSystem/AsteroidBelt";
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
      <GoTop />
    </main>
  );
}
