import React from "react";
import MenuCard from "./MenuCard";
import { HOME_PAGE } from "../utils/constants";

const Home = () => {
  let data = HOME_PAGE;
  return (
    <div className="relative">
      {data.map((el) => {
        return <MenuCard imgUrl={el.banner} name={el.name} />;
      })}
    </div>
  );
};

export default Home;
