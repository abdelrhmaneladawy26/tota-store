import { useState } from "react";

const CategoryHeader = () => {
  const [links, setLinks] = useState(["أولادي", "بناتي", "مستلزمات أطفال"]);

  return (
    <div className="bg-[#3C3C3B] text-white py-3 ">
      <div className="container ">
        <nav className="flex justify-between items-center flex-wrap">
          <ul className="flex gap-[10px]">
            {links.map((link) => (
              <li key={link} className="hover:text-[#FF6F61] duration-200">
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default CategoryHeader;
