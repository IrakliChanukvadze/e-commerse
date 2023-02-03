import React, { useState } from "react";
import { textHeader } from "../Styles";
import CheckoutSummaryItem from "./CheckoutSummaryItem";
import { NumericFormat } from "react-number-format";
import { textP } from "../Styles";
import CheckoutModal from "./ChechoutModal";

const CheckoutSummary = ({ cartData, form }) => {
  const [formEmpty, setFormEmpty] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const priceData = [
    {
      title: "TOTAL",
      price: cartData.reduce((acc, cur) => acc + cur.price * cur.quantity, 0),
    },
    {
      title: "SHIPPING",
      price: Math.floor(
        cartData.reduce((acc, cur) => acc + cur.price * cur.quantity, 0) / 100
      ),
    },
    {
      title: "VAT (INCLUDED)",
      price: Math.floor(
        (cartData.reduce((acc, cur) => acc + cur.price * cur.quantity, 0) *
          12) /
          100
      ),
    },
    {
      title: "GRAND TOTAL",
      price:
        cartData.reduce((acc, cur) => acc + cur.price * cur.quantity, 0) +
        Math.floor(
          cartData.reduce((acc, cur) => acc + cur.price * cur.quantity, 0) / 100
        ),
    },
  ];

  const makePayment = () => {
    const keys = Object.keys(form);
    if (
      keys.some((item) => {
        if (item === "e-money-pin" || item === "e-money-number") {
          if (form.payment === "emoney") {
            console.log("234");
            return !form[item];
          }
        } else return !form[item];
      })
    ) {
      setFormEmpty(true);
    } else {
      setFormEmpty(false);
      handleOpen();
    }
  };

  return (
    <div className="w-full xl:w-[34%] h-auto  mt-8 xl:mt-0">
      <CheckoutModal
        open={open}
        handleClose={handleClose}
        cartData={cartData}
        price={priceData[3].price}
      />
      <div className=" m-auto xl:m-0  px-[5%] flex flex-col h-auto bg-white py-8 ">
        <h2 className={`${textHeader} tracking-[2px] mb-[7px] `}>SUMMARY</h2>
        <div>
          {cartData.map((item) => (
            <CheckoutSummaryItem key={item.id} item={item} />
          ))}
          <div className="flex flex-col gap-2 mt-8">
            {priceData.map((item) => (
              <div
                key={item.title}
                className={`flex justify-between w-full ${
                  item.title === "GRAND TOTAL" && "mt-6"
                }`}
              >
                <h2 className={`${textP}`}>{item.title}</h2>
                <NumericFormat
                  className={`font-bold  text-right ${
                    item.title === "GRAND TOTAL" && "text-[#D87D4A]"
                  }`}
                  value={item.price}
                  thousandSeparator={true}
                  prefix={"$  "}
                  contentEditable={false}
                />
              </div>
            ))}
          </div>
        </div>
        <button
          className="w-full h-12 bg-[#D87D4A] text-white font-bold tracking-[3px] uppercase hover:bg-[#FBAF85] mt-8 "
          onClick={makePayment}
        >
          continue
        </button>
        <h2
          className={`text-red-700 ${
            formEmpty ? "block" : "hidden"
          } mt-6 text-center text-lg`}
        >
          Please fill form
        </h2>
      </div>
    </div>
  );
};

export default CheckoutSummary;
