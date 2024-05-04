import React, { useEffect, useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import Input from "../../../components/input/Input";
import { getPageData } from "../../../api/fooditems";
import foodImg from "../../../assets/Group 20.png";
import ProductCard from "../../../components/ProductCard";

const FoodPage = () => {
  const [foods, setFoods] = useState([]);
  console.log(foods);

  useEffect(() => {
    const getFoodInventory = () => {
      getPageData().then((response) => setFoods(response?.foodsInventories));
    };
    getFoodInventory();
    const key = setInterval(getFoodInventory, 5000);

    return () => {
      clearInterval(key);
    };
  }, []);

  return (
    <div>
      <Navbar isLogin={true} />
      <div className="homebanner">
        <article className="banner-container px-16 flex gap-7 items-center text-white h-[360px] w-full bg-[#00242B]">
          <aside className="w-[530px] h-[330px] text-left flex flex-col">
            <div className="flex flex-col items-start w-[400px]">
              <h1 className="text-5xl font-bold mb-3">
                <span className="text-red-500">Be The Fastest </span>
                <br /> In Delivering Your Food
              </h1>
              <p className="mb-4 text-1xl">
                Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Maiores, fugiat! sit, amet consectetur
                adipisicing.
              </p>
              <Input placeholder={"search"} width={"350px"} bgradius={"md"} />
            </div>
          </aside>
          <aside className="h-[330px] w-[530px]">
            <img src={foodImg} alt="Food" className="h-full w-full" />
          </aside>
        </article>
      </div>
      <main className="grid grid-cols-4 py-6 relative">
        {foods.map((food, id) => (
          <div key={id}>
            <ProductCard
              key={id}
              name={food.name}
              amount={food.amount}
              img={food.photoBase64}
              className=""
            />
            <button className="bg-black absolute ml-14 text-white px-3 rounded-md py-1">
              Add to Card
            </button>
          </div>
        ))}
      </main>
    </div>
  );
};

export default FoodPage;
