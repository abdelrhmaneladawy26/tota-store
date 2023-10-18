import { useState } from "react";
import image from "../../../public/assets/products/img5.jpg";
const CartItem = () => {
  const [amount, setAmount] = useState(1);

  return (
    <div>
      <div className="grid grid-cols-4 border-b-[2px] my-4 ">
        <div className="image h-[100px] col-span-1">
          <img src={image} className="h-[100%]" />
        </div>
        <div className="col-span-2 ">
          <h3 className="text-[13px] md:text-[18px]" style={{ fontSize: `` }}>
            سالوبيت ميلتون مخطط - بينك×رصاصي,M
          </h3>
          <div className="border-[1.5px] w-[100px] flex flex-row items-center justify-between my-5">
            <button
              className="hover:bg-gray-200 duration-200 py-[10px] px-[5px]  "
              onClick={() => setAmount((prev) => prev - 1)}
            >
              -
            </button>
            <span className="px-6 rounded-lg">{amount}</span>
            <button
              className=" hover:bg-gray-200 duration-200 py-[10px] px-[5px] "
              onClick={() => setAmount((prev) => prev + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div className="col-span-1">
          <div>270,00 جنيه</div>
          <div className="mr-10 mt-5 cursor-pointer">حذف</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
