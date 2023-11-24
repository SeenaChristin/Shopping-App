import React from "react";
import {
  HOME_PAGE,
  LADIES_OUTERWEAR,
  LADIES_TSHIRTS,
  MENS_OUTERWEAR,
  MENS_TSHIRTS,
} from "../utils/constants";
// import { useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";
import ProductContext from "../utils/ProductContext";
import { useContext } from "react";
import CartContext from "../utils/CartContext";

const ListItems = () => {
  const { type } = useParams();
  const { cartData, setCartData } = useContext(CartContext);
  const { productData, setProductData } = useContext(ProductContext);
  let banner = "";
  switch (type) {
    case "mens_outerwear":
      banner = HOME_PAGE[0].banner;
      setProductData(MENS_OUTERWEAR);
      break;
    case "ladies_outerwear":
      banner = HOME_PAGE[1].banner;
      setProductData(LADIES_OUTERWEAR);
      break;
    case "mens_tshirts":
      banner = HOME_PAGE[2].banner;
      setProductData(MENS_TSHIRTS);
      break;
    case "ladies_tshirts":
      banner = HOME_PAGE[3].banner;
      setProductData(LADIES_TSHIRTS);
      break;
    default:
      banner = "";
  }
  const addToCart = (item) => {
    let result = [...cartData, item];
    console.log(result);
    setCartData(result);
  };
  return (
    <div>
      <div>
        <img className="mt-8" alt="banner" src={banner}></img>
      </div>
      <div className="text-center mt-5">
        {productData[0]?.category?.toUpperCase()}
      </div>
      <div className="text-center mt-1">{productData.length + " items"}</div>
      <div className="flex flex-wrap justify-center gap-16 mt-6">
        {productData.map((item) => (
          <div>
            <img
              alt="product"
              src={"https://shop.polymer-project.org/esm-bundled/" + item.image}
            ></img>
            <div className="text-center font-bold">{item.title}</div>
            <div className="text-center text-gray-600 text-sm mb-2">
              {"$" + item.price}
            </div>
            <div className="text-center">
              <button
                className="border-2 px-4 py-2 border-black "
                onClick={() => addToCart(item)}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListItems;
