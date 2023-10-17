import SubTitle from "../../components/Uitily/SubTitle";
import Pagination from "../../components/Uitily/Pagination";
import BrandContainer from "../../components/Brand/BrandContainer";

const AllBrandPage = () => {
  return (
    <div>
      <section className="container">
        <SubTitle title="جميع الماركات" />
        <BrandContainer />
        <Pagination />
      </section>
    </div>
  );
};

export default AllBrandPage;
