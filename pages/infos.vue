<template>
  <div class="px-10 md:px-30 lg:px-48 xl:px-96 md:py-4">
    <div v-if="articles.length > 0">
      <ArticleList :article="articles[articles.length - 1]" />
    </div>
  </div>
</template>

<script setup>
const { data: fetchedArticle } = await useFetch(import.meta.env.VITE_API_URL + `/api/articles?filters[tag][$eq]=Infos&sort[0]=date:desc&populate=image`, {
  transform: (_fetchedArticle) => _fetchedArticle.data,
});
const articles = fetchedArticle;
</script>
