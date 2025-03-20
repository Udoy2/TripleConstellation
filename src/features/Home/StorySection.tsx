import { gradient, storyEvent } from "../../assets/Assets";

function StorySection() {
  return (
    <>
      <div className="relative z-60 flex flex-col-reverse items-center justify-center md:items-stretch md:flex-row">
        <div className=" bg-cover bg-center" style={{ backgroundImage: `url(${gradient})` }}>
          <p className="px-2 md:px-6 w-[80%] mx-auto md:text-start text-center">
            <br />
            <br />
            <br />
            <span className="text-4xl/9 text-white markazi-text-600">
            Living in an Isolated Island, The man who raised Loyld, from the moment his parents were slaughtered, had but one request for him. To bring back his son who had left home after an argument. 
            </span>
            <br />
            <br />
            <span className="text-2xl text-slate-300 markazi-text-500">
            However, in Fate's dramatic diorama, everything escalated. Arriving in the continent of Luneria, Loyld realizes the broken yet serene state that the continent is in. A Continent struggling by the strings of Holy Revere, by People's desire to usurp Divinity. Whereabouts of a young lost boy hardly matters to these people conflicted in the Holy Struggle of their Father land, piecing together the traces of his Master's son befalls solely on him from that point on. And thus, a desperate search for Loyld's half brother begins, on the Lands of Luneria. For Sincerity and Respect to the master that moulded him into what he is, backing off could never be a choice.
            </span>
          </p>
          <br />
          <br />
        </div>

      </div>
    </>
  );
}

export default StorySection;
