import React from "react";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import dhosaImg from "../../../assets/Group 117.png";
import bannerImg from "../../../assets/Rectangle 1.png";

import Navbar from "../../../components/navbar/Navbar";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <header className="absolute">
        <nav>
          <Navbar />
        </nav>
        <article className="banner-container px-16 flex gap-7 items-center  text-white h-[560px] w-full bg-[#00242B]">
          <aside className="w-[530px] h-[500px] text-left  flex flex-col">
            <div className="flex flex-col items-start w-[400px]">
              <h1 className="text-5xl font-bold mb-3">
                <span className="text-red-500">Be The Fastest </span>
                <br /> In Delivering Your Food
              </h1>
              <p className="mb-4 text-1xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </p>
              <Button content={"Get Started"} bgradius={"10px"} />
            </div>
            <div className="flex mt-12">
              <div>
                <h2 className="text-2xl font-bold mb-3">Fresh Food for You</h2>
                <p className="mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique, et.
                </p>
                <a href="#" className="text-green-400 text-xl">
                  {" "}
                  More -->
                </a>
              </div>
              <div className="h-52">
                <img src={dhosaImg} className="w-full h-full" />
              </div>
            </div>
          </aside>
          <aside className="h-[500px] w-[530px]">
            <img src={bannerImg} className="h-full w-full" />
          </aside>
        </article>
      </header>

      <div className="box flex  flex-col relative z-1 bg-white bg-opacity-60 backdrop-blur h-[700px]  w-full justify-center items-center">
        <>
          <Link to={"/"}>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </Link>
          <div className="flex flex-col  text-center justify-between bg-white py-8   h-[440px] w-[440px]">
            <h1 className="text-green-600 text-2xl font-bold">Welcome</h1>
            <form className="flex flex-col  justify-between h-48 w-[500px]">
              <Input
                placeholder={"User name"}
                border={"border-l border-b"}
                shadow={"shadow"}
                width={"[200px]"}
              />
              <Input
                placeholder={"Email id"}
                border={"border-l border-b"}
                shadow={"shadow"}
                width={"[200px]"}
                padding={"px-3"}
              />
              <Input
                placeholder={"Number"}
                border={"border-l border-b"}
                shadow={"shadow"}
                width={"[200px]"}
              />
              <Input
                placeholder={"password"}
                border={"border-l border-b"}
                shadow={"shadow"}
                width={"[200px]"}
              />
            </form>
            <div>
              <Button content={"Create Account"} width={"200px"} />
              <p className="text-[10px] font-semibold">
                Already Have an account? <a href="#">Login</a>
              </p>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default Login;
