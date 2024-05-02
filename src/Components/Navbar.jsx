import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#121481] w-full h-28 lg:h-20 lg:flex lg:justify-between">
        <div className="mx-10 pt-5 text-center">
          <Link to="/" className="text-white text-xl lg:text-2xl font-semibold">
            My-Animelist
          </Link>
        </div>
        <SearchInput />
      </div>
    </>
  );
};

export default Navbar;
