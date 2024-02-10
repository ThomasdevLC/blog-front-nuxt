<template>
  <div class="px-10 md:px-30 lg:px-48 xl:px-96 md:py-4">
    <div v-for="article in articles" :key="article.id">
      <ArticleList :article="article" />
    </div>
  </div>
</template>

<script setup>
const { data: fetchedData } = await useFetch(import.meta.env.API_URL + "/api/articles?filters[tag][$eq]=Infos&sort[0]=date:desc&populate=image", {
  server: false,
  transform: (_fetchedData) => _fetchedData.data,
});
const articles = fetchedData;
</script>
