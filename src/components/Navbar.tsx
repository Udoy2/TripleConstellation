import { useState } from "react";
import NavModal from "./NavModal";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NavModal */}
      <NavModal isopen={isOpen} />
      <nav className="absolute top-0 inset-x-0  flex flex-row justify-between p-4">
        <div className="h-16 w-32 z-50 object-contain pl-4">
           <a href="https://www.facebook.com/requiemforthedawn" target="_blank" className="cursor-pointer">
           <img src="./src/assets/SteamLogo.png"/>
           </a>
        </div>

        <div
          className="relative flex h-8 w-25 z-60 cursor-pointer flex-col justify-between *:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* First Bar */}
          <span
            className={`absolute top-2 left-1/2 h-[0.2rem] w-[35%] transition-transform ${
              isOpen ? "top-4 rotate-45" : ""
            }`}
          ></span>

          {/* Second Bar */}
          <span
            className={`absolute top-4 left-1/2 h-[0.2rem] w-[35%] transition-transform ${
              isOpen ? "top-4 -rotate-45" : ""
            }`}
          ></span>

          {/* Third Bar (Hidden when Open) */}
          <span
            className={`absolute top-6 left-1/2 h-[0.2rem] w-[35%] transition-opacity ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
