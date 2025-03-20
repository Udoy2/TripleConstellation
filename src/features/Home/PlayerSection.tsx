import React, { useState, useEffect } from "react";
import { Player1, Player2, Player3, Player4 } from "../../assets/Assets";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const players = [
  {
    name: "Player 1",
    description:
      "A skilled warrior with unmatched combat abilities. Explore the world of Luneria through their eyes.",
    image: Player1,
  },
  {
    name: "Player 2",
    description:
      "A stealthy rogue who uses cunning and agility to outsmart enemies. Discover their unique story.",
    image: Player2,
  },
  {
    name: "Player 3",
    description:
      "A stealthy rogue who uses cunning and agility to outsmart enemies. Discover their unique story.",
    image: Player3,
  },
  {
    name: "Player 4",
    description:
      "A stealthy rogue who uses cunning and agility to outsmart enemies. Discover their unique story.",
    image: Player4,
  },
];

function PlayerSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % players.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + players.length) % players.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative z-60 container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Carousel Container */}
        <div className="relative group">
          {/* Image */}
          <div className="relative h-[500px] w-full flex items-center justify-center">
            <img
              src={players[currentSlide].image}
              alt={players[currentSlide].name}
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
            />
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10"
          >
            <IoIosArrowBack size={24} className="cursor-pointer"/>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10"
          >
            <IoIosArrowForward size={24} className="cursor-pointer"/>
          </button>
        </div>

        {/* Player Info Section */}
        <div className="mt-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4 markazi-text-600">
            {players[currentSlide].name}
          </h2>
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-lg text-slate-300 markazi-text-500 leading-relaxed">
              {players[currentSlide].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerSection;