import { useState } from "react";
import Search from "./Search";
import Auth from "../Auth/AuthContainer";
import { Link } from "react-router-dom";
import logo from "../../../public/assets/logo.jpg";
import CartNav from "../Cart/CartNav";
const NavBarLogin = () => {
  const [links, setLinks] = useState(["أولادي", "بناتي", "مستلزمات أطفال"]);
  return (
    <div className="">
      <div className="container ">
        <nav className="flex justify-center flex-col md:flex-row  md:justify-between  items-center flex-wrap">
          <div className="">
            <Link to="home">
              <img
                src={logo}
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
          <div className="flex gap-[10px] my-3 md:my-0">
            <Search />
            <Auth />
            <CartNav />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBarLogin;
