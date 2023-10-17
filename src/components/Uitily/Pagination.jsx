import ReactPaginate from "react-paginate";

const Pagination = () => {
  const pageCount = 20;
  const handlePageClick = () => {};
  return (
    <div className="flex justify-center my-10">
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        containerClassName="flex justify-content-center"
        pageClassName={"btn-pagination border border-blue-gray-100"}
        previousClassName={"btn-pagination border border-blue-gray-100"}
        nextClassName={"btn-pagination border border-blue-gray-100 "}
        activeClassName={"bg-[#F7F6F9]"}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
