import { useState} from "react";
import { Player1, Player2, Player3, Player4 } from "../../assets/Assets";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const players = [
  {
    name: "Lei Lung ",
    description:
      "Growing up in the dark alleys of Luneria, Lei had always been pushed aside by people. An orphan left to the streets before he even understood what gentleness is. It didn't take him while to understand that wealth means everything to live by and that saying the name of Gods of these lands, means to survive. One day, a Band of Mercenaries reached their hands to him. Giving him a family that he never had. Companied by his life long experience in these lands and the Band of Mercenaries that became his home, he now lives by as a hired sword for the highest price alone, even if that's by the Empire of Elfania, overthrower of the governing forces in Land of Luneria.",
    image: Player1,
  },
  {
    name: "Loyld",
    description:
      "In service of Surgeon Sylos, remains a young man that Surgeon rescued himself. He now lives as Surgeon's manservant. Witnessing the massacre of his mother and father while he was a child, also feels like a distant memory to him. The man that gave him bread and made him hold a sword to defend himself, is equally cherished to him as is his own Mother and Father that . However, strings of fate might just tie together his duty with his righteous mind, for him to bring back his Master's son home and to cross paths with the sinners baring his parent's blood on their hands.",
    image: Player2,
  },
  {
    name: "Salazar Halfret",
    description:
      "Leader of Prominent House of Halfrets, only major opposing force to the Elfanians occupying the Lands of Luneria. A Dark Humorous man brimming with Arrogance yet gentle in heart. When the Elfanians offered immeasurable wealth and trade in return of, House Halfrets cooperation in looking for the whereabouts of Sacred Ashes of Divinity. He cast them out of his state, leaving them off with a warning of never setting their foot again in his state. Elfanians have yet to cower this man and settle on an alliance.",
    image: Player4,
  },
  {
    name: "Lorena",
    description:
      "Empress to the Elfanian Flag, a woman of few words. Adorned in Velvety Silver, she acts like a Thorn protecting the Rose that are her people. Though taking the seat of the Empire was never her doing. As she is tied to the seat by the Great Grandmaster that she honored quite a bit. Much of Elfanian's action are directed by Great Grandmaster, making her almost like a Puppet on strings to honor wishes of Great Grandmaster.",
    image: Player3,
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

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     nextSlide();
  //   }, 5000);

  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <div className="relative z-60 container mx-auto px-4">
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
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4 markazi-text-600">
            {players[currentSlide].name}
          </h2>
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto mb-8">
            <p className="text-2xl text-slate-300 markazi-text-500 leading-relaxed">
              {players[currentSlide].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerSection;