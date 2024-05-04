// img
import logo from "../../assets/Frame.svg";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import Input from "../input/Input";

const Navbar = ({ isLogin }) => {
  return (
    <div className="  flex justify-between items-center py-2 px-24">
      <img src={logo} alt="" className="h-16" />
      <div className="w-[600px] flex gap-8 justify-between items-center">
        <ul className="flex  w-full  justify-between">
          <li>
            <Link to={"/home"}>home</Link>
          </li>
          <li>
            <Link to={"/food"}>food</Link>
          </li>

          {isLogin && (
            <>
              <li>
                <Link>my Bag</Link>
              </li>
              <li>
                <Link>order Review</Link>
              </li>
              <li>
                <Link>Profile</Link>
              </li>
            </>
          )}
        </ul>
        {isLogin ? (
          <></>
        ) : (
          <div className="flex  w-[450px] gap-3 justify-between items-center">
            <Input
              placeholder={"search"}
              border={"border"}
              bgradius={"md"}
              padding={"px-6"}
            />
            <div className="flex justify-between  w-[170px]">
              <button className="text-sky-500 border border-sky-500 px-4 rounded-md">
                sign in
              </button>

              <Link to={"login"}>
                <button className="text-white bg-sky-500 px-4 rounded-md">
                  log in
                </button>{" "}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
