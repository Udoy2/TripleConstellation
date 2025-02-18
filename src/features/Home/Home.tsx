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
        <section className="relative text-center z-10 min-h-screen w-screen">
            <div className="relative z-10 mx-auto aspect-video md:max-w-[80%] sm:max-w-[70%] max-w-[90%] bg-[#565656] border-6 border-double border-orange-50 filter drop-shadow-[0_0_30px_rgba(255,237,212,0.8)]">
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
            <img className="absolute w-40 -top-15 -left-15" src="./src/assets/trailerBorder.png"/>
            <img className="absolute w-40 -top-15 -right-15 scale-x-[-1]" src="./src/assets/trailerBorder.png"/>
            <img className="absolute w-40 -bottom-15 -left-15 scale-y-[-1]" src="./src/assets/trailerBorder.png"/>
            <img className="absolute w-40 -bottom-15 -right-15 scale-y-[-1] scale-x-[-1]" src="./src/assets/trailerBorder.png"/>
          </div>
          <div className="mt-10 text-gray-100">
          <a className="inline-flex bg-[#604410] px-5 py-3" href="https://www.facebook.com/requiemforthedawn" target="_blank" rel="noopener noreferrer">
            Available On <img className="inline w-16 ml-2 object-contain" src="./src/assets/SteamLogo.png"/>
          </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
