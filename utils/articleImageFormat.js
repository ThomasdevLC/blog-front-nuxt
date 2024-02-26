const getArticleImageUrl = (block, size) => {
  if (block.image.formats[size] && block.image.formats[size].url) {
    return import.meta.env.VITE_API_URL + block.image.formats[size].url;
  } else if (block.image.url) {
    return import.meta.env.VITE_API_URL + block.image.url;
  } else {
    return null;
  }
};
export default getArticleImageUrl;
