import BrandFeatured from "../../components/Brand/BrandFeatured";
import HomeCategory from "../../components/Home/HomeCategory";
import Slider from "../../components/Home/Slider";
import CardProductContainer from "../../components/Products/CardProductContainer";
import Banner from "../../components/Uitily/Banner";

const HomePage = () => {
  return (
    <div>
      <Slider />
      <HomeCategory
        title="التصنيفات"
        btnTitle="عرض المزيد"
        path="/allCategory"
      />
      <CardProductContainer
        title="أحدث المنتجات"
        btnTitle="عرض المزيد"
        path=""
      />
      <CardProductContainer title="أفضل المبيعات" btnTitle="عرض المزيد" />
      <Banner />
      <BrandFeatured />
    </div>
  );
};

export default HomePage;
