import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BiHeadphone, BiSpeaker } from "react-icons/bi";
import { SlEarphones } from "react-icons/sl";

const SidebarNav = () => {
  const [active, setActive] = useState(false);
  const navLinks = [
    {
      name: "home",
      link: "/",
      icon: (
        <AiOutlineHome
          size={20}
          className={`text-${
            "home" === active ? "[#D87D4A]" : "black"
          } font-bold`}
        />
      ),
    },
    {
      name: "headpones",
      link: "/category/headphones",
      icon: (
        <BiHeadphone
          size={20}
          className={`text-${
            "headphones" === active ? "[#D87D4A]" : "black"
          } font-bold`}
        />
      ),
    },
    {
      name: "speakers",
      link: "/category/speakers",
      icon: (
        <BiSpeaker
          size={20}
          className={`text-${
            "speakers" === active ? "[#D87D4A]" : "black"
          } font-bold `}
        />
      ),
    },
    {
      name: "earphones",
      link: "/category/earphones",
      icon: (
        <SlEarphones
          size={20}
          className={`text-${
            "earphones" === active ? "[#D87D4A]" : "black"
          } font-bold`}
        />
      ),
    },
  ];
  return (
    <div className="w-40 sm:w-60  h-full bg-white">
      {navLinks.map(({ name, icon, link }) => (
        <Link key={name} to={link}>
          <div
            className="w-full  mt-10 flex gap-6 items-center pl-4 "
            onMouseEnter={() => {
              setActive(name);
            }}
            onMouseLeave={() => {
              setActive(false);
            }}
          >
            {icon}
            <h2
              className={` text-${
                name === active ? "[#D87D4A]" : "black"
              } uppercase font-semibold tracking-[3px]`}
            >
              {name}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SidebarNav;
