import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnimeResponse } from "../Services/api/api";

const Anime = () => {
  const [dataAnime, setDataAnime] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const anime = await getAnimeResponse(`anime/${id}/full`);
      setDataAnime(anime);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(dataAnime.data);

  const { data } = dataAnime;
  return (
    <div>
      <div className="flex mx-20 my-10">
        <img className="rounded-xl" src={data?.images.jpg.large_image_url} />
        <div className="title-synopsis">
          <h1 className="text-3xl font-bold mx-14 mt-16">{data?.title}</h1>
          <p className="mx-14 mt-7 font-medium">{data?.synopsis}</p>
        </div>
      </div>
      <div className="my-7 flex justify-center items-center">
        <iframe src={data?.trailer.embed_url} width={800} height={500}></iframe>
      </div>
    </div>
  );
};

export default Anime;
