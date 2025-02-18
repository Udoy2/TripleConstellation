function LinkButtons({text,link,iconLink}:{text:string,link:string,iconLink:string}) {
  return (
    <>
      <a
        className="inline-flex bg-[#604410] px-5 py-3 transition-all hover:scale-102 hover:drop-shadow-[0_0_10px_rgba(255,237,212,0.5)]"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}{" "}
        <img
          className="ml-2 inline w-16 object-contain"
          src={iconLink}
        />
      </a>
    </>
  );
}

export default LinkButtons;
