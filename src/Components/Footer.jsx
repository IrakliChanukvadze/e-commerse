import React from "react";
import { Link } from "react-router-dom";
import { responsiveContainer, textP } from "../Styles";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-black text-white  ">
      <div className={`${responsiveContainer} `}>
        <div className="flex flex-col justify-center  gap-12 sm:gap-8 xl:flex-row xl:justify-between  pt-12 sm:pt-14 xl:pt-16">
          <h2 className="text-white font-bold text-2xl sm:text-3xl xl:text-4xl text-center sm:text-start">
            audiophile
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-[34px] text-center sm:text-start">
            <Link to="/" className="hover:text-[#D87D4A]">
              HOME
            </Link>
            <Link to="/headphones" className="hover:text-[#D87D4A]">
              HEADPHONES
            </Link>
            <Link to="/speakers" className="hover:text-[#D87D4A]">
              SPEAKERS
            </Link>
            <Link to="/earphones" className="hover:text-[#D87D4A]">
              EARPHONES
            </Link>
          </div>
        </div>
        <div className="relative">
          <p className={`mt-12 sm:mt-8 ${textP} xl:w-[50%]`}>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <div className="flex flex-col gap-12 items-center sm:flex-row sm:justify-between mt-12 pb-10">
            <p className={`${textP}`}>Copyright 2023. All Rights Reserved</p>
            <div className="flex gap-4 xl:absolute  xl:right-0 xl:top-[50%] xl:-translate-y-[50%]">
              <AiFillFacebook
                size={25}
                className="hover:text-[#D87D4A] xl:scale-125"
              />
              <AiOutlineTwitter
                size={25}
                className="hover:text-[#D87D4A] xl:scale-125 "
              />
              <AiOutlineInstagram
                size={25}
                className="hover:text-[#D87D4A] xl:scale-125"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
