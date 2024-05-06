/* eslint-disable no-undef */
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const AnimeList = ({ api }) => {
  return (
    <div className="flex flex-wrap gap-7 my-10 justify-center">
      {api.data?.map((item, index) => (
        <div className="cursor-pointer" key={index}>
          <Link to={`/anime/${item.mal_id}`}>
            <img className="mt-5 mb-3 rounded-xl" src={item.images.jpg.image_url} />
            <h1 className="text-[14px] font-semibold md:text-base w-[150px] md:w-[200px] hover:text-[#121481]">{item.title}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AnimeList;
