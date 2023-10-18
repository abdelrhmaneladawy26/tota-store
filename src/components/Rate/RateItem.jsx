import { AiFillStar } from "react-icons/ai";

const RateItem = () => {
  return (
    <div className="my-[5px] border-b-[1px] py-3 last:border-0">
      <div className="flex gap-2">
        <span className="text-[18px]">احمد عبد الرحمن</span>
        <span className="flex">
          <AiFillStar className="text-[#FFBF06] text-[20px]" />
          <span>4.3</span>
        </span>
      </div>
      <p className="font-serif">منتج مناسب جدا الخامة جميلة</p>
    </div>
  );
};

export default RateItem;
