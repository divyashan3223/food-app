import React from "react";
import Button from "../button/Button";

const BannerCard = ({ img }) => {
  return (
    <main className="flex  items-center justify-between  rounded-md  px-8  py-1 bg-black w-full text-white">
      <div className="text-container  text-left  w-60 h-52  flex flex-col justify-between  border-b-indigo-500 ">
        <h2 className="text-red-500">Supper Officer</h2>
        <h1 className="text-3xl">Delicious Burger</h1>
        <p className="text-[12px] font-bold">Buy 1 get 1 free</p>
        <Button content={"Shop now"} bgradius={"4px"} />
      </div>
      <div className="h-50">
        <img src={img} alt="" className="h-full" />
      </div>
    </main>
  );
};

export default BannerCard;
