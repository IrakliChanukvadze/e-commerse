import React from "react";
import { Link } from "react-router-dom";
import { textHeader } from "../Styles";

const ProductOthersLink = ({ img, name, slug }) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <img src={img} className="rounded-lg" />
      <h2 className={`${textHeader}`}>{name}</h2>
      <Link to={`/product/${slug}`}>
        <button
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className="bg-[#D87D4A]  w-52 sm:w-44 xl:w-52  h-12 text-white font-bold tracking-[4px] hover:bg-[#FBAF85] "
        >
          See Product
        </button>
      </Link>
    </div>
  );
};

export default ProductOthersLink;
