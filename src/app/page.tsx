import SolarSystem from "@/components/SolarSystem";
import Header from "@/components/Header";
import Article from "@/components/Article";
import Navbar from "@/components/Navbar/Navbar";
import GoTop from "@/components/GoTop";
import { about } from "@/lib/About";
export default function Home() {
  return (
    <main>
      <div id="top" />
      <Navbar />
      <Header />
      <SolarSystem />
      <Article content={about} />
      <GoTop />
    </main>
  );
}
