const getImageUrl = (article) => {
  if (article.image.formats.medium && article.image.formats.medium.url) {
    return import.meta.env.VITE_API_URL + article.image.formats.medium.url;
  } else if (article.image.url) {
    return import.meta.env.VITE_API_URL + article.image.url;
  } else {
    return null;
  }
};
export default getImageUrl;
