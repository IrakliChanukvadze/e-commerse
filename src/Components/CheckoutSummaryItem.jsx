import React from "react";
import { NumericFormat } from "react-number-format";
import { textP } from "../Styles";

const CheckoutSummaryItem = ({ item }) => {
  function getImgUrl(fileName) {
    const imgUrl = new URL(`../assets/${fileName}`, import.meta.url).href;
    return imgUrl;
  }
  return (
    <div className="flex justify-between mt-6">
      <div className="flex gap-4">
        <img
          src={getImgUrl(item.image.mobile.slice(9))}
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
      <h2 className={textP}>x{item.quantity}</h2>
    </div>
  );
};

export default CheckoutSummaryItem;
