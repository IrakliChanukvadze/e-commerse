import React from "react";
import { Link } from "react-router-dom";
import { flexCenter, responsiveContainer } from "../Styles";

const Zx9SpeakerHome = () => {
  function getImgUrl(fileName) {
    const imgUrl = new URL(`../assets/${fileName}`, import.meta.url).href;
    return imgUrl;
  }
  return (
    <div
      className={`bg-[#D87D4A] relative overflow-hidden rounded-lg   w-[100%] pt-14 items-center flex  flex-col gap-6 xl:flex-row xl:items-end  xl:pt-24`}
    >
      <div className="border-[1px] border-white absolute rounded-full w-[90%] aspect-square top-4 sm:top-6 z-0  min-w-[315px] max-w-[450px] left-[50%] -translate-x-[50%]   border-opacity-50 "></div>
      <div className="border-[1px] border-white absolute rounded-full w-[100%] aspect-square -top-[1px] z-0 left-[50%] min-w-[350px] max-w-[500px] -translate-x-[50%]  border-opacity-50 "></div>

      <div className="flex items-end xl:flex-1 xl:justify-center xl:items-end  ">
        <img
          src={getImgUrl("shared/desktop/speaker-without-shadow.png")}
          className="w-[20vw]  min-w-[180px] max-w-[450px] h-[auto]   mt-5 sm:mt-10 z-10  "
        />
      </div>

      <div className="text-center xl:text-start text-white z-10 xl:flex-1 flex flex-col xl:justify-center  ">
        <h2 className="text-4xl sm:text-5xl uppercase font-bold mb-6 tracking-[6px] ">
          ZX9 <br /> SPEAKER
        </h2>
        <p className="text-base font-medium  opacity-75 max-w-[350px] ">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Link to="/product/zx9-speaker">
          <button
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className={`bg-black xl:w-[200px]  py-4 px-8 mt-8 sm:mt-10 text-sm font-bold mb-12 sm:mb-20 hover:bg-[#4C4C4C] xl:mb-10 m-[auto] xl:ml-0 `}
          >
            SEE PRODUCTS
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Zx9SpeakerHome;
