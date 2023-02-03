import React, { useState } from "react";
import { responsiveContainer, textHeader } from "../Styles";

const CheckoutForm = ({ form, setForm }) => {
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const makeInputWithTitle = (title, placeholder, type, name) => {
    return (
      <div
        className={`w-full ${title !== "Your Address" && "sm:w-[47%]"} sm:mb-6`}
      >
        <h2 className="font-bold mb-[9px]">{title}</h2>
        <input
          value={form[name]}
          onChange={handleFormChange}
          name={name}
          type={type}
          placeholder={placeholder}
          className="w-full border-2 border-[#CFCFCF] rounded-lg h-14 pl-6 outline-0 focus:border-[#D87D4A] focus:text-[#D87D4A] "
        />
      </div>
    );
  };
  return (
    <div className="bg-white  pt-8 w-full xl:w-[63%] ">
      <div className="w-[90%]  m-auto  ">
        <h2 className={`${textHeader} tracking-[2px] `}>CHECKOUT</h2>
        <h3 className="mt-8 mb-4 text-base font-bold text-[#D87D4A] tracking-[1px]">
          BILLING DETAILS
        </h3>
        <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:gap-0 sm:justify-between">
          {makeInputWithTitle("Name", "Alexei Ward", "text", "name")}
          {makeInputWithTitle(
            "Email Address",
            "alexei@mail.com",
            "email",
            "email"
          )}
          {makeInputWithTitle(
            "Phone Number",
            "+1 202-555-0136",
            "number",
            "phone"
          )}
        </div>
        <h3 className="mt-8 mb-4 text-base font-bold text-[#D87D4A] tracking-[1px]">
          SHIPPING INFO
        </h3>
        <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:gap-0 sm:justify-between">
          {makeInputWithTitle(
            "Your Address",
            "1137 Williams Avenue",
            "text",
            "address"
          )}
          {makeInputWithTitle("ZIP Code", "1001", "number", "zip")}
          {makeInputWithTitle("City", "New York", "text", "city")}
          {makeInputWithTitle("Country", "United States", "text", "country")}
        </div>
        <h3 className="mt-8 mb-4 text-base font-bold text-[#D87D4A] tracking-[1px]">
          PAYMENT DETAILS
        </h3>
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-6">
          <h2 className="font-bold mb-[9px] sm:w-[47%]">Payment Method</h2>

          <div className="flex sm:w-[47%] flex-col gap-6  sm:gap-0 sm:justify-between">
            <label className="w-full  border-2 border-[#CFCFCF] gap-4 rounded-lg h-14 pl-6 mb-6 flex items-center">
              <input
                type="radio"
                value="emoney"
                name="payment"
                checked={form.payment === "emoney"}
                onChange={handleFormChange}
              />{" "}
              e-Money
            </label>
            <label className="w-full  border-2 border-[#CFCFCF] gap-4 rounded-lg h-14 pl-6 mb-6 flex items-center">
              <input
                type="radio"
                value="cash"
                name="payment"
                checked={form.payment === "cash"}
                onChange={handleFormChange}
              />{" "}
              Cash on Delivery
            </label>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          {form.payment === "emoney" &&
            makeInputWithTitle(
              "e-Money Number",
              238521993,
              "number",
              "e-money-number"
            )}
          {form.payment === "emoney" &&
            makeInputWithTitle("e-Money Pin", 6891, "number", "e-money-pin")}
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
