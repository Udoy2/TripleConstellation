import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { gameLogo } from "../../assets/Assets";
function HeroSection() {
  return (
    <>
      <section className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="text-center">
          <img
            className="relative mb-4 h-100 object-contain"
            src={gameLogo}
          />
          <h1 className="markazi-text-600 relative text-4xl text-white md:text-5xl">
            Coming Soon..
          </h1>
        </div>

        {/* social icons */}
        <div className="social_icons absolute top-[50%] left-10 hidden -translate-y-[50%] transition-all *:my-3 *:cursor-pointer *:text-3xl *:text-white *:hover:text-white/60 md:block">
          <a
            href="https://www.facebook.com/requiemforthedawn"
            className="block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.facebook.com/requiemforthedawn"
            className="block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://www.facebook.com/requiemforthedawn"
            className="block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.facebook.com/requiemforthedawn"
            className="block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/requiemforthedawn"
            className="block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail />
          </a>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
