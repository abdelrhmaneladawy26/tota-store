import BrandFeatured from "../../components/Brand/BrandFeatured";
import HomeCategory from "../../components/Home/HomeCategory";
import Slider from "../../components/Home/Slider";
import CardProductContainer from "../../components/Products/CardProductContainer";
import Banner from "../../components/Uitily/Banner";
import Footer from "../../components/Uitily/Footer";
import NavBarLogin from "../../components/Uitily/NavBarLogin";

const HomePage = () => {
  return (
    <div>
      <NavBarLogin />
      <Slider />
      <HomeCategory />
      <CardProductContainer title="أحدث المنتجات" btnTitle="عرض المزيد" />
      <CardProductContainer title="أفضل المبيعات" btnTitle="عرض المزيد" />
      <Banner />
      <BrandFeatured />
      <Footer />
    </div>
  );
};

export default HomePage;
