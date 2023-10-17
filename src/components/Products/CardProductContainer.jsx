import SubTitle from "../Uitily/SubTitle";
import ProductCard from "./ProductCard";

const CardProductContainer = ({ title, btnTitle }) => {
  return (
    <div>
      <div className="container">
        <SubTitle title={title} btnTitle={btnTitle} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default CardProductContainer;
