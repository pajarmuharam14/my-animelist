export const getTopAnimeResponse = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_KEY_BASE_URL}/top/anime`);
  const anime = await response.json();
  return anime;
};
