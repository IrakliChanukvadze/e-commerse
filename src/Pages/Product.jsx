import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../Data/data";
import About from "../Components/About";
import SharedProductLinks from "../Components/SharedProductsLinks";
import { responsiveContainer, textP, textHeader } from "../Styles";
import { NumericFormat } from "react-number-format";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Magnifier from "react-magnifier";
import ProductOthersLink from "../Components/ProductOthersLink";

const Product = ({ setCartData }) => {
  const [quantity, setQuantity] = useState(1);
  const [screen, setScreen] = useState("desktop");
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const resizeListener = () => {
      if (window.innerWidth > 1279) {
        setScreen("desktop");
      } else if (window.innerWidth > 639) {
        setScreen("tablet");
      } else {
        setScreen("mobile");
      }
    };
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  function getImgUrl(fileName) {
    const imgUrl = new URL(`../assets/${fileName}`, import.meta.url).href;
    return imgUrl;
  }

  const [currentData] = data.filter((item) => item.slug === productId);
  const addToCart = () => {
    setCartData((prev) => {
      if (prev?.some((item) => item.id === currentData.id)) {
        const bla = prev.map((item) =>
          item.id === currentData.id
            ? { ...item, quantity: item.quantity + quantity }
            : { ...item }
        );
        return [...bla];
      } else {
        return [...prev, { ...currentData, quantity: quantity }];
      }
    });
  };

  return (
    <div className={` mt-4 sm:mt-12 xl:mt-20`}>
      <h2
        className={`${responsiveContainer} ${textP} cursor-pointer`}
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </h2>
      <div
        className={`${responsiveContainer} mb-10 flex flex-col sm:gap-10 xl:gap-20 sm:flex-row mt-10 `}
      >
        <div className="flex-1 h-[100%]">
          <Magnifier
            src={getImgUrl(currentData?.image[screen].slice(9))}
            className="rounded-lg "
            mgShape="square"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center sm:items-start gap-6">
          <h2 className="text-base tracking-[10px] text-[#D87D4A] font-[400] mt-10 sm:mt-0">
            {currentData.new && "NEW PRODUCT"}
          </h2>
          <h2
            className={`${textHeader} tracking-[6px] text-center sm:text-start`}
          >
            {currentData.name}
          </h2>
          <p className={`${textP}`}> {currentData.description}</p>
          <NumericFormat
            className="font-bold text-center sm:text-start"
            value={currentData.price}
            thousandSeparator={true}
            prefix={"$   "}
          />
          <div className="flex gap-5">
            <div className="flex justify-around bg-[#F1F1F1] items-center w-28 sm:w-32  xl:w-40 h-16">
              <AiOutlineMinus
                size={20}
                onClick={() => {
                  quantity > 1 && setQuantity((prev) => prev - 1);
                }}
                className={`${
                  quantity > 1 ? "cursor-pointer" : "cursor-not-allowed"
                }`}
              />
              <p className=" text-base font-bold">{quantity}</p>
              <AiOutlinePlus
                size={20}
                onClick={() => setQuantity((prev) => prev + 1)}
                className={"cursor-pointer"}
              />
            </div>
            <button
              className="bg-[#D87D4A] w-36 sm:w-40 xl:w-60 h-16 text-white font-bold tracking-[4px] hover:bg-[#FBAF85]"
              onClick={() => {
                addToCart();
                setQuantity(1);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className={`${responsiveContainer} mt-10 sm:mt-20 `}>
        <div className="flex flex-col xl:flex-row ">
          <div className="flex-1">
            <h2 className={`${textHeader} my-6 uppercase`}>Features</h2>
            <p className={`${textP}`}>
              {currentData.features.split("\n\n")[0]}
              <br />
              <br />
              {currentData.features.split("\n\n")[1]}
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-10 sm:gap-0 sm:flex-row  xl:flex-col xl:items-center mt-10 sm:mt-20 xl:mt-0  ">
            <h2 className={`${textHeader} xl:my-6 uppercase flex-1`}>
              In The Box
            </h2>
            <div className="flex-1">
              {currentData.includes.map((item) => (
                <div key={item.item} className={`flex gap-6 `}>
                  <h2 className="text-base text-[#D87D4A] font-bold">
                    {item.quantity}x
                  </h2>
                  <h2 className={`${textP}`}>{item.item}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${responsiveContainer} flex flex-col sm:flex-row gap-2 sm:gap-4 mt-10 sm:mt-28 `}
      >
        <div className="w-[100%] sm:w-[40%] flex flex-col gap-2 sm:gap-4 ">
          <img
            src={getImgUrl(currentData.gallery.first[screen].slice(9))}
            className="rounded-lg w-full h-[50%] "
          />
          <img
            src={getImgUrl(currentData.gallery.second[screen].slice(9))}
            className="rounded-lg w-full h-[50%] "
          />
        </div>
        <div className="w-[100%] sm:w-[60%] h-full">
          <img
            src={getImgUrl(currentData.gallery.third[screen].slice(9))}
            className="rounded-lg w-full h-full"
          />
        </div>
      </div>

      <div className={`${responsiveContainer} mt-10 sm:mt-28`}>
        <h2 className={`${textHeader} mb-10 uppercase`}>you may also like</h2>
        <div className="flex flex-col sm:flex-row gap-20 sm:gap-7  ">
          {currentData.others.map((item) => (
            <ProductOthersLink
              key={item.name}
              slug={item.slug}
              name={item.name}
              img={item.image[screen]}
            />
          ))}
        </div>
      </div>
      <SharedProductLinks />
      <About />
    </div>
  );
};

export default Product;
