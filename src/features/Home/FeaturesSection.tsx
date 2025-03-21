import { gradient_mirror } from "../../assets/Assets";

function FeaturesSection() {
  return (
    <>
      <div className="relative z-60 flex flex-col-reverse items-center gap-4 md:flex-row-reverse md:items-stretch">
        <div
          className="bg-cover bg-center md:w-1/2"
          style={{ backgroundImage: `url(${gradient_mirror})` }}
        >
          <p className="mx-auto w-[90%] px-2 text-center md:px-6 md:text-start">
            <br />
            <br />
            <br />

            <br />
            <br />
            <ul className="markazi-text-500 text-2xl text-slate-300 list-disc list-inside">
              <li>Single player with Duel Playable characters.</li>
              <li>Lore-Rich world.</li>
              <li>Exploration focused Action gameplay.</li>
              <li>Exploration rewards with multiple ways for tackling Boss enemies.</li>
              <li>Some bosses can be allied with, allowing for you to call them in the next battles.</li>
              <li>NPC questlines spanning multiple levels.</li>
              <li>Killing "too" many enemies locks out multiple questlines.</li>
              <li>Unlockable outfits.</li>
              <li>Secret levels with Challenging bosses.</li>
              <li>15 unique levels, excluding the secret levels for players to explore.</li>
              <li>8-10 Hours of gameplay.</li>
            </ul>
          </p>
        </div>

        <div className="px-3 md:w-1/2">
          <div className="aspect-video">
            <iframe
              className="h-full w-full border-6 border-double border-orange-50 bg-[#565656] object-cover drop-shadow-[0_0_30px_rgba(255,237,212,0.8)] filter"
              src="https://player.vimeo.com/video/1067793009?badge=0&autopause=0&player_id=0&app_id=58479&background=1&loop=1&autoplay=1"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturesSection;
