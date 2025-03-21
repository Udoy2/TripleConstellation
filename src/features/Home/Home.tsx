import Title from "../../components/Title";
import BackgroundSection from "./BackgroundSection";
import WorldSection from "./WorldSection";
import HeroSection from "./HeroSection";
import StorySection from "./StorySection";
import TrailerSection from "./TrailerSection";
import GameplaySection from "./GameplaySection";
import PlayerSection from "./PlayerSection";
import FeaturesSection from "./FeaturesSection";

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
        <Title title="Characters" />
        <PlayerSection />
        <Title title="Features" />
        <FeaturesSection />
      </main>
    </>
  );
}

export default Home;
