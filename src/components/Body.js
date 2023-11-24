import React from "react";
import Header from "./Header";
import MenuBar from "./MenuBar";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import ProductContext from "../utils/ProductContext";

const Body = () => {
  const { productData } = useContext(ProductContext);

  return (
    <div>
      <Header />
      <MenuBar />
      <Outlet context={[productData]} />;
    </div>
  );
};

export default Body;
