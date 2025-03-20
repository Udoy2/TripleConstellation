import { useEffect, useRef } from "react";
import { SteamLogo, trailerBorder } from "../../assets/Assets";
import LinkButtons from "../../components/LinkButtons";
import Beep from './beep.mp3';
function TrailerSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (audioRef.current) {
            if (entry.isIntersecting) {
              // Play the sound when the section is visible
              audioRef.current.play();
            } else {
              // Pause the sound when the section is not visible
              audioRef.current.pause();
              audioRef.current.currentTime = 0; // Reset the audio
            }
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <>
      <audio ref={audioRef} src={Beep} preload="auto"></audio>
      <section
        ref={sectionRef}
        className="relative z-10 w-screen text-center"
      >
        <div className="relative z-10 mx-auto aspect-video max-w-[90%] border-6 border-double border-orange-50 bg-[#565656] drop-shadow-[0_0_30px_rgba(255,237,212,0.8)] filter sm:max-w-[70%] md:max-w-[50%]">
          <iframe
            className="h-full w-full object-cover"
            src="https://player.vimeo.com/video/1067647649?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;background=1&amp;loop=1"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <div className="lg:*:40 *:w-20 md:*:w-30">
            <img
              className="absolute -top-6 -left-6 md:-top-10 md:-left-10 lg:-top-15 lg:-left-15"
              src={trailerBorder}
            />
            <img
              className="absolute -top-6 -right-6 scale-x-[-1] md:-top-10 md:-right-10 lg:-top-15 lg:-right-15"
              src={trailerBorder}
            />
            <img
              className="absolute -bottom-6 -left-6 scale-y-[-1] md:-bottom-10 md:-left-10 lg:-bottom-15 lg:-left-15"
              src={trailerBorder}
            />
            <img
              className="absolute -right-6 -bottom-6 scale-x-[-1] scale-y-[-1] md:-right-10 md:-bottom-10 lg:-right-15 lg:-bottom-15"
              src={trailerBorder}
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
