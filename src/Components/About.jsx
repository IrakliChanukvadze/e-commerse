import React from "react";
import { responsiveContainer, textHeader, textP } from "../Styles";

const About = () => {
  return (
    <div
      className={`${responsiveContainer} flex flex-col xl:flex-row-reverse gap-10 sm:gap-14 xl:gap-20 py-10 sm:py-14 xl:py-20 `}
    >
      <div className=" flex-1 ">
        <img
          src="/assets/shared/mobile/image-best-gear.jpg "
          className="rounded-lg block sm:hidden  "
        />
        <img
          src="/assets/shared/tablet/image-best-gear.jpg "
          className="rounded-lg hidden sm:block xl:hidden  "
        />
        <img
          src="/assets/shared/desktop/image-best-gear.jpg "
          className="rounded-lg hidden xl:block w-full "
        />
      </div>
      <div className="flex-1 flex flex-col justify-center gap-8 text-center xl:text-start">
        <h2
          className={`uppercase ${textHeader} tracking-widest  xl:tracking-[7px] `}
        >
          Bringing you the <span className="text-[#D87D4A]">best</span> audio
          gear
        </h2>
        <p className={`${textP} text-center`}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};

export default About;
