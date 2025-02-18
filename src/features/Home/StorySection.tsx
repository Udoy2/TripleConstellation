function StorySection() {
  return (
    <>
      <div className="relative z-60 mt-40 flex flex-col-reverse items-center md:items-stretch md:flex-row gap-4">
        <div className=" md:w-1/2 bg-[url(./src/assets/gradient.png)] bg-cover bg-center">
          <p className="px-2 md:px-6 w-[90%] mx-auto md:text-start text-center">
            <br />
            <br />
            <br />
            <span className="text-4xl/9 text-white markazi-text-600">
              Unfold this Tale of Persuasion and Self-Recognition, with the
              people that you'll fumble upon your Journey. Your Master's Son
              hanging on a thread of fate in Captivity, waiting for His Loyal
              Friend to be ripping through thus Threads.
            </span>
            <br />
            <br />
            <span className="text-2xl text-slate-300 markazi-text-500">
              Thrusted into the underbelly of an Overarching Drama, Navigate
              your path in the Holy continent of Luneria, Encounter characters
              in your Journey, from Friends to Foes, to Lovers from Strangers.
              From Dreaded miseries to Heartfelt melodies. Experience their
              stories Intertwined with yours, For you to pull the Strings of
              Destiny.
            </span>
          </p>
        </div>
        <div className="md:w-1/2 px-3">
          <img
            className="w-full border-6 border-double border-orange-50 bg-[#565656] object-cover drop-shadow-[0_0_30px_rgba(255,237,212,0.8)] filter"
            src="./src/assets/story_event.gif"
          />
        </div>
      </div>
    </>
  );
}

export default StorySection;
