import React from "react";

const MenuCard = (props) => {
  let { imgUrl, name } = props;
  return (
    <div className="mt-5  inline-block menu-card">
      <img alt="banner" className="h-80 banner" src={imgUrl}></img>
      <div className="my-5 font-semibold text-center">{name}</div>
      <div className="text-center">
        <button className="border-2 border-black px-10 py-2 mb-5">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
