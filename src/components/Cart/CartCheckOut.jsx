import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { CgArrowRight } from "react-icons/cg";
const CartCheckOut = () => {
  return (
    <div>
      <div className="bg-gray-200 px-5  top-0  ">
        <div className="flex justify-between py-5 border-b-[1px] border-black">
          <span>المجموع</span>
          <span>370,00 جنيه</span>
        </div>
        <div className="flex justify-between py-5 border-b-[1px] border-black">
          <span>الشحن</span>
          <span>حساب تكلفة الشحن</span>
        </div>
        <div className="flex justify-between py-5">
          <span className=" font-bold">الإجمالي</span>
          <span>370,00 جنيه</span>
        </div>
      </div>
      <Button className="w-full my-3">التقدم لاتمام الطلب</Button>
      <Link to="/">
        <a className="flex items-center gap-2">
          <CgArrowRight /> متابغة التسوق
        </a>
      </Link>
    </div>
  );
};

export default CartCheckOut;
