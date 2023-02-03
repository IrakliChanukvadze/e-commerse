import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "../Components/CheckoutForm";
import { responsiveContainer, textP } from "../Styles";
import CheckoutSummary from "../Components/CheckoutSummary";

const Checkout = ({ cartData }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    payment: "emoney",
    "e-money-pin": "",
    "e-money-number": "",
  });

  const inputText = ({ title, placeholder, type }) => {
    return (
      <div>
        <h2>{title}</h2>
        <input type={type} placeholder={placeholder} />
      </div>
    );
  };

  const navigate = useNavigate();
  return (
    <div className="bg-[#F1F1F1] w-full">
      <div className={`${responsiveContainer} pt-10 pb-20`}>
        <h2
          className={` ${textP} cursor-pointer`}
          onClick={() => {
            navigate(-1);
          }}
        >
          Go Back
        </h2>
        <div className="flex flex-wrap justify-between mt-6 sm:mt-9">
          <CheckoutForm form={form} setForm={setForm} />
          <CheckoutSummary cartData={cartData} form={form} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
