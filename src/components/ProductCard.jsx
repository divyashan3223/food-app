import React from "react";

const ProductCard = ({ name, amount, img }) => {
  return (
    <div className=" w-full ">
      <div className="food-item h-60 rounded-2xl w-64 border  border-black">
        <img
          src={`data:image/png;base64,${img}`}
          alt={name}
          className="food-image h-[50%] rounded-t-2xl w-full object-cover"
        />
        <div className="food-details-text p-6">
          <div className="food-details flex justify-between">
            <h2 className="font-bold">{name}</h2>
            <p className="font-bold">Price: ${amount}</p>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur aque, aliquam.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
