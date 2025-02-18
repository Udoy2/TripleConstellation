import LinkButtons from "../../components/LinkButtons";
import Navbar from "../../components/Navbar";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
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
            <h1 className="markazi-text-600 relative text-4xl text-white md:text-5xl">
              February 28, 2025
            </h1>
          </div>

          {/* social icons */}
          <div className="social_icons absolute top-[50%] left-10 hidden -translate-y-[50%] *:my-3 *:cursor-pointer *:text-3xl *:text-white md:block">
            <a href="https://www.facebook.com/requiemforthedawn" className="block" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.facebook.com/requiemforthedawn" className="block" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>

            <a href="https://www.facebook.com/requiemforthedawn" className="block" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://www.facebook.com/requiemforthedawn" className="block" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/requiemforthedawn" className="block" target="_blank" rel="noopener noreferrer">
              <MdEmail />
            </a>
          </div>
        </section>
        <section className="relative z-10 min-h-screen w-screen text-center">
          <div className="relative z-10 mx-auto aspect-video max-w-[90%] border-6 border-double border-orange-50 bg-[#565656] drop-shadow-[0_0_30px_rgba(255,237,212,0.8)] filter sm:max-w-[70%] md:max-w-[50%]">
            <video className="h-full w-full object-cover" autoPlay loop muted>
              <source
                src="./src/assets/background_video.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div className="lg:*:40 *:w-20 md:*:w-30">
              <img
                className="absolute -top-6 -left-6 md:-top-10 md:-left-10 lg:-top-15 lg:-left-15"
                src="./src/assets/trailerBorder.png"
              />
              <img
                className="absolute -top-6 -right-6 scale-x-[-1] md:-top-10 md:-right-10 lg:-top-15 lg:-right-15"
                src="./src/assets/trailerBorder.png"
              />
              <img
                className="absolute -bottom-6 -left-6 scale-y-[-1] md:-bottom-10 md:-left-10 lg:-bottom-15 lg:-left-15"
                src="./src/assets/trailerBorder.png"
              />
              <img
                className="absolute -right-6 -bottom-6 scale-x-[-1] scale-y-[-1] md:-right-10 md:-bottom-10 lg:-right-15 lg:-bottom-15"
                src="./src/assets/trailerBorder.png"
              />
            </div>
          </div>
          <div className="mt-10 text-gray-100">
            <LinkButtons
              text={"Available On"}
              link={"https://www.facebook.com/requiemforthedawn"}
              iconLink={"./src/assets/SteamLogo.png"}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
