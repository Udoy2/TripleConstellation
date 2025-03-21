import { loaderVideo } from "../assets/Assets";

interface LoaderProps {
  loading: boolean;
  setEnterButtonClicked: (value: boolean) => void;
}

const Loader = ({ loading, setEnterButtonClicked }: LoaderProps) => {
  return (
    <div className="loader fixed top-0 left-0 z-40 h-screen w-screen flex items-center justify-center">
      <video className="h-full w-full object-cover" autoPlay loop muted>
        <source src={loaderVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button
        className={`
          fixed top-[50%] left-[50%] z-50 -translate-x-[50%]
          -translate-y-[50%] cursor-pointer bg-[#604410]
          px-5 py-3 text-white transition-all hover:scale-102
          hover:drop-shadow-[0_0_10px_rgba(255,237,212,0.5)] text-2xl
          ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}
        `}
        disabled={loading}
        onClick={() => setEnterButtonClicked(true)}
      >
        {loading ? 'Loading...' : 'Click'}
      </button>
    </div>
  );
};

export default Loader;