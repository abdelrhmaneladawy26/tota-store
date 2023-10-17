import CategoryCard from "./CategoryCard";
import image1 from "../../assets/main-category.jpg";
import image2 from "../../assets/main-category2.jpg";
const CategoryContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-[20px]">
      <CategoryCard image={image1} title="اولادي" />
      <CategoryCard image={image2} title="اولادي" />
      <CategoryCard image={image2} title="اولادي" />
      <CategoryCard image={image2} title="اولادي" />
      <CategoryCard image={image2} title="اولادي" />
      <CategoryCard image={image2} title="اولادي" />
      <CategoryCard image={image2} title="اولادي" />
      <CategoryCard image={image1} title="بناتي" />
      <CategoryCard image={image1} title="بناتي" />
      <CategoryCard image={image1} title="بناتي" />
      <CategoryCard image={image1} title="بناتي" />
      <CategoryCard image={image1} title="بناتي" />
      <CategoryCard image={image1} title="بناتي" />
      <CategoryCard image={image1} title="بناتي" />
      <CategoryCard image={image1} title="بناتي" />
    </div>
  );
};

export default CategoryContainer;
