import './Background.css'
function BackgroundSection() {
  return (
    <>
      <iframe
        className="fixed top-0 left-0 h-full w-full object-cover hero-video"
        src="https://player.vimeo.com/video/1067643315?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;background=1&amp;loop=1"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>  <div className="fixed top-0 left-0 h-full w-full bg-black opacity-50"></div>
    </>
  );
}

export default BackgroundSection;
