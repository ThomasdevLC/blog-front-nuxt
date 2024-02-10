<template>
  <div v-if="remainingArticle">
    <p>{{ remainingArticle.title }}</p>

    <div v-if="remainingArticle.image">
      <pre v-if="remainingArticle.image">{{ remainingArticle.image.url }}</pre>
      <img :src="'http://back.amities-talea.fr:1337' + remainingArticle.image.url">
    </div>


  </div>

</template>

<script setup>
const imageUrl = computed(() => import.meta.env.VITE_API_URL);

const remainingArticle = ref([])

async function fetchRemaining() {
  try {
    const response = await $fetch(import.meta.env.VITE_API_URL + "/api/articles/1/?&populate=image");
    remainingArticle.value = response.data; // Mettre à jour les données des articles
  } catch (error) {
    console.error("Une erreur est survenue : ", error);
  }
}

fetchRemaining();
</script>

<style scoped>


</style>