import React from "react";
import cartIcon from "../images/cart.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../utils/CartContext";

const Header = () => {
  const { cartData } = useContext(CartContext);
  let count = cartData.length;
  return (
    <div className="mt-4 mb-10 mx-6 ">
      <Link to="/cart">
        <div className="float-right">{count}</div>
        <img className="float-right h-8 w-8" alt="cart" src={cartIcon}></img>
      </Link>

      <Link to="/">
        <div className="w-16 my-0 mx-auto font-bold text-xl tracking-[0.3rem]">
          SHOP
        </div>
      </Link>
    </div>
  );
};

export default Header;
