/* eslint-disable react/prop-types */
const Pagination = ({ page, lastPage, setPage }) => {
  const scroolToTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
    scroolToTop();
  };

  const handlePrevPage = () => {
    setPage((prev) => prev - 1);
    scroolToTop();
  };
  return (
    <div className="flex justify-center items-center gap-5 mt-28 mb-5">
      {page <= 1 ? null : <button className="border border-black px-5 bg-[#121481] text-white hover:bg-white hover:text-[#121481] font-semibold duration-300" onClick={handlePrevPage}>Prev</button>}
      <p className="font-semibold">
       Page {page} of {lastPage}
      </p>
      {page >= lastPage ? null : <button className="border border-black px-5 bg-[#121481] text-white hover:bg-white hover:text-[#121481] font-semibold duration-300" onClick={handleNextPage}>Next</button>}
    </div>
  );
};

export default Pagination;
