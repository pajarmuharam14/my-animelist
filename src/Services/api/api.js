export const getAnimeResponse = async (resource, query) => {
  const response = await fetch(`${import.meta.env.VITE_API_KEY_BASE_URL}/${resource}?${query}`);
  const anime = await response.json();
  return anime;
};
