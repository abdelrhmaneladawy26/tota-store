import { useState } from "react";
import Search from "./Search";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";

const NavBarLogin = () => {
  const [links, setLinks] = useState(["أولادي", "بناتي", "مستلزمات أطفال"]);
  return (
    <div className="">
      <div className="container ">
        <nav className="flex justify-between items-center flex-wrap">
          <div className="">
            <img
              src="/src/assets/logo.jpg"
              className="w-[100px] h-[100px] cursor-pointer object-contain"
            />
          </div>
          <ul className="flex gap-[10px]">
            {links.map((link) => (
              <li key={link} className="hover:text-[#FF6F61] duration-200">
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
          <form className="flex gap-[10px] ">
            <Search />
            <AiOutlineUser className="text-[30px]" />
            <AiOutlineHeart className="text-[30px]" />
            <SlBasket className="text-[30px]" />
          </form>
        </nav>
      </div>
    </div>
  );
};

export default NavBarLogin;
