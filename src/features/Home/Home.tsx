import Navbar from "../../components/Navbar";
import BackgroundSection from "./BackgroundSection";
import HeroSection from "./HeroSection";
import TrailerSection from "./TrailerSection";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* different sections */}
        <BackgroundSection />
        <HeroSection />
        <TrailerSection />
      </main>
    </>
  );
}

export default Home;
