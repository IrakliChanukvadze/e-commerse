import React from "react";
import Modal from "@mui/material/Modal";
import { textP } from "../Styles";
import CartModalItem from "./CartModalItem";
import { NumericFormat } from "react-number-format";
import { Link } from "react-router-dom";

export default function CartModal({
  open,
  handleClose,
  cartData,
  setCartData,
}) {
  const totalPrice = cartData.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );

  const addToCart = (id) => {
    setCartData(
      cartData.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      })
    );
  };

  const removeFromCart = (id) => {
    setCartData(
      cartData.reduce((acc, cur) => {
        if (cur.id !== id) {
          acc.push(cur);
          return acc;
        }
        if (cur.quantity === 1) {
          if (cartData.length === 1) {
            handleClose();
          }
          return acc;
        }

        acc.push({ ...cur, quantity: cur.quantity - 1 });
        return acc;
      }, [])
    );
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className=" absolute right-[4%] sm:right-[6%] xl:right-[8%] top-[121px] bg-white w-[92vw] sm:w-[400px] flex flex-col p-8 rounded-lg">
        <div className="flex justify-between mb-8">
          <h2 className="text-lg font-bold">Cart ({cartData.length}) </h2>
          <h2
            className={`${textP} hover:text-[#D87D4A] hover:underline hover:opacity-100 cursor-pointer`}
            onClick={() => {
              setCartData([]);
              handleClose();
            }}
          >
            Remove All
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          {cartData.map((item) => (
            <CartModalItem
              key={item.id}
              item={item}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
        <div className="mt-8 mb-6 flex justify-between ">
          <h2 className="opacity-50">TOTAL</h2>
          <NumericFormat
            className="font-bold float-right  text-right "
            value={totalPrice}
            thousandSeparator={true}
            prefix={"$   "}
            contentEditable={false}
          />
        </div>
        <Link to="/checkout">
          <button
            className="w-full h-12 bg-[#D87D4A] text-white font-bold tracking-[3px] uppercase hover:bg-[#FBAF85] "
            onClick={handleClose}
          >
            checkout
          </button>
        </Link>
      </div>
    </Modal>
  );
}
