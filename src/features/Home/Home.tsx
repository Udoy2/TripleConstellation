import Navbar from "../../components/Navbar";
import BackgroundSection from "./BackgroundSection";
import HeroSection from "./HeroSection";
import StorySection from "./StorySection";
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
        <StorySection />
      </main>
    </>
  );
}

export default Home;
