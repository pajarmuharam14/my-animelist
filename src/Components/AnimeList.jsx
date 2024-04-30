/* eslint-disable react/prop-types */
const AnimeList = ({ api }) => {
  console.log(api);
  return (
    <div className="flex flex-wrap gap-7 my-10 justify-center">
      {api.data?.map((item, index) => (
        <div className="cursor-pointer" key={index}>
          <img className="mt-5 mb-3 rounded-xl" src={item.images.jpg.image_url} />
          <h1 className="text-[14px] font-semibold md:text-base w-[150px] md:w-[200px] hover:text-[#121481]">{item.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default AnimeList;
