import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const navigate = useNavigate();
  const searchRef = useRef();

  const handleSubmit = (e) => {
    const keyword = searchRef.current.value;
    if (!keyword || keyword.trim() == "") return;

    e.preventDefault();
    navigate(`/search/${keyword}`);
  };

  // const handleChange = (e) => {
  //   setSearch(e.target.value);
  // };
  return (
    <div className="lg:mr-20 my-3 lg:my-[23px]">
      <form onSubmit={handleSubmit}>
        <input type="text" className="pl-2 rounded-lg h-8 lg:h-9 lg:w-[250px] mx-auto block" placeholder="Search in here..." ref={searchRef} />
      </form>
    </div>
  );
};

export default SearchInput;
