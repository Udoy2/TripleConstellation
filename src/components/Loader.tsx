const Loader = () => {
  return (
    <div className="loader fixed top-0 left-0 z-40 h-screen w-screen">
      <video className="h-full w-full object-cover" autoPlay loop muted>
        <source src="./src/assets/loader.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Loader;
