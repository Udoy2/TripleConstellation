function Title({ title }: { title: string }) {
  return (
    <>
      <div className="w-[50%] mx-auto relative">
      <div className=" bg-[url(./src/assets/title_background.png)] bg-cover bg-center item-center markazi-text-600 relative mx-auto my-25 flex h-24 w-full flex-col justify-center  text-center text-4xl/9 text-white ">
        {title}
      </div>
      <img className="absolute -top-6 -left-6 w-20" src="./src/assets/trailerBorder.png"  />
      <img className="absolute -bottom-6 -right-6 w-20 scale-x-[-1] scale-y-[-1]" src="./src/assets/trailerBorder.png"  />
      </div>
    </>
  );
}

export default Title;
