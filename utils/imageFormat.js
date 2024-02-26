const getImageUrl = (article, size) => {
  if (article.image.formats[size] && article.image.formats[size].url) {
    return import.meta.env.VITE_API_URL + article.image.formats[size].url;
  } else if (article.image.url) {
    return import.meta.env.VITE_API_URL + article.image.url;
  } else {
    return null;
  }
};

export default getImageUrl;
