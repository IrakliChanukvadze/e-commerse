import React from "react";
import { Link } from "react-router-dom";
import { responsiveContainer, textHeader, textP } from "../Styles";
import Magnifier from "react-magnifier";
const CategoryPageSingleItem = ({
  imgUrl,
  index,
  newProduct,
  name,
  description,
  slug,
}) => {
  return (
    <div
      className={`${responsiveContainer} mb-10 flex flex-col xl:gap-20 ${
        index % 2 === 0 ? "xl:flex-row" : "xl:flex-row-reverse"
      }`}
    >
      <div className="flex-1 mb-8 sm:mb-12 xl:mb-0">
        <Magnifier
          src={imgUrl.mobile.slice(1)}
          className="sm:hidden w-full rounded-lg"
          mgShape="square"
        />
        <Magnifier
          src={imgUrl.tablet.slice(1)}
          className="hidden sm:block xl:hidden w-full rounded-lg"
          mgShape="square"
        />
        <Magnifier
          src={imgUrl.desktop.slice(1)}
          className=" hidden xl:block w-full rounded-lg"
          mgShape="square"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center xl:items-start gap-6">
        <h2 className="text-base tracking-[10px] text-[#D87D4A] font-[400]">
          {newProduct && "NEW PRODUCT"}
        </h2>
        <h2
          className={`${textHeader} tracking-[6px] text-center xl:text-start`}
        >
          {name}
        </h2>
        <p className={`${textP}`}> {description}</p>
        <Link to={`/product/${slug}`}>
          <button
            onClick={() => window.scrollTo(0, 0)}
            className="xl:w-[200px] bg-[#D87D4A] text-white uppercase text-sm py-4 px-8 border-[1px] border-black font-bold hover:bg-[#FBAF85] sm:mt-2 xl:mb-7 "
          >
            See Product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryPageSingleItem;
