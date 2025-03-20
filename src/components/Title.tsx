import { titleBackground, trailerBorder } from "../assets/Assets";

function Title({ title }: { title: string }) {
  return (
    <>
      <div className="w-[50%] mx-auto relative">
        <div
          className="bg-cover bg-center item-center markazi-text-600 relative mx-auto my-20 flex h-24 w-full flex-col justify-center text-center text-4xl/9 text-white"
          style={{ backgroundImage: `url(${titleBackground})` }}
        >
          {title}
        </div>
        <img className="absolute -top-6 -left-6 w-20" src={trailerBorder} />
        <img
          className="absolute -bottom-6 -right-6 w-20 scale-x-[-1] scale-y-[-1]"
          src={trailerBorder}
        />
      </div>
    </>
  );
}

export default Title;
