<template>
  <div class="px-48 py-12">
    <div v-for="article in articles" :key="article.id">
      <ArticleList :article="article" />
    </div>
  </div>
</template>

<script setup>
const { data: fetchedData } = await useFetch("http://localhost:1337/api/articles?filters[tag][$eq]=Actualités&sort[0]=date:desc&populate=image", {
  server: false,
  transform: (_fetchedData) => _fetchedData.data,
});
const articles = fetchedData;
</script>
