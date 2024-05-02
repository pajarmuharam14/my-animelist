import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { getAnimeResponse } from "../Services/api/api";
import AnimeList from "../Components/AnimeList";
import Pagination from "../Components/Pagination";

// const populerAnime = await getTopAnimeResponse("top/anime", "limit=25");
const TopAnimePage = () => {
  const [topAnime, setTopAnime] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const populerAnime = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(populerAnime);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  return (
    <div>
      <Navbar />
      <AnimeList api={topAnime} />
      <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage} />
    </div>
  );
};

export default TopAnimePage;
