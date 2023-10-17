import CategoryHeader from "../../components/Category/CategoryHeader";
import CardProductContainer from "../../components/Products/CardProductContainer";
import Pagination from "../../components/Uitily/Pagination";
import SearchCountResult from "../../components/Uitily/SearchCountResult";

const ShopProductPage = () => {
  return (
    <div>
      <CategoryHeader />
      <SearchCountResult />
      <CardProductContainer />
      <Pagination />
    </div>
  );
};

export default ShopProductPage;
