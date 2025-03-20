import { gradient_mirror } from "../../assets/Assets";

function WorldSection() {
  

  return (
    <>
      <div
        className="relative z-60 flex flex-col-reverse items-center gap-4 md:flex-row-reverse md:items-stretch"
      >
        <div
          className="bg-cover bg-center md:w-1/2"
          style={{ backgroundImage: `url(${gradient_mirror})` }}
        >
          <p className="mx-auto w-[90%] px-2 text-center md:px-6 md:text-start">
            <br />
            <br />
            <br />
            <span className="markazi-text-600 text-4xl/9 text-white">
              "Their War..is for the ashes.. Ashes of the Old God's.. Lost
              without a trace, in the wilderness of Lunaria.."
            </span>
            <br />
            <br />
            <span className="markazi-text-500 text-2xl text-slate-300">
              Ashes that fuels the war, even without a Trace of those deities
              existing now amongst us.
              <br />
              It is said in the records of the Old
              Passage, Ashes of the Old God's "withered" presence still lingers
              in the continent of Luneria. Sacred ashes deemed to hold something
              of power. However, of what kind ? Did anyone ever witnessed It's
              miracles? Even the Old Passage that holds the records of the
              ancient times, have nothing of use, when It came to elaborating,
              why were the Old Gods even cremated to Ashes ? Who did that? Why
              did they do It ? Moreover, Do the Ashes of the Old Gods, even
              exist ? Families of Utmost Power from far and wide plunge
              themselves into the Heart of Luneria just to uncover the mysteries
              of the Sacred Ashes, while a young boy looks for his Master's son
              in a vast continent of Challenges.
            </span>
          </p>
        </div>
        <div className="px-3 md:w-1/2">
          <div className="aspect-video">
            <iframe
              className="h-full w-full object-cover border-6 border-double border-orange-50 bg-[#565656] object-cover drop-shadow-[0_0_30px_rgba(255,237,212,0.8)] filter"
              src="https://player.vimeo.com/video/1067786589?badge=0&autopause=0&player_id=0&app_id=58479&background=1&loop=1&autoplay=1"
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

export default WorldSection;