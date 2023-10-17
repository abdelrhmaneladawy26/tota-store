import banner1 from "/src/assets/subbanner2.jpg";
import banner2 from "/src/assets/subbanner.jpg";
const Banner = () => {
  return (
    <div>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] mt-10 ">
        <div className="relative overflow-hidden">
          <img src={banner1} className="hover:scale-[1.05] duration-200 " />
          <div className="text-[25px] font-medium absolute top-[20%] right-[5%]">
            ملابس عصرية
            <br /> لجميع فصول السنة
          </div>
        </div>
        <div className="relative overflow-hidden">
          <img src={banner2} className="hover:scale-[1.05] duration-200 " />
          <div className="text-[25px] font-medium absolute top-[20%] right-[5%]">
            مستلزمات رعاية الطفل
            <br /> سرير - بطانية - كوفرتة
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
