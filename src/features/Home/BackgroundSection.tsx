import { backgroundVideo } from "../../assets/Assets";

function BackgroundSection() {
  return (
    <>
      <video
        className="fixed top-0 left-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="fixed top-0 left-0 h-full w-full bg-black opacity-50"></div>
    </>
  );
}

export default BackgroundSection;
