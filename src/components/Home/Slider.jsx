import { Carousel } from "@material-tailwind/react";
import { BsArrowLeft } from "react-icons/bs";
import image1 from "../../../public/assets/slider1.jpg";
import image2 from "../../../public/assets/slider2.jpg";
import image3 from "../../../public/assets/slider3.png";
const Slider = () => {
  return (
    <div className="h-[50vh] md:h-[80vh] ">
      <Carousel
        className="h-[100%]"
        dir="ltr"
        autoplay
        loop
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2 ">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <div className="relative h-[100%]">
          <div className="text-black absolute right-[10%] top-[10%] md:top-[20%]">
            <h4 className="text-[30px] md:text-[40px]  font-semibold text-right">
              جميع الاكسسوارات
              <br /> لرعاية خاصة بالاطفال
            </h4>
            <a href="#" className=" mt-[20px] flex items-center gap-[10px]  ">
              <BsArrowLeft className="text-[20px] animate-moveRight" /> تسوق
              الان
            </a>
          </div>
          <img
            src={image1}
            alt="image 1"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative h-[100%]">
          <div className="text-black absolute right-[10%] top-[10%] md:top-[20%]">
            <h4 className="text-[30px] md:text-[40px]  font-semibold text-right">
              جميع مستلزمات طفلك
              <br /> فى مكان واحد
            </h4>
            <a href="#" className=" mt-[20px] flex items-center gap-[10px]">
              <BsArrowLeft className="text-[20px] animate-moveRight" /> تسوق
              الان
            </a>
          </div>
          <img
            src={image2}
            alt="image 1"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative h-[100%]">
          <div className="text-black absolute right-[10%] top-[10%] md:top-[20%]">
            <h4 className="text-[30px] md:text-[40px]  font-semibold text-right">
              جميع الاكسسوارات
              <br /> لرعاية خاصة بالاطفال
            </h4>
            <a href="#" className=" mt-[20px] flex items-center gap-[10px]">
              <BsArrowLeft className="text-[20px] animate-moveRight" /> تسوق
              الان
            </a>
          </div>
          <img
            src={image3}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
