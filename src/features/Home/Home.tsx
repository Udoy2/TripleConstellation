import Navbar from "../../components/Navbar";

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
        <section className="relative z-10 flex min-h-screen items-center justify-center">
          <div className="text-center">
            <img
              className="relative mb-4 h-100 object-contain"
              src="./src/assets/GameLogo.png"
            />
            <h1 className="markazi-text-600 relative text-5xl text-white">
              February 28, 2025
            </h1>
          </div>

          {/* latest trailer */}
        </section>
        <section className="relative z-10 min-h-screen w-screen">
            <div className="relative z-10 mx-auto aspect-video max-w-[70%] bg-[#565656] border-6 border-orange-50 filter drop-shadow-[0_0_20px_rgba(255,237,212,0.8)]">
            <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
            >
              <source
                src="./src/assets/background_video.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
