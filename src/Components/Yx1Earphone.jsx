import React from "react";
import { Link } from "react-router-dom";

const Yx1Earphone = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-10 sm:gap-14 xl:gap-20  ">
      <div className="flex-1 min-h-[280px] sm:w-[41vw] ">
        <img
          src="/assets/home/mobile/image-earphones-yx1.jpg "
          className="rounded-lg block sm:hidden min-h-[280px] "
        />
        <img
          src="/assets/home/tablet/image-earphones-yx1.jpg "
          className="rounded-lg hidden sm:block xl:hidden min-h-[280px] w-41vw "
        />
        <img
          src="/assets/home/desktop/image-earphones-yx1.jpg "
          className="rounded-lg hidden xl:block w-[41vw] min-h-[280px]  "
        />
      </div>
      <div className="flex-1 bg-[#F1F1F1] rounded-lg flex items-center  min-h-[280px] sm:w-[39vw]  ">
        <div className="ml-6  sm:ml-10  xl:ml-20">
          <h2 className="text-black font-bold text-3xl mb-8 tracking-[6px]  ">
            YX1 EARPHONES
          </h2>
          <Link to="/product/yx1-earphones">
            <button
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="xl:w-[200px] uppercase text-sm py-4 px-8 border-[1px] border-black font-bold hover:text-white hover:bg-black"
            >
              See Product
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Yx1Earphone;
