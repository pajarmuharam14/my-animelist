/* eslint-disable no-undef */
import { useParams } from "react-router-dom";
import AnimeList from "../Components/AnimeList";
import { getAnimeResponse } from "../Services/api/api";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";

/* eslint-disable react/prop-types */

const Search = () => {
  const [search, setSearch] = useState([]);
  const { keyword } = useParams();

  const decodedKeyword = decodeURI(keyword);
  useEffect(() => {
    async function fetchData() {
      const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);
      setSearch(searchAnime);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Navbar />
      <AnimeList api={search} />
    </div>
  );
};

export default Search;
