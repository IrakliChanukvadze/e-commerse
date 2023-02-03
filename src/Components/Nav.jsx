import React, { useState } from "react";
import { responsiveContainer } from "../Styles";
import { AiOutlineMenu } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { Drawer } from "@mui/material";
import SidebarNav from "./SidebarNav";
import CartModal from "./CartModal";

const Nav = ({ cartData, setCartData }) => {
  let location = useLocation();
  const [state, setState] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const bottomBorder =
    location.pathname.includes("/category") || location.pathname === "/";

  return (
    <div className="100% bg-black ">
      <CartModal
        open={open}
        handleClose={handleClose}
        cartData={cartData}
        setCartData={setCartData}
      />
      <div
        className={`${responsiveContainer}  flex justify-between items-center h-[89px]  ${
          bottomBorder && "xl:border-b-[1px] xl:border-b-white"
        }   `}
      >
        <div className="flex gap-[42px] items-center">
          <React.Fragment key={"left"}>
            <AiOutlineMenu
              onClick={toggleDrawer(true)}
              size={25}
              className="text-white font-bold xl:hidden"
            />
            <Drawer anchor={"left"} open={state} onClose={toggleDrawer(false)}>
              <SidebarNav />
            </Drawer>
          </React.Fragment>

          <h2 className="text-white font-bold text-2xl sm:text-3xl xl:text-4xl">
            audiophile
          </h2>
        </div>
        <div className="hidden text-white xl:flex gap-[34px] ">
          <Link to="/" className="hover:text-[#D87D4A]">
            HOME
          </Link>
          <Link to="category/headphones" className="hover:text-[#D87D4A]">
            HEADPHONES
          </Link>
          <Link to="category/speakers" className="hover:text-[#D87D4A]">
            SPEAKERS
          </Link>
          <Link to="category/earphones" className="hover:text-[#D87D4A]">
            EARPHONES
          </Link>
        </div>
        {cartData.length === 0 ? (
          <BsCart3 size={25} className="text-white font-bold cursor-pointer" />
        ) : (
          <FaShoppingCart
            size={25}
            className="text-white font-bold cursor-pointer"
            onClick={handleOpen}
          />
        )}
      </div>
    </div>
  );
};

export default Nav;
