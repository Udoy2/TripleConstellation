import Title from "../../components/Title";
import BackgroundSection from "./BackgroundSection";
import WorldSection from "./WorldSection";
import HeroSection from "./HeroSection";
import StorySection from "./StorySection";
import TrailerSection from "./TrailerSection";
import GameplaySection from "./GameplaySection";

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
        <WorldSection />
        <Title title="Gameplay" />
        <GameplaySection />
      </main>
    </>
  );
}

export default Home;
