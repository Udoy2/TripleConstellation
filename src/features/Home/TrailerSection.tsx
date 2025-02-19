import { backgroundVideo, SteamLogo } from "../../assets/Assets";
import LinkButtons from "../../components/LinkButtons";

function TrailerSection() {
  return (
    <>
      <section className="relative z-10  w-screen text-center">
        <div className="relative z-10 mx-auto aspect-video max-w-[90%] border-6 border-double border-orange-50 bg-[#565656] drop-shadow-[0_0_30px_rgba(255,237,212,0.8)] filter sm:max-w-[70%] md:max-w-[50%]">
          <video className="h-full w-full object-cover" autoPlay loop muted>
            <source src={backgroundVideo} type="video/mp4" />
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
            iconLink={SteamLogo}
          />
        </div>
      </section>
    </>
  );
}

export default TrailerSection;
