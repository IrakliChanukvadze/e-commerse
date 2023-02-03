import React from "react";

import { responsiveContainer } from "../Styles";
import SharedProductLinkItem from "./SharedProductLinkItem";

const items = [
  {
    img: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
    category: "headphones",
  },
  {
    img: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
    category: "speakers",
  },
  {
    img: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
    category: "earphones",
  },
];

const SeeProducts = () => {
  return (
    <div
      className={`${responsiveContainer} mt-36 flex flex-col justify-center gap-24 md:flex-row md:gap-8 mb-20  `}
    >
      {items.map(({ img, category, link }) => (
        <SharedProductLinkItem key={category} url={img} category={category} />
      ))}
    </div>
  );
};

export default SeeProducts;
