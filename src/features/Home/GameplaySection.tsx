import { gradient_mirror } from "../../assets/Assets";

function GameplaySection() {


    

  return (
    <>
      <div
        className="relative z-60 flex flex-col-reverse items-center gap-4 md:flex-row-reverse md:items-stretch"
      >
        <div className="px-3 md:w-1/2">
          <div className="aspect-video">
            <iframe
              className="h-full w-full object-cover border-6 border-double border-orange-50 bg-[#565656] object-cover drop-shadow-[0_0_30px_rgba(255,237,212,0.8)] filter"
              src="https://player.vimeo.com/video/1067793009?badge=0&autopause=0&player_id=0&app_id=58479&background=1&loop=1&autoplay=1"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div
          className="bg-cover bg-center md:w-1/2"
          style={{ backgroundImage: `url(${gradient_mirror})` }}
        >
          <p className="mx-auto w-[90%] px-2 text-center md:px-6 md:text-start">
            <br />
            <br />
            <br />
            <span className="markazi-text-600 text-4xl/9 text-white" style={{fontStyle: 'italic'}}>
            Our project has 2 playable characters, depending on the story progression we would switch the player back and forth to these characters to keep the story fresh and engaging with different perspectives of the narrative progress.
            </span>
            <br />
            <br />
            <span className="markazi-text-500 text-2xl text-slate-300 " >
              Explore the Level Based world of Luneria. Face against formidable Foes and allies alike. Gather and Craft resources for your survival and learn secrets of your adversaries. Secrets, that might make them hesitant to point their swords at you or make them vulnerable during combat. Remember, Battles are won best when you don't even have to draw your weapon unless of course, you are forced to do so. Escape the enemies grasp taking advantage of the stealth system. NPC Questlines spanning multiple Levels, even colliding with other NPC Questlines, making you choose who you want to favor in those deciding moments.
            </span>
          </p>
        </div>
        
      </div>
    </>
  );
}

export default GameplaySection;