import React, { useContext } from "react";
import CartContext from "../utils/CartContext";

const Cart = () => {
  const { cartData } = useContext(CartContext);
  let TotalPrice = cartData.reduce((acc, el) => (acc = acc + el.price), 0);

  return (
    <div className="flex items-center">
      <div className="flex flex-col items-start m-16 ml-[30%]">
        {cartData &&
          cartData.map((item) => (
            <div className="">
              <div className="flex  flex-col justify-start mb-5">
                <div>
                  <img
                    className="w-16 h-16"
                    alt="product"
                    src={
                      "https://shop.polymer-project.org/esm-bundled/" +
                      item.image
                    }
                  ></img>
                </div>
                <div className="font-semibold">{item.title}</div>
                <div className="text-gray-600">{"$" + item.price}</div>
              </div>
            </div>
          ))}
      </div>
      <div className="border-2 border-gray-800 p-3">
        {"Total Price: $" + TotalPrice.toFixed(2)}
      </div>
    </div>
  );
};

export default Cart;
