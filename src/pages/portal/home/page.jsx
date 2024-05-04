import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import Input from "../../../components/input/Input";
// img
import homeImg from "../../../assets/Rectangle 1.png";

import shop1 from "../../../assets/Mask group.png";
import shop2 from "../../../assets/Group 11.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Navbar isLogin={true} />
      <div className="homebanner">
        <article className="banner-container px-16 flex gap-7 items-center  text-white h-[560px] w-full bg-[#00242B]">
          <aside
            className="w-[530px] h-[500px] text-left  flex flex-col
             "
          >
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
              <Input
                placeholder={"searach"}
                width={"[350px]"}
                bgradius={"md"}
              />
            </div>
            <div className="flex mt-12  gap-11">
              <div className="border border-white p-9">
                <h1 className="text-4xl text-yellow-500 mb-4">30%</h1>
                <h4>Summer Offer</h4>
                <p>On all orders over</p>
              </div>
              <div className="border border-white p-9 ">
                <h1 className="text-4xl text-yellow-500 mb-4">40%</h1>
                <h4>Summer Offer</h4>
                <p>On all orders over</p>
              </div>
            </div>
          </aside>
          <aside className="h-[500px] w-[530px]">
            <img src={homeImg} className="h-full w-full" />
          </aside>
        </article>
      </div>

      <div>
        <h1 className=" mt-10 text-5xl text-center">stores</h1>
        <main className="flex   w-full  justify-evenly py-16 ">
          <Link to={"/food"}>
            {" "}
            <img src={shop1} alt="" className=" relative" />
          </Link>
          <div className="flex flex-col absolute -bottom-60 left-0">
            <p>5</p>
            <p>store name</p>
            <p>view store</p>
          </div>
          <img src={shop2} alt="" />
        </main>
      </div>
    </div>
  );
};

export default Home;
