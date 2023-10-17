import CategoryCard from "../Category/CategoryCard";
import SubTitle from "../Uitily/SubTitle";
import image1 from "../../assets/main-category.jpg";
import image2 from "../../assets/main-category2.jpg";
const HomeCategory = () => {
  return (
    <div>
      <div className="container">
        <SubTitle title="التصنيفات" btnTitle="عرض المزيد" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[50px]">
          <CategoryCard image={image1} title="بناتي" />
          <CategoryCard image={image2} title="اولادي" />
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
