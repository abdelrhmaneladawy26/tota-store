import { Textarea } from "@material-tailwind/react";
import ReactStars from "react-rating-stars-component";

const RatePost = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="border-b-[1px]">
      <div className=" my-2 flex items-center">
        <h4>احمد عبد الرحمن</h4>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
        />
      </div>
      <div className="my-5">
        <Textarea label="تعليق" />
        <button className="bg-[#3C3C3B] rounded-[10px] text-[8px]  md:text-[10px] text-white  font-semibold py-2 px-1 md:px-10 hover:scale-[1.02] duration-200 h-full">
          أضاف تعليق
        </button>
      </div>
    </div>
  );
};

export default RatePost;
