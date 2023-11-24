import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ProductContext from "../utils/ProductContext";
import {
  LADIES_OUTERWEAR,
  LADIES_TSHIRTS,
  MENS_OUTERWEAR,
  MENS_TSHIRTS,
} from "../utils/constants";

const MenuBar = () => {
  const { setProductData } = useContext(ProductContext);
  return (
    <div>
      <ul className="flex justify-center">
        <Link to={"/list/mens_outerwear"}>
          <li
            className="text-xs mr-6 cursor-pointer"
            onClick={() => setProductData(MENS_OUTERWEAR)}
          >
            Men's Outerwear
          </li>
        </Link>
        <Link to={"/list/ladies_outerwear"}>
          <li
            className="text-xs mr-6 cursor-pointer"
            onClick={() => setProductData(LADIES_OUTERWEAR)}
          >
            Ladies Outerwear
          </li>
        </Link>
        <Link to={"/list/mens_tshirts"}>
          <li
            className="text-xs mr-6 cursor-pointer"
            onClick={() => setProductData(MENS_TSHIRTS)}
          >
            Men's T-Shirts
          </li>
        </Link>
        <Link to={"/list/ladies_tshirts"}>
          <li
            className="text-xs mr-6 cursor-pointer"
            onClick={() => setProductData(LADIES_TSHIRTS)}
          >
            Ladies T-Shirts
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default MenuBar;
