import SubTitle from "../Uitily/SubTitle";
import BrandCard from "./BrandCard";
import img1 from "../../../public/assets/fine.webp";
import img2 from "../../../public/assets/LeQueen2-logos.webp";
import img3 from "../../../public/assets/frist-baby-2-01.webp";
import img4 from "../../../public/assets/mini.webp";
import img5 from "../../../public/assets/mast.webp";
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
