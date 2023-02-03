import React from "react";
import { NumericFormat } from "react-number-format";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const CartModalItem = ({ item, addToCart, removeFromCart }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4">
        <img
          src={item.image.mobile.slice(1)}
          className="w-16 aspect-square rounded-lg"
        />
        <div className="flex flex-col justify-center">
          <h2 className="font-bold">{item.name.split(" ")[0]}</h2>
          <NumericFormat
            className="font-bold opacity-50 w-16"
            value={item.price}
            thousandSeparator={true}
            prefix={"$   "}
            contentEditable={false}
          />
        </div>
      </div>
      <div className="flex justify-around bg-[#F1F1F1] items-center w-28 h-9">
        <AiOutlineMinus
          size={20}
          onClick={() => {
            removeFromCart(item.id);
          }}
          className="cursor-pointer"
        />
        <p className=" text-base font-bold">{item.quantity}</p>
        <AiOutlinePlus
          size={20}
          onClick={() => {
            addToCart(item.id);
          }}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default CartModalItem;
