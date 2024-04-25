import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#121481] w-full h-28 lg:h-20 lg:flex lg:justify-between">
        <div className="mx-10 pt-5 text-center">
          <Link to="/" className="text-white text-xl lg:text-2xl font-semibold">
            My-Animelist
          </Link>
        </div>
        <div className="lg:mr-20 my-3 lg:my-[23px]">
          <input className="pl-2 rounded-lg h-8 lg:h-9 lg:w-[250px] mx-auto block" placeholder="Search in here..." />
        </div>
      </div>
    </>
  );
};

export default Navbar;
