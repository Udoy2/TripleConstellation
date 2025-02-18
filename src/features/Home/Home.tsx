import Navbar from "../../components/Navbar";
import HeroSection from "./HeroSection";
import TrailerSection from "./TrailerSection";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <video
          className="fixed top-0 left-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="./src/assets/background_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="fixed top-0 left-0 h-full w-full bg-black opacity-50"></div>
        {/* different sections */}
        <HeroSection />
        <TrailerSection />
      </main>
    </>
  );
}

export default Home;
