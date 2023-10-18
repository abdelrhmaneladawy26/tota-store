import CategoryHeader from "../../components/Category/CategoryHeader";
import ProductDetails from "../../components/Products/ProductDetails";
import RateContainer from "../../components/Rate/RateContainer";

const ProductDetailsPage = () => {
  return (
    <div>
      <CategoryHeader />
      <div className="container">
        <ProductDetails />
        <RateContainer />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
