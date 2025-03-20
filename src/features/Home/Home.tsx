import Title from "../../components/Title";
import BackgroundSection from "./BackgroundSection";
import GameplaySection from "./WorldSection";
import HeroSection from "./HeroSection";
import StorySection from "./StorySection";
import TrailerSection from "./TrailerSection";

function Home() {
  return (
    <>
      
      <main>
        {/* different sections */}
        <BackgroundSection />
        <HeroSection />
        <TrailerSection />
        <Title title="Story" />
        <StorySection />
        <Title title="World" />
        <GameplaySection />
      </main>
    </>
  );
}

export default Home;
