import SubTitle from "../Uitily/SubTitle";
import BrandCard from "./BrandCard";
import img1 from "../../assets/fine.webp";
import img2 from "../../assets/fine.webp";
import img3 from "../../assets/fine.webp";
import img4 from "../../assets/fine.webp";
import img5 from "../../assets/fine.webp";
const BrandFeatured = ({ title, btnTitle, path }) => {
  return (
    <div className="container">
      <SubTitle title={title} btnTitle={btnTitle} path={path} />
      <div className="grid gird-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <BrandCard image={img1} />
        <BrandCard image={img2} />
        <BrandCard image={img3} />
        <BrandCard image={img4} />
        <BrandCard image={img5} />
      </div>
    </div>
  );
};

export default BrandFeatured;
