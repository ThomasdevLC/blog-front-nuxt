<template>
  <div class="flex flex-col md:flex-row mt-10 space-x-4" v-if="remainingArticles">
    <div class="w-full md:w-1/3" v-for="remainingArticle in remainingArticles.slice(0, 3)" :key="remainingArticle.id">
      <RemainingArticles :remainingArticle="remainingArticle" />
    </div>
  </div>
  <pre>{{ remainingArticles }}</pre>
</template>

<script setup>
const { data: fetchedArticles } = await useFetch(
  import.meta.env.VITE_API_URL + `/api/articles?filters[main][$eq]=false&filters[tag][$ne]=Evénements&sort[0]=date:desc&populate=image`,
  {
    transform: (_fetchedArticles) => _fetchedArticles.data,
  }
);
const remainingArticles = fetchedArticles;
</script>

<style scoped></style>
