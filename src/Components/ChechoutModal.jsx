import React from "react";
import Modal from "@mui/material/Modal";
import { AiFillCheckCircle } from "react-icons/ai";
import { NumericFormat } from "react-number-format";
import { textP, textHeader } from "../Styles";
import { Link } from "react-router-dom";

export default function CheckoutModal({ open, handleClose, cartData, price }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className=" absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-96  bg-white p-8 rounded-lg">
        <AiFillCheckCircle size={60} className="text-[#D87D4A]" />
        <h2 className={`${textHeader} mt-6 mb-4`}>THANK YOU FOR YOUR ORDER</h2>
        <p className={`${textP}`}>
          You will receive an email confirmation shortly.
        </p>
        <div className="flex justify-between items-center mt-6  bg-[#F1F1F1] p-4 rounded-t-lg">
          <div className="flex gap-4">
            <img
              src={cartData[0]?.image.mobile?.slice(1)}
              className="w-16 aspect-square rounded-lg"
            />
            <div className="flex flex-col justify-center">
              <h2 className="font-bold">{cartData[0]?.name.split(" ")[0]}</h2>
              <NumericFormat
                className="font-bold opacity-50 bg-[#F1F1F1]"
                value={cartData[0]?.price}
                thousandSeparator={true}
                prefix={"$   "}
                contentEditable={false}
              />
            </div>
          </div>
          <h2 className={textP}>x{cartData[0]?.quantity}</h2>
        </div>
        {cartData.length > 1 && (
          <div className="w-full border-t-2 bg-[#F1F1F1] border-black border-opacity-10 h-20  flex items-center justify-center">
            <h2 className={`${textP}`}>
              and {cartData.length - 1} other item
              {cartData.length - 1 > 1 && "(s)"}
            </h2>
          </div>
        )}
        <div className="flex-1 bg-black  text-white flex h-24 pl-6 flex-col justify-center rounded-b-lg ">
          <h2 className={`${textP}`}>GRAND TOTAL</h2>
          <NumericFormat
            className="font-bold bg-black text-white"
            value={price}
            thousandSeparator={true}
            prefix={"$   "}
            contentEditable={false}
          />
        </div>
        <Link to="/">
          <button
            className="w-full h-12 bg-[#D87D4A] text-white font-bold tracking-[3px] uppercase hover:bg-[#FBAF85] mt-8 "
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            BACK TO HOME
          </button>
        </Link>
      </div>
    </Modal>
  );
}
