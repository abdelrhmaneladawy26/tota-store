import BrandCard from "./BrandCard";
import img1 from "../../../public/assets/fine.webp";
import img2 from "../../../public/assets/fine.webp";
import img3 from "../../../public/assets/fine.webp";
import img4 from "../../../public/assets/fine.webp";
import img5 from "../../../public/assets/fine.webp";
const BrandContainer = () => {
  return (
    <div>
      <div className="grid gird-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <BrandCard image={img1} />
        <BrandCard image={img2} />
        <BrandCard image={img3} />
        <BrandCard image={img4} />
        <BrandCard image={img5} />
        <BrandCard image={img1} />
        <BrandCard image={img2} />
        <BrandCard image={img3} />
        <BrandCard image={img4} />
        <BrandCard image={img5} />
        <BrandCard image={img1} />
        <BrandCard image={img2} />
        <BrandCard image={img3} />
        <BrandCard image={img4} />
        <BrandCard image={img5} />
      </div>
    </div>
  );
};

export default BrandContainer;
