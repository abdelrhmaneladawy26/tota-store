import { useState } from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
const Footer = () => {
  const [serves, setServes] = useState([
    "اتصل بنا",
    "سياسة الخصوصية",
    "سياسة الاسترجاع",
    "الشروط والأحكام",
  ]);
  return (
    <footer className="bg-[#F5F5F5] py-[20px]">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-[15px] pt-10 ">
        <div>
          <p className="px-[0] md:px-[50px]">
            تسوق مع كيدز ستور جميع متطلبات الاطفال من ملابس ومنتجات رعاية كاملة
            للطفل لنمو صحي وراحة اكتر
          </p>
        </div>
        <div>
          <h4>خدمة العملاء</h4>
          <ul>
            {serves.map((serv) => (
              <li
                key={serv}
                className="leading-[2.5] hover:text-[#FF6F61] duration-200"
              >
                <a href="#">{serv}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-5">التواصل الاجتماعي</h4>
          <ul className="flex gap-[10px] text-[25px] cursor-pointer  ">
            <BsFacebook className="hover:text-[#FF6F61] duration-200" />
            <BsInstagram className="hover:text-[#FF6F61] duration-200" />
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
