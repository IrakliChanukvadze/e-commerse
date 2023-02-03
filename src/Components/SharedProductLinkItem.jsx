import React, { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { flexCenter } from "../Styles";

const SeeProductItem = ({ url, category }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`relative w-[100%]  h-[165px]  bg-[#F1F1F1] rounded-lg font-bold cursor-pointer`}
      onClick={() => window.scrollTo(0, 0)}
      onMouseEnter={() => {
        setActive(true);
      }}
      onMouseLeave={() => {
        setActive(false);
      }}
    >
      <Link to={`/category/${category}`}>
        <img
          src={url}
          className="absolute top-[-62px] left-[50%] -translate-x-[50%] w-[8rem] h-[11rem]"
        />
        <h2 className="text-xl uppercase  text-center pt-20">{category}</h2>
        <div className={`${flexCenter} mt-2 `}>
          <p
            className={`gap-6 uppercase  ${
              active ? "text-[#D87D4A] opacity-100" : "opacity-50"
            }`}
          >
            shop
          </p>
          <RiArrowRightSLine className="text-[#D87D4A]  " size={25} />
        </div>
      </Link>
    </div>
  );
};

export default SeeProductItem;
