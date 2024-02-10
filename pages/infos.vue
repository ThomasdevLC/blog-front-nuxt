<template>
  <div class="px-10 md:px-30 lg:px-48 xl:px-96 md:py-4">
    <div v-for="article in articles" :key="article.id">
      <ArticleList :article="article" />
    </div>
  </div>
</template>

<script setup>
const articles = ref([]);

async function fetchedData() {
  try {
    const response = await $fetch(import.meta.env.VITE_API_URL + "/api/articles?filters[tag][$eq]=Infos&sort[0]=date:desc&populate=image");
    articles.value = response.data;
  } catch (error) {
    console.error("Une erreur est survenue : ", error);
  }
}

fetchedData();
</script>
