import React from "react";
import { Link } from "react-router-dom";
const Zx7SpeakerHome = () => {
  function getImgUrl(fileName) {
    const imgUrl = new URL(`../assets/${fileName}`, import.meta.url).href;
    return imgUrl;
  }
  return (
    <div className="relative w-[100%] bg-zx7ContainerLinear h-72 sm:h-96  rounded-lg  ">
      <div>
        <img
          src={getImgUrl("home/mobile/image-speaker-zx7.jpg")}
          className="z-0 block sm:hidden absolute right-0 h-72 rounded-lg"
        />
        <img
          src={getImgUrl("home/tablet/image-speaker-zx7.jpg")}
          className="z-0 hidden sm:block xl:hidden absolute right-0 h-96 rounded-lg"
        />
        <img
          src={getImgUrl("home/desktop/image-speaker-zx7.jpg")}
          className="z-0 hidden xl:block absolute right-0 h-96 rounded-lg"
        />
      </div>
      <div className="z-10 absolute left-3 sm:left-12 xl:left-28   h-[100%] flex flex-col  justify-center   ">
        <h2 className="text-black font-bold text-3xl mb-8 tracking-[6px]">
          ZX7 SPEAKER
        </h2>
        <Link to="/product/zx7-speaker">
          <button
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="xl:w-[200px] uppercase text-sm py-4 px-8 border-[1px] border-black font-bold hover:text-white hover:bg-black"
          >
            See Product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Zx7SpeakerHome;
