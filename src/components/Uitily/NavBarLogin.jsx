import { useState } from "react";
import Search from "./Search";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import Auth from "../Auth/AuthContainer";
import { Link } from "react-router-dom";

const NavBarLogin = () => {
  const [links, setLinks] = useState(["أولادي", "بناتي", "مستلزمات أطفال"]);
  return (
    <div className="">
      <div className="container ">
        <nav className="flex justify-between items-center flex-wrap">
          <div className="">
            <Link to="home">
              <img
                src="/src/assets/logo.jpg"
                className="w-[100px] h-[100px] cursor-pointer object-contain"
              />
            </Link>
          </div>
          <ul className="flex gap-[10px]">
            {links.map((link) => (
              <li key={link} className="hover:text-[#FF6F61] duration-200">
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
          <div className="flex gap-[10px] ">
            <Search />
            <Auth />
            <AiOutlineHeart className="text-[30px]" />
            <SlBasket className="text-[30px]" />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBarLogin;
