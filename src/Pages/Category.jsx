import React from "react";
import { useParams } from "react-router-dom";
import CategoryPageItem from "../Components/CategoryPageItem";
import SharedProductLinks from "../Components/SharedProductsLinks";
import data from "../Data/data";
import { textHeader } from "../Styles";
import About from "../Components/About";

const Category = () => {
  const { categoryId } = useParams();
  const filteredData = data.filter((item) => item.category === categoryId);

  return (
    <div>
      <div className="bg-black h-40 sm:h-60 flex justify-center items-center ">
        <h2 className={`${textHeader} text-white tracking-[6px] uppercase`}>
          {categoryId}
        </h2>
      </div>
      <div className="flex flex-col gap-32 mt-14 sm:mt-28 xl:mt-40 ">
        {filteredData.map((item, index) => (
          <CategoryPageItem
            key={item.id}
            imgUrl={item.categoryImage}
            index={index}
            newProduct={item.new}
            name={item.name}
            description={item.description}
            slug={item.slug}
          />
        ))}
      </div>
      <SharedProductLinks />
      <About />
    </div>
  );
};

export default Category;
