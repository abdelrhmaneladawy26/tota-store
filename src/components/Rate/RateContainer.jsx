import { AiFillStar } from "react-icons/ai";
import RateItem from "./RateItem";
import RatePost from "./RatePost";
import Pagination from "../Uitily/Pagination";
import CardProductContainer from "../Products/CardProductContainer";
const RateContainer = () => {
  return (
    <div>
      <div className="container my-5 py-3 min-h-[400px] border rounded-[10px]">
        <div className="flex gap-2">
          <h3 className=" font-bold text-[20px]">التقييمات</h3>
          <span className="flex">
            <AiFillStar className="text-[#FFBF06] text-[20px]" />
            <span>4.3</span>
          </span>
          <span className="text-[12px] pt-2">( 60 تقييم )</span>
        </div>
        <RatePost />
        <div>
          <RateItem />
          <RateItem />
          <RateItem />
          <RateItem />
        </div>
        <Pagination />
      </div>
      <div className="my-10">
        <CardProductContainer title="منتجات قد تعجبك" />
      </div>
    </div>
  );
};

export default RateContainer;
