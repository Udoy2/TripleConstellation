import { gamePlay, gradient_mirror } from "../../assets/Assets";

function GameplaySection() {
  return (
    <>
      <div className="relative z-60  flex flex-col-reverse items-center gap-4 md:flex-row-reverse md:items-stretch">
      <div className="md:w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${gradient_mirror})` }}>
          <p className="mx-auto w-[90%] px-2 text-center md:px-6 md:text-start">
            <br />
            <br />
            <br />
            <span className="markazi-text-600 text-4xl/9 text-white">
              Experience a Blend of Stealth, Action, Adventure on your Journey
              in The Continent of Luneria .
            </span>
            <br />
            <br />
            <span className="markazi-text-500 text-2xl text-slate-300">
              Stealth your way through or use Blood shed to bend others Will in
              your Favour through Brute and Cunning Actions. Mind your
              Adversaries moves, Pay heed to their swings.. You are but an
              Infant among the Matured Blades. Figure out ways to avoid such
              Confrontations altogether should you seek out to do so.
            </span>
          </p>
        </div>
        <div className="px-3 md:w-1/2">
          <img
            className="w-full border-6 border-double border-orange-50 bg-[#565656] object-cover drop-shadow-[0_0_30px_rgba(255,237,212,0.8)] filter"
            src={gamePlay}
          />
        </div>
      </div>
    </>
  );
}

export default GameplaySection;
