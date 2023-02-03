import React from "react";
import { responsiveContainer, flexCenter, textP } from "../Styles";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-heroMobile   bg-cover bg-center bg-local sm:bg-heroTablet xl:bg-heroDesktop pt-[108px] pb-[108px]  sm:pb-[158px] sm:pt-[128px] ">
      <div
        className={`${responsiveContainer} ${flexCenter} flex-col xl:items-start text-white `}
      >
        <h2 className={`${textP} tracking-[10px]`}>NEW PRODUCT</h2>
        <h1 className=" text-4xl sm:text-[56px] mt-4 mb-6  uppercase text-center  sm:mt-6 sm:leading-[58px] xl:text-left ">
          XX99 Mark II
          <br />
          HeadphoneS
        </h1>
        <p className="text-[15px] leading-6 text-center opacity-75 max-w-[349px] px-4 mb-7 sm:px-0 sm:mb-10 xl:text-left ">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link to="/product/xx99-mark-two-headphones">
          <button className="uppercase bg-[#D87D4A] px-7 py-4 tracking-[1px] text-sm leading-[18px]">
            See Product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
