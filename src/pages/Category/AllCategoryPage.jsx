import CategoryContainer from "../../components/Category/CategoryContainer";
import Pagination from "../../components/Uitily/Pagination";
import SubTitle from "../../components/Uitily/SubTitle";

const AllCategoryPage = () => {
  return (
    <section className="container">
      <SubTitle title="جميع التصنيفات" />
      <CategoryContainer />
      <Pagination />
    </section>
  );
};

export default AllCategoryPage;
