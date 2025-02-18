import Navbar from "../../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="min-h-screen bg-gray-900">
          <div className="absolute top-0 left-0 w-screen h-screen flex flex-col justify-center items-center">
            <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
              <source src="./src/assets/background_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <img
              className="relative h-100 object-contain"
              src="./src/assets/GameLogo.png"
            />
            <h1 className="relative text-white markazi-text-600 text-5xl">February 28, 2025</h1>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
