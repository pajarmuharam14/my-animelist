import { Link } from "react-router-dom";
import AnimeList from "../Components/AnimeList";
import Navbar from "../Components/Navbar";
import { getAnimeResponse } from "../Services/api/api";

const topAnime = await getAnimeResponse("top/anime", "limit=10");
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center text-3xl mt-10 font-bold">Top Anime</h1>
      <AnimeList api={topAnime} />
      <button className="block mx-auto border border-black py-2 px-10 mt-16 mb-3 bg-[#121481] text-white hover:bg-white hover:text-[#121481] font-semibold duration-300 rounded-3xl">
        <Link to="/topAnime">See More...</Link>
      </button>
    </div>
  );
};

export default HomePage;
